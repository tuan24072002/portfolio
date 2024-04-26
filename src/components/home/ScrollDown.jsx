import React from 'react'

const ScrollDown = (props) => {
    return (
        <div className="scroll_down">
            <a href="#about" className="mouse_wrapper">
                <span className="home_scroll-name">{props.t(`home.scroll`)}</span>
                <span className="mouse">
                    <span className="wheel"></span>
                </span>
            </a>
        </div>
    )
}

export default ScrollDown