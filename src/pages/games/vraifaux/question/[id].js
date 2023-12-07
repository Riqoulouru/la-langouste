// pages/games/vraifaux/question/[id].js
import React, { useState } from 'react';
import {useRouter} from 'next/router';

const data = require('../../../../data/vraifaux.json');

export default function QuestionPage({onGameFinish,id }) {
    const router = useRouter();
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
    const {id} = router.query;

    // Convertis l'ID en nombre
    const questionId = parseInt(id, 10);

    // Vérifie si l'ID est un nombre valide et se situe dans la plage des questions
    if (isNaN(questionId) || questionId < 0) {
        return <p>Question non trouvée</p>;
    }

    // Récupère la question correspondante
    const question = data.questions.find((q) => q.id === questionId);

    if (question === undefined) {
        return <p>Question non trouvée</p>
    }

    const checkAnswer = () => {
        const selectedAnswer = document.querySelector('input[name="reponse"]:checked');

        if (selectedAnswer) {
            const selectedLabel = selectedAnswer.value;
            console.log(data.questions)
            console.log(question)
            const correctAnswer = question.reponses.find(
                (reponse) => reponse.result === true
            );

            if (selectedLabel === correctAnswer.label) {
                setIsAnswerCorrect(true);
            } else {
                setIsAnswerCorrect(false);
            }
        }
    };

    return (
        <div>
            <div>
                <p>{question.question}</p>
                {question.reponses.map((reponse, index) => (
                    <div key={index}>
                        <input type="radio" id={`reponse-${index}`} name="reponse" value={reponse.label}/>
                        <label htmlFor={`reponse-${index}`}>{reponse.label}</label>
                    </div>
                ))}
            </div>
            <div>
                <button onClick={checkAnswer}>Valider</button>

                {isAnswerCorrect === false && (
                    <p style={{color: 'red'}}>La réponse est incorrecte.</p>
                )}

                {isAnswerCorrect === true && (
                    <p style={{color: 'green'}}>Bonne réponse !</p>
                )}
            </div>
        </div>
    );
}
