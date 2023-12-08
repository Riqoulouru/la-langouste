
import IcebergComponent from '../components/IcebergComponent/IcebergComponent'; // Assurez-vous que le chemin est correct

import { useTranslation } from 'react-i18next';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Konami from 'react-konami-code';
import styles from "@/styles/Home.module.scss"

const HomePage = () => {
    const { t, i18n } = useTranslation('translation');

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    const [easterEggActivated, setEasterEggActivated] = useState(false);

    const easterEgg = () => {
        alert('Hey, you typed the Konami Code!');
        setEasterEggActivated(true);
    }

    useEffect(() => {
        // Reset l'état d'activation après un certain temps (par exemple, 5 secondes)
        const resetTimeout = setTimeout(() => {
            setEasterEggActivated(false);
        }, 5000);

        return () => clearTimeout(resetTimeout);
    }, [easterEggActivated]);

    return (
        <div>
      <IcebergComponent />
            <h1>{t('welcome')}</h1>
            <p>{t('hello')}</p>

            {/* Changer la langue avec des boutons */}
            <div className={styles.test}>
                <button onClick={() => changeLanguage('fr')}>Français</button>
                <button onClick={() => changeLanguage('en')}>English</button>
                <br/>
                <Link href={"/games/Game"}>GO</Link>
                {!easterEggActivated && <Konami action={easterEgg} />}
            </div>
        </div>

    );
}

export default HomePage;

