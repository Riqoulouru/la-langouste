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
    const [response, setResponse] = useState('');

    // Convertis l'ID en nombre
    const questionId = parseInt(id, 10);
        // Récupère la question correspondante
      // Select the appropriate JSON based on the language
  let jsonQuestions;
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
            } else {
                setIsAnswerCorrect(false);
            }

        }
    };

    function continueButtonNok() {
        onGameFinish(false);
    }

    function continueButtonOk() {
        onGameFinish(true);
    }

    return (
        <div>
            <div>
                <h1 className={"title spacer-bottom-5"}>{question.question}</h1>
                {question.reponses.map((reponse, index) => (
                    <div key={index} className={"center"}>
                        <input type="radio" id={`reponse-${index}`} name="reponse" value={reponse.label}/>
                        <label htmlFor={`reponse-${index}`}>{reponse.label}</label>
                    </div>
                ))}
            </div>
            <div className={"center spacer-4"}>
                <button className={"language-button"} onClick={checkAnswer}>Valider</button>

                {isAnswerCorrect === false && (
                    <p style={{color: 'red'}}>  La réponse est incorrecte.  </p>
                )}

                {isAnswerCorrect === false && (
                    <button id="continueButton" className={"language-button"} onClick={continueButtonNok}>Continuer</button>
                )}

                {isAnswerCorrect === true && (
                    <p style={{color: 'green'}} className={"spaceUs"}>Bonne réponse !  </p>
                )}
                {isAnswerCorrect === true && (
                    <button id="continueButton" className={"language-button"} onClick={continueButtonOk} >Continuer</button>
                )}
            </div>
        </div>
    );
}

export default QuestionPage
