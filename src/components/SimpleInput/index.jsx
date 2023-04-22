import React from 'react'
import Label from '../Label';
import "./index.css"

const SimpleInput = ( { type, name, label, required, onChange } ) => {
  return (
    <div className='simpleInput'>
        <Label text={label}></Label>
        <input
            type={type}
            name={name}
            required={required}

            onChange={onChange}
            className='regular-style'
        />
    </div>
  )
}

export { SimpleInput };