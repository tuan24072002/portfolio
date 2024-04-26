import React from 'react'
import './Contact.scss'
import { useTranslation } from 'react-i18next'
const Contact = () => {
    const { t } = useTranslation();
    return (
        <section className="contact container section" id="contact">
            <h2 className="section_title">{t(`contact.name`)}</h2>

            <div className="contact_container grid">
                <div className="contact_info">
                    <h3 className="contact_title">{t(`contact.title`)}</h3>
                    <p className="contact_details">{t(`contact.sub`)}<span className='hover_text' data-hover="0995086534ts@gmail.com">👋</span></p>
                </div>

                <form action="" className="contact_form">
                    <div className="contact_form-group">
                        <div className="contact_form-div">
                            <input type="text" className="contact_form-input"
                                placeholder={t(`contact.ip1`)} />
                        </div>
                        <div className="contact_form-div">
                            <input type="email" className="contact_form-input"
                                placeholder={t(`contact.ip2`)} />
                        </div>
                    </div>
                    <div className="contact_form-div">
                        <input type="text" className="contact_form-input"
                            placeholder={t(`contact.ip3`)} />
                    </div>
                    <div className="contact_form-div contact_form-area">
                        <textarea name="" id="" cols="30" rows="10" className='contact_form-input' placeholder={t(`contact.ip4`)} />
                    </div>
                    <button className="button">{t(`contact.btn`)}</button>
                </form>
            </div>
        </section>
    )
}

export default Contact