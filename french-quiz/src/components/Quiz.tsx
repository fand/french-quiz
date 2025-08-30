import React, { useState, useEffect } from 'react';
import { Question } from '../types';
import { questions } from '../quizData';

const Quiz: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([]);
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);

  useEffect(() => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    setShuffledQuestions(shuffled);
  }, []);

  const currentQuestion = shuffledQuestions[currentQuestionIndex];

  const formatQuestion = (question: Question): string => {
    switch (question.type) {
      case 'conjugation':
        return `${question.subject} + "${question.verb}" (${question.tense})`;
      case 'gender-agreement':
        return `"${question.adjective}" + "${question.noun}"`;
      case 'number-agreement':
        return `"${question.adjective}" + "${question.noun}"`;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const correct = userAnswer.trim().toLowerCase() === currentQuestion.correctAnswer.toLowerCase();
    setIsCorrect(correct);
    setShowResult(true);
    
    if (correct) {
      setScore(score + 1);
    }
    
    setAnsweredQuestions([...answeredQuestions, currentQuestionIndex]);
  };

  const handleNext = () => {
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setUserAnswer('');
      setShowResult(false);
      setIsCorrect(null);
      setShowHint(false);
    }
  };

  const handleRestart = () => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    setShuffledQuestions(shuffled);
    setCurrentQuestionIndex(0);
    setScore(0);
    setUserAnswer('');
    setShowResult(false);
    setIsCorrect(null);
    setShowHint(false);
    setAnsweredQuestions([]);
  };

  if (shuffledQuestions.length === 0) {
    return <div>Loading...</div>;
  }

  if (currentQuestionIndex >= shuffledQuestions.length) {
    return (
      <div className="quiz-complete">
        <h2>Quiz terminé!</h2>
        <p className="final-score">
          Votre score: {score} / {shuffledQuestions.length}
        </p>
        <p className="percentage">
          {Math.round((score / shuffledQuestions.length) * 100)}% de réussite
        </p>
        <button onClick={handleRestart} className="restart-btn">
          Recommencer
        </button>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <div className="progress">
        <div className="progress-text">
          Question {currentQuestionIndex + 1} / {shuffledQuestions.length}
        </div>
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${((currentQuestionIndex + 1) / shuffledQuestions.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="score">Score: {score}</div>

      <div className="question-card">
        <h3 className="question">{formatQuestion(currentQuestion)}</h3>
        
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            placeholder="Votre réponse..."
            disabled={showResult}
            className="answer-input"
            autoFocus
          />
          
          <div className="button-group">
            {!showResult && (
              <>
                <button type="submit" className="submit-btn">
                  Vérifier
                </button>
                {currentQuestion.hint && (
                  <button 
                    type="button" 
                    onClick={() => setShowHint(!showHint)}
                    className="hint-btn"
                  >
                    {showHint ? 'Cacher' : 'Indice'}
                  </button>
                )}
              </>
            )}
          </div>
        </form>

        {showHint && currentQuestion.hint && !showResult && (
          <div className="hint">
            💡 {currentQuestion.hint}
          </div>
        )}

        {showResult && (
          <div className={`result ${isCorrect ? 'correct' : 'incorrect'}`}>
            {isCorrect ? (
              <p>✅ Correct!</p>
            ) : (
              <>
                <p>❌ Incorrect</p>
                <p>La bonne réponse est: <strong>{currentQuestion.correctAnswer}</strong></p>
              </>
            )}
            <button onClick={handleNext} className="next-btn">
              {currentQuestionIndex < shuffledQuestions.length - 1 ? 'Suivant' : 'Voir le résultat'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;