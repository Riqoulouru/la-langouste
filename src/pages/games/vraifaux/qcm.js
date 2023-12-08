import React, { useState } from 'react';
import {useRouter} from 'next/router';

import jsonQCM from '@/data/jsonQCM.json';

const QuestionPage = ({onGameFinish, id}) => {
    const router = useRouter();
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);

    // Convertis l'ID en nombre
    const questionId = parseInt(id, 10);

    // Vérifie si l'ID est un nombre valide et se situe dans la plage des questions
    if (isNaN(questionId) || questionId < 0) {
        return <p>Question non trouvée</p>;
    }

    // Récupère la question correspondante
    const question = jsonQCM.questions.find((q) => q.id === questionId);

    if (question === undefined) {
        return <p>Question non trouvée</p>
    }

    const checkAnswer = () => {
        const selectedAnswer = document.querySelector('input[name="reponse"]:checked');

        if (selectedAnswer) {
            const selectedLabel = selectedAnswer.value;
            const correctAnswer = question.reponses.find(
                (reponse) => reponse.result === true
            );

            if (selectedLabel === correctAnswer.label) {
                setIsAnswerCorrect(true);
                onGameFinish(true);
            } else {
                setIsAnswerCorrect(false);
                onGameFinish(false);
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

export default QuestionPage
