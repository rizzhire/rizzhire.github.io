#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🚀 Starting deployment to GitHub Pages...');

try {
  // Check if we're in a git repository
  execSync('git status', { stdio: 'pipe' });
  
  // Stage all changes
  console.log('📦 Staging changes...');
  execSync('git add .', { stdio: 'inherit' });
  
  // Check if there are changes to commit
  try {
    const status = execSync('git status --porcelain', { encoding: 'utf8' });
    if (status.trim()) {
      // Commit changes with timestamp
      const timestamp = new Date().toISOString().split('T')[0];
      console.log('💾 Committing changes...');
      execSync(`git commit -m "Auto-deploy: Update website - ${timestamp}"`, { stdio: 'inherit' });
    } else {
      console.log('✅ No changes to commit');
    }
  } catch (error) {
    console.log('ℹ️  No changes to commit or already committed');
  }
  
  // Push to GitHub
  console.log('🌐 Pushing to GitHub...');
  execSync('git push origin main', { stdio: 'inherit' });
  
  console.log('✅ Successfully deployed to GitHub Pages!');
  console.log('🌍 Your site will be live at: https://rizzhire.github.io/');
  console.log('⏱️  Updates typically take 2-5 minutes to appear');
  
} catch (error) {
  console.error('❌ Deployment failed:', error.message);
  
  // Provide helpful error messages
  if (error.message.includes('Authentication failed')) {
    console.log('\n🔑 Git authentication issue detected.');
    console.log('💡 Try these solutions:');
    console.log('   1. Use the "Deploy" button in Replit');
    console.log('   2. Use the GitHub web interface to edit files');
    console.log('   3. Set up a GitHub Personal Access Token');
  }
  
  if (error.message.includes('not a git repository')) {
    console.log('\n📁 This directory is not a git repository.');
    console.log('💡 Please run: git init && git remote add origin https://github.com/rizzhire/rizzhire.github.io');
  }
  
  process.exit(1);
}