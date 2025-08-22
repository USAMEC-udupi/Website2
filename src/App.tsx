import React from 'react';
import Institutions from './components/Institutions';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <Institutions />
    </LanguageProvider>
  );
}

export default App;
