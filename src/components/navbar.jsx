import React from 'react';

export default function Navbar({ selectedLanguage, setSelectedLanguage }) {
    function changeLanguage() {
        setSelectedLanguage(selectedLanguage === "DE" ? "ENG" : "DE");
      }
    
      return (
        <button className='languagebutton' onClick={changeLanguage}>
          {selectedLanguage}
        </button>
      );
    }