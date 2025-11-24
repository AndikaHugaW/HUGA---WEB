# Struktur Website Portofolio AI Agency

## Sitemap & Struktur Halaman

```
/
├── Home (Hero Section)
├── Our AI Solutions
├── Case Studies
├── Lab/Playground
└── Contact
```

---

## Deskripsi Detail Per Section

### 1. **Home / Hero Section**

**Lokasi:** `/` (Landing Page)

**Deskripsi:**
Hero section adalah pintu masuk utama website yang menampilkan identitas brand dan value proposition. Section ini dirancang untuk membuat first impression yang kuat dan imersif.

**Fitur & Interaksi:**
- **3D AI Orb Interaktif**: Orb 3D berwarna ungu/cyan yang mengikuti pergerakan kursor mouse dengan smooth interpolation. Orb menggunakan MeshDistortMaterial untuk efek distorsi yang dinamis.
- **Particle System**: 2000+ partikel yang berputar di sekitar orb, menciptakan efek "neural network" atau "brain particles".
- **Text Reveal Animations**: 
  - Judul utama menggunakan efek glitch dengan animasi per-huruf
  - Subtitle menggunakan letter-by-letter reveal
  - Deskripsi menggunakan word-by-word fade-in dengan blur effect
- **Magnetic Buttons**: Dua CTA button (Primary & Secondary) yang memiliki efek magnetic saat kursor mendekat
- **Scroll Indicator**: Animasi scroll indicator di bagian bawah yang berkedip untuk mengindikasikan konten di bawah
- **Mesh Gradient Background**: Background dengan animated mesh gradient yang bergerak lambat (purple, cyan, pink)

**Teknologi:**
- Three.js / React-Three-Fiber untuk 3D orb
- Framer Motion untuk animasi text dan button
- Custom shader untuk efek visual

---

### 2. **Our AI Solutions**

**Lokasi:** `/solutions` atau section kedua di homepage

**Deskripsi:**
Section ini menampilkan berbagai solusi AI yang ditawarkan oleh agency. Setiap solusi ditampilkan dalam card format dengan hover effects yang premium.

**Fitur & Interaksi:**
- **Card Grid Layout**: Grid responsif dengan 3-4 kolom (desktop) dan 1 kolom (mobile)
- **Hover Effects**: 
  - Card scale up dengan smooth transition
  - Gradient border yang muncul saat hover
  - Icon/illustration yang beranimasi
- **Scroll-triggered Animations**: Card muncul satu per satu dengan stagger effect saat di-scroll
- **Interactive Preview**: Hover pada card menampilkan preview visual atau demo interaktif
- **Category Filter**: Filter buttons untuk mengkategorikan solusi (ML, NLP, Computer Vision, dll)

**Konten:**
- Machine Learning Solutions
- Natural Language Processing
- Computer Vision
- Generative AI
- AI Consulting
- Custom AI Development

---

### 3. **Case Studies**

**Lokasi:** `/case-studies`

**Deskripsi:**
Portfolio section yang menampilkan project-project sukses dengan detail yang komprehensif. Setiap case study memiliki halaman detail sendiri.

**Fitur & Interaksi:**
- **Masonry/Grid Layout**: Layout yang dinamis dengan berbagai ukuran card
- **Image Parallax**: Background image bergerak dengan efek parallax saat scroll
- **Before/After Comparison**: Slider untuk menunjukkan transformasi sebelum dan sesudah implementasi AI
- **Metrics Display**: Animasi counter untuk menampilkan metrics (ROI, efficiency, dll)
- **Video Integration**: Embed video case study atau demo
- **Filter & Search**: Filter berdasarkan industry, technology, atau tahun
- **Detail Modal**: Klik card membuka modal dengan detail lengkap tanpa navigasi

**Struktur Case Study Card:**
- Thumbnail image dengan hover overlay
- Client name & logo
- Brief description
- Key metrics (animated numbers)
- Technologies used (badges)
- View case study button

---

### 4. **Lab / Playground**

**Lokasi:** `/lab` atau `/playground`

**Deskripsi:**
Interactive playground dimana visitor bisa mencoba berbagai AI tools atau demos secara langsung. Section ini menunjukkan technical capability dan innovation.

**Fitur & Interaksi:**
- **Interactive Demos**: 
  - Text-to-Image Generator
  - AI Chat Assistant
  - Image Classifier
  - Sentiment Analyzer
  - Style Transfer
- **Real-time Processing**: Showcase AI processing dengan visual feedback
- **Code Snippets**: Toggle untuk melihat code implementation
- **Share Results**: Button untuk share hasil demo ke social media
- **Experiment Gallery**: Grid showcase hasil-hasil experiment yang menarik
- **3D Visualizations**: Interactive 3D charts atau data visualizations

**Teknologi Showcase:**
- Real-time AI inference
- WebGL untuk visualizations
- WebSocket untuk real-time updates

---

### 5. **Contact / Get in Touch**

**Lokasi:** `/contact`

**Deskripsi:**
Contact section dengan form yang modern dan interaktif. Juga menampilkan informasi kontak dan social media links.

**Fitur & Interaksi:**
- **Animated Form Fields**: 
  - Label yang bergerak ke atas saat focus
  - Border glow effect saat typing
  - Real-time validation dengan smooth feedback
- **3D Background Element**: Subtle 3D element di background (wireframe atau particles)
- **Interactive Map**: Jika ada office location, tampilkan dengan interactive map
- **Social Links**: Animated social media icons dengan hover effects
- **Success Animation**: Confetti atau particle effect saat form berhasil submit
- **Typing Indicator**: Untuk chat widget (jika ada)

**Form Fields:**
- Name (with validation)
- Email (with validation)
- Company (optional)
- Message (textarea dengan character counter)
- Project Type (dropdown)
- Budget Range (slider atau dropdown)

---

## Komponen Reusable yang Dibuat

### 1. **MagneticButton**
Button dengan efek magnetic yang menarik kursor saat hover.

### 2. **TextReveal**
Komponen untuk animasi text reveal dengan berbagai variant:
- `fade`: Fade in dengan blur
- `glitch`: Glitch effect
- `letter`: Letter-by-letter reveal
- `word`: Word-by-word reveal

### 3. **MeshGradient**
Background dengan animated mesh gradient menggunakan Canvas API.

### 4. **AIOrb**
3D orb interaktif yang mengikuti mouse, menggunakan Three.js.

### 5. **CustomCursor**
Custom cursor dengan blend mode untuk efek premium.

### 6. **SmoothScrollProvider**
Provider untuk Lenis smooth scroll dengan momentum scrolling.

---

## Teknologi & Dependencies

- **Next.js 14** (App Router)
- **Tailwind CSS** (Styling)
- **Framer Motion** (2D Animations)
- **Three.js** (3D Graphics)
- **React-Three-Fiber** (React renderer untuk Three.js)
- **@react-three/drei** (Helpers untuk R3F)
- **Lenis** (Smooth Scroll)

---

## Design System

### Colors
- **Primary**: Purple (#8B5CF6)
- **Secondary**: Pink (#EC4899)
- **Accent**: Cyan (#22D3EE)
- **Background**: Deep Black (#0A0A0A)
- **Text**: White/Gray (#EDEDED, #A0A0A0)

### Typography
- **Heading**: Bold, Large (5xl - 9xl)
- **Body**: Regular, Medium (base - xl)
- **Font**: Inter (Google Fonts)

### Spacing
- Consistent spacing scale (4, 8, 12, 16, 24, 32, 48, 64, 96, 128)

### Animations
- **Duration**: 0.3s - 1.2s (tergantung complexity)
- **Easing**: Custom cubic-bezier untuk smooth feel
- **Stagger**: 0.03s - 0.1s untuk sequential animations

