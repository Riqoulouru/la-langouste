import React, { useState } from 'react';
import jsonGame from '../../data/allGame.json';
import JustePrix from '../../pages/games/justeprix/JustePrix';
import Famille from '../../pages/games/top10/Famille';
import Qcm from '../../pages/games/vraifaux/Qcm';

const GamesPage = () => {
    const [selectedLevel, setSelectedLevel] = useState(0);
    const [currentGameIndex, setCurrentGameIndex] = useState(1);
    const [gamesRemaining, setGamesRemaining] = useState(0);
    const [gameFinished, setGameFinished] = useState(false);

    const handleLevelChange = (level) => {
        setSelectedLevel(level);
        setCurrentGameIndex(1);
        setGameFinished(false);

        // Calcul du nombre total de jeux pour le niveau sélectionné
        const totalGames = jsonGame.find((game) => game.level === level)?.games;
        console.log("totalGames", totalGames);
        setGamesRemaining(totalGames ? Object.keys(totalGames).length : 0);
    };

    const handleGameFinish = () => {
        setGamesRemaining((prevRemaining) => prevRemaining - 1);
        console.log(gamesRemaining);
        if (gamesRemaining === 1) {
            setGameFinished(true); // Tous les jeux ont été joués pour ce niveau
        } else {
            setCurrentGameIndex((prevIndex) => prevIndex + 1);
        }
    };

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
            {gameFinished ? (
                <p>Bravo, vous avez terminé tous les jeux de ce niveau !</p>
            ) : (
                <div>
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
                </div>
            )}
        </div>
    );
};

export default GamesPage;
