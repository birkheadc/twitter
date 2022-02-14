import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'
import Counter from './components/counter';
import Feed from './components/feed';

ReactDOM.render(
  <Feed />,
  document.getElementById('feed')
);
