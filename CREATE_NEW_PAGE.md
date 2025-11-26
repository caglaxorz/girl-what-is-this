# Creating New Subpages

## Automatic Menu Bar Injection

The menu bar is **automatically injected** into all `.html` files (except `index.html`) during the build process. You don't need to manually add it to new pages!

### How it works:

1. The build system reads `menu-bar.html` 
2. When building (`npm run build`), any `.html` file in the root that doesn't already have the menu bar gets it injected automatically after the `<body>` tag
3. Both dev and production environments support this

## Creating a New Subpage

### Option 1: Manual Creation (Recommended for full control)

1. Create a new HTML file in the root directory, e.g., `mynewpage.html`
2. Add basic HTML structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My New Page</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: 'Comic Sans MS', cursive;
            /* Your styles */
        }
    </style>
</head>
<body>
    <!-- Menu bar will be automatically injected here by the build system -->
    
    <!-- Your content here -->
</body>
</html>
```

3. **The menu bar will be automatically added when you build** (`npm run build`)

### Option 2: Using the Helper Script

Run this command to create a new page with the menu bar already included:

```bash
# Create a template page with menu bar already in it
./scripts/create-page.sh mynewpage "My New Page"
```

(A script for this is available in the `scripts/` folder if you want to create it)

## Updating the Menu Bar

If you need to update the menu bar (styling, projects list, etc.):

1. Edit `menu-bar.html`
2. Rebuild: `npm run build`
3. The new menu bar will be injected into all pages automatically

## Important Notes

- **Don't manually add the menu bar** to your HTML files. The build system does this automatically.
- If you manually add it and want to rebuild, the system checks if it's already there and won't duplicate it.
- The menu bar HTML comments out projects that don't have corresponding `.html` files, so you can safely define all projects in `menu-bar.html`

## Adding to Project List

If you want your new page to appear in the menu dropdown:

1. Check `menu-bar.html` - the projects array already contains all 21+ projects
2. Make sure your HTML file name matches one of the URLs in the projects array
3. The menu will automatically include it

Example in `menu-bar.html`:
```javascript
{ title: 'My New Page', url: '/mynewpage.html', emoji: '🎉' },
```

---

**TL;DR:** Just create a `.html` file in the root. The menu bar is automatically added during build. No manual setup needed!
