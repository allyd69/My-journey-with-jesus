# My 40-Day Journey with Jesus

A personal cinematic spiritual formation web app that integrates neuroscience, Scripture, and daily practices to transform your mind and renew your spirit.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Platform](https://img.shields.io/badge/platform-Web%20%7C%20Android-orange.svg)

## Features

- **40-Day Journey**: Daily guided experiences with Scripture, neuroscience insights, brain training exercises, and journal prompts
- **100 Prayer Library**: Categorized prayers for every moment and need
- **100 Gratitude Prompts**: Science-backed prompts to rewire your brain for positivity
- **Neuroscience Insights**: Learn how spiritual practices physically reshape your brain
- **Progress Tracking**: Track your journey with local storage
- **Offline Support**: Works without internet after initial load
- **Mobile-First Design**: Optimized for Android via Termux and GitHub Pages

## Tech Stack

- React + TypeScript
- Vite
- Tailwind CSS
- shadcn/ui components
- Local Storage for data persistence

## Quick Start

### Option 1: GitHub Pages (Recommended)

Visit: `https://YOUR_USERNAME.github.io/my-journey-with-jesus/`

### Option 2: Local Development

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/my-journey-with-jesus.git
cd my-journey-with-jesus

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Option 3: Termux on Android

See [TERMUX_SETUP.md](TERMUX_SETUP.md) for detailed instructions.

## Project Structure

```
src/
├── components/ui/     # shadcn/ui components
├── data/              # Content data
│   ├── days.ts        # 40-day journey content
│   ├── prayers.ts     # 100 prayers
│   ├── gratitude.ts   # 100 gratitude prompts
│   └── science.ts     # Neuroscience topics
├── hooks/             # Custom React hooks
├── screens/           # Main app screens
├── App.tsx            # Main app component
└── index.css          # Global styles
```

## The 40-Day Journey

### Weekly Themes

1. **Week 1 - Awakening**: Becoming aware of your patterns
2. **Week 2 - Repentance**: Turning from old pathways
3. **Week 3 - Renewal**: Building new neural and spiritual habits
4. **Week 4 - Identity**: Learning who you are in Christ
5. **Week 5 - Authority**: Breaking agreements with lies
6. **Week 6 - Surrender**: Yielding your whole life to God
7. **Day 40 - Commissioning**: Stepping into your new life

### Daily Components

Each day includes:
- Cinematic title and theme
- Scripture anchor with reflection
- Neuroscience insight
- Brain training exercise
- Journal prompt
- Declaration
- Prayer
- Gratitude moment
- Top tip
- Reflection question

## Neuroscience Insights

The app explains how spiritual practices work in the brain:

- **Neuroplasticity**: Your brain forms 700 new neural connections every second
- **40-60 days**: Time to establish new neural pathways
- **Affect labeling**: Naming emotions reduces amygdala activity by 50%
- **Gratitude**: Increases dopamine and serotonin
- **Surrender**: Activates the parasympathetic nervous system

## Customization

### Adding Your Own Days

Edit `src/data/days.ts`:

```typescript
{
  id: 41, // Next day number
  title: "Your Custom Day",
  subtitle: "Subtitle here",
  theme: "Your Theme",
  week: 7,
  scripture: {
    reference: "Verse reference",
    text: "Scripture text...",
    reflection: "Your reflection..."
  },
  journal: {
    prompt: "Journal prompt...",
    followUp: "Follow-up question..."
  },
  science: {
    title: "Science title",
    explanation: ["Point 1", "Point 2", "Point 3"]
  },
  brainTraining: {
    title: "Exercise title",
    steps: ["Step 1", "Step 2", "Step 3"],
    whyItWorks: "Explanation..."
  },
  declaration: "Your identity declaration",
  prayer: "Your prayer...",
  gratitude: "Gratitude prompt...",
  topTip: "Practical tip...",
  reflection: "Reflection question..."
}
```

## Deployment

### GitHub Pages

1. Push to GitHub repository
2. Go to Settings → Pages
3. Source: Deploy from a branch
4. Branch: main / root
5. GitHub Actions automatically deploys

### Custom Domain

1. Add `CNAME` file with your domain
2. Configure DNS settings
3. Update `vite.config.ts` base URL

## Browser Support

- Chrome/Edge (recommended)
- Firefox
- Safari
- Samsung Internet

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - feel free to use, modify, and distribute.

## Acknowledgments

- Inspired by the intersection of faith and neuroscience
- Built with modern web technologies
- Designed for mobile-first experience

---

**Begin your transformation journey today.**

"He who began a good work in you will carry it on to completion." — Philippians 1:6
