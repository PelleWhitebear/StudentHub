import React from 'react';
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import App from './App';
import Button from "./component/Global/Button";
import Image from "./component/Global/Image";
import ImageBox from "./component/Global/ImageBox";
import InputField from "./component/Global/InputField";
import { OurTable, TableRow } from "./component/Global/OurTable";
import Paper from "./component/Global/Paper";
import Searchbar from "./component/Global/Searchbar";
import SideBar from "./component/Global/SideBar";
import SymbolButton from "./component/Global/SymbolButton";
import Title from "./component/Global/Title";
import LoginForm from './component/LoginForm/LoginForm';

export {
    Button,
    Image,
    ImageBox,
    InputField,
    OurTable,
    TableRow,
    Paper,
    Searchbar,
    SideBar,
    SymbolButton,
    Title,
    LoginForm
}

ReactDOM.render(
  
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);