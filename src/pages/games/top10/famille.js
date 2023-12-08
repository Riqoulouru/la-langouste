import questionsData from '../../../data/questions.json';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';


const GamePage = ({onGameFinish,id }) => {

    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [userInput, setUserInput] = useState('');
    const [feedback, setFeedback] = useState('');
    const [chancesLeft, setChancesLeft] = useState(3);
    const [foundAnswers, setFoundAnswers] = useState([]);
    const [processingAnswer, setProcessingAnswer] = useState(false);

    useEffect(() => {
        // Recherche de la question dans le JSON en fonction de l'ID

        if (id) {
            const question = questionsData.find(question => question.id === parseInt(id));
            setCurrentQuestion(question);
            setFoundAnswers(Array(question.reponses.length).fill(''));
            setChancesLeft(3);
            setProcessingAnswer(true);
        }
    }, [id]);

    useEffect(() => {
        if (processingAnswer) {
            // Vérification de fin de jeu après mise à jour des réponses trouvées
            if (chancesLeft === 0 ) {
                onGameFinish(false);
                setUserInput('');
                setFeedback('');
            } else if (foundAnswers.every(answer => answer !== '')) {
                onGameFinish(true);
                setUserInput('');
                setFeedback('');
            }
        }
    }, [foundAnswers, chancesLeft, processingAnswer, id,currentQuestion]);

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
        setUserInput('');

    };




    return (
        <div>
            {currentQuestion ? (
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
                    <p>Propositions possibles :</p>
                    <ul>
                        {currentQuestion.proposition.map((prop, index) => (
                            <li key={index}>{prop}</li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p>Chargement...</p>
            )}
        </div>
    );
};

export default GamePage;
