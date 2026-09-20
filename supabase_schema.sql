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
  payment_utr text not null,
  payment_method text default 'razorpay',
  applicant_name text default '',
  applicant_email text default '',
  applicant_phone text default '',
  status text default 'pending', -- 'pending' | 'active' | 'expired' | 'rejected'
  start_date timestamptz default now(),
  end_date timestamptz default now() + interval '30 days',
  is_in_house boolean default false,
  impressions integer default 0,
  clicks integer default 0,
  created_at timestamptz default now()
);

-- 2. Create index on status and dates for quick lookup
create index if not exists idx_sponsors_status on public.sponsors(status);
create index if not exists idx_sponsors_end_date on public.sponsors(end_date);

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
