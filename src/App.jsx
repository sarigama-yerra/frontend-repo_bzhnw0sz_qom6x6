import React from 'react'

const colors = {
  bg: '#f3e8dc',
  text: '#15122e',
  accent: '#f5c422',
  blue1: '#8EC4D9',
  blue2: '#388697',
}

function Navbar() {
  return (
    <header className="w-full sticky top-0 z-40 backdrop-blur bg-white/60 border-b border-[rgba(21,18,46,0.1)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/VAKRUTA.png" alt="Vakruta" className="h-10 w-auto" />
          <span className="text-xl tracking-wide" style={{ color: colors.text, fontFamily: 'Cinzel, Lora, serif' }}>Vakruta</span>
        </div>
        <nav className="hidden md:flex items-center gap-6" style={{ color: colors.text }}>
          <a href="#about" className="hover:text-[--accent] transition" style={{ ['--accent']: colors.accent }}>About</a>
          <a href="#stats" className="hover:text-[--accent] transition" style={{ ['--accent']: colors.accent }}>Statistics</a>
          <a href="#brochure" className="hover:text-[--accent] transition" style={{ ['--accent']: colors.accent }}>Brochure</a>
        </nav>
      </div>
    </header>
  )
}

function MughalMotif() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] opacity-70">
        <img src="/gradient.jpg" alt="gradient" className="w-full h-full object-cover rounded-full blur-3xl" />
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section className="relative pt-14">
      <MughalMotif />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-5xl sm:text-6xl leading-none mb-6" style={{ color: colors.accent, fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.5px' }}>
            VAKRUTA
          </h1>
          <p className="text-lg sm:text-xl" style={{ color: colors.text, fontFamily: 'Lora, Cinzel, serif' }}>
            A celebration of design, culture, and craftsmanship inspired by the opulence of the Indian Mughal Empire.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#brochure" className="px-6 py-3 rounded-full font-medium shadow-md hover:shadow-lg transition" style={{ background: colors.blue2, color: 'white' }}>View Brochure</a>
            <a href="#about" className="px-6 py-3 rounded-full font-medium border" style={{ borderColor: colors.blue2, color: colors.blue2 }}>Learn More</a>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative">
            <div className="absolute -inset-4 rounded-2xl" style={{ background: `linear-gradient(135deg, ${colors.accent}33, ${colors.blue1}55)` }}></div>
            <img src="/VAKRUTA.png" alt="Vakruta Logo" className="relative w-72 sm:w-96 h-auto object-contain rounded-xl bg-white/70 p-6 border" style={{ borderColor: colors.blue1 }} />
          </div>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl mb-4" style={{ color: colors.accent, fontFamily: 'Bebas Neue, sans-serif' }}>About Us</h2>
        <p className="text-base md:text-lg" style={{ color: colors.text, fontFamily: 'Lora, Cinzel, serif' }}>
          Vakruta blends timeless artistry with contemporary experiences. Drawing from the rich heritage of Mughal aesthetics—arches, jali patterns, and gilded details—we create immersive moments that feel regal yet modern.
        </p>
      </div>
    </section>
  )
}

function Stats() {
  const items = [
    { label: 'Past Registrations', value: '12,500+' },
    { label: 'Sponsorship Value', value: '₹ 85L+' },
    { label: 'Partners', value: '50+' },
  ]
  return (
    <section id="stats" className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl mb-8" style={{ color: colors.accent, fontFamily: 'Bebas Neue, sans-serif' }}>Past statistics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.label} className="rounded-2xl p-6 text-center shadow-sm border" style={{ background: '#ffffffcc', borderColor: colors.blue1 }}>
              <div className="text-3xl mb-2" style={{ color: colors.blue2, fontFamily: 'Cinzel, Lora, serif' }}>{it.value}</div>
              <div className="text-sm tracking-wide" style={{ color: colors.text }}>{it.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Brochure() {
  return (
    <section id="brochure" className="py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl mb-6" style={{ color: colors.accent, fontFamily: 'Bebas Neue, sans-serif' }}>Brochure</h2>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <a href="/brochure.pdf" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full font-medium shadow-md hover:shadow-lg transition" style={{ background: colors.blue2, color: 'white' }}>Open Brochure</a>
          <p className="text-sm" style={{ color: colors.text, fontFamily: 'Lora, Cinzel, serif' }}>Explore the full vision, themes, and partnership opportunities.</p>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="mt-16 border-t" style={{ borderColor: colors.blue1 }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-3 gap-8 items-center">
        <div className="flex items-center gap-3">
          <img src="/VAKRUTA.png" alt="Vakruta" className="h-10 w-auto" />
          <span className="text-xl tracking-wide" style={{ color: colors.text, fontFamily: 'Cinzel, Lora, serif' }}>Vakruta</span>
        </div>
        <div className="text-center" style={{ color: colors.text }}>
          <span className="text-sm">© {new Date().getFullYear()} Vakruta. All rights reserved.</span>
        </div>
        <div className="flex md:justify-end gap-3">
          <a href="#about" className="text-sm underline hover:no-underline" style={{ color: colors.blue2 }}>About</a>
          <a href="#brochure" className="text-sm underline hover:no-underline" style={{ color: colors.blue2 }}>Brochure</a>
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div style={{ background: colors.bg }}>
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Brochure />
      <Footer />
    </div>
  )
}

export default App
