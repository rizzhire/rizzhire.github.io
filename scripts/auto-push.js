#!/usr/bin/env node

import { watch } from 'fs';
import { execSync } from 'child_process';
import path from 'path';
import fs from 'fs';

console.log('🚀 Starting Auto-Push System for HireNET');
console.log('=====================================');
console.log('👀 Watching for changes in client/ folder...');
console.log('🔄 Auto-deployment to GitHub Pages is ACTIVE');

let isDeploying = false;
let deployTimeout;
let lastDeployTime = 0;

// Fix git authentication on startup
try {
  execSync('node scripts/git-auth-fix.js', { stdio: 'inherit' });
} catch (error) {
  console.log('⚠️  Git auth fix failed, continuing anyway...');
}

function shouldDeploy(filename) {
  if (!filename) return false;
  
  // Only deploy for relevant file changes
  const relevantExtensions = ['.tsx', '.ts', '.css', '.js', '.jsx', '.html'];
  const isRelevantFile = relevantExtensions.some(ext => filename.endsWith(ext));
  
  // Ignore certain directories/files
  const ignoredPaths = ['node_modules', '.git', 'dist', 'build', '.next'];
  const shouldIgnore = ignoredPaths.some(ignored => filename.includes(ignored));
  
  return isRelevantFile && !shouldIgnore;
}

async function deployChanges() {
  if (isDeploying) {
    console.log('🔄 Deployment already in progress, skipping...');
    return;
  }

  // Prevent too frequent deployments (minimum 30 seconds apart)
  const now = Date.now();
  if (now - lastDeployTime < 30000) {
    console.log('⏳ Too soon since last deployment, waiting...');
    return;
  }

  isDeploying = true;
  lastDeployTime = now;
  
  try {
    console.log('\n🚀 Auto-deploying changes to GitHub Pages...');
    console.log('⏰ ' + new Date().toLocaleTimeString());
    
    // Build the project first
    console.log('📦 Building project...');
    execSync('npm run build', { stdio: 'pipe' });
    console.log('✅ Build successful');

    // Stage all changes
    console.log('📝 Staging changes...');
    execSync('git add .', { stdio: 'pipe' });

    // Check if there are changes to commit
    const status = execSync('git status --porcelain', { encoding: 'utf8' });
    if (!status.trim()) {
      console.log('ℹ️  No changes to deploy');
      return;
    }

    // Commit changes
    const timestamp = new Date().toISOString().split('T')[0];
    const time = new Date().toLocaleTimeString();
    console.log('💾 Committing changes...');
    execSync(`git commit -m "Auto-deploy: Update HireNET - ${timestamp} ${time}"`, { stdio: 'pipe' });

    // Push to GitHub
    console.log('🌐 Pushing to GitHub...');
    execSync('git push origin main', { stdio: 'pipe' });

    console.log('✅ Successfully deployed to GitHub Pages!');
    console.log('🌍 Your site will update at: https://rizzhire.github.io/');
    console.log('⏱️  Changes typically appear in 2-5 minutes\n');

  } catch (error) {
    console.error('❌ Auto-deployment failed:', error.message);
    
    if (error.message.includes('Authentication failed')) {
      console.log('\n🔑 Authentication issue detected.');
      console.log('💡 Possible solutions:');
      console.log('   1. Add GITHUB_TOKEN to Replit Secrets');
      console.log('   2. Use GitHub CLI: gh auth login');
      console.log('   3. Configure SSH keys');
      console.log('   4. Use personal access token');
    }
  } finally {
    isDeploying = false;
  }
}

function debouncedDeploy() {
  clearTimeout(deployTimeout);
  deployTimeout = setTimeout(() => {
    deployChanges();
  }, 5000); // Wait 5 seconds after the last change
}

// Watch the client directory for changes
const clientDir = path.join(process.cwd(), 'client');
if (fs.existsSync(clientDir)) {
  const watcher = watch(clientDir, { recursive: true }, (eventType, filename) => {
    if (shouldDeploy(filename)) {
      console.log(`📝 Changed: ${filename}`);
      debouncedDeploy();
    }
  });

  // Also watch root level files
  const rootWatcher = watch('.', (eventType, filename) => {
    if (shouldDeploy(filename) && !filename.startsWith('client/')) {
      console.log(`📝 Changed: ${filename}`);
      debouncedDeploy();
    }
  });

  // Handle graceful shutdown
  process.on('SIGINT', () => {
    console.log('\n🛑 Stopping auto-deployment system...');
    watcher.close();
    rootWatcher.close();
    process.exit(0);
  });

  console.log('✅ Auto-deployment system started successfully!');
  console.log('💡 Make any changes to your code - they will auto-deploy!');
  console.log('🛑 Press Ctrl+C to stop auto-deployment');

} else {
  console.error('❌ Client directory not found!');
  process.exit(1);
}