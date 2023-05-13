import React,{useState}from "react";
import './Menu.css';
import {Link} from 'react-router-dom';

const Menu = ({categorias}) =>{

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="container-menu">
            <div className="nav-logo">PRODUCTOS</div>
            
            <div className= {`nav-items ${isOpen && "open"}`}>
              
                {  categorias.map(  cat => (<Link key={cat} to={"#"+ cat}> {cat} </Link> ))}

            </div>

            <div className={`nav-toggle ${isOpen && "open"}`} onClick={()=> setIsOpen (!isOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
}

export default Menu;

