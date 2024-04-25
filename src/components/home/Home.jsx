import React from 'react'
import './Home.scss'
import avt1 from '../../assets/avatar-1.svg'
import HeaderSocials from './HeaderSocials'
import ScrollDown from './ScrollDown'
import Shapes from './Shapes'

const Home = () => {
    return (
        <section className="home container" id='home'>
            <div className="intro">
                <img src={avt1} alt="" className='home_img' />
                <h1 className="home_name">Tran Le Anh Tuan</h1>
                <h3 className="home_education">I'm a <span className='change-text'></span></h3>
                <HeaderSocials />

                <a href="#contact" className="btn">Contact me</a>
                <ScrollDown />
            </div>
            <Shapes />
        </section>
    )
}

export default Home