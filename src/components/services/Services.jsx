import React from 'react'
import './Services.scss'
import img1 from '../../assets/service-1.svg';
import img2 from '../../assets/service-2.svg';
import img3 from '../../assets/service-3.svg';
import { useTranslation } from 'react-i18next';

const Services = () => {
    const { t } = useTranslation()
    const data = [
        {
            id: 1,
            image: img1,
            title: t(`about.uiux`),
            description:
                "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
        },
        {
            id: 2,
            image: img2,
            title: t(`about.development`),
            description:
                "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
        },
        {
            id: 3,
            image: img3,
            title: t(`about.photography`),
            description:
                "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
        },
    ];
    return (
        <section className="services container section" id='services'>
            <h2 className="section_title">{t(`services.name`)}</h2>

            <div className="services_container grid">
                {
                    data.map(({ id, image, title, description }) => {
                        return (
                            <div className="services_card" key={id}>
                                <img src={image} alt="" className="services_img" />
                                <h3 className="services_title">{title}</h3>
                                <p className="services_description">{description}</p>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Services