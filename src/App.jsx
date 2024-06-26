import React, { useRef } from 'react';
import { useState, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { ContextProvider } from "./context/Context.jsx";
import './styles/style.css';
import Nav from './components/Nav';
import Error from './components/Error.jsx';

export default function App() {

  // Initializing the app theme with light.
  const [theme, setTheme] = useState('light');

  // Initializing countryData state to null.
  const [countryData, setCountryData] = useState(null);

  const [error, setError] = useState(null);

  // Getting region parameter from URL.
  const { region, keyword } = useParams();

  // State for region option value in Search.jsx. If region parameter is present then set it to its value, else set it to empty string.
  const [optionValue, setOptionValue] = useState(region ? region : '');

  // State for input value (keywords) in Search.jsx. If keyword parameter is present then set it to its value, else set it to empty string.
  const [inputValue, setInputValue] = useState(keyword ? keyword : '');

  // Controller reference for fetching api data.
  const controllerRef = useRef(null);

  // This functions toggle theme betwween light and dark.
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  }

  // When the theme is changes, reflect it to the body' background by adding a class of theme + "-body".
  useEffect(() => {
    document.body.className = theme + '-body';
  }, [theme]);

  // Fetching countryData from restcountries API and setting it to countryData state.
  useEffect(() => {

    // Initialize Abort Controller.
    const controller = new AbortController();
    controllerRef.current = controller;

    const URL = 'https://restcountries.com/v3.1/all?fields=name,flags,capital,region,population';

    fetch(URL, { signal: controller.signal })
    .then(response => response.json())
    .then(data => setCountryData(data))
    .catch(error => {
      console.log('error:', error);
      if (error.name === 'AbortError') return;  // Ignore abort errors.
      setError(<Error errorName={error.name} errorMessage={error.message} status={error.status ? error.status : ''} />)
    });

    // Cleanup and abort fetch if component unmounts.
    return () => {
      if (controllerRef.current) {
        controllerRef.current.abort();
      }
    };

  }, []);

  // Returning complete app.
  return (
    <>
    <div className={`app-${theme}`}>
      <ContextProvider value={{ theme, toggleTheme, countryData, setCountryData, optionValue, setOptionValue, inputValue, setInputValue, error }}>
        <Nav />
        <Outlet />
      </ContextProvider>
    </div>
    </>
  );
};