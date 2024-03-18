import React from 'react'
import { FaTrashAlt } from 'react-icons/fa';

const ListItem = ({datas,handleCheck,handleDelete}) => {
  return (
    <li className='contentItem' key={datas.id}>
    <input type="checkbox" checked={datas.checked} onChange={()=>handleCheck(datas.id)}></input>
    <label style={(datas.checked) ? {textDecoration:'line-through'}:null}>{datas.name}</label>
    <FaTrashAlt role='button' onClick={()=>handleDelete(datas.id)}/>
</li>
  )
}

export default ListItem