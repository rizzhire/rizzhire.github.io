#!/bin/bash

# Force rebuild and deploy script
echo "🔄 Building fresh deployment..."

# Clean and rebuild
rm -rf dist/
npm run build

# Copy files for deployment
mkdir -p deploy
cp -r dist/public/* deploy/
cp _redirects deploy/ 2>/dev/null || true
cp 404.html deploy/ 2>/dev/null || true

# Add timestamp to force GitHub Pages update
echo "<!-- Deployed: $(date) -->" >> deploy/index.html

echo "✅ Build complete! Files ready for deployment"
echo "📂 Deploy folder contents:"
ls -la deploy/

# Show build verification
echo "🔍 Verifying icons in built files:"
if grep -q "Users\|TrendingUp\|UserCheck" deploy/assets/*.js; then
    echo "✅ New service icons found in build!"
else
    echo "❌ Icons not found in build"
fi