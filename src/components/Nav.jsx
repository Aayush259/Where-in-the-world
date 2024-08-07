import React from 'react';
import { useCountryDataContext } from '../context/Context.jsx';
import darkModeDisabledImg from '../images/dark-mode-disabled.svg';
import darkModeEnabledImg from '../images/dark-mode-enabled.svg';
import '../styles/header.css';

export default function Nav() {

    const {theme, toggleTheme} = useCountryDataContext();

    // If the theme is "light" then set imgURL to darkModeDisabledImg, else set it to darkModeEnabledImg.
    let imgURL = theme === 'light' ? darkModeDisabledImg : darkModeEnabledImg;

    // Returning Nav bar.
    return (
        <>
        <header id='header' className={`flex ${theme}-header`}>
            <h1 className='bold-800'>Where in the world?</h1>
            <button id='mode' className='flex bold-600' onClick={toggleTheme}>
                <img src={imgURL} alt='Change Theme' id='themeImg' />
                Dark Mode
            </button>
        </header>
        </>
    );
};
