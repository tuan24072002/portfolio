import React from 'react'
import './About.scss'
import logo from '../../assets/avatar-2.svg'
import AboutBox from './AboutBox'
import { useTranslation } from 'react-i18next'

const About = () => {
    const { t } = useTranslation();
    return (
        <section className="about container" id='about'>
            <h2 className="section_title">{t(`about.name`)}</h2>
            <div className="about_container grid">
                <img src={logo} alt="" className="about_img" />
                <div className="about_data grid">
                    <div className="about_info">
                        <p className="about_description">{t(`about.desc`)}</p>
                        <a href="#home" className="button">{t(`about.download`)}</a>
                    </div>
                    <div className="about_skills grid">
                        <div className="skills_data">
                            <div className="skills_titles">
                                <h3 className="skills_name">{t(`about.development`)}</h3>
                                <span className="skills_number">90%</span>
                            </div>

                            <div className="skills_bar">
                                <span className="skills_percentage development"></span>
                            </div>
                        </div>

                        <div className="skills_data">
                            <div className="skills_titles">
                                <h3 className="skills_name">{t(`about.uiux`)}</h3>
                                <span className="skills_number ">80%</span>
                            </div>

                            <div className="skills_bar">
                                <span className="skills_percentage ui_design"></span>
                            </div>
                        </div>

                        <div className="skills_data">
                            <div className="skills_titles">
                                <h3 className="skills_name">{t(`about.photography`)}</h3>
                                <span className="skills_number">60%</span>
                            </div>

                            <div className="skills_bar">
                                <span className="skills_percentage photography"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AboutBox t={t} />
        </section>
    )
}

export default About