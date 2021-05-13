import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Header from './components/Header';
import Todo from './components/Todo';
import Footer from './components/Footer';


ReactDOM.render(
  <React.StrictMode>
    <App />
    <Header/>
    <Todo/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

