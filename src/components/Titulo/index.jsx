import React from "react";
import './index.css';


const Titulo = ({text}) => {
    return (
        <div className="titulo-container">
            <label> {text} </label>
        </div>
    )
};

export default Titulo;