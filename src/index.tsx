import React from 'react';
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import App from './App';
import Button from "./components/Global/Button";
import Image from "./components/Global/Image";
import ImageBox from "./components/Global/ImageBox";
import InputField from "./components/Global/InputField";
import { OurTable, TableRow } from "./components/Global/OurTable";
import Paper from "./components/Global/Paper";
import Searchbar from "./components/Global/Searchbar";
import SideBar from "./components/Global/SideBar";
import Title from "./components/Global/Title";
import SymbolButton from "./components/Global/SymbolButton";
import LoginForm from "./components/LoginForm/LoginForm";


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
    Title,
    SymbolButton,
    LoginForm
}

ReactDOM.render(
  
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);