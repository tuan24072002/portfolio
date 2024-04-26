import React from 'react'
import './Home.scss'
import avt1 from '../../assets/avatar-1.svg'
import HeaderSocials from './HeaderSocials'
import ScrollDown from './ScrollDown'
import Shapes from './Shapes'
import { useTranslation } from 'react-i18next'

const Home = () => {
    const { t } = useTranslation()
    return (
        <section className="home container" id='home'>
            <div className="intro">
                <img src={avt1} alt="" className='home_img' />
                <h1 className="home_name">{t(`home.name`)}</h1>
                <h3 className="home_education">{t(`home.iam`)} <span className='change-text'></span></h3>
                <HeaderSocials />

                <a href="#contact" className="button">{t(`home.contact`)}</a>
                <ScrollDown t={t} />
            </div>
            <Shapes />
        </section>
    )
}

export default Home