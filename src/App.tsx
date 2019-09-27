import React, {createContext, useContext} from 'react';
import './App.css';
import Dashboard from "./pages/dashboard/Dashboard";

const App: React.FC = () => {
  return (
    <div className="App">
      <ThemeContext.Provider value={'John Doe'}>
        <Dashboard/>
      </ThemeContext.Provider>
    </div>
  );
};

const ThemeContext = createContext('');

export const useTheme = () => {
  return useContext(ThemeContext);
};

export default App;
