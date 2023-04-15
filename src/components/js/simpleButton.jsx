import React from 'react'

const simpleButton = ( {value, onClick} ) => {
  return (
    <input 
        type='button'
        value={value}
        onClick={onClick}
    />
  )
}

export { simpleButton };