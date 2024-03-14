import logo from './logo.svg';
import './App.css';
import Content from './content';
import Header from './Header';
import Footer from './Footer';
import { useState } from 'react';
function App() {

  const [from,end]=useState("Ansar");



  function handleRandomValue(){
      const a = ['Afzal','Ariff','Akmal'];
      const b = Math.floor(Math.random()*3);
      end(a[b]);
  }

  const name = "Ansar";
  return (
    <div>
      <Header />
      <p onClick={()=>handleRandomValue()}>{from}</p>
      <Content />
      <Footer />
    </div>
  );
}

export default App;
