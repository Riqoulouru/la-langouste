import React from 'react';
import WaveSVG from "@/pages/explainations/level_one/wave";


const LevelOne = () => {

    return (
        <div className={"level"}>

            <div className={"level-container"}>
                <h1 className={"title"}>Tout d’abord qu’est-ce-que le gaz à effet de serre ? </h1>

                <div className={"spacer-4 div-explanation-content"}>Bien que les gaz à effet de serre soient présents en
                    faible quantité dans notre atmosphère, leur rôle
                    est déterminant dans le maintien d’une température terrestre propice à la vie : de faibles
                    variations de
                    leur concentration peuvent entraîner de fortes modifications de la température moyenne globale.
                    L’équilibre du système terrestre est donc très fragile.
                </div>
                <div className={"spacer-2 div-explanation-content"}>Un simple variation des quantités dans notre
                    atmosphère de cet effet de serre, peut provoquer des
                    catastrophes climatiques, des extinctions d’espèce animal et végétale.
                </div>

                <div className={"center"}>
                    <img className={"spacer-2 img-level-one"} src="/images/level_one/atmosphere.png" alt="atmosphere"/>
                </div>

                <div className={"spacer-2 div-explanation-content"}>Une part du gaz à effet de serre est donc produit
                    naturellement, voilà comment cette production est
                    réalisée :
                </div>

                <div className={"center"}>
                    <img className={"spacer-2 img-level-one"} src="/images/level_one/soleil.png" alt="soleil"/>
                </div>

                <div className={"spacer-2 div-explanation-content"}>
                    <div>1. Le rayonnement solaire passe à travers l'atmosphère claire</div>
                    <div>2. Une partie du rayonnement est réfléchie par l'atmosphère et la surface de la Terre</div>
                    <div>3. L'énergie solaire est absorbée par la surface de la Terre</div>
                    <div>4. Elle est ensuite convertie en chaleur (rayonnement infrarouge) qui est renvoyée vers
                        l'espace
                    </div>
                    <div>5. Une partie du rayonnement infrarouge est absorbée par les molécules de gaz à effet de serre
                        entraînant le réchauffement de la basse atmosphère et de la Terre
                    </div>
                    <div>6. Le reste du rayonnement solaire passe à travers l'atmosphère et se perd dans l'espace</div>
                </div>
            </div>

            <WaveSVG/>

            <div className={"level-container"}>
                <h1 className={"title"}>La pollution de l’être humain</h1>

                <div className={"spacer-4 div-explanation-content"}>Vous l’imaginez bien, tous les problèmes climatiques
                    actuels ne sont pas uniquement causés par la
                    création de gaz à effet de serre. En effet, l’Homme a une grande part de responsabilité par rapport
                    à
                    cela.
                </div>
                <div className={"spacer-2 div-explanation-content"}>Nous reviendrons sur tous les causes de génération
                    de
                    gaz à effet de serre par la suite. Cependant,
                    nous voudrions vous présenter une donnée très importante.
                </div>

                <div className={"center"}>
                    <img className={"spacer-2 img-level-one"} src="/images/level_one/pays.png" alt="pays"/>
                </div>

                <div className={"spacer-2 div-explanation-content"}>Nous remarquons que la Chine est de très loin le
                    pays
                    rejetant le plus de Co2 avec près de 35% de la
                    pollution mondiale.
                </div>

            </div>

            <WaveSVG/>

            <div className={"level-container"}>
                <h1 className={"title"}>Et si nous parlions de la montée du niveau de la mers ?</h1>
                <div className={"spacer-4 div-explanation-content"}>Le niveau moyen de la mer : il s’est élevé de 20 cm
                    entre 1901 et 2018. Cela peut paraître anodin, mais
                    de petites modifications du niveau de la mer peuvent avoir de graves conséquences sur
                    l’environnement,
                    en particulier les zones côtières de basse altitude. Ce rythme est plus rapide depuis 1900 qu’au
                    cours
                    de tous les autres siècles depuis 3000 ans. Il est désormais certain que le niveau de la mer va
                    continuer de monter de plusieurs dizaines de centimètre au cours du 21e siècle.
                </div>

                <div className={"spacer-2 div-explanation-content"}>La fonte de la cryosphère (c’est à dire la fonte du
                    manteau neigeux, de la banquise et des glaciers de
                    montagne, du Groënland ou de l’Antarctique) : depuis les années 1960, le manteau neigeux s’est
                    réduit en
                    moyenne de 11,7 % (au mois de juin) par décennie dans l’hémisphère nord.
                </div>

                <div className={"center"}>
                    <img className={"spacer-2 img-level-one"} src="/images/level_one/eau.png" alt="eau"/>
                </div>
            </div>

        </div>
    );
};

export default LevelOne;
