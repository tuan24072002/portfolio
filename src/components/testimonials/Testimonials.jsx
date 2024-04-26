import React from 'react'
import './Testimonials.scss'
import DataTestimonials from './DataTestimonials'

import { useTranslation } from 'react-i18next';

const Testimonials = () => {
    const { t } = useTranslation();
    return (
        <section className="testimonials container section">
            <h2 className="section_title">{t(`review.name`)}</h2>
            <DataTestimonials />
        </section>
    )
}

export default Testimonials