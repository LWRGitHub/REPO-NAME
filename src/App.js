import React from 'react';
import './App.css';

import Title from './Title'



function App() {
  return (
    <div className="App">
      <Title text="Some Value" subtext="A string"/>
      <Title text="Another Value"/>
      <Title text="Hello World"/>
      <Title text="Foo Bar"/>
    </div>
  );
}

export default App;
