import React from 'react'
import { FaFireAlt, FaCoffee, FaUserFriends } from "react-icons/fa";
const AboutBox = (props) => {
    const { t } = props
    return (
        <div className="about_boxes">
            <div className="about_box">
                <i className="about_icon"><FaFireAlt /></i>
                <div>
                    <h3 className="about_title">198</h3>
                    <span className="about_subtitle">{t(`about.completed`)}</span>
                </div>
            </div>
            <div className="about_box">
                <i className="about_icon"><FaCoffee /></i>
                <div>
                    <h3 className="about_title">5670</h3>
                    <span className="about_subtitle">{t(`about.coffee`)}</span>
                </div>
            </div>
            <div className="about_box">
                <i className="about_icon"><FaUserFriends /></i>
                <div>
                    <h3 className="about_title">427</h3>
                    <span className="about_subtitle">{t(`about.satisfied`)}</span>
                </div>
            </div>
        </div>
    )
}

export default AboutBox