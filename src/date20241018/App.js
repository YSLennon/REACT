import React, { createContext, useContext, useState } from 'react';
import Page from './Page';

const language ={
  en: 'en',
  ko: 'ko'
}

let toggleLanguage = null;
export const LanguageContext = React.createContext(language, toggleLanguage);

function App() {
  const [language, setLanguage] = useState('ko'); 

  toggleLanguage = () => {
    setLanguage(prevLang => (prevLang === 'en' ? 'ko' : 'en'));
  };

  return (
    <div className="app">
      <LanguageContext.Provider value={{language, toggleLanguage}}> 
        <Page />
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
