export default function Page() {
  return (
    <main className="container">
      <h1>Bienvenue chez Selenora</h1>
      <p>Explorez l'élégance de la maroquinerie artisanale française.</p>

      <button>Commander</button>
      <button className="secondary">Découvrir</button>

      <form>
        <input type="text" placeholder="Nom" />
        <input type="email" placeholder="Email" />
        <button type="submit">Envoyer</button>
      </form>
    </main>
  );
}
