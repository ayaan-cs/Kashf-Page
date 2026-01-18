# Tally Form Setup Guide

## Setting Up the Redirect/Thank You Page

After a user submits the form, you want to redirect them to a thank you page with a TestFlight link (like yawm.com).

### Option 1: Redirect to Custom Thank You Page (Recommended)

1. **In Tally Form Settings:**
   - Go to your form: `tally.so/forms/7RKgoP/edit`
   - Click on "Settings" tab
   - Scroll to "After submission" section
   - Select "Redirect to URL"
   - Enter your thank you page URL (e.g., `https://yourdomain.com/thank-you`)

2. **Create a Thank You Page:**
   - Create a new page/route in your app (e.g., `/thank-you`)
   - Design it similar to yawm.com's thank you page with:
     - Success message: "You're on the list!"
     - TestFlight button: "Open TestFlight" with your TestFlight URL
     - Message for Android users (if applicable)

### Option 2: Custom Thank You Page in Tally

1. **In Tally Form Settings:**
   - Go to "Settings" → "After submission"
   - Select "Show custom message"
   - Use HTML to create a custom thank you page with:
     - Success message
     - TestFlight button/link
     - Styling to match your brand

### Option 3: Use Tally's Built-in Thank You Page

1. **In Tally Form Settings:**
   - Go to "Settings" → "After submission"
   - Select "Show thank you message"
   - Customize the message
   - Add a redirect button to TestFlight

## TestFlight URL Format

Your TestFlight URL will look like:
```
https://testflight.apple.com/join/YOUR_INVITE_CODE
```

Or if you have a direct app link:
```
https://apps.apple.com/app/idYOUR_APP_ID
```

## Recommended Setup

1. Create a `/thank-you` page in your React app
2. Set Tally to redirect to that page after submission
3. On the thank you page, show:
   - Success message
   - TestFlight button
   - Any additional information
