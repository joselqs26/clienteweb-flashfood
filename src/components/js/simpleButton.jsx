import React from 'react'

const SimpleButton = ( {value, onClick} ) => {
  return (
    <input 
        type='button'
        value={value}
        onClick={onClick}
    />
  )
}

export { SimpleButton };