
import '/src/styles/explanations/main.css';
import '/src/styles/main.css';

// pages/_app.js
import React from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '/i18n.js'; // Assurez-vous d'ajuster le chemin en fonction de votre structure de dossier


function MyApp({ Component, pageProps }) {
  return (
    <I18nextProvider i18n={i18n}>
      <Component {...pageProps} />
    </I18nextProvider>
  );
}

export default MyApp;
