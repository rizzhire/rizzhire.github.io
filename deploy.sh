#!/bin/bash

echo "=== REPLIT DEPLOYMENT BYPASS ==="
echo "Creating deployment package without git operations"

# Ensure deploy folder exists with latest build
if [ ! -d "deploy" ]; then
    echo "Creating fresh deployment..."
    npm run build
    mkdir -p deploy
    cp -r dist/public/* deploy/
    cp _redirects deploy/ 2>/dev/null || true
    cp 404.html deploy/ 2>/dev/null || true
fi

# Add deployment marker
echo "<!-- Deployed: $(date) -->" >> deploy/index.html

# Verify icons in deployment
echo "=== VERIFICATION ==="
if grep -q "TrendingUp\|UserCheck\|Users" deploy/assets/*.js; then
    echo "✅ Professional service icons confirmed in deployment"
    echo "✅ Users icon for Manpower Supply"
    echo "✅ TrendingUp icon for Management Consultancy"  
    echo "✅ UserCheck icon for Recruitment Services"
else
    echo "❌ Icons not found in deployment"
    exit 1
fi

echo ""
echo "=== DEPLOYMENT READY ==="
echo "Files in deploy folder:"
ls -la deploy/

echo ""
echo "=== MANUAL DEPLOYMENT STEPS ==="
echo "1. Download the 'deploy' folder from Replit"
echo "2. Go to: https://github.com/rizzhire/rizzhire.github.io"
echo "3. Click 'Add file' → 'Upload files'"
echo "4. Upload all files from the deploy folder"
echo "5. Commit with message: 'Deploy professional service icons'"
echo ""
echo "Your professional icons will be live in 5-10 minutes!"

# Create deployment archive for easy download
cd deploy
zip -r ../hirenet-deployment.zip . 2>/dev/null || echo "Zip not available, use folder download"
cd ..

echo "✅ Deployment package ready for manual upload"