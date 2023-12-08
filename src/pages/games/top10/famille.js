import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import i18n from 'i18next';

const GamePage = ({ onGameFinish, id }) => {
  const { t, i18n } = useTranslation('translation');
  const router = useRouter();

  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [userInput, setUserInput] = useState('');
  const [feedback, setFeedback] = useState('');
  const [chancesLeft, setChancesLeft] = useState(3);
  const [foundAnswers, setFoundAnswers] = useState([]);
  const [processingAnswer, setProcessingAnswer] = useState(false);

  const getQuestionsFolder = (language) => {
    switch (language) {
      case 'en':
        return 'jsonFamilleEn.json';
      case 'ch':
          return 'jsonFamilleCh.json';
      case 'fr':
        return 'questions.json';
      // Ajoutez d'autres cas pour chaque langue
      default:
        return 'questions.json'; // La langue par défaut
    }
  };

  useEffect(() => {
    if (id) {
      const questionsFolder = getQuestionsFolder(i18n.language);
      console.log(questionsFolder)
      import(`@/data/${questionsFolder}`).then((module) => {
        const question = module.default.find((q) => q.id === parseInt(id));
        console.log(question)
        setCurrentQuestion(question);
        setFoundAnswers(Array(question.reponses.length).fill(''));
        setChancesLeft(3);
        setProcessingAnswer(true);
      });
    }
  }, [id, i18n.language]);

  useEffect(() => {
    if (processingAnswer) {
      if (chancesLeft === 0 || foundAnswers.every((answer) => answer !== '')) {
        onGameFinish(true);
        setUserInput('');
        setFeedback('');
      }
    }
  }, [foundAnswers, chancesLeft, processingAnswer, id, currentQuestion]);

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = () => {
    const userAnswer = userInput.toLowerCase();
    const correctAnswers = currentQuestion.reponses.map((answer) => answer.toLowerCase());

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
