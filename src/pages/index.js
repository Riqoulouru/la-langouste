// pages/index.js

import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1>INDEX JS</h1>
      {/* Votre contenu de la page ici */}
      
      {/* Exemple de lien vers une autre page */}
      <Link href="/games/justeprix">
        JUSTE PRIX
      </Link>

      {/* Ajoutez l'icône de la langouste dans la barre du navigateur (favicon) */}
      <link rel="icon" type="image/svg+xml" href="../lobster-svgrepo-com.svg" />
    </div>
  );
};

export default HomePage;
