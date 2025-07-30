#!/usr/bin/env node

import { watch } from 'fs';
import { execSync } from 'child_process';
import path from 'path';

console.log('👀 Watching for file changes...');
console.log('🔄 Auto-deployment is ACTIVE');
console.log('💡 Any changes to client/ folder will trigger deployment');

// Debounce function to prevent multiple rapid deployments
let deployTimeout;
function debouncedDeploy() {
  clearTimeout(deployTimeout);
  deployTimeout = setTimeout(() => {
    console.log('\n🚀 File changes detected, starting auto-deployment...');
    try {
      execSync('node scripts/deploy.js', { stdio: 'inherit' });
    } catch (error) {
      console.error('❌ Auto-deployment failed:', error.message);
    }
  }, 3000); // Wait 3 seconds after the last change
}

// Watch the client directory for changes
const clientDir = path.join(process.cwd(), 'client');
const watcher = watch(clientDir, { recursive: true }, (eventType, filename) => {
  if (filename && (filename.endsWith('.tsx') || filename.endsWith('.ts') || filename.endsWith('.css'))) {
    console.log(`📝 Changed: ${filename}`);
    debouncedDeploy();
  }
});

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Stopping auto-deployment watcher...');
  watcher.close();
  process.exit(0);
});

console.log('✅ Auto-deployment watcher started successfully!');
console.log('Press Ctrl+C to stop watching');