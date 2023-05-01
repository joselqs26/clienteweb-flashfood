import React from 'react'
import Label from '../Label';
import "./index.css"

const SimpleInput = ( { type, name, label, required, onChange } ) => {
  return (
    <div className='simpleInput'>
       
        <input 

            placeholder=' '
            type={type}
            name={name}
            required={required}

            onChange={onChange}
            className='regular-style'
        />
        <Label text={label}></Label>
        <div className='background'>
          
        </div>
    </div>
  )
}

export { SimpleInput };