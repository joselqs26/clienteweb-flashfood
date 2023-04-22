import "./index.css"

const SimpleButton = ( {value, onClick} ) => {
  return (
    <input className="boton"
      type='button'
      value={value}
      onClick={onClick}
    />
  )
}

export { SimpleButton };