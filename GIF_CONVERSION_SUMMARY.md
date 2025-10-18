# GIF to WebM Conversion Summary

## Overview
Successfully converted all GIFs in the project to WebM format with autoplay support. WebM was chosen over MP4 for its superior compression while maintaining quality.

## Compression Results

### File Size Improvements
- **a2rl_rerun**: 31 MB → 11 MB (**66% smaller**)
- **kscale_compilation**: 14 MB → 4.6 MB (**65% smaller**)
- **rocket_compilation**: 9.2 MB → 3.3 MB (**64% smaller**)
- **uavf_compilation**: 42 MB → 15 MB (**63% smaller**)
- **step5 (gimp-wallpaper-blog)**: 88 KB → 56 KB (**38% smaller**)

**Total: 96.2 MB → 33.9 MB (64.8% reduction overall)**

## Changes Made

### 1. Video Conversion (FFmpeg)
- Created `convert_gifs.sh` script for batch conversion
- Used VP9 codec (libvpx-vp9) with CRF 30 for optimal quality/compression
- Converted 5 GIF files to WebM format
- Videos maintain autoplay-friendly attributes

### 2. Markdown Updates
Updated 4 markdown files to use HTML5 video tags instead of image tags:
- `extra_projects/a2rl.md`
- `extra_projects/uav_forge.md`
- `extra_projects/kscale.md`
- `_posts/2022-12-06-making-wallpaper-gimp.md`

**Video tag format:**
```html
<video width="100%" autoplay muted loop playsinline>
  <source src="/path/to/video.webm" type="video/webm">
</video>
```

Attributes:
- `autoplay`: Videos start playing automatically
- `muted`: Required for autoplay to work (browser autoplay policies)
- `loop`: Videos repeat infinitely
- `playsinline`: Allows fullscreen video on mobile devices

### 3. JavaScript Card Rendering (cardElement.js)
Updated card element to dynamically detect and render video files:
- Detects `.webm`, `.mp4`, and `.webp` video formats
- Creates native `<video>` elements instead of background images
- Applies autoplay, muted, loop, and playsinline attributes
- Maintains fallback for static image backgrounds

### 4. CSS Styling (css/cardElement.css)
Added responsive video styling for card thumbnails:
- Videos maintain proper aspect ratio with `object-fit: cover`
- Videos fill 100% of thumbnail container
- Ensures rounded corners match card design
- Proper alignment and centering

## Benefits

1. **Faster Loading**: 64.8% reduction in total video file sizes
2. **Better Quality**: WebM provides superior codec efficiency vs GIF
3. **Modern Format**: WebM/VP9 optimized for modern browsers
4. **Autoplay Support**: Videos play automatically like GIFs did
5. **Network Efficiency**: Smaller files = reduced bandwidth usage
6. **Mobile Friendly**: Proper video attributes for mobile playback

## Browser Support

WebM (VP9 codec) is supported in:
- Chrome/Chromium 25+
- Firefox 28+
- Edge 14+
- Opera 15+
- Android browsers

For older browsers, MP4 fallback sources can be added to the video tags if needed.

## Conversion Script

The `convert_gifs.sh` script can be reused for future GIF conversions:
```bash
./convert_gifs.sh
```

This will find all `.gif` files (excluding `_site/` directory) and convert them to WebM format.
