import React from 'react';
import Quiz from './components/Quiz';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>Quiz de Français</h1>
        <p>Pratiquez la conjugaison et l'accord en genre et nombre</p>
      </header>
      <main>
        <Quiz />
      </main>
    </div>
  );
}

export default App;