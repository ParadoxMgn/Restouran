import React from 'react';
import '../css/Header.css';

export const Header = () => {
  return (
    <header>
      <div className="header__row">
        <div className="header__title">
          <a href='http://localhost:3000/'>
            <img src="./img/logo.svg" alt="Logo" />
            <h1>MRDonald’s</h1>
          </a>
        </div>
        <div className='header__sign'>
          <button>
            <img src="./img/sign.svg" alt="Logo" />
            <p>Войти</p>
          </button>
        </div>
      </div>
    </header>
  );
}