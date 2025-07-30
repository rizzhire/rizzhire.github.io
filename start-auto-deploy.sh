#!/bin/bash

echo "🚀 HireNET Auto-Deploy System"
echo "============================="

# Check if Node.js is available
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed"
    exit 1
fi

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Not in the project root directory"
    exit 1
fi

# Create logs directory
mkdir -p logs

# Start auto-deployment with logging
echo "🔄 Starting auto-deployment system..."
echo "📝 Logs will be saved to logs/auto-deploy.log"

# Run the auto-push script with output to both console and log file
node scripts/auto-push.js 2>&1 | tee logs/auto-deploy.log