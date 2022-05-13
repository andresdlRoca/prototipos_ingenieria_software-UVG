import React, { useState } from 'react'
import './side-bar-style.css'
import { FaInbox, FaCog, FaQuestion, FaExclamationTriangle, FaShoppingBag, FaBookmark, FaBriefcase } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const NewSideBar = () => {
    const [isHidden, setIsHidden] = useState(false)
    return (
        <div id={(isHidden) ? "main-wrapper-side-bar-shown" : "main-wrapper-side-bar-hidden"} onClick={() => setIsHidden(!isHidden)}>
            <div id="space-for-star-ratting-side-bar">
                <div className='star-rate-on-side-bar' />
                <div className='star-rate-on-side-bar' />
                <div className='star-rate-on-side-bar' />
                <div className='star-rate-on-side-bar' />
                <div className='star-rate-on-side-bar' />
            </div>
            <ul id="side-bar-list">
                <li className='item-side-bar-container'>
                    <Link className='item-on-side-bar' to="/bandeja-de-entrada">
                        <p>Bandeja de entrada</p>
                        <FaInbox className='icon-on-item-side-bar' />
                    </Link>
                </li>

                <li className='item-side-bar-container'>
                    <Link className='item-on-side-bar' to="/">
                        <p>Mis compras</p>
                        <FaShoppingBag className='icon-on-item-side-bar' />
                    </Link>
                </li>
                <li className='item-side-bar-container'>
                    <Link className='item-on-side-bar' to="/articulos-publicados">
                        <p>Artículos publicados</p>
                        <FaBriefcase className='icon-on-item-side-bar' />
                    </Link>
                </li>
                <li className='item-side-bar-container'>
                    <Link className='item-on-side-bar' to="/favorites">
                        <p>Guardados</p>
                        <FaBookmark className='icon-on-item-side-bar' />
                    </Link>
                </li>
            </ul>
            <div id="app-ajustment-options">
                <Link to="/ajustes" className='new-link'><FaCog /> </Link>
                <Link to="/ayuda" className='new-link'><FaQuestion /> </Link>
                <Link to="/report" className='new-link'><FaExclamationTriangle /></Link>
            </div>
        </div>
    )
}
export default NewSideBar