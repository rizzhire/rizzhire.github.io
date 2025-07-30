#!/usr/bin/env node

import { execSync } from 'child_process';

console.log('🔐 Setting up GitHub authentication for Replit...');

try {
  // Check if GITHUB_TOKEN is available in environment
  const token = process.env.GITHUB_TOKEN;
  
  if (token) {
    console.log('✅ GITHUB_TOKEN found in environment');
    
    // Configure git to use the token
    const repoUrl = 'https://github.com/rizzhire/rizzhire.github.io';
    const authenticatedUrl = `https://${token}@github.com/rizzhire/rizzhire.github.io`;
    
    execSync(`git remote set-url origin ${authenticatedUrl}`, { stdio: 'pipe' });
    console.log('✅ Git remote URL updated with authentication');
    
    // Test the connection
    execSync('git ls-remote origin', { stdio: 'pipe' });
    console.log('✅ GitHub connection test successful');
    
    process.exit(0);
    
  } else {
    console.log('⚠️  GITHUB_TOKEN not found in environment');
    console.log('\n💡 To enable auto-deployment:');
    console.log('1. Go to GitHub.com → Settings → Developer settings → Personal access tokens');
    console.log('2. Generate a new token with "repo" permissions');
    console.log('3. Add it to Replit Secrets as GITHUB_TOKEN');
    console.log('4. Restart this script');
    
    process.exit(1);
  }
  
} catch (error) {
  console.error('❌ GitHub authentication setup failed:', error.message);
  
  console.log('\n💡 Alternative setup methods:');
  console.log('1. Use GitHub CLI: gh auth login');
  console.log('2. Configure SSH keys');
  console.log('3. Add GITHUB_TOKEN to Replit Secrets');
  
  process.exit(1);
}