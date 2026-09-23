const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const outDir = path.join(__dirname, '..', 'public', 'playstore-assets');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const iconPath = path.join(__dirname, '..', 'public', 'icon.png');
const iconBase64 = fs.readFileSync(iconPath).toString('base64');

const svg = `
<svg width="1024" height="500" viewBox="0 0 1024 500" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0a0f1d" />
      <stop offset="50%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#1e1b4b" />
    </linearGradient>
    <radialGradient id="glow" cx="15%" cy="30%" r="55%">
      <stop offset="0%" stop-color="#2563eb" stop-opacity="0.4" />
      <stop offset="100%" stop-color="#0f172a" stop-opacity="0" />
    </radialGradient>
    <radialGradient id="glow2" cx="85%" cy="70%" r="55%">
      <stop offset="0%" stop-color="#7c3aed" stop-opacity="0.35" />
      <stop offset="100%" stop-color="#0f172a" stop-opacity="0" />
    </radialGradient>
    <clipPath id="roundedLogo">
      <rect x="0" y="0" width="124" height="124" rx="26" />
    </clipPath>
  </defs>

  <!-- Background -->
  <rect width="1024" height="500" fill="url(#bgGradient)" />
  <rect width="1024" height="500" fill="url(#glow)" />
  <rect width="1024" height="500" fill="url(#glow2)" />

  <!-- Grid overlay -->
  <g opacity="0.04" stroke="#ffffff" stroke-width="1">
    <line x1="0" y1="125" x2="1024" y2="125" />
    <line x1="0" y1="250" x2="1024" y2="250" />
    <line x1="0" y1="375" x2="1024" y2="375" />
    <line x1="256" y1="0" x2="256" y2="500" />
    <line x1="512" y1="0" x2="512" y2="500" />
    <line x1="768" y1="0" x2="768" y2="500" />
  </g>

  <!-- Content Container -->
  <g transform="translate(68, 64)">
    
    <!-- Header: Logo + App Name + Tagline -->
    <g transform="translate(0, 0)">
      <!-- App Icon Card -->
      <g>
        <rect x="-4" y="-4" width="132" height="132" rx="30" fill="#2563eb" opacity="0.3" />
        <g clip-path="url(#roundedLogo)">
          <image href="data:image/png;base64,${iconBase64}" x="0" y="0" width="124" height="124" />
        </g>
      </g>

      <!-- App Name & Badges -->
      <g transform="translate(150, 6)">
        <!-- University Badge -->
        <rect x="0" y="0" width="280" height="28" rx="14" fill="#1e293b" stroke="#334155" stroke-width="1" />
        <circle cx="16" cy="14" r="5" fill="#10b981" />
        <text x="28" y="18" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="700" fill="#94a3b8" letter-spacing="0.8">PATNA UNIVERSITY COMPANION</text>

        <!-- Big App Title -->
        <text x="0" y="78" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="52" font-weight="900" fill="#ffffff" letter-spacing="-1.2">Lazy PU</text>

        <!-- Subtitle -->
        <text x="0" y="108" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="16" font-weight="600" fill="#cbd5e1">The Ultimate Academic &amp; Campus Portal for PU Students</text>
      </g>
    </g>

    <!-- Feature Cards Row -->
    <g transform="translate(0, 168)">
      <!-- Card 1 -->
      <g transform="translate(0, 0)">
        <rect width="206" height="110" rx="18" fill="#1e293b" fill-opacity="0.9" stroke="#3b82f6" stroke-width="1.2" stroke-opacity="0.4" />
        <text x="18" y="34" font-family="sans-serif" font-size="11" font-weight="800" fill="#38bdf8" letter-spacing="0.5">ACADEMICS</text>
        <text x="18" y="60" font-family="sans-serif" font-size="16" font-weight="800" fill="#ffffff">CBCS &amp; Vocational</text>
        <text x="18" y="84" font-family="sans-serif" font-size="12" font-weight="500" fill="#94a3b8">27+ Courses (Sem 1-6)</text>
      </g>

      <!-- Card 2 -->
      <g transform="translate(226, 0)">
        <rect width="206" height="110" rx="18" fill="#1e293b" fill-opacity="0.9" stroke="#10b981" stroke-width="1.2" stroke-opacity="0.4" />
        <circle cx="24" cy="28" r="4" fill="#10b981" />
        <text x="34" y="34" font-family="sans-serif" font-size="11" font-weight="800" fill="#34d399" letter-spacing="0.5">LIVE SYNC</text>
        <text x="18" y="60" font-family="sans-serif" font-size="16" font-weight="800" fill="#ffffff">Samarth Notices</text>
        <text x="18" y="84" font-family="sans-serif" font-size="12" font-weight="500" fill="#94a3b8">Official Merit &amp; Exam Feeds</text>
      </g>

      <!-- Card 3 -->
      <g transform="translate(452, 0)">
        <rect width="206" height="110" rx="18" fill="#1e293b" fill-opacity="0.9" stroke="#a855f7" stroke-width="1.2" stroke-opacity="0.4" />
        <text x="18" y="34" font-family="sans-serif" font-size="11" font-weight="800" fill="#c084fc" letter-spacing="0.5">STUDENT TOOLS</text>
        <text x="18" y="60" font-family="sans-serif" font-size="16" font-weight="800" fill="#ffffff">SGPA &amp; Attendance</text>
        <text x="18" y="84" font-family="sans-serif" font-size="12" font-weight="500" fill="#94a3b8">75% Calculator &amp; Bunk Plan</text>
      </g>

      <!-- Card 4 -->
      <g transform="translate(678, 0)">
        <rect width="206" height="110" rx="18" fill="#1e293b" fill-opacity="0.9" stroke="#f59e0b" stroke-width="1.2" stroke-opacity="0.4" />
        <text x="18" y="34" font-family="sans-serif" font-size="11" font-weight="800" fill="#fbbf24" letter-spacing="0.5">PREPARATION</text>
        <text x="18" y="60" font-family="sans-serif" font-size="16" font-weight="800" fill="#ffffff">PYQs &amp; Solutions</text>
        <text x="18" y="84" font-family="sans-serif" font-size="12" font-weight="500" fill="#94a3b8">Previous Year Question Bank</text>
      </g>
    </g>

    <!-- Bottom Footer Tagline -->
    <g transform="translate(0, 320)">
      <rect width="884" height="38" rx="12" fill="#0f172a" fill-opacity="0.7" stroke="#334155" stroke-width="0.8" />
      <text x="24" y="24" font-family="sans-serif" font-size="12" font-weight="700" fill="#38bdf8">FREE &amp; OPEN</text>
      <text x="120" y="24" font-family="sans-serif" font-size="12" font-weight="500" fill="#cbd5e1">No Login Required  •  Zero Personal Data Tracking  •  Fast Offline Mode  •  Dark Mode</text>
    </g>
  </g>
</svg>
`;

const outputPath = path.join(outDir, 'feature_graphic.png');

sharp(Buffer.from(svg))
  .png({ quality: 100 })
  .toFile(outputPath)
  .then(info => {
    console.log('Feature graphic created successfully at:', outputPath);
    console.log('Dimensions:', info.width, 'x', info.height, '| Size:', info.size, 'bytes');
  })
  .catch(err => {
    console.error('Error generating feature graphic:', err);
    process.exit(1);
  });
