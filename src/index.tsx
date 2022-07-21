import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import './styles/reset.scss';
import './styles/index.scss';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
   <App />
);

reportWebVitals();