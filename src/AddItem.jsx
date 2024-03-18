import React from 'react'

const AddItem = ({handleAdd}) => {
   
  return (
    <main>
        <input type="text" id="AddListItem" />
        <button type="button" className='btn btn-success' onClick={()=>{handleAdd()}}>Add</button>
    </main>
  )
}

export default AddItem