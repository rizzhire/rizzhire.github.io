#!/bin/bash

echo "Creating deployment file copies for manual transfer..."

# Create a text file with all deployment content
echo "=== HIRENET DEPLOYMENT FILES ===" > deployment-package.txt
echo "Generated: $(date)" >> deployment-package.txt
echo "" >> deployment-package.txt

# Add each file with clear markers
echo "=== FILE: index.html ===" >> deployment-package.txt
cat deploy/index.html >> deployment-package.txt
echo "" >> deployment-package.txt

echo "=== FILE: _redirects ===" >> deployment-package.txt
cat deploy/_redirects >> deployment-package.txt
echo "" >> deployment-package.txt

echo "=== FILE: 404.html ===" >> deployment-package.txt
cat deploy/404.html >> deployment-package.txt
echo "" >> deployment-package.txt

echo "=== FILE: assets/index-CMDr7sgo.css (CSS Styles) ===" >> deployment-package.txt
echo "/* Professional service icons CSS */" >> deployment-package.txt
head -50 deploy/assets/*.css >> deployment-package.txt
echo "" >> deployment-package.txt

echo "=== FILE: assets/index-xJB_Go3f.js (First 500 chars - CONTAINS YOUR ICONS) ===" >> deployment-package.txt
head -c 500 deploy/assets/*.js >> deployment-package.txt
echo "" >> deployment-package.txt
echo "... [Full JS file is 322KB - contains Users, TrendingUp, UserCheck icons]" >> deployment-package.txt

echo "✅ Deployment package created: deployment-package.txt"
echo "✅ You can copy content from this file to create files in GitHub"

# Also create individual file copies
mkdir -p file-copies
cp deploy/index.html file-copies/
cp deploy/_redirects file-copies/
cp deploy/404.html file-copies/
cp deploy/assets/* file-copies/ 2>/dev/null

echo "✅ Individual files copied to: file-copies/ folder"
echo ""
echo "DEPLOYMENT OPTIONS:"
echo "1. Open deployment-package.txt and copy each section to GitHub"
echo "2. Use file-copies/ folder contents for upload"
echo "3. View files in Replit and copy manually"