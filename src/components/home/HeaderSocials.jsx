import React from 'react'
import { IoLogoInstagram, IoLogoFacebook, IoLogoGithub, IoLogoDiscord } from "react-icons/io5";
const HeaderSocials = () => {
    return (
        <div className="home_socials">
            <a href="https://www.github.com/" className="home_social-link"><IoLogoGithub /></a>
            <a href="https://www.facebook.com/" className="home_social-link" ><IoLogoFacebook /></a>
            <a href="https://www.instagram.com/" className="home_social-link"><IoLogoInstagram /></a>
            <a href="https://www.discord.com/" className="home_social-link"><IoLogoDiscord /></a>
        </div>
    )
}

export default HeaderSocials