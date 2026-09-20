-- ============================================================
-- LAZY PU: SUPABASE DATABASE SCHEMA FOR CAMPUS SPONSORSHIPS
-- Run this in your Supabase SQL Editor (Dashboard -> SQL Editor)
-- ============================================================

-- 1. Create table for Sponsor Applications & Active Sponsors
create table if not exists public.sponsors (
  id text primary key,
  business_name text not null,
  tagline text not null,
  description text default '',
  category text default 'Coaching & Services',
  badge text default 'CAMPUS PARTNER',
  poster_image text default '',
  target_url text default '',
  whatsapp_number text not null,
  whatsapp_message text default '',
  phone text default '',
  plan_id text default 'growth_30d',
  plan_name text default 'Premier Academic Partner',
  duration_days integer default 30,
  payment_amount numeric default 1499,
  payment_utr text default 'ADMIN_DIRECT',
  payment_method text default 'razorpay',
  applicant_name text default '',
  applicant_email text default '',
  applicant_phone text default '',
  status text default 'pending', -- 'pending' | 'active' | 'expired' | 'rejected'
  start_date timestamptz default now(),
  end_date timestamptz default now() + interval '30 days',
  target_page text default 'all', -- 'all' | 'home' | 'syllabus' | 'notices' | 'extras'
  is_in_house boolean default false,
  impressions integer default 0,
  clicks integer default 0,
  created_at timestamptz default now()
);

-- 2. Create index on status, dates and target_page for quick lookup
create index if not exists idx_sponsors_status on public.sponsors(status);
create index if not exists idx_sponsors_end_date on public.sponsors(end_date);
create index if not exists idx_sponsors_target_page on public.sponsors(target_page);

-- 3. Enable Row Level Security (RLS)
alter table public.sponsors enable row level security;

-- Policy 1: Anyone (students & public) can view active sponsors
drop policy if exists "Allow public read of active sponsors" on public.sponsors;
create policy "Allow public read of active sponsors"
  on public.sponsors
  for select
  using (status = 'active' or is_in_house = true);

-- Policy 2: Anyone can insert a new sponsor application
drop policy if exists "Allow public insert of applications" on public.sponsors;
create policy "Allow public insert of applications"
  on public.sponsors
  for insert
  with check (true);

-- Policy 3: Allow incrementing impressions & clicks
drop policy if exists "Allow updating impressions and clicks" on public.sponsors;
create policy "Allow updating impressions and clicks"
  on public.sponsors
  for update
  using (true)
  with check (true);

-- Policy 4: Allow reading all applications for admin
drop policy if exists "Allow all reads for service role and admin" on public.sponsors;
create policy "Allow all reads for service role and admin"
  on public.sponsors
  for select
  using (true);

-- 4. Stored Procedure to atomically record impression
create or replace function increment_sponsor_impression(target_id text)
returns void as $$
begin
  update public.sponsors
  set impressions = impressions + 1
  where id = target_id;
end;
$$ language plpgsql security definer;

-- 5. Stored Procedure to atomically record click
create or replace function increment_sponsor_click(target_id text)
returns void as $$
begin
  update public.sponsors
  set clicks = clicks + 1
  where id = target_id;
end;
$$ language plpgsql security definer;

-- 6. Table for Device Tracking (Installs, Web Visitors & Active Users)
create table if not exists public.app_devices (
  id uuid default gen_random_uuid() primary key,
  device_id text unique not null,
  platform text not null, -- 'android' | 'web'
  app_version text default '2.0.0',
  first_seen_at timestamptz default now(),
  last_seen_at timestamptz default now()
);

create index if not exists idx_app_devices_platform on public.app_devices(platform);
create index if not exists idx_app_devices_last_seen on public.app_devices(last_seen_at);

alter table public.app_devices enable row level security;

-- Allow anyone to upsert their device record
drop policy if exists "Allow device upsert" on public.app_devices;
create policy "Allow device upsert"
  on public.app_devices
  for all
  using (true)
  with check (true);

-- 7. Table for App Broadcast & Remote Settings
create table if not exists public.app_settings (
  key text primary key,
  value jsonb not null,
  updated_at timestamptz default now()
);

alter table public.app_settings enable row level security;

drop policy if exists "Allow public read app_settings" on public.app_settings;
create policy "Allow public read app_settings"
  on public.app_settings
  for select
  using (true);

drop policy if exists "Allow update app_settings" on public.app_settings;
create policy "Allow update app_settings"
  on public.app_settings
  for all
  using (true)
  with check (true);

-- Insert default announcement ticker if not exists
insert into public.app_settings (key, value)
values 
  ('ticker', '{"enabled": true, "text": "PU UG Exam Forms & Semester Results Portal Live • Download Syllabi & PYQs", "type": "info"}'::jsonb)
on conflict (key) do nothing;

-- 8. Stored procedure to register or ping a device
create or replace function register_or_ping_device(
  p_device_id text,
  p_platform text,
  p_version text
)
returns void as $$
begin
  insert into public.app_devices (device_id, platform, app_version, last_seen_at)
  values (p_device_id, p_platform, p_version, now())
  on conflict (device_id) do update
  set 
    platform = excluded.platform,
    app_version = excluded.app_version,
    last_seen_at = now();
end;
$$ language plpgsql security definer;

-- 9. Migration patch (if table already created):
alter table if exists public.sponsors alter column payment_utr drop not null;
alter table if exists public.sponsors alter column payment_utr set default 'ADMIN_DIRECT';
alter table if exists public.sponsors add column if not exists target_page text default 'all';
create index if not exists idx_sponsors_target_page on public.sponsors(target_page);

-- 10. Default Sponsor Placement Pricing Matrix in app_settings
insert into public.app_settings (key, value)
values 
  ('sponsor_pricing', '{
    "home": {
      "starter_7d": 699,
      "growth_30d": 1999,
      "semester_90d": 4999
    },
    "syllabus": {
      "starter_7d": 499,
      "growth_30d": 1499,
      "semester_90d": 3499
    },
    "notices": {
      "starter_7d": 399,
      "growth_30d": 1199,
      "semester_90d": 2999
    },
    "extras": {
      "starter_7d": 299,
      "growth_30d": 899,
      "semester_90d": 2199
    },
    "all": {
      "starter_7d": 999,
      "growth_30d": 2999,
      "semester_90d": 7499
    }
  }'::jsonb)
on conflict (key) do nothing;

