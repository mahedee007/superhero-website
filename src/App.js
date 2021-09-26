import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  useEffect(()=>{
    fetch('./actors.JSON')
    .then(res=> res.json())
    .then(data => console.log(data));
  },[])
  return (
    <div>
      <h1>Hello world</h1>
    </div>
  )


}
export default App;
