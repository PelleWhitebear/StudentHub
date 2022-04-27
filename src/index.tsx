import React from 'react';
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import App from './App';

export const BACKEND_SERVICE_URL = "https://www.studenthub.bhsi.xyz/api/";


ReactDOM.render(
  
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);