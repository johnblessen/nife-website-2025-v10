#!/bin/bash

# Update branding in all files
find . -type f -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" -o -name "*.md" | while read file; do
  # Skip node_modules and .next directories
  if [[ $file != *"node_modules"* ]] && [[ $file != *".next"* ]]; then
    # Replace "nife" with "NiFe" (case-insensitive)
    sed -i '' 's/nife/NiFe/gI' "$file"
    sed -i '' 's/NIFE/NiFe/g' "$file"
  fi
done

# Update image filenames
find . -type f -name "nife-*.png" -o -name "nife-*.jpg" -o -name "nife-*.svg" | while read file; do
  # Skip node_modules and .next directories
  if [[ $file != *"node_modules"* ]] && [[ $file != *".next"* ]]; then
    # Create new filename with NiFe
    new_file=$(echo "$file" | sed 's/nife-/NiFe-/g')
    mv "$file" "$new_file"
  fi
done

echo "Branding update complete!"
