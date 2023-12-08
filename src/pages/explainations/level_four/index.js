import React from 'react';
import WaveSVG from "@/pages/explainations/level_one/wave";


const LevelFour = () => {

    return (
        <div className={"level"}>
            <div className={"level-container"}>
                <h1 className={"title"}>Quelles solutions pour être irréprochable ?</h1>
                <div className={"spacer-4 div-explanation-content"}>
                    Des solutions ont déjà été trouvées afin de réduire considérablement notre impacte sur l’environnement. Cependant cela représente un coût, on parle de 100 milliards de $ par an !
                </div>
                <div className={"spacer-2 div-explanation-content"}>
                    Voici ces solutions par secteurs :
                </div>

            </div>
            <div className={"level-container"}>
                <h1 className={"title"}>Industrie : les technologies pour décarboner existent</h1>
                <div className={"spacer-4 div-explanation-content"}>
                    Comme pour le secteur de l’énergie, les progrès technologiques réalisés au cours de ces dernières années rendent possible la décarbonation de l’industrie, qui est responsable d’environ un quart des émissions mondiales.
                </div>
                <div className={"spacer-2 div-explanation-content"}>
                    Cela passera notamment par une utilisation plus efficace des matériaux, des approches circulaires comme la réutilisation ou le recyclage des produits, une forte diminution des déchets, mais aussi par une réduction de la demande. L’efficacité des matériaux et la sobriété représentent la moitié du potentiel de décarbonation du secteur. Concernant les matériaux de base (acier, matériaux de construction…), des procédés de production à émissions de GES faibles ou nulles seront bientôt disponibles. Décarboner l’industrie est donc désormais possible, à condition de choix politiques permettant une véritable transformation du secteur.
                </div>

            </div>
            <div className={"level-container"}>
                <h1 className={"title"}>Agriculture et alimentation : moins de viande, plus de pratiques durables</h1>
                <div className={"spacer-4 div-explanation-content"}>
                    Les pratiques agroécologiques (réduction de l’utilisation d’engrais de synthèse, diversification des cultures, meilleure gestion des déjections animales…) permettent de limiter les émissions de gaz à effet de serre, de mieux stocker le CO2 dans les sols et apportent de multiples autres bénéfices : protection de la biodiversité, meilleure qualité de l’eau, de l’air et des sols, sécurité alimentaire… L’agroforesterie, c’est-à-dire l’association d’arbres, de cultures et/ou de bétail sur une même parcelle, montre également un fort potentiel d’atténuation.
                </div>
                <div className={"spacer-2 div-explanation-content"}>
                    Les forêts et écosystèmes absorbent du carbone, il est donc important de les protéger et de lutter contre la déforestation. Toutefois, cela ne pourra pas compenser la réduction des émissions, qui doit rester la priorité dans tous les secteurs.
                </div>
        </div>
            <div className={"level-container"}>
                <h1 className={"title"}>Transports : transformer les mobilités individuelles</h1>
                <div className={"spacer-4 div-explanation-content"}>
                    Les transports représentent le premier secteur émetteur de gaz à effet de serre en France (31%) et sont responsables d’un quart des émissions mondiales : leur décarbonation est donc un enjeu majeur dans la lutte contre le changement climatique.
                </div>
                <div className={"spacer-2 div-explanation-content"}>
                    Parmi les actions identifiées par le GIEC dans tous les secteurs pour réduire les émissions de gaz à effet de serre en transformant les comportements individuels, celles qui concernent la mobilité sont celles qui présentent le plus grand potentiel de réduction de l’empreinte carbone. Les solutions citées par le rapport sont :
                </div>
                <div className={"spacer-2 div-explanation-content"}>
                    <div>Donner la priorité à une mobilité sans voiture, en privilégiant la marche et le vélo par exemple ;</div>
                    <div>Privilégier les transports en commun ;</div>
                    <div>Favoriser les mobilités électriques ;</div>
                    <div>Réduire les voyages en avion (surtout les vols longs courriers)</div>
                </div>
                <div className={"spacer-2 div-explanation-content"}>
                    À l’échelle des villes, une réorganisation des zones urbaines permettrait de réduire la consommation de carburant liée au transport urbain d’environ 25 %, notamment grâce à des infrastructures de transport moins dépendantes de la voiture et à un rapprochement entre le domicile et le lieu de vie.
                </div>
                <div className={"spacer-2 div-explanation-content"}>
                    Concernant l’aviation, responsable à elle seule de 2,4% des émissions anthropiques de CO2, le GIEC rapporte qu’aucune amélioration en termes d’efficacité énergétique ne permettra de suivre le rythme de la croissance prévue du transport aérien. La limitation du trafic resterait donc le moyen le plus efficace pour réduire les émissions du secteur.
                </div>
            </div>
        </div>
    );
};

export default LevelFour;
