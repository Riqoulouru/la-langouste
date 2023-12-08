// pages/index.js
import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t, i18n } = useTranslation('translation');

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div>
      <h1>{t('welcome')}</h1>
      <p>{t('hello')}</p>

      {/* Changer la langue avec des boutons */}
      <div>
        <button onClick={() => changeLanguage('fr')}>Français</button>
        <button onClick={() => changeLanguage('en')}>English</button>
      </div>

      <div>
        <Link href="/games/justeprix/1">
          {t('justePrix')}
        </Link>
      </div>

      {/* Ajoutez l'icône de la langouste dans la barre du navigateur (favicon) */}
      <link rel="icon" type="image/svg+xml" href="../lobster-svgrepo-com.svg" />
    </div>
  );
};

export default HomePage;
