# 🔥 PHOENIX RISK // MASTER TERMINAL

Advanced Risk Management Terminal built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## 📋 Features

✨ **Modern Terminal UI** - Sleek dark interface with Material Design 3  
📊 **Real-time Metrics** - Live CPU/GPU/Risk data updates  
💼 **Portfolio Dashboard** - Dynamic portfolio tracking  
🎯 **Quick Access** - Navigation tiles for core functions  
📡 **Live Signals** - Real-time system signals and alerts  
📱 **Responsive** - Mobile and desktop optimized  
🎨 **Custom Theme** - Phoenix color palette pre-configured  
⚡ **Type-Safe** - Full TypeScript support  

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open browser
# http://localhost:3000
```

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main dashboard
│   └── globals.css         # Global styles
└── components/
    ├── TopAppBar.tsx           # Header
    ├── ActiveEngineStatus.tsx  # Metrics
    ├── PortfolioSnapshot.tsx   # Portfolio
    ├── QuickAccessTiles.tsx    # Nav tiles
    ├── LiveSignalTicker.tsx    # Signals
    └── BottomNavBar.tsx        # Mobile nav
```

## 🎨 Color System

| Color | Value | Usage |
|-------|-------|-------|
| Primary | `#ffba20` | Main brand color |
| Primary Fixed | `#ffdea8` | Secondary brand |
| Surface | `#121414` | Background |
| Secondary | `#d3fbff` | Accents |
| Error | `#ffb4ab` | Alerts |

## 🔧 Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Material Symbols** - Icons
- **JetBrains Mono** - Code font
- **Space Grotesk** - Display font

## 📦 Available Scripts

```bash
npm run dev       # Development server
npm run build     # Production build
npm start         # Run production
npm run lint      # Lint code
```

## 🎯 Live Features

- ✅ Real-time metrics updates (2-4s intervals)
- ✅ Dynamic signal ticker
- ✅ Responsive grid layout
- ✅ Smooth animations
- ✅ Mobile navigation
- ✅ Status indicators

## 🚀 Deploy

### Vercel
```bash
vercel
```

### Docker
```bash
docker build -t phoenix .
docker run -p 3000:3000 phoenix
```

## 📚 Documentation

Full documentation available in the component files.

## 📄 License

MIT License - Feel free to use this project!

---

**Made with ❤️ for risk management professionals**
