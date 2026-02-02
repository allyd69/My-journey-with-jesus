# My 40-Day Journey with Jesus - Termux Setup Guide

This guide will help you set up My 40-Day Journey web app on your Android device using Termux and deploy it to GitHub Pages.

## Prerequisites

- Android device
- Internet connection
- GitHub account

## Step 1: Install Termux

1. Download Termux from F-Droid (recommended) or Google Play Store
2. Open Termux

## Step 2: Update Packages

```bash
pkg update && pkg upgrade -y
```

## Step 3: Install Required Packages

```bash
pkg install git nodejs nano -y
```

## Step 4: Set up proot-distro (Optional but Recommended)

For a more complete Linux environment:

```bash
pkg install proot-distro -y
proot-distro install ubuntu
proot-distro login ubuntu
```

## Step 5: Clone Your Repository

```bash
cd ~
git clone https://github.com/YOUR_USERNAME/my-journey-with-jesus.git
cd my-journey-with-jesus
```

## Step 6: Install Dependencies

```bash
npm install
```

## Step 7: Development Mode

To run locally for testing:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## Step 8: Build for Production

```bash
npm run build
```

This creates a `dist/` folder with the production build.

## Step 9: Deploy to GitHub Pages

### First Time Setup:

1. Create a new repository on GitHub named `my-journey-with-jesus`
2. Initialize git and push:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/my-journey-with-jesus.git
git push -u origin main
```

3. Enable GitHub Pages:
   - Go to repository Settings
   - Click "Pages" in the left sidebar
   - Source: Deploy from a branch
   - Branch: main / root
   - Click Save

### Subsequent Deployments:

```bash
git add .
git commit -m "Update app"
git push origin main
```

GitHub Actions will automatically deploy to Pages.

## File Structure

```
my-journey-with-jesus/
├── dist/              # Production build (auto-generated)
├── public/            # Static assets
├── src/
│   ├── components/    # Reusable UI components
│   ├── data/          # Content data (days, prayers, etc.)
│   ├── hooks/         # Custom React hooks
│   ├── screens/       # Main app screens
│   ├── App.tsx        # Main app component
│   ├── index.css      # Global styles
│   └── main.tsx       # Entry point
├── index.html         # HTML template
├── package.json       # Dependencies
├── tailwind.config.js # Tailwind CSS config
├── tsconfig.json      # TypeScript config
└── vite.config.ts     # Vite config
```

## Customizing Content

### Adding/Editing Days

Edit `src/data/days.ts`:

```typescript
{
  id: 1,
  title: "Your Day Title",
  subtitle: "Subtitle",
  theme: "Awakening",
  week: 1,
  scripture: {
    reference: "John 3:16",
    text: "For God so loved the world...",
    reflection: "Your reflection here"
  },
  // ... other fields
}
```

### Adding Prayers

Edit `src/data/prayers.ts`:

```typescript
{
  id: 1,
  category: "Morning Prayers",
  title: "Prayer Title",
  opening: "Opening line...",
  body: "Main prayer content...",
  closing: "In Jesus' name, Amen."
}
```

### Adding Gratitude Prompts

Edit `src/data/gratitude.ts`:

```typescript
{
  id: 1,
  category: "Gratitude for God's Presence",
  prompt: "What are you grateful for today?"
}
```

## Offline Usage

Once deployed to GitHub Pages, the app works offline:
- All data is stored in localStorage
- No internet required after initial load
- Progress is saved automatically

## Troubleshooting

### Build fails

```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Git push fails

```bash
git pull origin main --rebase
git push origin main
```

### Port already in use

```bash
# Find and kill process
lsof -ti:5173 | xargs kill -9
```

## Quick Commands Reference

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Update dependencies
npm update

# Git operations
git status
git add .
git commit -m "message"
git push origin main
git pull origin main
```

## Support

For issues or questions:
- Check the GitHub repository
- Review this documentation
- Test in development mode first

---

**God bless your journey!** 🙏
