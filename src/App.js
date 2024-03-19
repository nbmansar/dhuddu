import logo from './logo.svg';
import './App.css';
import Content from './content';
import Header from './Header';
import Footer from './Footer';
import AddItem from './AddItem'
import { useState } from 'react';

function App() {

  const [from,end]=useState("Ansar");
  const [newItem,setnewItem]=useState('');
  const [newSearch,setnewSearch] = useState('')

  const [data,setData] = useState(JSON.parse(localStorage.getItem('todo_list')));

const handleCheck = (id) => {
    const newVal = data.map((datas)=>datas.id === id ? {...datas,checked:!datas.checked}:datas);
    setData(newVal)
    localStorage.setItem("todo_list",JSON.stringify(newVal))
}

    const handleDelete = (id) =>{
        if(window.confirm("Are you want to Delete ?")){
        const delVal = data.filter(datas => datas.id !== id)
        setData(delVal);
    localStorage.setItem("todo_list",JSON.stringify(delVal))
        }
    }

    const handleAdd = (e) =>{
      e.preventDefault()
      addNewTodo(newItem,e)
     }

     const addNewTodo = (val)=>{
      const newTemp = {id: data.length + 1,'name':val,'checked':false};
      const listItem = [...data,newTemp]
      setData(listItem)
    localStorage.setItem("todo_list",JSON.stringify(listItem))
      setnewItem('')
     }

  function handleRandomValue(){
      const a = ['Afzal','Ariff','Akmal'];
      const b = Math.floor(Math.random()*3);
      end(a[b]);
  }

  function handleSearch(val){
    setnewSearch(val)
  }

  return (
    <div >
      <Header title="ToDo is Here"/>
      {/* <p onClick={()=>handleRandomValue()}>{from}</p> */}
      <br>  </br>
      <AddItem 
          handleAdd={handleAdd}
          newItem={newItem}
          setnewItem={setnewItem}
      handleSearch={handleSearch}
        />

      <Content 
      data={data.filter((item)=>
        (item.name.includes(newSearch.toLowerCase()))
        )}
      handleCheck={handleCheck}
      handleDelete={handleDelete}
      />
      <Footer 
        length={data.length}
        checkedLength={data.reduce((totalVal,arrVal)=>(arrVal.checked ? totalVal+1 : 0),0)}
      />
    </div>
  );
}

export default App;
