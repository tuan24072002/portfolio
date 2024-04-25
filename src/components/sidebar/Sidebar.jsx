import React, { useState } from 'react'
import './Sidebar.scss'
import logo from '../../assets/logo.svg'
import { IoHomeOutline, IoPersonOutline, IoBriefcaseOutline, IoSchoolOutline, IoCreateOutline, IoLayersOutline, IoChatbubbleEllipsesOutline } from "react-icons/io5";
const Sidebar = () => {
    const [isActive, setIsActive] = useState(1);
    return (
        <aside className='aside'>
            <a href='#home' className='nav_logo'>
                <img src={logo} alt='' />
            </a>
            <nav className="nav">
                <div className="nav_menu">
                    <ul className="nav_list">
                        <li className="nav_item" onClick={() => setIsActive(1)}>
                            <a href="#home" className={`nav_link ${isActive === 1 && 'active'}`}>
                                <i className="icon-home"><IoHomeOutline /></i>
                            </a>
                        </li>
                        <li className="nav_item" onClick={() => setIsActive(2)}>
                            <a href="#about" className={`nav_link ${isActive === 2 && 'active'}`}>
                                <i className='icon-user-following'><IoPersonOutline /></i>
                            </a>
                        </li>
                        <li className="nav_item" onClick={() => setIsActive(3)}>
                            <a href="#services" className={`nav_link ${isActive === 3 && 'active'}`}>
                                <i className="icon-briefcase"><IoBriefcaseOutline /></i>
                            </a>
                        </li>
                        <li className="nav_item" onClick={() => setIsActive(4)}>
                            <a href="#resume" className={`nav_link ${isActive === 4 && 'active'}`}>
                                <i className="icon-graduation"><IoSchoolOutline /></i>
                            </a>
                        </li>
                        <li className="nav_item" onClick={() => setIsActive(5)}>
                            <a href="#portfolio" className={`nav_link ${isActive === 5 && 'active'}`}>
                                <i className="icon-layers"><IoLayersOutline /></i>
                            </a>
                        </li>
                        <li className="nav_item" onClick={() => setIsActive(6)}>
                            <a href="#blog" className={`nav_link ${isActive === 6 && 'active'}`}>
                                <i className="icon-note"><IoCreateOutline /></i>
                            </a>
                        </li>
                        <li className="nav_item" onClick={() => setIsActive(7)}>
                            <a href="#contact" className={`nav_link ${isActive === 7 && 'active'}`}>
                                <i className="icon-bubble"><IoChatbubbleEllipsesOutline /></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="nav_footer">
                <span className="copyright">&copy; 2024</span>
            </div>
        </aside>
    )
}

export default Sidebar