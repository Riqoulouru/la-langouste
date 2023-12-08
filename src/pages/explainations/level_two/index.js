import React from 'react';
import WaveSVG from "@/pages/explainations/level_one/wave";


const LevelTwo = () => {

    return (
        <div className={"level"}>

            <div className={"level-container"}>

                <h1 className={"title"}> Qu’est-ce que la décarbonnisation ? </h1>

                <div>La décarbonnisation correspond au fait d’éliminer le carbone existant dans l’atmosphère passe par la plantation d’arbres ou l’utilisation de technologies permettant la capture et le stockage du carbone.</div>

                <div>Bien que ces solutions soient nécessaires à l’atteinte des objectifs climatiques, elles ne constituent en aucun cas une alternative à la réduction des émissions et doivent être réservées à l’absorption d’émissions résiduelles. Les méthodes d’élimination présentent en effet des résultats mitigés.</div>
                <div>En effet, on ne peut pas polluer autant que l’on veut en se disant que “de tous les arbres que nous avons planté éliminera ce Co2”.  </div>
                <div>À la place, les énergies renouvelables et le changement de nos habitude sont des meilleures solutions :</div>

                <div>Les énergies renouvelables offrent une solution concrète et réalisable pour limiter nos émissions de gaz à effet de serre. Le GIEC décrit des progrès techniques beaucoup plus rapides que prévus par son précédent rapport (2014), en particulier pour les énergies solaire et éolienne. Ces sources d’énergie sont désormais compétitives par rapport à la production d’énergie fossile. De plus, leurs coûts ont fortement baissé depuis 2010, jusqu’à -85% pour l’énergie solaire.</div>

                <div>Au contraire, les progrès du nucléaire et du captage et stockage du CO2 ont été plus lents que prévus. Le rapport montre aussi que ces dernières options ne sont pas sans risques pour l’atteinte des Objectifs de Développement Durable.</div>
                <div>Il est nécessaire d’atteindre la neutralité carbone en 2050 pour limiter le réchauffement à +1,5°C. Pour cela, le rapport décrit l’urgence à sortir des énergies fossiles : les scénarios qui permettent d’atteindre cet objectif impliquent une réduction de la consommation de charbon de 95%, ainsi que de 60% pour le pétrole et de 45% pour le gaz, en 2050 par rapport à l’année 2019. Enfin, aucune nouvelle infrastructure de production d’énergies fossiles ne doit être construite.</div>

                <div>Si nous opérons les bons choix en matière de politique, d’infrastructures et de technologies, nous pourrons changer nos modes de vie et nos comportements, avec à la clé une diminution de 40 à 70 % des émissions de gaz à effet de serre d’ici à 2050.</div>
                <div>Le rapport classe les stratégies d’atténuation basées sur la demande en trois options : “Éviter – Changer – Améliorer”. Concrètement, les actions présentant les plus grands potentiels d’atténuation pour chaque catégorie sont :</div>

                <div>
                    <div>Éviter les vols long-courrier ;</div>
                    <div>Changer son alimentation pour un régime à base de végétaux ;</div>
                    <div>Améliorer l’efficacité énergétique de son logement.</div>
                </div>
            </div>

            <WaveSVG />

            <div>

                <h1 className={"title"}>Et le transport ?</h1>
                <div>Le transport correspond à une grande part des emissions. Voici la répartition à l’intérieur du
                    transport.
                </div>

                <div className={"center"}>
                    <img className={"spacer-2 img-level-one"} src="/images/level_two/atmosphere.png" alt="atmosphere"/>
                </div>

            </div>


        </div>
    );
};

export default LevelTwo;
