import React, { useState } from 'react'
import './Portfolio.scss'
import Menu from './Menu'
import { FaLink } from "react-icons/fa";
const Portfolio = () => {
    const [isFilter, setIsFilter] = useState([]);
    const filterItem = (category) => {
        if (category !== '') {
            let filter = Menu.filter(i => i.category === category);
            setIsFilter(filter);
        } else {
            setIsFilter([]);
        }
    }
    return (
        <section className="work container section" id="portfolio">
            <h2 className="section_title">Recent Works</h2>

            <div className="work_filters">
                <span className="work_item" onClick={() => filterItem('')}>Everything</span>
                <span className="work_item" onClick={() => filterItem('Creative')}>Creative</span>
                <span className="work_item" onClick={() => filterItem('Art')}>Art</span>
                <span className="work_item" onClick={() => filterItem('Design')}>Design</span>
                <span className="work_item" onClick={() => filterItem('Branding')}>Branding</span>
            </div>
            <div className="work_container grid">
                {
                    isFilter.length === 0 ? Menu.map((value) => {
                        const { id, image, title, category } = value
                        return (
                            <div className="work_card" key={id}>
                                <div className="work_thumbnail">
                                    <img src={image} alt="" className='work_img' />
                                    <div className="work_mask"></div>
                                </div>

                                <span className="work_category">{category}</span>
                                <h3 className="work_title">{title}</h3>
                                <a href="/" className="work_button">
                                    <i className="work_button-icon"><FaLink /></i>
                                </a>
                            </div>
                        )
                    }) : isFilter.map((value) => {
                        const { id, image, title, category } = value
                        return (
                            <div className="work_card" key={id}>
                                <div className="work_thumbnail">
                                    <img src={image} alt="" className='work_img' />
                                    <div className="work_mask"></div>
                                </div>

                                <span className="work_category">{category}</span>
                                <h3 className="work_title">{title}</h3>
                                <a href="/" className="work_button">
                                    <i className="work_button-icon"><FaLink /></i>
                                </a>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio