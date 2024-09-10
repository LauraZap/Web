import { useState } from 'react'
import React, {useState} from 'react';
import App from '../App';

const NavigationBar = () => {
  return (
    <nav>
      <ul>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Acerca de</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
    </nav>
  );
};

export default NavigationBar;