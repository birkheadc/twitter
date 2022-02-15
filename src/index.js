import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'
import Counter from './components/counter';
import Feed from './components/feed';
import Session from './components/session';

ReactDOM.render(
  <Feed />,
  document.getElementById('feed')
);

ReactDOM.render(
  <Session />,
  document.getElementById('session')
);
