import React from 'react';
import './App.css';
import Card from './components/Card/Card';
import CodeSnippet from './components/Code/Code';
import Input from './components/Input/Input';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="playground">
          <Card />
          <Input />
        </div>
        <div>
          <CodeSnippet />
        </div>
      </header>
    </div>
  );
}

export default App;
