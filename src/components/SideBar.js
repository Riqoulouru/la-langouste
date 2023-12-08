
import React from 'react';
import JustePrix from "@/pages/games/justeprix/justePrix";
import Famille from "@/pages/games/top10/famille";
import Qcm from "@/pages/games/vraifaux/qcm";
import ExplainationOne from "@/pages/explainations/level_one";
import ExplainationTwo from "@/pages/explainations/level_two";

const SideBar = ({gameFinished, currentGame, handleGameFinish, selectedLevel, sideBarWidth}) => {
    return (
        <div className={"side-bar"} style={{width: sideBarWidth}}>
            {!gameFinished ? (
                currentGame && (
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
                )
            ) : selectedLevel === 1 ? (
                <ExplainationOne></ExplainationOne>
            ) : selectedLevel === 2 ? (
                <ExplainationTwo></ExplainationTwo>
            ) : (
                <p>Bravo, vous avez terminé tous les jeux !</p>
            )}
        </div>
    );
};

export default SideBar;