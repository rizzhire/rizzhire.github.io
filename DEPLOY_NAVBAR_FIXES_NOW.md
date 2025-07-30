# Deploy Navbar & Curve Fixes - Manual Steps

## The Issue
Your navbar partition line and curve smoothing fixes are ready but stuck due to git authentication in Replit.

## Quick Solution (2 minutes)

### Step 1: Go to GitHub
Visit: **https://github.com/rizzhire/rizzhire.github.io**

### Step 2: Edit the Main Container File
1. Navigate to: `client/src/App.tsx`
2. Click the pencil icon (Edit)
3. Find line 28 (around the `<main` tag)

### Step 3: Make This ONE Change
**Current line 28:**
```jsx
<main className="bg-cream rounded-t-[2rem] relative z-10 min-h-screen overflow-hidden mt-16 content-reveal">
```

**Replace with:**
```jsx
<main className="bg-cream rounded-t-smooth seamless-container relative z-10 min-h-screen overflow-hidden mt-16 content-reveal">
```

### Step 4: Commit
- Scroll down to "Commit changes"
- Message: "Fix navbar partition line and smooth curves"
- Click "Commit changes"

## What This Does
- Removes the visible partition line between navbar and container
- Applies smooth curved borders (no sharp edges)
- Adds hardware acceleration for better performance
- The CSS classes are already in your stylesheet

## Result
Your live site at **https://rizzhire.github.io/** will update within 3-5 minutes with:
- No more partition line
- Perfectly smooth curved borders
- Professional seamless appearance

This single file edit will fix both issues immediately!