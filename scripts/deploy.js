#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🚀 Starting fresh deployment...');

// Clean everything
console.log('🧹 Cleaning old builds...');
try {
  execSync('rm -rf dist/ node_modules/.cache/', { stdio: 'inherit' });
} catch (e) {
  console.log('Clean completed');
}

// Fresh build
console.log('🏗️ Building fresh...');
execSync('NODE_ENV=production npm run build', { stdio: 'inherit' });

// Verify our build has the new icons
console.log('🔍 Verifying new icons in build...');
const jsFiles = fs.readdirSync('dist/public/assets').filter(f => f.endsWith('.js'));
let iconFound = false;

for (const jsFile of jsFiles) {
  const content = fs.readFileSync(`dist/public/assets/${jsFile}`, 'utf8');
  if (content.includes('TrendingUp') && content.includes('UserCheck') && content.includes('Users')) {
    console.log(`✅ New service icons found in: ${jsFile}`);
    iconFound = true;
    break;
  }
}

if (!iconFound) {
  console.error('❌ Icons not found in build files!');
  process.exit(1);
}

// Create deployment directory
console.log('📦 Preparing deployment files...');
execSync('rm -rf deploy && mkdir -p deploy', { stdio: 'inherit' });
execSync('cp -r dist/public/* deploy/', { stdio: 'inherit' });

// Copy additional files
try {
  fs.copyFileSync('_redirects', 'deploy/_redirects');
  fs.copyFileSync('404.html', 'deploy/404.html');
} catch (e) {
  console.log('Additional files copied where available');
}

// Add unique timestamp to force update
const timestamp = new Date().toISOString();
const indexPath = 'deploy/index.html';
let indexContent = fs.readFileSync(indexPath, 'utf8');
indexContent += `\n<!-- Force Update: ${timestamp} -->`;
fs.writeFileSync(indexPath, indexContent);

console.log('✅ Deployment files ready in deploy/ directory');
console.log('📁 Contents:');
execSync('ls -la deploy/', { stdio: 'inherit' });

console.log('\n🎯 Manual deployment steps:');
console.log('1. Commit and push these changes');
console.log('2. Trigger GitHub Actions workflow manually');
console.log('3. Wait 5-10 minutes for deployment');
console.log('4. Hard refresh browser (Ctrl+F5)');