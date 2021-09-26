import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Header from './Components/Header/Header';

function App() {
  useEffect(()=>{
    fetch('./actors.JSON')
    .then(res=> res.json())
    .then(data => console.log(data));
  },[])
  return (
    <div className="apps">
      <Header></Header>
    </div>
  )


}
export default App;
