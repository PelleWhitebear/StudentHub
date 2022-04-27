import React from 'react';
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import App from './App';
import Button from "./Components/Global/Button";
import Image from "./Components/Global/Image";
import ImageBox from "./Components/Global/ImageBox";
import InputField from "./Components/Global/InputField";
import { OurTable, TableRow } from "./Components/Global/OurTable";
import Paper from "./Components/Global/Paper";
import Searchbar from "./Components/Global/Searchbar";
import SideBar from "./Components/Global/SideBar";
import SymbolButton from "./Components/Global/SymbolButton";
import Title from "./Components/Global/Title";

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
    Title
}

ReactDOM.render(
  
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);