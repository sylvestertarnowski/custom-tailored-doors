import React from 'react';
import './App.css';
import Main from './components/Main';
import MyProvider from './components/Context';

const App: React.FC = () => {
  return (
    <MyProvider>
      <Main />
    </MyProvider>
  )
}

export default App;
