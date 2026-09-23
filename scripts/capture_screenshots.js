const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer-core');

const outDir = path.join(__dirname, '..', 'public', 'playstore-assets');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const targets = [
  {
    name: 'screenshot_1.png',
    url: 'http://localhost:3000',
    title: 'Homepage / Course Directory',
  },
  {
    name: 'screenshot_2.png',
    url: 'http://localhost:3000/syllabus/bca/sem-1',
    title: 'BCA Semester 1 Syllabus & Topics',
  },
  {
    name: 'screenshot_3.png',
    url: 'http://localhost:3000/notices',
    title: 'Real-Time Samarth eGov Notices',
  },
  {
    name: 'screenshot_4.png',
    url: 'http://localhost:3000/attendance',
    title: '75% Attendance & Bunk Planner',
  },
  {
    name: 'screenshot_5.png',
    url: 'http://localhost:3000/sgpa',
    title: 'PU SGPA & CGPA Grade Estimator',
  },
];

async function run() {
  console.log('Launching Chrome from:', chromePath);
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: 'new',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-gpu',
    ],
  });

  const page = await browser.newPage();
  
  // Set high quality mobile phone viewport (Pixel 7 / Galaxy standard)
  await page.setViewport({
    width: 412,
    height: 915,
    deviceScaleFactor: 2.625, // renders to 1080 x 2400
    isMobile: true,
    hasTouch: true,
  });

  for (const target of targets) {
    console.log(`Navigating to ${target.url}...`);
    await page.goto(target.url, { waitUntil: 'networkidle2', timeout: 30000 });
    // Small pause to let micro-animations/fonts settle
    await new Promise((r) => setTimeout(r, 1200));

    const dest = path.join(outDir, target.name);
    await page.screenshot({ path: dest, type: 'png' });
    const stats = fs.statSync(dest);
    console.log(`✓ Saved ${target.name} (${target.title}) - ${stats.size} bytes`);
  }

  await browser.close();
  console.log('All screenshots captured successfully!');
}

run().catch((err) => {
  console.error('Screenshot capture failed:', err);
  process.exit(1);
});
