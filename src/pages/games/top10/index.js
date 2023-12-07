import React, { useState, useEffect } from 'react';
import questionsData from './questions.json';

const GamePage = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userInput, setUserInput] = useState('');
    const [feedback, setFeedback] = useState('');
    const [chancesLeft, setChancesLeft] = useState(3);
    const [foundAnswers, setFoundAnswers] = useState(Array(3).fill(''));

    const currentQuestion = questionsData[currentQuestionIndex];

    const handleInputChange = (event) => {
        setUserInput(event.target.value);
    };

    const handleSubmit = () => {
        const userAnswer = userInput.toLowerCase();
        const correctAnswers = currentQuestion.reponses.map(answer => answer.toLowerCase());

        if (correctAnswers.includes(userAnswer)) {
            const index = correctAnswers.indexOf(userAnswer);
            const updatedAnswers = [...foundAnswers];
            updatedAnswers[index] = userAnswer;
            setFoundAnswers(updatedAnswers);

            setFeedback(`Bonne réponse! Position : ${index + 1}`);
        } else {
            setChancesLeft(chancesLeft - 1);
            setFeedback(`Mauvaise réponse. Il te reste ${chancesLeft - 1} chances.`);
        }
    };

    useEffect(() => {
        // Vérification de fin de jeu après mise à jour des réponses trouvées
        if (chancesLeft === 1 || foundAnswers.every(answer => answer !== '')) {
            setUserInput('');
            setFeedback('');
            if (currentQuestionIndex < questionsData.length - 1) {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
                setChancesLeft(3);
                setFoundAnswers(Array(3).fill(''));
            } else {
                console.log('Jeu terminé');
            }
        }
    }, [foundAnswers]);



    return (
        <div>
            <h1>{currentQuestion.question}</h1>
            <input type="text" value={userInput} onChange={handleInputChange} />
            <button onClick={handleSubmit}>Soumettre</button>
            <p>{feedback}</p>
            <p>Chances restantes: {chancesLeft}</p>
            <div>
                <h3>Réponses trouvées :</h3>
                <table>
                    <thead>
                    <tr>
                        <th>Position</th>
                        <th>Réponse</th>
                    </tr>
                    </thead>
                    <tbody>
                    {foundAnswers.map((answer, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{answer}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default GamePage;
