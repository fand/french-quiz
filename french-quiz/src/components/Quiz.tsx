import React, { useState, useEffect, useRef } from 'react';
import { Question } from '../types';
import { questions } from '../quizData';
import { generateOptions } from '../utils/generateOptions';

interface QuizProps {
  quizMode: 'typing' | 'multiple';
}

const Quiz: React.FC<QuizProps> = ({ quizMode }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([]);
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
  const [multipleChoiceOptions, setMultipleChoiceOptions] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5).slice(0, 10);
    setShuffledQuestions(shuffled);
  }, []);

  const currentQuestion = shuffledQuestions[currentQuestionIndex];

  useEffect(() => {
    if (currentQuestion && quizMode === 'multiple') {
      const options = generateOptions(currentQuestion);
      setMultipleChoiceOptions(options);
      setSelectedOption('');
    }
  }, [currentQuestionIndex, quizMode, currentQuestion]);

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
    
    if (showResult) {
      handleNext();
      return;
    }
    
    const answer = quizMode === 'typing' ? userAnswer.trim() : selectedOption;
    const correct = answer.toLowerCase() === currentQuestion.correctAnswer.toLowerCase();
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
      setSelectedOption('');
      setShowResult(false);
      setIsCorrect(null);
      setShowHint(false);
      if (quizMode === 'typing') {
        setTimeout(() => {
          inputRef.current?.focus();
        }, 0);
      }
    }
  };

  const handleRestart = () => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5).slice(0, 10);
    setShuffledQuestions(shuffled);
    setCurrentQuestionIndex(0);
    setScore(0);
    setUserAnswer('');
    setSelectedOption('');
    setShowResult(false);
    setIsCorrect(null);
    setShowHint(false);
    setAnsweredQuestions([]);
  };

  useEffect(() => {
    setUserAnswer('');
    setSelectedOption('');
    setShowResult(false);
    setIsCorrect(null);
    setShowHint(false);
  }, [quizMode]);

  const handleOptionSelect = (option: string) => {
    if (!showResult) {
      setSelectedOption(option);
      const correct = option.toLowerCase() === currentQuestion.correctAnswer.toLowerCase();
      setIsCorrect(correct);
      setShowResult(true);
      
      if (correct) {
        setScore(score + 1);
      }
      
      setAnsweredQuestions([...answeredQuestions, currentQuestionIndex]);
      
      // Auto-advance after delay in multiple choice mode
      setTimeout(() => {
        if (currentQuestionIndex < shuffledQuestions.length - 1) {
          handleNext();
        }
      }, 1500);
    }
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
          {quizMode === 'typing' ? (
            <>
              <input
                type="text"
                ref={inputRef}
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                placeholder="Votre réponse..."
                disabled={showResult}
                className="answer-input"
                autoFocus
              />
            </>
          ) : (
            <div className="multiple-choice-options">
              {multipleChoiceOptions.map((option, index) => (
                <button
                  key={index}
                  type="button"
                  className={`option-btn ${selectedOption === option ? 'selected' : ''} ${
                    showResult && option === currentQuestion.correctAnswer ? 'correct' : ''
                  } ${
                    showResult && option === selectedOption && !isCorrect ? 'incorrect' : ''
                  }`}
                  onClick={() => handleOptionSelect(option)}
                  disabled={showResult}
                >
                  {String.fromCharCode(65 + index)}. {option}
                </button>
              ))}
            </div>
          )}
          
          <div className="button-group">
            {!showResult && quizMode === 'typing' && (
              <>
                <button 
                  type="submit" 
                  className="submit-btn"
                >
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

        {showResult && quizMode === 'typing' && (
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
        
        {showResult && quizMode === 'multiple' && (
          <div className="result-message">
            {isCorrect ? '✅ Correct!' : '❌ Incorrect'}
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;