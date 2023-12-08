
import IcebergComponent from '../components/IcebergComponent/IcebergComponent'; // Assurez-vous que le chemin est correct
import { useTranslation } from 'react-i18next';
import React, { useState, useEffect } from 'react';
import EasterEggModal from '../components/EasterEggModal'; // Assure-toi d'ajuster le chemin d'accès
import Link from 'next/link';
import Konami from 'react-konami-code';
import styles from "@/styles/Home.module.scss"
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";

const HomePage = () => {
    const { t, i18n } = useTranslation('translation');

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };


    const [easterEggActivated, setEasterEggActivated] = useState(false);
    const [helpDisplayed, setHelpDisplayed] = useState(false);
    const [sideBarWidth, setSideBarWidth] = useState('0');

    const easterEgg = () => {
        alert(t('konami'));
        setEasterEggActivated(true);
    }

    const closeModal = () => {
        setEasterEggActivated(false);
    }

    useEffect(() => {
        // Reset l'état d'activation après un certain temps (par exemple, 5 secondes)
        const resetTimeout = setTimeout(() => {
            setEasterEggActivated(false);
        }, 5000);

        return () => clearTimeout(resetTimeout);
    }, [easterEggActivated]);

    useEffect(() => {
        // Reset l'état d'activation après un certain temps (par exemple, 5 secondes)
        const resetTimeout = setTimeout(() => {
            setEasterEggActivated(false);
        }, 5000);

        return () => clearTimeout(resetTimeout);
    }, [easterEggActivated]);

    const handleCloseModal = () => {
        setHelpDisplayed(false);
    }

    return (
        <div className={"main-content"}>
            <div className={"side-bar"} style={{ width: sideBarWidth }}></div>

            <div>

                <IcebergComponent />

                <div className={"language-container"}>
                    <button className={"language-button"} onClick={() => changeLanguage('fr')}>Français 🇫🇷</button>
                    <button className={"language-button"} onClick={() => changeLanguage('en')}>English 🇬🇧/🇺🇸</button>
                    <button onClick={() => changeLanguage('ch')}>中文  🇨🇳</button>
                    <button className={"help-button"} onClick={() => setHelpDisplayed(true)}> ? </button>
                    {easterEggActivated && <EasterEggModal isOpen={easterEggActivated} onRequestClose={closeModal} />}
                    {!easterEggActivated && <Konami action={easterEgg} />}
                </div>

                <Dialog
                    open={helpDisplayed}
                    onClose={handleCloseModal}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Quelques info à pour jouer !"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            sususususus
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <button className={"language-button"} onClick={() => setHelpDisplayed(false)}>Fermer</button>
                    </DialogActions>
                </Dialog>

            </div>
        </div>

    );
}

export default HomePage;

