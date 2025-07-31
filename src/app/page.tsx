"use client";

import { useEffect, useState, useRef } from "react";

export default function Page() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const heroLogoRef = useRef<HTMLDivElement>(null);
  const logoImgRef = useRef<HTMLImageElement>(null);
  const logoPRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const maxScroll = windowHeight * 1.0;

      // Calcul du pourcentage de scroll (0 à 1)
      const scrollProgress = Math.min(scrollPosition / maxScroll, 1);

      // Animation fluide du logo
      if (heroLogoRef.current && logoImgRef.current && logoPRef.current) {
        // Position : de centre écran à centre navbar
        const startTopPercent = 50; // 50% du haut (centre écran)
        const endTopPx = 35; // 35px du haut (dans la navbar)
        const startLeft = 50; // 50% de la gauche (centre écran)
        const endLeft = 50; // 50% de la gauche (centre navbar)

        // Convertir la position finale en pourcentage pour cohérence
        const endTopPercent = (endTopPx / windowHeight) * 100;

        // Taille : de 400px à 80px
        const startSize = 400;
        const endSize = 80;

        // Opacité du texte : de 1 à 0
        const startOpacity = 1;
        const endOpacity = 0;

        // Calculs interpolés
        const currentTopPercent =
          startTopPercent + (endTopPercent - startTopPercent) * scrollProgress;
        const currentLeft = startLeft + (endLeft - startLeft) * scrollProgress;
        const currentSize = startSize + (endSize - startSize) * scrollProgress;
        const currentOpacity =
          startOpacity + (endOpacity - startOpacity) * scrollProgress;

        // Application des styles
        if (scrollProgress < 1) {
          // Animation en cours - logo au-dessus de la navbar
          heroLogoRef.current.style.position = "fixed";
          heroLogoRef.current.style.top = `${currentTopPercent}%`;
          heroLogoRef.current.style.left = `${currentLeft}%`;
          heroLogoRef.current.style.transform = "translate(-50%, -50%)";
          heroLogoRef.current.style.zIndex = "100"; // Au-dessus de la navbar
        } else {
          // Position finale : intégré dans la navbar
          heroLogoRef.current.style.position = "fixed";
          heroLogoRef.current.style.top = "35px";
          heroLogoRef.current.style.left = "50%";
          heroLogoRef.current.style.transform = "translate(-50%, -50%)";
          heroLogoRef.current.style.zIndex = "95"; // Dans la navbar mais visible
        }

        // Taille du logo
        logoImgRef.current.style.width = `${currentSize}px`;

        // Opacité du texte
        logoPRef.current.style.opacity = currentOpacity.toString();
        logoPRef.current.style.transform = `translateY(${
          scrollProgress * 20
        }px)`;
      }

      // Navbar apparaît plus tôt pour accueillir le logo
      if (scrollPosition > windowHeight * 0.2) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }

      // Contenu apparaît après que le logo soit installé
      if (scrollPosition > windowHeight * 1.1) {
        setShowContent(true);
      } else {
        setShowContent(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={showNavbar ? "visible" : ""}>
        <nav>
          {/* Espace pour le logo qui arrive */}

          <ul className="main-menu">
            <li>
              <a href="#">Sacs</a>
            </li>
            <li>
              <a href="#">Portefeuilles</a>
            </li>
            <li>
              <a href="#">Accessoires</a>
            </li>
            <li>
              <a href="#">Collections</a>
            </li>
          </ul>

          <div className="nav-actions">
            <button className="search-btn" aria-label="Rechercher">
              🔍
            </button>
            <button className="account-btn" aria-label="Compte">
              👤
            </button>
            <button className="cart-btn" aria-label="Panier">
              🛒
            </button>
          </div>

          <button className="mobile-menu-btn" aria-label="Menu">
            ☰
          </button>
        </nav>
      </header>

      {/* Logo Hero qui se transforme et s'installe dans la navbar */}
      <div ref={heroLogoRef} className="hero-logo">
        <img
          ref={logoImgRef}
          src="/selenora.png"
          alt="Selenora - Maroquinerie artisanale française"
        />
        <p ref={logoPRef}>Maroquinerie artisanale française</p>
      </div>

      {/* Espaceur pour permettre le scroll */}
      <div className="scroll-spacer">
        <div className="scroll-hint">↓ Faites défiler pour découvrir ↓</div>
      </div>

      {/* Contenu principal */}
      <main className={showContent ? "visible" : ""}>
        <section className="hero">
          <h1>L'élégance française à portée de main</h1>
          <p>
            Découvrez notre collection de sacs et accessoires en cuir,
            entièrement fabriqués à la main par nos artisans français.
          </p>

          <div className="hero-buttons">
            <a href="#" className="btn btn-primary">
              Découvrir la collection
            </a>
            <a href="#" className="btn btn-secondary">
              Notre histoire
            </a>
          </div>
        </section>

        <section className="newsletter">
          <h2>Restez informé</h2>
          <p>Soyez les premiers à découvrir nos nouvelles créations</p>

          <form className="newsletter-form">
            <input type="email" placeholder="Votre email" />
            <button type="submit">S'inscrire</button>
          </form>
        </section>
      </main>
    </>
  );
}
