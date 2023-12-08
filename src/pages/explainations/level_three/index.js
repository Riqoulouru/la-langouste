import React from 'react';
import WaveSVG from "@/pages/explainations/level_one/wave";


const LevelThree = () => {

    return (
        <div className={"level"}>

            <div className={"level-container"}>

                <h1 className={"title"}>Qu’en est-il du réchauffement climatique ?</h1>

                <div className={"spacer-4 div-explanation-content"}>La température moyenne terrestre a augmenté de 1,1°C entre 1850-1900 et 2010-2020 ;</div>
                <div className={"spacer-2 div-explanation-content"}>Chacune des quatre dernières décennies (1980-1990 / 1990-2000 / 2000-2010 / 2010-2020) a été plus
                    chaude que la précédente.
                </div>
                <div className={"spacer-2 div-explanation-content"}>Le réchauffement atteindra sans doute +1,5°C avant 2040. Ensuite, tout dépendra de l’évolution des
                    émissions humaines de gaz à effet de serre. Si elles baissent sans attendre et de façon importante,
                    le réchauffement pourrait rester inférieur à 2°C.
                </div>
                <div className={"spacer-2 div-explanation-content"}>Si les émissions mondiales se maintiennent à leur niveau actuel, le réchauffement devrait avoir
                    dépassé les 2°C en 2050. Et pire, si les émissions continuent d’augmenter, la trajectoire mène à
                    +4°C voire +5°C à l’horizon 2100.
                </div>
                <div className={"spacer-2 div-explanation-content"}>Les émissions mondiales de gaz à effet de serre devront baisser à partir de 2025, sans quoi il sera
                    impossible de limiter le réchauffement de la planète à 1,5°C.
                </div>
                <div className={"spacer-2 div-explanation-content"}>Les émissions mondiales de gaz à effet de serre (GES) ont continué à augmenter jusqu’en 2019.
                    Celles de la décennie 2010-2019 ont atteint un niveau record dans l’histoire de l’humanité
                </div>

                <div className={"center"}>
                    <img className={"spacer-2 img-level-one"} src="/images/level_three/politique.png" alt="transport"/>
                </div>

            </div>

            <WaveSVG />

            <div className={"level-container"}>

                <h1 className={"title"}>Part d’emission de Co2 par secteur </h1>
                <div className={"center"}>
                    <img className={"spacer-2 img-level-one"} src="/images/level_three/sector.png" alt="transport"/>
                </div>

            </div>


        </div>
    );
};

export default LevelThree;
