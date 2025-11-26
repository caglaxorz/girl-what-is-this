#!/bin/bash

# Create a new HTML subpage with proper structure
# Usage: ./scripts/create-page.sh pagename "Page Title" "emoji"
# Example: ./scripts/create-page.sh mynewpage "My New Page" "🎉"

if [ $# -lt 2 ]; then
    echo "Usage: ./scripts/create-page.sh <pagename> <title> [emoji]"
    echo "Example: ./scripts/create-page.sh mynewpage 'My New Page' '🎉'"
    exit 1
fi

PAGENAME=$1
TITLE=$2
EMOJI=${3:-"✨"}

# Convert pagename to valid filename
FILENAME="${PAGENAME}.html"

# Check if file already exists
if [ -f "$FILENAME" ]; then
    echo "Error: $FILENAME already exists!"
    exit 1
fi

# Create the new page
cat > "$FILENAME" << EOF
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>$TITLE</title>
    <style>
        body {
            margin: 0;
            padding: 20px;
            font-family: 'Comic Sans MS', 'Chalkboard SE', cursive;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .container {
            background: white;
            border: 4px solid black;
            border-radius: 10px;
            padding: 40px;
            text-align: center;
            max-width: 600px;
            box-shadow: 8px 8px 0 rgba(0, 0, 0, 0.2);
        }

        h1 {
            color: #333;
            margin-top: 0;
            font-size: 2.5em;
        }

        p {
            color: #666;
            line-height: 1.6;
        }
    </style>
</head>
<body>
    <!-- Menu bar is automatically injected here by the build system -->
    
    <div class="container">
        <h1>$EMOJI $TITLE</h1>
        <p>Your content goes here...</p>
    </div>
</body>
</html>
EOF

echo "✓ Created $FILENAME"
echo "📝 To add to the menu, update menu-bar.html with:"
echo "   { title: '$TITLE', url: '/$FILENAME', emoji: '$EMOJI' },"
echo ""
echo "🚀 The menu bar will be automatically injected on build!"
