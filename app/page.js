'use client';

import React, { useState, useEffect } from 'react';

// Photos en base64
const PHOTO_PORTRAIT = "https://raw.githubusercontent.com/Metadondidi/GiuPetitRepo/main/image/9B1A6034.webp";
const PHOTO_BUREAU = "https://raw.githubusercontent.com/Metadondidi/GiuPetitRepo/main/image/9B1A5988.webp";

// ============================================
// GIULIA PETIT - AVOCATE À MARSEILLE
// www.giuliapetitavocat.fr
// ============================================

const App = () => {
  const [currentPage, setCurrentPage] = useState('accueil');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = (page) => {
    setCurrentPage(page);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-stone-50 font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&family=Libre+Franklin:wght@300;400;500;600&display=swap');
        
        :root {
          --navy: #1a2a3a;
          --navy-light: #2d4156;
          --gold: #b8a169;
          --gold-light: #d4c69a;
          --cream: #faf9f7;
          --stone: #f5f4f2;
          --text: #3d3d3d;
          --text-light: #6b6b6b;
        }
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Libre Franklin', sans-serif;
          color: var(--text);
          line-height: 1.7;
          background: var(--cream);
        }
        
        .font-serif {
          font-family: 'Cormorant Garamond', Georgia, serif;
        }
        
        .font-sans {
          font-family: 'Libre Franklin', sans-serif;
        }
        
        /* Animations */
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        
        @keyframes lineGrow {
          from { width: 0; }
          to { width: 60px; }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        .animate-fade-in-left {
          animation: fadeInLeft 0.8s ease-out forwards;
        }
        
        .animate-scale-in {
          animation: scaleIn 0.6s ease-out forwards;
        }
        
        /* Animation delays - only apply opacity:0 when combined with animation */
        .animate-fade-in.delay-100 { animation-delay: 0.1s; opacity: 0; }
        .animate-fade-in.delay-200 { animation-delay: 0.2s; opacity: 0; }
        .animate-fade-in.delay-300 { animation-delay: 0.3s; opacity: 0; }
        .animate-fade-in.delay-400 { animation-delay: 0.4s; opacity: 0; }
        .animate-fade-in.delay-500 { animation-delay: 0.5s; opacity: 0; }
        .animate-scale-in.delay-100 { animation-delay: 0.1s; opacity: 0; }
        .animate-scale-in.delay-200 { animation-delay: 0.2s; opacity: 0; }
        .animate-scale-in.delay-300 { animation-delay: 0.3s; opacity: 0; }
        
        /* Gold accent line animation */
        .gold-line {
          width: 60px;
          height: 1px;
          background: var(--gold);
          animation: lineGrow 1s ease-out forwards;
        }
        
        /* Button styles */
        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 32px;
          background: var(--navy);
          color: white;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          border: none;
          cursor: pointer;
          transition: all 0.4s ease;
        }
        
        .btn-primary:hover {
          background: var(--navy-light);
          transform: translateY(-2px);
        }
        
        .btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 32px;
          background: transparent;
          color: var(--navy);
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          border: 1px solid var(--navy);
          cursor: pointer;
          transition: all 0.4s ease;
        }
        
        .btn-outline:hover {
          background: var(--navy);
          color: white;
        }
        
        /* Navigation */
        .nav-link {
          position: relative;
          color: var(--text);
          text-decoration: none;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 1px;
          text-transform: uppercase;
          padding: 8px 0;
          cursor: pointer;
          transition: color 0.3s ease;
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background: var(--gold);
          transition: width 0.3s ease;
        }
        
        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }
        
        .nav-link:hover,
        .nav-link.active {
          color: var(--navy);
        }
        
        /* Form styles */
        .form-input {
          width: 100%;
          padding: 16px 20px;
          background: white;
          border: 1px solid #e5e4e2;
          font-family: 'Libre Franklin', sans-serif;
          font-size: 15px;
          color: var(--text);
          transition: all 0.3s ease;
        }
        

        
        .form-input::placeholder {
          color: #aaa;
        }
        
        /* Card hover effect */
        .expertise-card {
          background: white;
          padding: 40px;
          border: 1px solid #eee;
          transition: all 0.4s ease;
        }
        
        .expertise-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.08);
          border-color: var(--gold);
        }
        
        /* Testimonial card */
        .testimonial-card {
          background: white;
          padding: 40px;
          position: relative;
          border: 1px solid #eee;
          transition: all 0.4s ease;
        }
        
        .testimonial-card:hover {
          box-shadow: 0 15px 40px rgba(0,0,0,0.08);
        }
        
        .testimonial-card::before {
          content: '"';
          position: absolute;
          top: 20px;
          left: 30px;
          font-family: 'Cormorant Garamond', serif;
          font-size: 80px;
          line-height: 1;
          color: var(--gold);
          opacity: 0.3;
        }
        
        /* Responsive */
        @media (max-width: 768px) {
          .expertise-card {
            padding: 30px;
          }
          .testimonial-card {
            padding: 30px;
          }
        }
      `}</style>

      {/* Navigation */}
      <Header 
        scrolled={scrolled} 
        currentPage={currentPage} 
        navigate={navigate}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      {/* Main Content */}
      <main>
        {currentPage === 'accueil' && <HomePage navigate={navigate} />}
        {currentPage === 'cabinet' && <CabinetPage navigate={navigate} />}
        {currentPage === 'domaines' && <DomainesPage navigate={navigate} />}
        {currentPage === 'temoignages' && <TemoignagesPage navigate={navigate} />}
        {currentPage === 'contact' && <ContactPage />}
      </main>

      {/* Footer */}
      <Footer navigate={navigate} />
    </div>
  );
};

// ============================================
// HEADER COMPONENT
// ============================================
const Header = ({ scrolled, currentPage, navigate, menuOpen, setMenuOpen }) => {
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="cursor-pointer group"
          onClick={() => navigate('accueil')}
        >
          <h1 className="font-serif text-2xl lg:text-3xl font-medium tracking-wide" style={{ color: 'var(--navy)' }}>
            Giulia Petit
          </h1>
          <p className="text-xs tracking-widest uppercase mt-1" style={{ color: 'var(--text-light)' }}>
            Avocate à Marseille
          </p>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <span 
            className={`nav-link ${currentPage === 'accueil' ? 'active' : ''}`}
            onClick={() => navigate('accueil')}
          >
            Accueil
          </span>
          <span 
            className={`nav-link ${currentPage === 'cabinet' ? 'active' : ''}`}
            onClick={() => navigate('cabinet')}
          >
            Le Cabinet
          </span>
          <span 
            className={`nav-link ${currentPage === 'domaines' ? 'active' : ''}`}
            onClick={() => navigate('domaines')}
          >
            Expertises
          </span>
          <span 
            className={`nav-link ${currentPage === 'temoignages' ? 'active' : ''}`}
            onClick={() => navigate('temoignages')}
          >
            Témoignages
          </span>
          <span 
            className={`nav-link ${currentPage === 'contact' ? 'active' : ''}`}
            onClick={() => navigate('contact')}
          >
            Contact
          </span>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`w-6 h-0.5 bg-navy transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} style={{ backgroundColor: 'var(--navy)' }} />
          <span className={`w-6 h-0.5 bg-navy transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} style={{ backgroundColor: 'var(--navy)' }} />
          <span className={`w-6 h-0.5 bg-navy transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} style={{ backgroundColor: 'var(--navy)' }} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 ${
        menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <nav className="flex flex-col p-6 gap-4">
          <span className={`nav-link ${currentPage === 'accueil' ? 'active' : ''}`} onClick={() => navigate('accueil')}>Accueil</span>
          <span className={`nav-link ${currentPage === 'cabinet' ? 'active' : ''}`} onClick={() => navigate('cabinet')}>Le Cabinet</span>
          <span className={`nav-link ${currentPage === 'domaines' ? 'active' : ''}`} onClick={() => navigate('domaines')}>Expertises</span>
          <span className={`nav-link ${currentPage === 'temoignages' ? 'active' : ''}`} onClick={() => navigate('temoignages')}>Témoignages</span>
          <span className={`nav-link ${currentPage === 'contact' ? 'active' : ''}`} onClick={() => navigate('contact')}>Contact</span>
        </nav>
      </div>
    </header>
  );
};

// ============================================
// HOME PAGE
// ============================================
const HomePage = ({ navigate }) => {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, var(--cream) 0%, var(--stone) 100%)' }}>
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full" style={{ background: 'var(--navy)', filter: 'blur(100px)' }} />
          <div className="absolute bottom-20 left-20 w-64 h-64 rounded-full" style={{ background: 'var(--gold)', filter: 'blur(80px)' }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-20 relative z-10 w-full">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            {/* Text Content - prend 3 colonnes sur 5 */}
            <div className="order-2 lg:order-1 lg:col-span-3">
              <div className="gold-line mb-8" />
              <p className="text-sm tracking-widest uppercase mb-4 animate-fade-in delay-100" style={{ color: 'var(--gold)' }}>
                Cabinet d'avocat • Marseille
              </p>
              <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-light leading-tight mb-6 animate-fade-in delay-200" style={{ color: 'var(--navy)' }}>
                Maître<br />
                <span className="font-medium italic">Giulia Petit</span>
              </h2>
              <p className="text-lg leading-relaxed mb-8 max-w-xl animate-fade-in delay-300" style={{ color: 'var(--text-light)' }}>
                Avocate au Barreau de Marseille, je vous accompagne avec rigueur et bienveillance 
                dans la défense de vos droits. Droit de la famille, droit pénal et conseil juridique — 
                votre défense, ma priorité.
              </p>
              <div className="flex flex-wrap gap-4 animate-fade-in delay-400">
                <button className="btn-primary" onClick={() => navigate('contact')}>
                  Prendre rendez-vous
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
                <button className="btn-outline" onClick={() => navigate('domaines')}>
                  Mes expertises
                </button>
              </div>
              {/* Contact rapide */}
              <div className="mt-10 flex flex-wrap items-center gap-6 animate-fade-in delay-500">
                <a href="tel:0629644013" className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center transition-all group-hover:scale-110" style={{ background: 'var(--stone)' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <span className="text-sm font-medium" style={{ color: 'var(--navy)' }}>06 29 64 40 13</span>
                </a>
                <span className="hidden sm:block w-px h-6" style={{ background: '#ddd' }} />
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'var(--stone)' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <span className="text-sm" style={{ color: 'var(--text-light)' }}>Marseille 1er</span>
                </div>
              </div>
            </div>

            {/* Photo - prend 2 colonnes sur 5 */}
            <div className="order-1 lg:order-2 lg:col-span-2 relative animate-scale-in delay-200">
              <div className="relative max-w-sm mx-auto lg:max-w-none">
                {/* Decorative frame */}
                <div className="absolute -top-3 -right-3 w-full h-full border-2 opacity-30" style={{ borderColor: 'var(--gold)' }} />
                {/* Photo */}
                <div className="relative overflow-hidden shadow-2xl">
                  <img 
                    src={PHOTO_PORTRAIT} 
                    alt="Maître Giulia Petit - Avocate à Marseille"
                    className="w-full h-auto object-cover"
                    style={{ aspectRatio: '3/4', objectPosition: 'center top' }}
                  />
                  {/* Overlay gradient */}
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-xs tracking-widest uppercase">Barreau de Marseille • Depuis 2021</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator - hidden on mobile to avoid overlap */}
        <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 animate-bounce z-10">
          <span className="text-xs tracking-widest uppercase" style={{ color: 'var(--text-light)' }}>Découvrir</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 lg:py-32" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <p className="text-sm tracking-widest uppercase mb-4" style={{ color: 'var(--gold)' }}>Mes engagements</p>
            <h2 className="font-serif text-4xl lg:text-5xl font-light" style={{ color: 'var(--navy)' }}>
              Une approche fondée sur<br />
              <span className="font-medium italic">l'écoute et la rigueur</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                ),
                title: "Rigueur",
                text: "Une analyse approfondie de chaque situation pour construire des stratégies juridiques solides et adaptées à votre cas."
              },
              {
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                ),
                title: "Bienveillance",
                text: "Une écoute attentive et humaine pour vous accompagner avec empathie dans les moments difficiles."
              },
              {
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                ),
                title: "Réactivité",
                text: "Une disponibilité et une réactivité pour vous guider à chaque étape avec clarté et efficacité."
              }
            ].map((item, i) => (
              <div key={i} className="text-center p-8 group">
                <div 
                  className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border rounded-full transition-all duration-300 group-hover:bg-stone-50" 
                  style={{ borderColor: '#e5e4e2' }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--gold)'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = '#e5e4e2'}
                >
                  {item.icon}
                </div>
                <h3 className="font-serif text-2xl mb-4" style={{ color: 'var(--navy)' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-light)' }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Preview */}
      <section className="py-24 lg:py-32" style={{ background: 'var(--stone)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="gold-line mb-8" />
              <h2 className="font-serif text-3xl lg:text-4xl font-light mb-6" style={{ color: 'var(--navy)' }}>
                Des solutions juridiques<br />
                <span className="font-medium italic">sur mesure</span>
              </h2>
              <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--text-light)' }}>
                Que vous soyez confronté à un divorce, un litige familial ou que vous ayez besoin 
                d'une défense pénale, je vous guide à chaque étape avec clarté, réactivité et efficacité.
              </p>
              <p className="leading-relaxed mb-8" style={{ color: 'var(--text-light)' }}>
                Installée à Marseille, je plaide devant toutes les juridictions et propose 
                un accompagnement personnalisé aux particuliers comme aux professionnels.
              </p>
              <button className="btn-outline" onClick={() => navigate('domaines')}>
                Découvrir mes domaines d'intervention
              </button>
            </div>
            <div className="relative">
              <div className="absolute -bottom-4 -left-4 w-full h-full border-2 opacity-30" style={{ borderColor: 'var(--gold)' }} />
              <img 
                src={PHOTO_BUREAU}
                alt="Maître Giulia Petit à son bureau"
                className="relative w-full h-auto shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-sm tracking-widest uppercase mb-4" style={{ color: 'var(--gold)' }}>Témoignages</p>
            <h2 className="font-serif text-3xl lg:text-4xl font-light" style={{ color: 'var(--navy)' }}>
              Ce que disent<br />
              <span className="font-medium italic">mes clients</span>
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="testimonial-card text-center">
              <p className="font-serif text-xl lg:text-2xl italic leading-relaxed mb-8 pt-8" style={{ color: 'var(--text)' }}>
                "Excellente avocate pénaliste ! Maître Petit a fait preuve d'une rigueur, 
                d'une écoute et d'une efficacité remarquable. Je recommande les yeux fermés."
              </p>
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="var(--gold)">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                ))}
              </div>
              <p className="text-sm tracking-widest uppercase" style={{ color: 'var(--text-light)' }}>Georges A.</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button className="btn-outline" onClick={() => navigate('temoignages')}>
              Voir tous les témoignages
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 relative" style={{ background: 'var(--navy)' }}>
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center relative z-10">
          <div className="w-16 h-px mx-auto mb-8" style={{ background: 'var(--gold)' }} />
          <h2 className="font-serif text-3xl lg:text-5xl font-light text-white mb-6">
            Vous avez besoin d'un<br />
            <span className="font-medium italic" style={{ color: 'var(--gold-light)' }}>accompagnement juridique ?</span>
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
            Prenez contact pour un premier échange confidentiel. 
            Nous étudierons ensemble votre situation et les solutions adaptées à vos besoins.
          </p>
          <button className="btn-primary" onClick={() => navigate('contact')} style={{ background: 'var(--gold)', color: 'var(--navy)' }}>
            Contactez-moi
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </section>
    </>
  );
};

// ============================================
// CABINET PAGE (À propos)
// ============================================
const CabinetPage = ({ navigate }) => {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28" style={{ background: 'linear-gradient(135deg, var(--cream) 0%, var(--stone) 100%)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <div className="gold-line mb-8" />
            <p className="text-sm tracking-widest uppercase mb-4 animate-fade-in" style={{ color: 'var(--gold)' }}>Le Cabinet</p>
            <h1 className="font-serif text-4xl lg:text-6xl font-light mb-6 animate-fade-in delay-100" style={{ color: 'var(--navy)' }}>
              Votre avocate<br />
              <span className="font-medium italic">à votre écoute</span>
            </h1>
            <p className="text-xl leading-relaxed animate-fade-in delay-200" style={{ color: 'var(--text-light)' }}>
              Avocate au Barreau de Marseille depuis 2021, je mets mon expertise et mon écoute 
              au service de particuliers et de professionnels.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 opacity-30" style={{ borderColor: 'var(--gold)' }} />
              <img 
                src={PHOTO_PORTRAIT}
                alt="Maître Giulia Petit"
                className="relative w-full h-auto shadow-xl"
              />
            </div>

            {/* Text */}
            <div>
              <h2 className="font-serif text-3xl lg:text-4xl font-light mb-8" style={{ color: 'var(--navy)' }}>
                Maître Giulia Petit<br />
                <span className="font-medium italic">Avocate à Marseille</span>
              </h2>
              
              <div className="space-y-6" style={{ color: 'var(--text)' }}>
                <p className="text-lg leading-relaxed">
                  Inscrite au Barreau de Marseille depuis le 18 janvier 2021, j'ai fondé mon propre cabinet 
                  après avoir développé une solide expérience en droit pénal et en droit de la famille.
                </p>
                <p className="leading-relaxed">
                  Spécialisée en droit de la famille, droit pénal et conseil juridique, je mets mon expertise 
                  et mon écoute au service de mes clients. Que vous soyez confronté à un divorce, un litige 
                  ou que vous ayez besoin d'une défense pénale, je vous guide à chaque étape avec clarté, 
                  réactivité et efficacité.
                </p>
                <p className="leading-relaxed">
                  Installée à Marseille, je plaide devant toutes les juridictions et propose des solutions 
                  juridiques sur mesure. Mon engagement : vous accompagner avec rigueur et bienveillance 
                  dans la défense de vos droits.
                </p>
                <p className="leading-relaxed font-medium" style={{ color: 'var(--navy)' }}>
                  Votre défense, ma priorité.
                </p>
              </div>

              <div className="mt-10 pt-10 border-t" style={{ borderColor: '#e5e4e2' }}>
                <p className="text-sm tracking-widest uppercase mb-4" style={{ color: 'var(--gold)' }}>
                  Mes valeurs
                </p>
                <div className="flex flex-wrap gap-3">
                  {['Écoute', 'Rigueur', 'Bienveillance', 'Réactivité', 'Clarté'].map((val, i) => (
                    <span key={i} className="px-4 py-2 text-sm" style={{ background: 'var(--stone)', color: 'var(--navy)' }}>
                      {val}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 lg:py-28" style={{ background: 'var(--stone)' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <svg className="w-12 h-12 mx-auto mb-8 opacity-30" viewBox="0 0 24 24" fill="var(--gold)">
            <path d="M11 7H6a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h5V7zm2 11h5a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-5v11z"/>
          </svg>
          <blockquote className="font-serif text-2xl lg:text-3xl font-light italic leading-relaxed mb-8" style={{ color: 'var(--navy)' }}>
            "Chaque client mérite une écoute attentive et une défense engagée. 
            C'est cette conviction qui guide ma pratique quotidienne du droit."
          </blockquote>
          <p className="text-sm tracking-widest uppercase" style={{ color: 'var(--gold)' }}>
            — Maître Giulia Petit
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <button className="btn-primary" onClick={() => navigate('contact')}>
            Prendre rendez-vous
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </section>
    </>
  );
};

// ============================================
// DOMAINES D'INTERVENTION PAGE
// ============================================
const DomainesPage = ({ navigate }) => {
  const domaines = [
    {
      title: "Droit pénal",
      description: "Défense des victimes et des personnes mises en cause devant les juridictions pénales. Assistance à chaque étape de la procédure, de la garde à vue jusqu'au procès.",
      items: ["Assistance en garde à vue", "Défense devant le tribunal de police", "Défense devant le tribunal correctionnel", "Représentation en cour d'assises", "Constitution de partie civile"]
    },
    {
      title: "Droit de la famille",
      description: "Accompagnement dans les moments importants de votre vie familiale. Une approche humaine et à l'écoute pour défendre vos intérêts et ceux de vos enfants.",
      items: ["Divorce amiable et contentieux", "Séparation et rupture de PACS", "Autorité parentale et droit de garde", "Pension alimentaire et prestation compensatoire", "Protection des enfants"]
    },
    {
      title: "Droit des enfants",
      description: "Protection des droits et des intérêts des mineurs. Une attention particulière portée aux situations familiales complexes impliquant des enfants.",
      items: ["Assistance éducative", "Droit de visite et d'hébergement", "Audition de l'enfant", "Protection de l'enfance", "Médiation familiale"]
    },
    {
      title: "Droit routier",
      description: "Défense de vos droits face aux infractions au code de la route. Contestation des sanctions et accompagnement pour préserver votre permis de conduire.",
      items: ["Contestation de contraventions", "Retrait et annulation de permis", "Conduite sous l'emprise d'alcool ou stupéfiants", "Excès de vitesse", "Récupération de points"]
    },
    {
      title: "Indemnisation des victimes",
      description: "Accompagnement des victimes d'infractions pénales ou d'accidents pour obtenir la juste réparation de leurs préjudices corporels et moraux.",
      items: ["Accidents de la circulation", "Agressions et violences", "Accidents médicaux", "Évaluation des préjudices", "Négociation avec les assurances"]
    }
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28" style={{ background: 'linear-gradient(135deg, var(--cream) 0%, var(--stone) 100%)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <div className="gold-line mb-8" />
            <p className="text-sm tracking-widest uppercase mb-4 animate-fade-in" style={{ color: 'var(--gold)' }}>Expertises</p>
            <h1 className="font-serif text-4xl lg:text-6xl font-light mb-6 animate-fade-in delay-100" style={{ color: 'var(--navy)' }}>
              Domaines<br />
              <span className="font-medium italic">d'intervention</span>
            </h1>
            <p className="text-xl leading-relaxed animate-fade-in delay-200" style={{ color: 'var(--text-light)' }}>
              J'interviens dans différents domaines du droit pour répondre 
              à vos besoins avec expertise et rigueur.
            </p>
          </div>
        </div>
      </section>

      {/* Domaines Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {domaines.map((domaine, i) => (
              <div key={i} className={`expertise-card ${i === 4 ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''}`}>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full flex-shrink-0" style={{ background: 'var(--stone)' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl mb-3" style={{ color: 'var(--navy)' }}>{domaine.title}</h3>
                    <p className="leading-relaxed mb-4" style={{ color: 'var(--text-light)' }}>{domaine.description}</p>
                  </div>
                </div>
                <ul className="space-y-2 pl-14">
                  {domaine.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm" style={{ color: 'var(--text)' }}>
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'var(--gold)' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note déontologique */}
      <section className="py-16" style={{ background: 'var(--stone)' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="flex items-start gap-4 p-6" style={{ background: 'white', borderLeft: '3px solid var(--gold)' }}>
            <svg className="w-6 h-6 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 16v-4M12 8h.01"/>
            </svg>
            <div>
              <p className="font-medium mb-2" style={{ color: 'var(--navy)' }}>Note importante</p>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-light)' }}>
                Conformément aux règles déontologiques de la profession d'avocat, je ne peux garantir 
                l'issue d'une procédure. Chaque situation est unique et fait l'objet d'une analyse approfondie 
                permettant d'évaluer les chances de succès et de vous conseiller au mieux de vos intérêts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28" style={{ background: 'var(--navy)' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-light text-white mb-6">
            Vous avez une question juridique ?
          </h2>
          <p className="text-white/70 mb-10 max-w-2xl mx-auto">
            N'hésitez pas à me contacter pour exposer votre situation. 
            Un premier échange permettra d'évaluer vos besoins et de vous orienter vers la solution la plus adaptée.
          </p>
          <button className="btn-primary" onClick={() => navigate('contact')} style={{ background: 'var(--gold)', color: 'var(--navy)' }}>
            Prendre rendez-vous
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </section>
    </>
  );
};

// ============================================
// TÉMOIGNAGES PAGE
// ============================================
const TemoignagesPage = ({ navigate }) => {
  const temoignages = [
    {
      text: "J'ai eu recours aux services de Maître Petit pour une affaire délicate en droit pénal, et je ne peux que la recommander. Très professionnelle, à l'écoute, réactive et humaine elle a su me rassurer et m'accompagner à chaque étape avec beaucoup de clarté et de rigueur. Un grand merci pour votre expertise et votre soutien !",
      author: "Constance G.",
      rating: 5
    },
    {
      text: "J'ai été accompagné par Maître Petit dans une affaire plus que délicate et je tiens à souligner son professionnalisme, sa rigueur et surtout son écoute. Elle a su me rassurer et me conseiller avec clarté. Son implication, sa disponibilité font toute la différence. Je recommande sans la moindre hésitation aucune.",
      author: "Hedi H.",
      rating: 5
    },
    {
      text: "Excellente avocate pénaliste ! Maître Petit a fait preuve d'une rigueur, d'une écoute et d'une efficacité remarquable. Je recommande les yeux fermés.",
      author: "Georges A.",
      rating: 5
    }
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28" style={{ background: 'linear-gradient(135deg, var(--cream) 0%, var(--stone) 100%)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <div className="gold-line mb-8" />
            <p className="text-sm tracking-widest uppercase mb-4 animate-fade-in" style={{ color: 'var(--gold)' }}>Avis clients</p>
            <h1 className="font-serif text-4xl lg:text-6xl font-light mb-6 animate-fade-in delay-100" style={{ color: 'var(--navy)' }}>
              Vos<br />
              <span className="font-medium italic">témoignages</span>
            </h1>
            <p className="text-xl leading-relaxed animate-fade-in delay-200" style={{ color: 'var(--text-light)' }}>
              La confiance de mes clients est ma plus belle récompense. 
              Découvrez leurs retours d'expérience.
            </p>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="space-y-8">
            {temoignages.map((t, i) => (
              <div key={i} className="testimonial-card">
                <div className="flex items-center gap-1 mb-6 pt-6">
                  {[...Array(t.rating)].map((_, j) => (
                    <svg key={j} width="20" height="20" viewBox="0 0 24 24" fill="var(--gold)">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                  ))}
                </div>
                <p className="font-serif text-xl lg:text-2xl italic leading-relaxed mb-8" style={{ color: 'var(--text)' }}>
                  "{t.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'var(--stone)' }}>
                    <span className="font-serif text-lg" style={{ color: 'var(--navy)' }}>{t.author.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-medium" style={{ color: 'var(--navy)' }}>{t.author}</p>
                    <p className="text-sm" style={{ color: 'var(--text-light)' }}>Client</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28" style={{ background: 'var(--navy)' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-light text-white mb-6">
            Vous aussi, faites-moi confiance
          </h2>
          <p className="text-white/70 mb-10 max-w-2xl mx-auto">
            Contactez-moi pour un premier échange et découvrez comment je peux vous accompagner.
          </p>
          <button className="btn-primary" onClick={() => navigate('contact')} style={{ background: 'var(--gold)', color: 'var(--navy)' }}>
            Prendre rendez-vous
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </section>
    </>
  );
};

// ============================================
// CONTACT PAGE
// ============================================
const ContactPage = () => {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28" style={{ background: 'linear-gradient(135deg, var(--cream) 0%, var(--stone) 100%)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <div className="gold-line mb-8" />
            <p className="text-sm tracking-widest uppercase mb-4 animate-fade-in" style={{ color: 'var(--gold)' }}>Contact</p>
            <h1 className="font-serif text-4xl lg:text-6xl font-light mb-6 animate-fade-in delay-100" style={{ color: 'var(--navy)' }}>
              Prenez<br />
              <span className="font-medium italic">contact</span>
            </h1>
            <p className="text-xl leading-relaxed animate-fade-in delay-200" style={{ color: 'var(--text-light)' }}>
              Pour toute demande d'information ou prise de rendez-vous, 
              n'hésitez pas à me contacter.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="font-serif text-3xl mb-8" style={{ color: 'var(--navy)' }}>
                Coordonnées<br />
                <span className="font-medium italic">du cabinet</span>
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full" style={{ background: 'var(--stone)' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium mb-1" style={{ color: 'var(--navy)' }}>Adresse</p>
                    <p style={{ color: 'var(--text-light)' }}>
                      Cabinet Giulia Petit<br />
                      66 Rue Grignan<br />
                      13001 Marseille
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full" style={{ background: 'var(--stone)' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium mb-1" style={{ color: 'var(--navy)' }}>Téléphone</p>
                    <p style={{ color: 'var(--text-light)' }}>
                      <a href="tel:0629644013" className="hover:underline">06 29 64 40 13</a>
                    </p>
                  </div>
                </div>


                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full" style={{ background: 'var(--stone)' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium mb-1" style={{ color: 'var(--navy)' }}>Horaires</p>
                    <p style={{ color: 'var(--text-light)' }}>
                      Lundi - Vendredi : 9h00 - 19h00<br />
                      Samedi - Dimanche : Fermé
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full" style={{ background: 'var(--stone)' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="10"/>
                      <line x1="2" y1="12" x2="22" y2="12"/>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium mb-1" style={{ color: 'var(--navy)' }}>Site web</p>
                    <p style={{ color: 'var(--text-light)' }}>www.giuliapetitavocat.fr</p>
                  </div>
                </div>
              </div>

              {/* Info box */}
              <div className="mt-12 p-6" style={{ background: 'var(--stone)', borderLeft: '3px solid var(--gold)' }}>
                <p className="font-medium mb-2" style={{ color: 'var(--navy)' }}>Premier rendez-vous</p>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-light)' }}>
                  Lors de notre premier échange, nous analyserons ensemble votre situation 
                  afin d'identifier vos besoins et de vous proposer un accompagnement adapté. 
                  Tous les échanges sont couverts par le secret professionnel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// ============================================
// FOOTER
// ============================================
const Footer = ({ navigate }) => {
  return (
    <footer style={{ background: 'var(--navy)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl text-white mb-4">Giulia Petit</h3>
            <p className="text-sm text-white/60 leading-relaxed">
              Avocate au Barreau de Marseille depuis 2021<br />
              Droit pénal • Droit de la famille • Droit routier
            </p>
            <p className="text-sm text-white/40 mt-4">
              www.giuliapetitavocat.fr
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-sm tracking-widest uppercase mb-4" style={{ color: 'var(--gold)' }}>Navigation</p>
            <nav className="space-y-3">
              <p className="text-white/70 hover:text-white cursor-pointer transition-colors text-sm" onClick={() => navigate('accueil')}>Accueil</p>
              <p className="text-white/70 hover:text-white cursor-pointer transition-colors text-sm" onClick={() => navigate('cabinet')}>Le Cabinet</p>
              <p className="text-white/70 hover:text-white cursor-pointer transition-colors text-sm" onClick={() => navigate('domaines')}>Domaines d'intervention</p>
              <p className="text-white/70 hover:text-white cursor-pointer transition-colors text-sm" onClick={() => navigate('temoignages')}>Témoignages</p>
              <p className="text-white/70 hover:text-white cursor-pointer transition-colors text-sm" onClick={() => navigate('contact')}>Contact</p>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm tracking-widest uppercase mb-4" style={{ color: 'var(--gold)' }}>Contact</p>
            <div className="space-y-3 text-sm text-white/70">
              <p>66 Rue Grignan<br />13001 Marseille</p>
              <p><a href="tel:0629644013" className="hover:text-white transition-colors">06 29 64 40 13</a></p>
              <p></p>
              <p>Lun-Ven : 9h-19h</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Cabinet Giulia Petit — Tous droits réservés
          </p>
          <p className="text-xs text-white/40">
            Avocat au Barreau de Marseille
          </p>
        </div>
      </div>
    </footer>
  );
};

export default App;
