# Image Configuration System

This file explains how to use the centralized image configuration system for easy image management.

## File Structure

- `src/images.js` - Contains all image URLs organized by sections
- `index.html` - Your main website file
- `index copy.html` - Backup of your website

## How to Use

### 1. Import the Image Configuration

Add this script tag to your HTML files:

```html
<script type="module">
    import { images, getImage, updateImage } from './src/images.js';
</script>
```

### 2. Replace Hardcoded Image URLs

Instead of using hardcoded URLs like:
```html
<img src="https://images.unsplash.com/photo-1604076913837-52ab5629fba9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80">
```

Use the configuration:
```html
<img src="${images.hero.main}">
```

### 3. Available Image Sections

#### Hero Section
- `images.hero.main` - Main hero image
- `images.hero.signature` - Signature image
- `images.hero.secondary` - Secondary hero image

#### About Section
- `images.about.main` - Main about image
- `images.about.secondary` - Secondary about image
- `images.about.tertiary` - Tertiary about image
- `images.about.quaternary` - Quaternary about image

#### Team Section
- `images.team.member1` - Team member 1
- `images.team.member2` - Team member 2
- `images.team.member3` - Team member 3
- `images.team.member4` - Team member 4
- `images.team.member5` - Team member 5
- `images.team.member6` - Team member 6
- `images.team.member7` - Team member 7
- `images.team.member8` - Team member 8

### 4. Helper Functions

#### Get Image
```javascript
const imageUrl = getImage('hero', 'main');
```

#### Update Image Dynamically
```javascript
updateImage('hero', 'main', 'new-image-url.jpg');
```

#### Get All Images from a Section
```javascript
const heroImages = getSectionImages('hero');
```

## How to Change Images

### Method 1: Edit the Configuration File
1. Open `src/images.js`
2. Find the image you want to change
3. Replace the URL with your new image URL
4. Save the file

### Method 2: Update Dynamically
```javascript
// Update a specific image
updateImage('hero', 'main', 'https://your-new-image-url.com/image.jpg');

// Update multiple images
updateImage('team', 'member1', 'https://new-team-member1.jpg');
updateImage('team', 'member2', 'https://new-team-member2.jpg');
```

## Example Usage in HTML

```html
<!DOCTYPE html>
<html>
<head>
    <title>Your Website</title>
</head>
<body>
    <!-- Hero Section -->
    <section class="hero">
        <img src="${images.hero.main}" alt="Hero Image">
        <img src="${images.hero.signature}" alt="Signature">
    </section>

    <!-- About Section -->
    <section class="about">
        <img src="${images.about.main}" alt="About Image">
        <img src="${images.about.secondary}" alt="About Secondary">
    </section>

    <!-- Team Section -->
    <section class="team">
        <img src="${images.team.member1}" alt="Team Member 1">
        <img src="${images.team.member2}" alt="Team Member 2">
        <!-- ... more team members -->
    </section>

    <script type="module">
        import { images, getImage, updateImage } from './src/images.js';
        
        // Your JavaScript code here
    </script>
</body>
</html>
```

## Benefits

1. **Centralized Management**: All images in one place
2. **Easy Updates**: Change images without searching through HTML
3. **Consistency**: Ensures all images are properly organized
4. **Maintainability**: Easy to maintain and update
5. **Reusability**: Images can be reused across different sections

## Tips

- Keep image URLs organized and well-commented
- Use descriptive names for image keys
- Test image URLs before adding them to the configuration
- Consider using relative paths for local images
- Backup your image configuration file regularly 