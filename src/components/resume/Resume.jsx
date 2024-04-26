import React from 'react'
import './Resume.scss'
import DataResume from './DataResume'
import Card from './Card'
import { useTranslation } from 'react-i18next'
const Resume = () => {
    const { t } = useTranslation()
    return (
        <section className="resume container section" id="resume">
            <h2 className="section_title">{t(`experience.name`)}</h2>
            <div className="resume_container grid">
                <div className="timeline grid">
                    {
                        DataResume.map((value, index) => {
                            if (value.category === 'education') {
                                return (
                                    <Card
                                        key={index}
                                        icon={value.icon}
                                        title={value.title}
                                        year={value.year}
                                        desc={value.desc} />
                                )
                            }
                            return <></>;
                        })
                    }
                </div>
                <div className="timeline grid">
                    {
                        DataResume.map((value, index) => {
                            if (value.category === 'experience') {
                                return (
                                    <Card
                                        key={index}
                                        icon={value.icon}
                                        title={value.title}
                                        year={value.year}
                                        desc={value.desc} />
                                )
                            }
                            return <></>;
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Resume