// src/pages/games/justeprix/justePrix.js
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../../../styles/JustePrixPage.module.css';
import jsonJustePrix from '@/data/jsonJustePrix.json';
import jsonJustePrixEn from '@/data/jsonJustePrixEn.json';
import jsonJustePrixCh from '@/data/jsonJustePrixCh.json';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';


const JustePrixPage = ({ onGameFinish, id }) => {
  const { t, i18n } = useTranslation('translation');
  const router = useRouter();
  const [userInput, setUserInput] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [message, setMessage] = useState('');
  const [continueButtonShow , setContinueButtonShow] = useState(false);
  useEffect(() => {
    // Fetch the question based on the ID from the URL or a parameter

    let jsonQuestions;
    switch (i18n.language) {
      case 'en':
        jsonQuestions = jsonJustePrixEn;
        break;
      case 'ch':
          jsonQuestions = jsonJustePrixCh;
          break;
      // Add more cases for other languages if needed
      default:
        jsonQuestions = jsonJustePrix;
    }

    const selectedQuestion = jsonQuestions.find((question) => question.id === parseInt(id, 10));

    if (selectedQuestion) {
      setCurrentQuestion(selectedQuestion);
      setMessage(''); // Clear previous messages when a new question is loaded
    } else {
      // Handle the case where the ID is not found
      console.error('Question not found for the provided ID.');
    }
  }, [router.query, router.locale, userInput]); // Added userInput to trigger useEffect when the user submits an answer

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Your logic for checking the answer
    const userAnswer = parseInt(userInput, 10);
    const correctAnswer = parseInt(currentQuestion.reponse, 10);




    if (!isNaN(userAnswer)) {
      if (userAnswer === correctAnswer) {
        setMessage(t('congratulations'));
        setContinueButtonShow(true)
      } else if (userAnswer < correctAnswer) {
        setMessage(t('incorrecthigher'));
      } else {
        setMessage(t('incorrectlower'));
      }

    } else {
      setMessage(t('incorrectnumber'));
    }
  };

  function continueButton() {
    setContinueButtonShow(false)
    onGameFinish(true);
  }

  return (

      <div className={"prix-container"}>
        <div className={styles.container}>
          <h1 className={"title"}>{t('rightpricename')}</h1>
          {currentQuestion ? (
              <div>
                <p>{currentQuestion.question}</p>
                <form onSubmit={handleSubmit}>
                  <label className={styles.label}>
                    {t('estimate')}
                    <input
                        type="number"
                        value={userInput}
                        onChange={handleInputChange}
                        className={styles.input}
                    />
                  </label>
                  <button type="submit" className={"language-button"}>
                    {t('submit')}
                  </button>
                </form>
                {continueButtonShow && <button id="continueButton" className={"language-button"} onClick={continueButton}>{t('continue')}</button>}
              </div>
          ) : (
              <p>t('questionnotloaded')</p>
          )}
          {message && <p className={styles.message}>{message}</p>}
        </div>
      </div>
  );
};

export default JustePrixPage;
