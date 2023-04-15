import React from 'react'

const simpleInput = ( { type, name, label, required, onChange } ) => {
  return (
    <div className='simpleInput'>
        <input
            type={type}
            name={name}
            required={required}

            onChange={onChange}
        />
        <label htmlFor={name} className='label-wrapper-simpleInput'>
            <span className='label-text-simpleInput'>
                {label}
            </span>
        </label>
    </div>
  )
}

export { simpleInput };