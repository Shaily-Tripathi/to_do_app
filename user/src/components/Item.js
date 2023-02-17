 import React from 'react'
 
 export default function Item({text, remove, update}) {
   return (
     <div className='item'>
     <div className='text'>{text}</div>
     <div className='icons'>
     <i className="ri-edit-2-fill" onClick={update}></i>
     <i className="ri-delete-bin-6-fill" onClick={remove}></i>
     </div>
       
     </div>
   )
 }
 