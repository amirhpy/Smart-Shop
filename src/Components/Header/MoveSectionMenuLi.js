import React, { useRef } from 'react';
import { Link } from 'react-router-dom'

const MoveSectionMenuLi = ({ className, dataSection, innerTag }) => {
    const liRef = useRef(null)

    const moveSectionHandler = (event) => {
        event.preventDefault()

        let sectionClass = liRef.current.getAttribute('data-section')
        let sectionOffsetTop = document.querySelector(`.${sectionClass}`).offsetTop

        window.scrollTo({
            top: sectionOffsetTop - 20,
            behavior: 'smooth'
        })
    }
    
    return (
        <li onClick={moveSectionHandler} ref={liRef} className={className} data-section={dataSection}>
            <Link to='/'>{innerTag}</Link>
        </li>
    );
};

export default MoveSectionMenuLi;