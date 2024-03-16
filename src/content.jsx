import React from 'react';
import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const Content = () => {
    // const [count,setCount] = useState(3);
    // const [glow,notGlow] = useState(false);
    // function AnsMinus(){
    //     setCount(count-1)
    // }
    // function AnsPlus(){
    //     setCount(count+1)
    // }
    // function isGlow(){
    //     notGlow(!glow);
    // }

    // const [items, setItems] = useState([
    //     { name: 'Apple', category: 'Fruit' },
    //     { name: 'Banana', category: 'Fruit' },
    //     { name: 'Carrot', category: 'Vegetable' },
    //     { name: 'Orange', category: 'Fruit' },
    //     { name: 'Broccoli', category: 'Vegetable' },
    //     { name: 'Grapes', category: 'Fruit' }
    // ]);
    // const [filteredItems, setFilteredItems] = useState([]);

    // const getParamsDetail = (event) => {
    //     const val = event.target.value.toLowerCase();
    //     const filtered = items.filter((item) => {
    //         return item.name.toLowerCase().includes(val) || item.category.toLowerCase().includes(val);
    //     });
    //     setFilteredItems(filtered);
    // }

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

    return (
        <div className='TextTwist'>
         {/* <button onClick={()=>AnsMinus()}>-</button>
            <p>{count > 0 ? count:0}</p>
            <button onClick={()=>AnsPlus()}>+</button>
            <button onClick={()=>isGlow()}>{glow == true ? 'on':'off'}</button> */}

            {/* <input type="text" className='searchParams' onInput={getParamsDetail}></input>
            <ul>
                {filteredItems.map((fetchData, index) => (
                    <li key={index}>{fetchData.name}={fetchData.category}=<FaBeer /></li>
                ))}
            </ul> */}

            <ul>
                {data.map((datas)=>(
                    <li className='contentItem' key={datas.id}>
                        <input type="checkbox" checked={datas.checked} onChange={()=>handleCheck(datas.id)}></input>
                        <label style={(datas.checked) ? {textDecoration:'line-through'}:null}>{datas.name}</label>
                        <FaTrashAlt role='button' onClick={()=>handleDelete(datas.id)}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Content;
