"use client";

export default function Page() {
  return (
    <>
      <header>
        <nav>
          <a href="/" className="logo">
            Selenora
          </a>

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

      <main>
        <div className="logo-container">
          <img
            src="/selenora.png"
            alt="Selenora - Maroquinerie artisanale française"
          />
          <p>Maroquinerie artisanale française</p>
        </div>

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
