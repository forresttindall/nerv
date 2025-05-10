import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { IconContext } from '@phosphor-icons/react';
import { blastConfetti } from './utils/confetti';

// Add global event listener for Easter egg
document.addEventListener('DOMContentLoaded', () => {
  // Use event delegation to handle clicks on elements with id="pop"
  document.addEventListener('click', (event) => {
    if (event.target.id === 'pop' || event.target.closest('#pop')) {
      blastConfetti();
    }
  });
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <IconContext.Provider 
      value={{
        size: 24,
        weight: "regular",
        mirrored: false,
      }}
    >
      <App />
    </IconContext.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
