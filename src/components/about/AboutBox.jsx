import React from 'react'
import { FaFireAlt, FaCoffee, FaUserFriends } from "react-icons/fa";
const AboutBox = () => {
    return (
        <div className="about_boxes">
            <div className="about_box">
                <i className="about_icon"><FaFireAlt /></i>
                <div>
                    <h3 className="about_title">198</h3>
                    <span className="about_subtitle">Project completed</span>
                </div>
            </div>
            <div className="about_box">
                <i className="about_icon"><FaCoffee /></i>
                <div>
                    <h3 className="about_title">5670</h3>
                    <span className="about_subtitle">Cup of coffee</span>
                </div>
            </div>
            <div className="about_box">
                <i className="about_icon"><FaUserFriends /></i>
                <div>
                    <h3 className="about_title">427</h3>
                    <span className="about_subtitle">Satisfied clients</span>
                </div>
            </div>
        </div>
    )
}

export default AboutBox