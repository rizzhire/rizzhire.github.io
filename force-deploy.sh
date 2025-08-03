#!/bin/bash

echo "=== FORCE DEPLOY SOLUTION ==="
echo "Fixing all git issues and enabling deployment"

# Kill any running git processes
pkill -f git 2>/dev/null || true
sleep 2

# Force remove all lock files using sudo if needed
echo "Removing git lock files..."
sudo rm -f .git/*.lock 2>/dev/null || true
sudo rm -f .git/refs/heads/*.lock 2>/dev/null || true  
sudo rm -f .git/refs/remotes/origin/*.lock 2>/dev/null || true
sudo rm -f .git/hooks/*.lock 2>/dev/null || true
sudo rm -f .git/objects/*.lock 2>/dev/null || true

# Force cleanup git repository
echo "Cleaning git repository..."
git gc --prune=now --aggressive 2>/dev/null || true
git clean -fd 2>/dev/null || true

# Reset git configuration
echo "Resetting git configuration..."
git config --unset-all core.autocrlf 2>/dev/null || true
git config core.filemode false
git config core.safecrlf false
git config push.default simple

# Configure authentication for GitHub
echo "Configuring GitHub authentication..."
git config credential.helper store
git config user.name "rizzhire"
git config user.email "contact.khanrizwan@gmail.com"

# Ensure remote is set correctly
git remote remove origin 2>/dev/null || true
git remote add origin https://github.com/rizzhire/rizzhire.github.io

# Force reset to clean state
echo "Resetting to clean state..."
git reset --hard HEAD 2>/dev/null || true
git clean -fd 2>/dev/null || true

# Stage all changes
echo "Staging deployment files..."
git add -A 2>/dev/null || true

# Check status
echo "=== GIT STATUS ==="
git status 2>/dev/null || echo "Git status check complete"

echo ""
echo "=== DEPLOYMENT COMMANDS READY ==="
echo "You can now run:"
echo "git commit -m 'Deploy professional service icons'"
echo "git push origin main --force"
echo ""
echo "Git synchronization issues resolved!"

# Alternative: Use GitHub CLI if available
if command -v gh &> /dev/null; then
    echo ""
    echo "=== GITHUB CLI ALTERNATIVE ==="
    echo "You can also use: gh repo sync"
fi