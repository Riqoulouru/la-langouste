import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Konami from 'react-konami-code';
import styles from "@/styles/Home.module.scss"
export default function Page() {
    const [easterEggActivated, setEasterEggActivated] = useState(false);

    const easterEgg = () => {
        alert('Hey, you typed the Konami Code!');
        setEasterEggActivated(true);
    }

    useEffect(() => {
        // Reset l'état d'activation après un certain temps (par exemple, 5 secondes)
        const resetTimeout = setTimeout(() => {
            setEasterEggActivated(false);
        }, 5000);

        return () => clearTimeout(resetTimeout);
    }, [easterEggActivated]);

    return (
        <div className={styles.test}>
            <Link href={"/games/Game"}>GO</Link>
            {/* Utilise Konami component uniquement si l'easter egg n'est pas encore activé */}
            {!easterEggActivated && <Konami action={easterEgg} />}
        </div>
    );
}
