#!/bin/bash

echo "🔧 Fixing Replit Git Tab Issues"
echo "==============================="

# Step 1: Check git status
echo "📊 Checking git repository status..."
git status --porcelain

# Step 2: Try to reset git state safely
echo "🔄 Resetting git state..."
git reset --soft HEAD

# Step 3: Re-add files that need to be committed  
echo "📝 Re-staging files..."
git add client/src/App.tsx
git add client/src/index.css
git add scripts/
git add *.md
git add *.sh
git add *.html

# Step 4: Check what's staged
echo "✅ Files ready to commit:"
git diff --staged --name-only

echo ""
echo "🎯 Next Steps:"
echo "1. Go to the Git tab in Replit"
echo "2. You should now see files ready to commit"
echo "3. Add commit message: 'Fix navbar partition and add auto-deploy system'"
echo "4. Click Push to deploy to GitHub Pages"
echo ""
echo "Your changes will be live at https://rizzhire.github.io/ in 3-5 minutes!"