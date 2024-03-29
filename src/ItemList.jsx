import React from 'react'
import ListItem from './ListItem';


 const ItemList = ({data,handleCheck,handleDelete}) => {
  return (
    <ul style={{display:'inline-grid'}}>
    {data.map((datas)=>(
        <ListItem
          datas={datas}
          key={datas.id}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
          />
    ))}
</ul>
  )
}

export default ItemList;
