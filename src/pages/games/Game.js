import React, {useEffect, useState} from 'react';
import jsonGame from '../../data/allGame.json';
import JustePrix from "@/pages/games/justeprix/justePrix";
import Famille from "@/pages/games/top10/famille";
import Qcm from "@/pages/games/vraifaux/qcm";
import IcebergComponent from '@/components/IcebergComponent/IcebergComponent';

import styles from "@/styles/Game.module.scss";
const GamesPage = () => {
    const [selectedLevel, setSelectedLevel] = useState(0);
    const [currentGameIndex, setCurrentGameIndex] = useState(1);
    const [gamesRemaining, setGamesRemaining] = useState(0);
    const [gameFinished, setGameFinished] = useState(false);
    const [timeRemaining, setTimeRemaining] = useState(20); // Temps initial en secondes
    const [temperature, setTemperature] = useState(0);


    const handleIncrease = () => {
        setTemperature((prevTemperature) => prevTemperature + 1);
    };

    const handleDecrease = () => {
        setTemperature((prevTemperature) => prevTemperature - 1);
    };

    const handleLevelChange = (level) => {
        setSelectedLevel(level);
        setCurrentGameIndex(1);
        setGameFinished(false);

        // Calcul du nombre total de jeux pour le niveau sélectionné
        const totalGames = jsonGame.find((game) => game.level === level)?.games;
        console.log("totalGames", totalGames);
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
        } else {
            setCurrentGameIndex((prevIndex) => prevIndex + 1);
        }
    };

    useEffect(() => {
        if (timeRemaining > 0) {
            const countdown = setInterval(() => {
                setTimeRemaining((prevTime) => prevTime - 1);
            }, 1000);

            return () => clearInterval(countdown);
        } else {
            //incrémenter temperature
            //rmettre à 0 le temps
            handleIncrease();
            setTimeRemaining(20)
        }
    }, [timeRemaining, gameFinished]);

    const filteredGames = jsonGame.filter((game) => game.level === selectedLevel);
    const currentGame = filteredGames[0]?.games[currentGameIndex];

    return (
        <div>
            <h1>Liste des jeux :</h1>
            <div>
                {[1, 2, 3].map((level) => (
                    <button key={level} onClick={() => handleLevelChange(level)}>
                        Niveau {level}
                    </button>
                ))}
            </div>

                <div>
                    <button onClick={handleIncrease}>Augmenter la température</button>
                    <p>Temps restant : {timeRemaining} secondes</p>
                    {currentGame && (
                        <>
                            {currentGame.name === 'JustePrix' && (
                                <JustePrix onGameFinish={handleGameFinish} id={currentGame.id} />
                            )}
                            {currentGame.name === 'Famille' && (
                                <Famille onGameFinish={handleGameFinish} id={currentGame.id} />
                            )}
                            {currentGame.name === 'qcm' && (
                                <Qcm onGameFinish={handleGameFinish} id={currentGame.id} />
                            )}
                        </>
                    )}
                    <div className={styles.iceBerg}>
                        <IcebergComponent temperature={temperature}/>
                    </div>
                </div>

        </div>
    );
};

export default GamesPage;
