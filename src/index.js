
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router/AppRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';
import LoginRouter from './router/LoginRouter';

ReactDOM.render(
<LoginRouter />, document.getElementById('root'));

// import Greetings from './Greetings';
// import './index.css';


// ReactDOM.render(<Greetings />, document.getElementById('root'));