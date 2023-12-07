import React, { useState } from 'react';
import GamePage from "./top10/famille"; // Importez votre composant GamePage

const ParentComponent = () => {
    const [isGameFinished, setIsGameFinished] = useState(false);

    const handleGameFinish = (isFinished) => {
        setIsGameFinished(isFinished);
    };

    return (
        <div>
            {isGameFinished ? (
                <p>Le jeu est terminé !</p>
            ) : (
                <GamePage onGameFinish={handleGameFinish} id={3} />
            )}
        </div>
    );
};

export default ParentComponent;
