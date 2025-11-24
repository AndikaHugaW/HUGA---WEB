# AI Agency Portfolio - Porto Huga

Website portofolio agency bertema AI dengan desain futuristik, cutting-edge, imersif, dan profesional.

## 🚀 Teknologi

- **Next.js 14** - React framework dengan App Router
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type safety
- **Framer Motion** - Animasi 2D yang smooth dan premium
- **Three.js / React-Three-Fiber** - Elemen 3D interaktif
- **Lenis** - Smooth scroll dengan momentum scrolling

## ✨ Fitur Utama

### Visual & Animasi
- ✅ **Hero Section dengan 3D AI Orb** - Orb interaktif yang mengikuti kursor mouse
- ✅ **Smooth Scroll (Lenis)** - Scrolling premium dengan momentum
- ✅ **Magnetic Buttons** - Tombol yang 'menempel' saat kursor mendekat
- ✅ **Text Reveal** - Animasi text per-huruf/per-kata dengan efek glitch atau fade-in
- ✅ **Mesh Gradient Background** - Background gelap dengan efek mesh gradient yang bergerak
- ✅ **Custom Cursor** - Cursor custom dengan blend mode
- ✅ **Particle System** - 2000+ partikel untuk efek neural network

## 📦 Instalasi

1. Install dependencies:
```bash
npm install
```

2. Jalankan development server:
```bash
npm run dev
```

3. Buka [http://localhost:3000](http://localhost:3000) di browser

## 📜 Scripts

- `npm run dev` - Menjalankan development server
- `npm run build` - Build untuk production
- `npm run start` - Menjalankan production server
- `npm run lint` - Menjalankan ESLint

## 📁 Struktur Project

```
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout dengan providers
│   │   ├── page.tsx                # Home page
│   │   └── globals.css             # Global styles dengan Tailwind
│   ├── components/
│   │   ├── hero/
│   │   │   ├── HeroSection.tsx     # Hero section utama
│   │   │   └── AIOrb.tsx           # 3D orb component
│   │   ├── providers/
│   │   │   └── SmoothScrollProvider.tsx  # Lenis smooth scroll
│   │   └── ui/
│   │       ├── MagneticButton.tsx  # Button dengan efek magnetic
│   │       ├── TextReveal.tsx      # Text reveal animations
│   │       ├── MeshGradient.tsx    # Animated mesh gradient
│   │       └── CustomCursor.tsx    # Custom cursor
├── next.config.js                   # Next.js configuration
├── tailwind.config.ts              # Tailwind CSS configuration
├── postcss.config.js               # PostCSS configuration
├── tsconfig.json                   # TypeScript configuration
└── STRUCTURE.md                    # Dokumentasi struktur lengkap
```

## 🎨 Komponen yang Tersedia

### 1. HeroSection
Hero section dengan 3D orb, text reveal, dan magnetic buttons.

### 2. MagneticButton
Button dengan efek magnetic yang menarik kursor saat hover.

**Props:**
- `children`: React node
- `className`: String (optional)
- `onClick`: Function (optional)
- `magneticStrength`: Number (default: 0.3)

**Contoh:**
```tsx
<MagneticButton
  className="px-8 py-4 bg-purple-600 text-white rounded-full"
  magneticStrength={0.4}
>
  Click Me
</MagneticButton>
```

### 3. TextReveal
Komponen untuk animasi text reveal dengan berbagai variant.

**Props:**
- `text`: String
- `className`: String (optional)
- `delay`: Number (default: 0)
- `variant`: "fade" | "glitch" | "letter" | "word" (default: "fade")
- `duration`: Number (default: 0.5)

**Contoh:**
```tsx
<TextReveal
  text="Hello World"
  variant="glitch"
  className="text-4xl font-bold"
  delay={0.5}
/>
```

### 4. AIOrb
3D orb interaktif yang mengikuti mouse movement.

**Props:**
- `mousePosition`: { x: number, y: number }

### 5. MeshGradient
Background dengan animated mesh gradient.

## 📖 Dokumentasi Lengkap

Lihat [STRUCTURE.md](./STRUCTURE.md) untuk dokumentasi lengkap tentang:
- Sitemap & struktur halaman
- Deskripsi detail per section
- Interaksi dan animasi
- Design system

## 🎯 Roadmap

- [ ] Halaman Solutions
- [ ] Halaman Case Studies
- [ ] Halaman Lab/Playground
- [ ] Halaman Contact
- [ ] Responsive optimizations
- [ ] Performance optimizations

## 📝 Notes

- Custom cursor hanya muncul di desktop (pointer: fine)
- Smooth scroll menggunakan Lenis untuk momentum scrolling
- 3D elements menggunakan React-Three-Fiber untuk performa optimal
- Semua animasi menggunakan Framer Motion untuk smooth transitions

## 🤝 Contributing

Project ini dibuat sebagai portfolio showcase dengan fokus pada:
- User Experience yang premium
- Visual yang cutting-edge
- Performance yang optimal
- Code yang maintainable

---

**Dibuat dengan ❤️ menggunakan Next.js, Tailwind CSS, dan Three.js**
