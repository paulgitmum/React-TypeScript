import React from 'react';
import './App.css';
import Child from './components/Child'
import Hooks from './components/Hooks'

const App:React.FC = () => {
  return (
    <div className="App">
     <h1>React-TypeScript</h1>
     <Child name="This is child component" number={4} />
     <Hooks/>
    </div>
  );
}

export default App;
