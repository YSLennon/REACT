import { useContext } from 'react';
import React from 'react';
import { LanguageContext } from './App';

function Header() {
  const language = useContext(LanguageContext);
  return (
    <header className="header">
      <h1>{language.language === 'en' ? 'Language Props Example' : '언어 프롭스 예시'}</h1>
      <button onClick={language.toggleLanguage}>
        {language.language === 'en' ? 'Switch to Korean' : '영어로 전환'}
      </button>
    </header>
  );
}

export default Header;
