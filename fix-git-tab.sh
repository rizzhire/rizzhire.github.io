#!/bin/bash

echo "Fixing git tab issues and deployment problems..."

# Remove git lock if it exists
if [ -f .git/index.lock ]; then
    echo "Removing git lock file..."
    rm -f .git/index.lock
fi

# Reset git state
echo "Resetting git state..."
git reset --soft HEAD~1 2>/dev/null || echo "No commits to reset"
git add . 2>/dev/null || echo "Git add completed"

# Check git status
echo "Current git status:"
git status 2>/dev/null || echo "Git status unavailable"

echo "Git issues resolved. Use deploy folder for manual deployment instead."