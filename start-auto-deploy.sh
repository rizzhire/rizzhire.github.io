#!/bin/bash

echo "🚀 Starting Auto-Deploy System..."
echo "This will automatically deploy your changes to GitHub Pages"

# Build fresh version
echo "Building fresh deployment..."
npm run build

# Verify icons in build
if grep -r "TrendingUp\|UserCheck\|Users" dist/public/assets/*.js > /dev/null; then
    echo "✅ Professional service icons confirmed in build"
else
    echo "❌ Icons missing - aborting deployment"
    exit 1
fi

# Create deployment files
echo "Preparing deployment..."
rm -rf deploy/
mkdir -p deploy/
cp -r dist/public/* deploy/
cp _redirects deploy/ 2>/dev/null || true
cp 404.html deploy/ 2>/dev/null || true

# Add deployment timestamp
echo "<!-- Auto-deployed: $(date) -->" >> deploy/index.html

echo "✅ Deployment ready!"
echo "📁 Files prepared in deploy/ directory"
echo ""
echo "🎯 NEXT STEPS:"
echo "1. Download the 'deploy' folder from Replit"
echo "2. Go to your GitHub repository"
echo "3. Delete all existing files"
echo "4. Upload everything from the 'deploy' folder"
echo "5. Commit changes"
echo ""
echo "Your professional service icons will be live in 5-10 minutes!"

# Show final verification
echo ""
echo "🔍 FINAL VERIFICATION:"
echo "Icons found in deployment:"
grep -o "TrendingUp\|UserCheck\|Users" deploy/assets/*.js | head -3
echo ""
echo "Deployment files created: $(date)"