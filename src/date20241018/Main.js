import { useContext } from 'react';
import React from 'react';
import { LanguageContext } from './App';

function Main() {
  const language = useContext(LanguageContext);
  return (
    <main className="main">
      {language.language === 'en' ? (
        <p>This is an example of using React Props to switch languages.</p>
      ) : (
        <p>React Props를 사용하여 언어를 전환하는 예시입니다.</p>
      )}
    </main>
  );
}

export default Main;
