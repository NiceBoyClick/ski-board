import React from 'react';
import './App.css';
import './styles/pageStyle.css';
import Menu from "./menu/menu";
import {Button} from "antd";
import logo from './styles/logo.jpg';

function App() {
  return (
    <div className="page">
        <div className='header flex row center-row space-between'>
            <div className='center-text flex row logo'>
        <img src={logo}  alt='logo'/>
            </div>
            <div className='flex button-container'>
            <Button type={"primary"} className='button colorButton'>зарегистрироваться</Button>
            <Button className='button'>войти</Button>
            </div>
        </div>
           <Menu></Menu>
    </div>
  );
}

export default App;
