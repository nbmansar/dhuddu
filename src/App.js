import logo from './logo.svg';
import './App.css';
import Content from './content';
import Header from './Header';
import Footer from './Footer';
import AddItem from './AddItem'
import { useState } from 'react';

function App() {

  const [from,end]=useState("Ansar");

  const [data,setData] = useState([
    {
        'id':1,
        'name':'Ansar',
        'checked':false
    },
    {
        'id':2,
        'name':'Ariff',
        'checked':true
    },{
      'id':3,
      'name':'Apsal',
      'checked':true
  },{
    'id':4,
    'name':'Akmal',
    'checked':true
}
]);

const handleCheck = (id) => {
    const newVal = data.map((datas)=>datas.id === id ? {...datas,checked:!datas.checked}:datas);
    setData(newVal)
}

    const handleDelete = (id) =>{
        if(window.confirm("Are you want to Delete ?")){
        const delVal = data.filter(datas => datas.id !== id)
        setData(delVal);
        }
    }

    const handleAdd = (event) =>{
         console.log(event.target.value)
}

  function handleRandomValue(){
      const a = ['Afzal','Ariff','Akmal'];
      const b = Math.floor(Math.random()*3);
      end(a[b]);
  }

  const name = "Ansar";
  return (
    <div>
      <Header title="Ansar is Here"/>
      <p onClick={()=>handleRandomValue()}>{from}</p>
      <Content 
      data={data}
      handleCheck={handleCheck}
      handleDelete={handleDelete}
      handleAdd={handleAdd}
      />
      <Footer 
        length={data.length}
      />
    </div>
  );
}

export default App;
