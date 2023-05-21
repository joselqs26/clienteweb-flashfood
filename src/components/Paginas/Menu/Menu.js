import React, { useState } from "react";
import './Menu.css';
import { Link } from 'react-router-dom';

const Menu = ({ categorias }) => {
    const [isOpen, setIsOpen] = useState(false)

    function scrollToElement(id) {
        const element = document.getElementById(id);
        if (element) {
            const scrollPosition = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: scrollPosition - 80,
                behavior: 'smooth'
            });
        }
    }

    return (
        <div className="container-menu">
            <div className="nav-logo">Productos</div>

            <div className={`nav-items ${isOpen && "open"}`}>

                {categorias.map(cat => (
                    <Link key={cat} to={`/productos#${cat}`} onClick={() => {setTimeout(() => {
                        scrollToElement(cat)
                    }, 300)}}> {cat} </Link>
                ))}

            </div>

            <div className={`nav-toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
}

export default Menu;

