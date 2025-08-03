#!/bin/bash

echo "🚀 Starting One-Click Deployment..."
echo "=================================="

# Build the project first
echo "📦 Building project..."
npm run build

# Copy built files to root for GitHub Pages
echo "📁 Copying files to root..."
cp -r dist/public/* .

# Add all changes
echo "➕ Adding all changes to git..."
git add .

# Commit with timestamp
echo "💾 Committing changes..."
TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')
git commit -m "Deploy HireNET with professional icons - $TIMESTAMP"

# Push to GitHub
echo "🚀 Pushing to GitHub..."
git push origin main

echo "=================================="
echo "✅ Deployment Complete!"
echo "🌐 Your site will be live at: https://rizzhire.github.io"
echo "⏱️  Allow 5-10 minutes for GitHub Pages to update"