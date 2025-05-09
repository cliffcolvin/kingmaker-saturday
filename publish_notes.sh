#!/bin/bash

# Set paths
VAULT_DIR=~/Dropbox/PF2e-Game
QUARTZ_DIR=~/workspaces/ccolvin/kingmaker-saturday/docs

echo "🔍 Scanning vault for published notes..."
echo "Looking in: $VAULT_DIR"

# Loop through every markdown file recursively
find "$VAULT_DIR" -type f -name "*.md" | while read -r file; do
    # Check for YAML frontmatter with dg-publish: true
    if head -n 5 "$file" | grep -q "^---" && head -n 5 "$file" | grep -q "dg-publish: true" && head -n 5 "$file" | grep -q "^---$"; then
        echo "Found publish flag in: $file"
        # Compute relative path and destination
        rel_path="${file#$VAULT_DIR/}"
        dest_path="$QUARTZ_DIR/$rel_path"

        # Create destination directory if needed
        mkdir -p "$(dirname "$dest_path")"

        # Copy file
        cp "$file" "$dest_path"
        echo "✅ Published: $rel_path"
    fi
done

# === GIT PUSH ===
echo "📦 Committing and pushing to Quartz site..."
cd "$QUARTZ_DIR"
git add .
git commit -m "Update published notes" || echo "⚠️ Nothing to commit"
git push

echo "�� Done publishing!"

