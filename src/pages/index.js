import Link from "next/link";
import React from 'react';
import IcebergComponent from '../components/IcebergComponent/IcebergComponent'; // Assurez-vous que le chemin est correct

const App = () => {
    return (
        <div>
            <h1>Visualisation de l'Iceberg</h1>
            <IcebergComponent />
        </div>
    );
};

export default App;