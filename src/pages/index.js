
import IcebergComponent from '../components/IcebergComponent/IcebergComponent'; // Assurez-vous que le chemin est correct
import { useTranslation } from 'react-i18next';
import React, { useState, useEffect } from 'react';
import EasterEggModal from '../components/EasterEggModal';
import SideBar from '../components/SideBar';
import Konami from 'react-konami-code';
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import jsonGame from "@/data/allGame.json";



const HomePage = () => {
    const { t, i18n } = useTranslation('translation');

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };


    const [easterEggActivated, setEasterEggActivated] = useState(false);
    const [helpDisplayed, setHelpDisplayed] = useState(false);
    const [sideBarWidth, setSideBarWidth] = useState('0');
    const [temperature, setTemperature] = useState(0);
    const [selectedLevel, setSelectedLevel] = useState(0);
    const [currentGameIndex, setCurrentGameIndex] = useState(1);
    const [gamesRemaining, setGamesRemaining] = useState(0);
    const [gameFinished, setGameFinished] = useState(false);
    const [timeRemaining, setTimeRemaining] = useState(20); // Temps initial en secondes
    const [timerStarted, setTimerStarted] = useState(false);

    const easterEgg = () => {
        alert(t('konami'));
        setEasterEggActivated(true);
    }

    const handleIncrease = () => {
        setTemperature((prevTemperature) => prevTemperature + 1);
    };

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

    const handleLevelChange = (level) => {
        console.log(level)
        setTimerStarted(true);
        setSelectedLevel(level);
        setCurrentGameIndex(1);
        setGameFinished(false);

        // Calcul du nombre total de jeux pour le niveau sélectionné
        const totalGames = jsonGame.find((game) => game.level === level)?.games;

        setGamesRemaining(totalGames ? Object.keys(totalGames).length : 0);
    };

    const handleGameFinish = (isCorrectAnswer) => {
        setGamesRemaining((prevRemaining) => prevRemaining - 1);

        if (isCorrectAnswer) {
            setTimeRemaining((prevTime) => prevTime + 10); // Ajouter 10 secondes pour une bonne réponse
        } else {
            setTimeRemaining((prevTime) => Math.max(prevTime - 10, 0)); // Retirer 5 secondes pour une mauvaise réponse (minimum 0)
        }

        if (gamesRemaining === 1) {
            setGameFinished(true);
            setTimerStarted(false);
        } else {
            setCurrentGameIndex((prevIndex) => prevIndex + 1);
        }
    };

    useEffect(() => {

        if (timerStarted && timeRemaining > 0) {
            const countdown = setInterval(() => {
                setTimeRemaining((prevTime) => prevTime - 1);
            }, 1000);

            return () => clearInterval(countdown);
        } else if (timeRemaining <= 0) {
            //incrémenter temperature
            //rmettre à 0 le temps
            handleIncrease();
            setTimeRemaining(20)
        }
    }, [timeRemaining, timerStarted]);

    const filteredGames = jsonGame.filter((game) => game.level === selectedLevel);
    const currentGame = filteredGames[0]?.games[currentGameIndex];

    return (
        <div className={"main-content"}>
            <SideBar gameFinished={gameFinished} currentGame={currentGameIndex} handleGameFinish={handleGameFinish} selectedLevel={selectedLevel} sideBarWidth={sideBarWidth} />
            <div></div>

            <div className={"iceberg"}>
                <IcebergComponent temperature={temperature} handleLevelChange={handleLevelChange}/>
            </div>

            <div>

                <div className={"language-container"}>
                    <button className={"language-button"} onClick={() => changeLanguage('fr')}>Français 🇫🇷</button>
                    <button className={"language-button"} onClick={() => changeLanguage('en')}>English 🇬🇧/🇺🇸</button>
                    <button className={"language-button"} onClick={() => changeLanguage('ch')}>中文 🇨🇳</button>
                    <button className={"help-button"} onClick={() => setHelpDisplayed(true)}> ?</button>
                    {easterEggActivated && <EasterEggModal isOpen={easterEggActivated} onRequestClose={closeModal}/>}
                    {!easterEggActivated && <Konami action={easterEgg}/>}
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
                        <button className={"language-button margin-5"} onClick={() => setHelpDisplayed(false)}>Fermer</button>
                    </DialogActions>
                </Dialog>

            </div>
        </div>

    );
}

export default HomePage;

