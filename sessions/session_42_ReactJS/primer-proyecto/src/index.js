import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/Style.css';
//import reportWebVitals from './reportWebVitals';

import Table from './components/Table';

import Menu from './components/Menu';
import Formtabla from './components/Form-tabla';
import Saludo from './components/Saludo';
import A from './components/ComponenteA';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Menu />

    <Table />

    <Formtabla />
    <Saludo />
    <Tabla />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

//reportWebVitals();
