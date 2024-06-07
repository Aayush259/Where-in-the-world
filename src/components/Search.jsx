import React, { useContext, useRef, useState } from "react";
import searchIconWhite from "../images/search-white.svg";
import searchIconDark from "../images/search-dark.svg";
import { useNavigate } from "react-router-dom";
import { Context } from "../context/Context.jsx";

function Search({ theme }) {

    // Getting  optionValue state and its setter function deom global context.
    const { optionValue, setOptionValue } = useContext(Context);

    // Navigate function to control navigation when input value or select value changes.
    const navigate = useNavigate();

    // Getting option and input element reference.
    const optionRef = useRef();
    const inputRef = useRef();

    // If the mode is light, then set the dark search icon, else set white search icon.
    let searchImg = theme === "light" ? searchIconDark : searchIconWhite;

    // This function handles navigation when the value of input or select gets changed.
    const handleNavigation = (param) => {
        navigate(param);
    };

    // This function handles the navigation based on the value of option.
    const handleOptionNavigation = () => {
        // Update the option value state.
        setOptionValue(optionRef.current.value);
        
        // If keywords are not present, means there is no input value, then include option value only, else include input value with option value to the URL.
        if (inputRef.current.value === '') {
            handleNavigation(`/filter/${optionRef.current.value}`);
        } else {
            handleNavigation(`/filter/${optionRef.current.value}/keywords/${inputRef.current.value}`);
        };
    };

    return (
        // Returning search (both search box and options).
        <>
        <div id="search" className="flex">
            <label htmlFor="country" className={`flex ${theme}-label`}>
                <img src={searchImg} alt="Search for a country" height={15} className={`${theme}-searchImg`}/>
                <input 
                    type="text" 
                    name="country" 
                    id="country" 
                    placeholder="Search for a country..." 
                    autoComplete="on"
                    ref={inputRef}
                    onChange={handleInputNavigation}
                />
            </label>
            <label htmlFor="region" className={`flex ${theme}-label`}>
                <select 
                    name="region" 
                    id="region" 
                    autoComplete="off"
                    value={optionValue}
                    ref={optionRef}
                    onChange={handleOptionNavigation}
                >
                        <option 
                            value="" 
                            className={`${theme}-label`}
                        >
                            Find by Region
                        </option>

                        <option 
                            value="Africa" 
                            className={`${theme}-label`}
                        >
                            Africa    
                        </option>

                        <option 
                            value="Americas"
                            className={`${theme}-label`}
                        >
                            America    
                        </option>

                        <option 
                            value="Asia" 
                            className={`${theme}-label`}
                        >
                            Asia    
                        </option>

                        <option 
                            value="Europe" 
                            className={`${theme}-label`}
                        >
                            Europe    
                        </option>

                        <option 
                            value="Oceania" 
                            className={`${theme}-label`}
                        >
                            Oceanic    
                        </option>
                </select>
            </label>
        </div>
        </>
    )
}

export default Search;