import "./index.css"

const SecondaryButton = ( {value, onClick} ) => {
  return (
    <input className="boton-secundario"
      type='button'
      value={value}
      onClick={onClick}
    />
  )
}

export { SecondaryButton };