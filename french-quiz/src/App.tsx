import React, { useState } from 'react';
import Quiz from './components/Quiz';
import './App.css';

function App() {
  const [quizMode, setQuizMode] = useState<'typing' | 'multiple'>('multiple');
  const [showMenu, setShowMenu] = useState(false);

  const handleModeToggle = () => {
    setQuizMode(prev => prev === 'typing' ? 'multiple' : 'typing');
  };

  return (
    <div className="App">
      <div className="global-menu">
        <button 
          className="hamburger-menu-global"
          onClick={() => setShowMenu(!showMenu)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        {showMenu && (
          <div className="menu-dropdown-global">
            <div className="menu-item">
              <span>Mode de quiz :</span>
              <div className="mode-buttons">
                <button 
                  className={`mode-btn-small ${quizMode === 'typing' ? 'active' : ''}`}
                  onClick={() => {
                    setQuizMode('typing');
                    setShowMenu(false);
                  }}
                >
                  Saisie
                </button>
                <button 
                  className={`mode-btn-small ${quizMode === 'multiple' ? 'active' : ''}`}
                  onClick={() => {
                    setQuizMode('multiple');
                    setShowMenu(false);
                  }}
                >
                  QCM
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <header className="app-header">
        <h1>Quiz de Français</h1>
        <p>Pratiquez la conjugaison et l'accord en genre et nombre</p>
      </header>
      <main>
        <Quiz quizMode={quizMode} />
      </main>
    </div>
  );
}

export default App;