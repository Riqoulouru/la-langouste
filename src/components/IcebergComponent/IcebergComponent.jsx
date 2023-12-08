import React, {useMemo} from 'react';
import Santa from "@/components/Santa";

const IcebergComponent = ({temperature, handleLevelChange}) => {

    // Calculer la hauteur du clipPath en fonction de la température
    const clipHeight = useMemo(() => {
        const heightReduction = 5 * temperature; // Exemple : 5% par degré
        return Math.max(0, 100 - heightReduction); // S'assurer que la valeur n'est pas négative
    }, [temperature]);

    return (
        <div>
            <div className={'Santa'}>
                <Santa/>
            </div>

            <div className={"temperature-container"}>Température actuelle : {temperature}°C</div>
            <div style={{ width: '300px', height: '300px' }}>
                <svg cache-id="c81abccd000c4dfc88da8cbdb81b1437" id="iceberg" viewBox="0 0 1080 1920" shapeRendering="geometricPrecision" textRendering="geometricPrecision">
                    <clipPath id="icebergClip">
                        <rect x="0" y={`calc(100% - ${clipHeight}%)`} width="100%" height={`${clipHeight}%`} />
                    </clipPath>
                    <g clipPath="url(#icebergClip)">
                        <g id="iceberg-u-iceberg_top">
                            <polygon id="iceberg-s-polygon1" points="-77.406928,-80.718993 26.340411,216.693028 -250.173764,-49.142018 -77.406928,-80.718993" transform="translate(559.359914 456.34084)" fill="#9bb1da" strokeWidth="0" />
                            <polygon id="iceberg-s-polygon2" points="-20.647847,-99.568066 -28.670244,-159.52099 -204.851264,106.314056 -20.647847,-99.568066" transform="translate(337.856394 566.719824)" fill="#dae1ee" strokeWidth="0" />
                            <polygon id="iceberg-s-polygon3" points="-23.170864,-99.568066 245.320914,106.314056 -207.374281,106.314068 -23.170864,-99.568066" transform="translate(340.379411 566.719812)" fill="#f2f6ff" strokeWidth="0" />
                            <polygon id="iceberg-s-polygon4" points="-320.814656,-159.52099 -44.300481,106.314056 -312.792259,-99.568066 -320.814656,-159.52099" transform="translate(630.000806 566.719812)" fill="#aec6f3" strokeWidth="0" />
                            <polygon id="iceberg-s-polygon5" points="-33.011542,56.935725 -19.862466,159.876786 -202.67275,159.876786 -33.011542,56.935725" transform="translate(788.373075 513.157082)" fill="#aec6f3" strokeWidth="0" />
                            <polygon id="iceberg-s-polygon6" points="-112.529604,-128.151189 83.863466,137.643943 56.037529,250.899724 -112.529604,-128.151189" transform="translate(699.324004 319.193083)" fill="#9bb1da" strokeWidth="0" />
                            <polygon id="iceberg-s-polygon7" points="-3.15606,-154.192847 -143.206608,49.137951 -115.380671,-64.11783 -3.15606,-154.192847" transform="translate(898.568141 520.954856)" fill="#f2f6ff" strokeWidth="0" />
                            <polygon id="iceberg-s-polygon8" points="8.414151,-199.957802 97.60457,106.314056 28.546864,19.941695 8.414151,-199.957802" transform="translate(886.99793 566.719812)" fill="#aec6f3" strokeWidth="0" />
                            <polygon id="iceberg-s-polygon9" points="124.993205,19.941707 194.050911,106.314068 -22.04098,106.314068 124.993205,19.941707" transform="translate(790.551589 566.7198)" fill="#f2f6ff" strokeWidth="0" />
                            <polygon id="iceberg-s-polygon10" points="-203.757189,-375.677906 -204.851264,106.314068 -35.190056,3.373007 -203.757189,-375.677906" transform="translate(790.551589 566.7198)" fill="#f2f6ff" strokeWidth="0" />
                            <polygon id="iceberg-s-polygon11" points="-148.16823,-226.194033 -149.262304,255.797941 -253.009643,-41.61408 -148.16823,-226.194033" transform="translate(734.962629 417.235927)" fill="#bcd6ff" strokeWidth="0" />
                            <polygon id="iceberg-s-polygon12" points="-266.158719,95.530182 -126.108171,-107.018923 -105.975458,112.880575 -253.009643,199.252947 -266.158719,95.530182" transform="translate(1021.520252 473.780933)" fill="#bcd6ff" strokeWidth="0" />
                        </g>
                        <polygon id="iceberg-u-level_1" points="385.755186,-87.280101 431.712925,65.8103 456.813316,87.258015 477.216601,235.280849 -374.377673,232.153563 -304.632751,-24.212913 -249.777084,-45.44473 -240.172953,-89.578668 385.755186,-87.280101" transform={`matrix(-.999996 0.002701-.001986-.735415 610.687271 844.774223)`} fill="#d2dbed" strokeWidth="0" onClick={() => handleLevelChange(1)} />
                        <polygon id="iceberg-u-level_2" points="285.917703,-21.100116 327.658573,174.615966 371.29534,193.23356 413.292309,239.843237 -214.010251,238.149005 -198.36961,85.48899 -169.591769,64.186749 -157.600431,-22.297979 285.917703,-21.100116" transform="matrix(-.997805 0.002695-.002695-.997739 638.138385 1148.190462)" fill="#b1c0dc" strokeWidth="0" onClick={() => handleLevelChange(2)}/>
                        <polygon id="iceberg-u-level_3" points="190.801433,-92.935716 199.534762,-24.272659 228.991405,-17.173935 301.480838,241.222289 -141.065547,239.755431 -140.804511,121.124315 -120.92499,103.862241 -105.710745,-93.918531 190.801433,-92.935716" transform="matrix(-.999996 0.002701-.0022-.814772 654.91555 1365.740331)" fill="#6f88b6" strokeWidth="0" onClick={() => handleLevelChange(3)}/>
                        <polygon id="iceberg-u-level_4" points="149.593717,-91.225969 178.165149,-0.909806 193.637053,12.513814 210.769351,240.399681 -85.742827,239.416866 -71.882257,165.800158 -54.508811,155.716901 -33.52651,-91.832936 149.593717,-91.225969" transform="matrix(-.999996 0.002701-.0022-.814772 675.616869 1637.278763)" fill="#5273ae" strokeWidth="0" onClick={() => handleLevelChange(4)}/>
                        <polygon id="iceberg-u-level_5" points="151.62238,51.17911 179.078787,83.267667 202.987555,133.902519 210.763798,242.467927 30.700683,241.86632 41.52526,133.363066 80.960316,77.180418 111.444022,93.280674 151.62238,51.17911" transform="matrix(-1.016974 0.002746-.00222-.822033 741.104079 1910.748908)" fill="#2a4a85" strokeWidth="0" onClick={() => handleLevelChange(5)}/>
                    </g>
                </svg>
            </div>
        </div>
    );
};

export default IcebergComponent;
