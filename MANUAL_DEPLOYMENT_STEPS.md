# Manual Deployment Steps - Copy & Paste Ready

Since Replit's Git is having authentication issues, here's exactly what needs to be updated on GitHub:

## Method 1: Direct GitHub Edit (Easiest)

Go to https://github.com/rizzhire/rizzhire.github.io and edit these 3 files:

### 1. Edit: `client/src/App.tsx`
**Find line 28 and replace it with:**
```jsx
<main className="bg-cream rounded-t-smooth seamless-container relative z-10 min-h-screen overflow-hidden mt-16 content-reveal">
```

### 2. Edit: `client/src/index.css`
**Add this CSS at the end of the file (around line 200+):**
```css
/* Seamless navbar container transition */
.seamless-container {
  transform: translateZ(0);
  will-change: transform;
  backface-visibility: hidden;
  perspective: 1000px;
}

/* Smooth curve styling */
.rounded-t-smooth {
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
  position: relative;
}

.rounded-t-smooth::before {
  content: '';
  position: absolute;
  top: -1px;
  left: 0;
  right: 0;
  height: 2rem;
  background: #F5F3EB;
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
  z-index: -1;
}

/* Content reveal animation */
.content-reveal {
  animation: contentSlideUp 0.8s ease-out forwards;
}

@keyframes contentSlideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Navbar slide down animation */
.navbar-slide-down {
  animation: navbarSlideDown 0.6s ease-out forwards;
}

@keyframes navbarSlideDown {
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### 3. File: `client/src/components/layout/navbar.tsx`
**No changes needed** - this file is already correct.

## Method 2: Download and Upload Files

1. **Download these 3 files from Replit**
2. **Upload to GitHub** via the web interface
3. **Commit with message:** "Fix navbar partition line and smooth border curves"

## Expected Result

After committing these changes:
- ✅ Navbar partition line will disappear
- ✅ Container curves will be perfectly smooth
- ✅ Hardware-accelerated rendering for better performance
- ✅ Professional seamless appearance

**Your site will update at https://rizzhire.github.io/ within 5 minutes!**