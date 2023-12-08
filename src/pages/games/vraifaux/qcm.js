import React, { useState } from 'react';
import {useRouter} from 'next/router';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

import jsonQCM from '@/data/jsonQCM.json';
import jsonQCMEn from '@/data/jsonQCMEn.json';
import jsonQCMCh from '@/data/jsonQCMCh.json';

const QuestionPage = ({onGameFinish, id}) => {
    const { t, i18n } = useTranslation('translation');
    const router = useRouter();
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);


    // Convertis l'ID en nombre
    const questionId = parseInt(id, 10);
        // Récupère la question correspondante
      // Select the appropriate JSON based on the language
  let jsonQuestions;
  console.log("QCM")
  console.log(i18n.language)
  switch (i18n.language) {
    case 'en':
      jsonQuestions = jsonQCMEn;
      break;
    case 'ch':
        jsonQuestions = jsonQCMCh;
        break;
    // Add more cases for other languages if needed
    default:
      jsonQuestions = jsonQCM;
  }
    const question = jsonQuestions.questions.find((q) => q.id === questionId);



    // Vérifie si l'ID est un nombre valide et se situe dans la plage des questions
    if (isNaN(questionId) || questionId < 0) {
        return <p>Question non trouvée</p>;
    }


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
