import React from 'react'

const AddItem = ({handleAdd,newItem,setnewItem,handleSearch}) => {
   
  return (
    <main style={{margin: 'auto',display:'flex',justifyContent: 'center'}}>
      <form id="newItemAdd">
        <input type="text"
        autoFocus
        value={newItem}
         id="AddListItem"  
         onChange={(e)=>{setnewItem(e.target.value)}}
         />
        <button type="submit" className='btn btn-success' value={newItem} onClick={(e)=>{handleAdd(e)}}>Add</button>
        </form><br></br>
        <div style={{marginTop:'30px'}}>
        <input 
        type='text'
        onChange={(e)=>{handleSearch(e.target.value)}}
        style={{width:'100px'}}
        placeholder='search Todo'
        />
        </div>
    </main>
  )
}

export default AddItem