// pages/ecopage.js
import React from 'react';
import styles from '../../styles/EcoPage.module.css'; // Importe le fichier de styles CSS

const EcoPage = () => {
  return (
    <div className={styles.container}>
      <h1>Éco-Conception de Notre Projet</h1>
      <p>
        Bienvenue sur la page dédiée à l'éco-conception de notre projet. Nous sommes fiers de partager
        des informations sur la durabilité de notre site web.
      </p>
      <section className={styles.infoSection}>
        <h2>Informations Éco-Conception</h2>
        <p>
          La taille totale de cette page est de 171 Ko, avec seulement 8 protocoles HTTPS utilisés. En termes
          d'émissions de CO2, seulement 0,04 g de CO2 sont produits par visite de cette page. Sur une année
          avec 1000 visites par mois, cela équivaut à produire autant de CO2 que nécessaire pour faire
          bouillir 72 tasses de thé, consommer 1 kWh d'électricité, et émettre autant de carbone qu'un
          seul arbre absorbe en un an.
        </p>
        <p>
          Sources :
          <a href="https://yellowlab.tools/result/grba2chcdf" target="_blank" rel="noopener noreferrer">
            yellowlab.tools
          </a>{' '}
          et{' '}
          <a href="https://www.websitecarbon.com/website/lalangousteclimatique-info-fr/" target="_blank" rel="noopener noreferrer">
            websitecarbon.com
          </a>.
        </p>
        <p>
          En résumé, notre site web est conçu de manière respectueuse de l'environnement, et nous sommes
          engagés à minimiser notre impact écologique.
        </p>
      </section>
    </div>
  );
};

export default EcoPage;
