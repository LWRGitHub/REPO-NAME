import React from 'react';
import logo from './logo.svg';
import './App.css';

function Title(props) {
  const sub =[<p key="a">Hello</p>, <p key="b">Hello</p>]//props.subtext
  return (
    <div>
      <h1>{props.text}</h1>
      {sub}
  </div>
  )
}

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
