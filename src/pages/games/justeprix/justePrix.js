// src/pages/games/justeprix/justePrix.js
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../../../styles/JustePrixPage.module.css';
import questionsData from '../../../data/justeprix.json';

const JustePrixPage = ({onGameFinish,id}) => {
  const router = useRouter();
  const [userInput, setUserInput] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch the question based on the ID from the URL or a parameter

    const selectedQuestion = questionsData.find((question) => question.id === parseInt(id, 10));

    if (selectedQuestion) {
      setCurrentQuestion(selectedQuestion);
      setMessage(''); // Clear previous messages when a new question is loaded
    } else {
      // Handle the case where the ID is not found
      console.error('Question not found for the provided ID.');
    }
  }, [router.query, userInput]); // Added userInput to trigger useEffect when the user submits an answer

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your logic for checking the answer
    const userAnswer = parseInt(userInput, 10);
    const correctAnswer = parseInt(currentQuestion.reponse, 10);

    if (!isNaN(userAnswer)) {
      if (userAnswer === correctAnswer) {
        setMessage('Bravo ! La réponse est correcte.');
        onGameFinish(true);
      } else if (userAnswer < correctAnswer) {
        setMessage('Désolé, la réponse est incorrecte. C\'est plus. Essayez à nouveau.');
        onGameFinish(false);
      } else {
        setMessage('Désolé, la réponse est incorrecte. C\'est moins. Essayez à nouveau.');
        onGameFinish(false);
      }

    } else {
      setMessage('Veuillez entrer un nombre valide.');
    }
  };

  return (
    <div className={styles.container}>
      <h1>Juste Prix Game</h1>
      {currentQuestion ? (
        <div>
          <p>{currentQuestion.question}</p>
          <form onSubmit={handleSubmit}>
            <label className={styles.label}>
              Entrez votre estimation :
              <input
                type="number"
                value={userInput}
                onChange={handleInputChange}
                className={styles.input}
              />
            </label>
            <button type="submit" className={styles.button}>
              Valider
            </button>
          </form>
        </div>
      ) : (
        <p>La question n'a pas pu être chargée.</p>
      )}
      {message && <p className={styles.message}>{message}</p>}
    </div>
  );
};

export default JustePrixPage;
