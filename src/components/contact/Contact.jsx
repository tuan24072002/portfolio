import React from 'react'
import './Contact.scss'
const Contact = () => {
    return (
        <section className="contact container section" id="contact">
            <h2 className="section_title">Get In Touch</h2>

            <div className="contact_container grid">
                <div className="contact_info">
                    <h3 className="contact_title">Let's talk about everything!</h3>
                    <p className="contact_details">Don't like forms? Send me an email.<span className='hover_text' data-hover="0995086534ts@gmail.com">👋</span></p>
                </div>

                <form action="" className="contact_form">
                    <div className="contact_form-group">
                        <div className="contact_form-div">
                            <input type="text" className="contact_form-input"
                                placeholder='Insert your Name' />
                        </div>
                        <div className="contact_form-div">
                            <input type="email" className="contact_form-input"
                                placeholder='Insert your Email' />
                        </div>
                    </div>
                    <div className="contact_form-div">
                        <input type="text" className="contact_form-input"
                            placeholder='Insert your Subject' />
                    </div>
                    <div className="contact_form-div contact_form-area">
                        <textarea name="" id="" cols="30" rows="10" className='contact_form-input' placeholder='Write your Message' />
                    </div>
                    <button className="btn">Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact