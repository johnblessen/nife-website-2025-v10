#!/bin/bash

# Create temporary directory for assets
mkdir -p temp_assets

# Function to create a video with text overlay
create_video() {
    local output_file=$1
    local duration=$2
    local text=$3
    local background_color=$4

    ffmpeg -f lavfi -i color=c=$background_color:s=1920x1080:d=$duration \
           -vf "drawtext=text='$text':fontcolor=white:fontsize=60:x=(w-text_w)/2:y=(h-text_h)/2" \
           -c:v libx264 -preset medium -crf 23 \
           -c:a aac -b:a 128k \
           "$output_file"
}

# Featured Video
create_video "public/videos/featured/nife-overview.mp4" 272 "Nife: Revolutionizing Health Insurance & Wealth Building" "purple"

# Health Insurance Videos
create_video "public/videos/health-insurance/maximize-benefits.mp4" 405 "How to Maximize Your Health Insurance Benefits" "blue"
create_video "public/videos/health-insurance/hospital-network.mp4" 442 "Hospital Network Benefits & Discounts" "green"
create_video "public/videos/health-insurance/claim-process.mp4" 490 "How to File a Health Insurance Claim" "red"
create_video "public/videos/health-insurance/top-up-insurance.mp4" 334 "Top-Up Insurance Options Explained" "orange"

# Wealth Building Videos
create_video "public/videos/wealth-building/digital-gold.mp4" 318 "Digital Gold Rewards Explained" "gold"
create_video "public/videos/wealth-building/convert-gold.mp4" 382 "Converting Digital Gold to Physical Gold" "yellow"

# RuPay Card Video
create_video "public/videos/rupay-card/getting-started.mp4" 296 "Getting Started with Your Nife RuPay Card" "blue"

# Testimonials
create_video "public/videos/testimonials/member-stories.mp4" 585 "Member Testimonials: Real Success Stories" "purple"

# Clean up
rm -rf temp_assets

echo "All videos have been generated successfully!"
