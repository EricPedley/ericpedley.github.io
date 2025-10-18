#!/bin/bash
# Convert all GIFs to WebM format with autoplay-friendly settings
# WebM provides better compression than MP4 while maintaining quality

# Find all .gif files and convert them
for gif_file in $(find . -name "*.gif" -type f ! -path "./_site/*"); do
    webm_file="${gif_file%.gif}.webm"
    
    echo "Converting: $gif_file -> $webm_file"
    
    # FFmpeg options explained:
    # -c:v libvpx-vp9: Use VP9 codec (better compression)
    # -crf 30: Quality (lower = better, 0-63, 30 is good balance)
    # -b:v 0: Let CRF determine bitrate
    # -deadline realtime: Faster encoding
    # -an: No audio
    ffmpeg -i "$gif_file" -c:v libvpx-vp9 -crf 30 -b:v 0 -deadline realtime -an "$webm_file"
    
    if [ $? -eq 0 ]; then
        echo "✓ Successfully converted $gif_file"
        # Optional: uncomment to delete original GIF after successful conversion
        # rm "$gif_file"
    else
        echo "✗ Failed to convert $gif_file"
    fi
done

echo "Done!"
