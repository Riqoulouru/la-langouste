import React from 'react';
import WaveSVG from "@/pages/explainations/level_one/wave";


const LevelFive = () => {

    return (
        <div className={"level"}>
            <div className={"level-container"}>
                <h1 className={"title"}>Les gaz à effet de serre dans l’atmosphère</h1>
                <div className={"spacer-4 div-explanation-content"}>En réalité le Co2 n’est pas le seul gaz à effet de
                    serre, plusieurs en existent mais le Co2 reste le plus connu :
                </div>
                <div className={"center"}>
                    <img className={"spacer-2 img-level-one"} src="/images/level_five/gaz.png" alt="atmosphere"/>
                </div>
                <div className={"center"}>
                    <img className={"spacer-2 img-level-one"} src="/images/level_five/chart.png" alt="atmosphere"/>
                </div>
            </div>

            <WaveSVG />
            <div className={"level-container"}>
                <h1 className={"title"}>Par rapport aux énergies renouvelables ?</h1>

                <div className={"spacer-4 div-explanation-content"}>Les énergies renouvelables représentent le visage
                    moderne de notre approvisionnement énergétique. Elles sont le reflet d'une vision tournée vers
                    l'avenir, offrant un potentiel immense pour façonner un monde plus propre et durable.
                </div>

                <div className={"spacer-2 div-explanation-content"}>L'énergie solaire, brillante et abondante, est
                    captée par des panneaux photovoltaïques, transformant la lumière du soleil en électricité.
                    Ses vastes possibilités d'installation, des toits des maisons aux champs solaires, en font une
                    ressource universelle et accessible.
                </div>

                <div className={"spacer-2 div-explanation-content"}>Les éoliennes, majestueuses et élancées, se
                    dressent sur les terres et les mers, capturant la force du vent pour produire de l'électricité.
                    Leurs pales en mouvement perpétuel symbolisent l'ingéniosité humaine exploitant la puissance
                    naturelle du vent.
                </div>

                <div className={"spacer-2 div-explanation-content"}>L'énergie hydraulique, ancienne et fiable, est
                    extraite des rivières et des chutes d'eau, convertissant leur élan en énergie mécanique puis
                    électrique. Les barrages et les centrales hydroélectriques alimentent en énergie des régions
                    entières, offrant une stabilité à long terme.
                </div>

                <div className={"spacer-2 div-explanation-content"}>Les autres sources telles que l'énergie
                    géothermique, puisant dans la chaleur de la Terre, ou encore les marées et les vagues, captant la
                    force des océans, complètent ce patchwork d'innovations énergétiques.
                </div>

                <div className={"spacer-2 div-explanation-content"}>Ces technologies renouvelables ne se contentent pas
                    de réduire notre dépendance aux énergies fossiles, elles représentent également un pilier crucial
                    de la lutte contre le changement climatique. Leur empreinte carbone minimale contribue à préserver
                    notre planète pour les générations futures.
                </div>

                <div className={"spacer-2 div-explanation-content"}>Au-delà de leurs avantages environnementaux, les
                    énergies renouvelables stimulent l'innovation, créent des emplois et favorisent le développement
                    économique. Elles ouvrent la voie à une ère où la durabilité et la prospérité se conjuguent
                    harmonieusement.
                </div>

                <div className={"spacer-2 div-explanation-content"}>En investissant dans ces sources d'énergie du
                    futur, nous façonnons un monde où la transition vers un avenir plus propre et plus durable devient
                    une réalité, où les énergies renouvelables sont le cœur battant d'une société éclairée et
                    responsable.
                </div>

                <div className={"center"}>
                    <img className={"spacer-2 img-level-one"} src="/images/level_five/graphique.png" alt="atmosphere"/>
                </div>

            </div>


        </div>
    );
};

export default LevelFive;
