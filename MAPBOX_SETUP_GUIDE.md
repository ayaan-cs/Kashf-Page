# Mapbox Setup Guide for Kashf Landing Page

## Step 1: Upload Custom Style to Mapbox Studio

### Option A: Upload JSON Directly
1. Go to [Mapbox Studio](https://studio.mapbox.com/)
2. Click **"New style"**
3. Choose **"Upload style"** or **"Blank template"**
4. If using blank template, click on the **"Code"** icon in the top-right
5. Replace all JSON with contents from `mapbox-style-teal-gold.json`
6. Click **"Publish"**
7. Copy the **Style URL** (format: `mapbox://styles/YOUR-USERNAME/STYLE-ID`)

### Option B: Build in Studio (Recommended)
1. Go to [Mapbox Studio](https://studio.mapbox.com/)
2. Click **"New style"**
3. Choose **"Monochrome"** > **"Dark"** as base
4. Customize colors:
   - **Water**: #14B8A6 (teal) with 60% opacity
   - **Major Roads (motorway/trunk)**: #D4AF37 (gold) with 70% opacity
   - **Buildings**: #333333 to #4A4A4A (grey)
   - **Background/Land**: #0A0A0A to #1A1A1A (dark)
   - **Road Labels**: #D4AF37 (gold)
   - **State borders**: #14B8A6 (teal) dashed
5. Enable **3D Buildings** layer (important!)
6. Click **"Publish"**
7. Copy the **Style URL**

## Step 2: Create/Configure Mapbox Access Token

### Go to Account Page:
1. Visit [Mapbox Account Tokens](https://account.mapbox.com/access-tokens/)
2. Click **"Create a token"** or edit existing

### Token Name:
```
Kashf Landing Page Token
```

### Required Scopes (CHECK THESE):
- ✅ **styles:tiles** - Read styles and tiles
- ✅ **styles:read** - Read styles
- ✅ **fonts:read** - Read fonts
- ✅ **datasets:read** - Read datasets (optional, for future custom data)
- ✅ **vision:read** - Computer vision (optional)

### Optional Scopes (UNCHECK THESE):
- ❌ **styles:write** - Don't need write access in production
- ❌ **datasets:write** - Don't need write access
- ❌ **uploads:write** - Not needed
- ❌ **tokens:write** - Not needed
- ❌ All other write permissions

### URL Restrictions (Recommended for Security):
Add these URLs to restrict token usage:
```
http://localhost:*
http://127.0.0.1:*
https://yourdomain.com/*
https://*.yourdomain.com/*
```

### Save Token:
- Click **"Create token"**
- **COPY AND SAVE** the token immediately (you won't see it again!)
- Token format: `pk.eyJ1...` (starts with `pk.`)

## Step 3: Get Your Style URL

After publishing your style in Mapbox Studio, you'll see:

**Style URL Format:**
```
mapbox://styles/YOUR-USERNAME/STYLE-ID
```

**Example:**
```
mapbox://styles/johnsmith/clx8k3h5n002e01qvghij4xyz
```

**Copy this entire URL** - you'll need it for the code.

## Step 4: Information Needed for Integration

Once you have these three items, I can integrate Mapbox:

1. **Mapbox Access Token**
   - Format: `pk.eyJ1...`
   - Starts with `pk.`

2. **Style URL**
   - Format: `mapbox://styles/USERNAME/STYLE-ID`

3. **(Optional) Google Places API Key**
   - For real business reviews, photos, and details
   - Format: `AIza...`

## Step 5: Testing Your Style

Before integrating, test your style:
1. In Mapbox Studio, click **"Share"**
2. Copy the **"Share URL"**
3. Open in browser to preview
4. Verify colors look correct:
   - Water should be teal (#14B8A6)
   - Major highways should have gold accent (#D4AF37)
   - Dark background/land areas
   - 3D buildings should appear when zoomed in

## Pricing Notes

**Mapbox:**
- Free tier: 50,000 map loads/month
- $5 per 1,000 additional loads
- 3D buildings included in free tier

**Google Places API** (when we add it):
- Free tier: $200 credit/month
- Place Details: $0.017 per request
- ~11,700 free requests/month

## Next Steps

Once you have your:
1. ✅ Mapbox Access Token
2. ✅ Style URL
3. ✅ (Optional) Google Places API Key

Share them with me and I'll:
- Replace Leaflet with Mapbox GL JS
- Integrate your custom style
- Enable 3D buildings
- Add Google Places integration for real reviews
- Keep all existing UI (tablet frame, detail panel, filters)
