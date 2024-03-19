import React from 'react'
import { FaTrashAlt } from 'react-icons/fa';

const ListItem = ({datas,handleCheck,handleDelete}) => {
  return (
    <li className='contentItem' key={datas.id}style={{
      listStyle: 'none',
      padding: '5px',
      display: 'inline-flex',
      gap: '40px',
      background: '#e3dfdf',
      width: 'auto',
      borderRadius: '5px',
      margin:'10px'
    }}>
    <input type="checkbox" checked={datas.checked} onChange={()=>handleCheck(datas.id)}></input>
    <label style={(datas.checked) ? {textDecoration:'line-through'}:null}>{datas.name}</label>
    <FaTrashAlt role='button' onClick={()=>handleDelete(datas.id)}/>
</li>
  )
}

export default ListItem