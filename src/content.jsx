import React from 'react';
import ItemList from './ItemList';
import AddItem from './AddItem';

const Content = ({data,handleCheck,handleDelete}) => {
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

    
    return (
        <div className='TextTwist' style={{margin: 'auto',display:'flex',justifyContent: 'center',height: '50vh',overflowY:'scroll',width: '30%',marginTop:'20px'}} >
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


        {data.length !== 0 ?
           <ItemList 
           data={data}
      handleCheck={handleCheck}
      handleDelete={handleDelete}
           />
    :
   <p>No Record found</p> 
}

        </div>
    )
}

export default Content;
