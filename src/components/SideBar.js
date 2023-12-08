
import React from 'react';
import JustePrix from "@/pages/games/justeprix/justePrix";
import Famille from "@/pages/games/top10/famille";
import Qcm from "@/pages/games/vraifaux/qcm";
import ExplainationOne from "@/pages/explainations/level_one";
import ExplainationTwo from "@/pages/explainations/level_two";
import ExplainationThree from "@/pages/explainations/level_three";
import ExplainationFour from "@/pages/explainations/level_four";
import ExplainationFive from "@/pages/explainations/level_five";

const SideBar = ({gameFinished, currentGame, handleGameFinish, selectedLevel, sideBarWidth, setSideBarWidth, setIcebergWidth}) => {
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
            ) : selectedLevel === 3 ? (
                <ExplainationThree></ExplainationThree>
            ) : selectedLevel === 4 ? (
                <ExplainationFour></ExplainationFour>
            ) : selectedLevel === 5 ? (
                <ExplainationFive></ExplainationFive>
            ) : (
                <p>Bravo, vous avez terminé tous les jeux !</p>
            )}

            {gameFinished ? <div className={"center"}>
                <button className={"language-button spacer-bottom-5"} onClick={() => {
                    setSideBarWidth("0vw");
                    setIcebergWidth("100vw");
                }}> Terminé !
                </button>
            </div>
                : <div></div>
            }
        </div>
    );
};

export default SideBar;