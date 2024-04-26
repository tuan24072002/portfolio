import React, { useState } from 'react'
import './Sidebar.scss'
import logo from '../../assets/logo.svg'
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { IoHomeOutline, IoPersonOutline, IoBriefcaseOutline, IoSchoolOutline, IoCreateOutline, IoLayersOutline, IoChatbubbleEllipsesOutline, IoLanguage } from "react-icons/io5";
import Language from '../Language/Language';

const Sidebar = (props) => {
    const [isActive, setIsActive] = useState(1);
    const [show, setShow] = useState(false);
    return (
        <aside className='aside' data-theme={props.mode ? 'dark' : 'light'}>
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
                        <li className="nav_item" onClick={() => setShow(true)}>
                            <div className="nav_link language">
                                <IoLanguage />
                            </div>
                        </li>
                        <li className="nav_item" onClick={() => props.setMode(!props.mode)}>
                            <div className="nav_link toggle_mode" style={props.mode ? { color: '#f1c40f' } : { color: '#e74c3c ' }}>
                                {
                                    props.mode ? <MdLightMode /> : <MdDarkMode />
                                }
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="nav_footer">
                <span className="copyright">&copy; 2024</span>
            </div>
            <Language setShow={setShow} show={show} />
        </aside>
    )
}

export default Sidebar