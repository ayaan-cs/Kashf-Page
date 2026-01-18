# Screenshots Directory

Add your app screenshots here with the following filenames:

1. **map-search.png** - Map/Search screen with categories (for Map section)
2. **prayer-times.png** - Prayer Times screen (for Prayer section)
3. **favorites.png** - Favorites screen (for Favorites section)
4. **mosque-detail.png** - Mosque detail screen (for Search/Details section)

## Requirements:
- Screenshots should be iPhone screenshots
- Recommended size: 390x844px (iPhone 13/14 standard size) or similar aspect ratio
- Format: PNG with transparent background preferred
- The screenshots will automatically crop the top 5% to hide the status bar (time/battery)

## How it works:
The `PhoneMockup` component will automatically:
- Display the correct screenshot based on the `variant` prop
- Crop the top portion to hide status bar elements
- Make the mockup responsive across all screen sizes
- Fall back to a gradient if the image doesn't load
