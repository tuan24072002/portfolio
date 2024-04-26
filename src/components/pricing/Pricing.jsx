import React from 'react'
import './Pricing.scss'
import img1 from '../../assets/price-1.svg'
import img2 from '../../assets/price-2.svg'
import img3 from '../../assets/price-3.svg'
import { useTranslation } from 'react-i18next'

const Pricing = () => {
    const { t } = useTranslation()
    return (
        <div className="section pricing container section">
            <h2 className="section_title">{t(`price.name`)}</h2>

            <div className="pricing_container grid">
                <div className="pricing_item">
                    <img src={img1} alt="" className="pricing_img" />
                    <h3 className="pricing_plan">{t(`price.title1`)}</h3>
                    <p className="pricing_title">{t(`price.desc1`)}</p>
                    <p className="pricing_support">{t(`price.sub1`)}</p>
                    <h3 className="price">
                        <em>$</em>5 <span>/ {t(`price.month`)}</span>
                    </h3>
                    <a href="/" className="button">{t(`price.started`)}</a>
                </div>
                <div className="pricing_item">
                    <span className="badge">{t(`price.recommend`)}</span>
                    <img src={img2} alt="" className="pricing_img" />
                    <h3 className="pricing_plan">{t(`price.title2`)}</h3>
                    <p className="pricing_title">{t(`price.desc2`)}</p>
                    <p className="pricing_support">{t(`price.sub2`)}</p>
                    <h3 className="price">
                        <em>$</em>15 <span>/ {t(`price.month`)}</span>
                    </h3>
                    <a href="/" className="button">{t(`price.started`)}</a>
                </div>
                <div className="pricing_item">
                    <img src={img3} alt="" className="pricing_img" />
                    <h3 className="pricing_plan">{t(`price.title3`)}</h3>
                    <p className="pricing_title">{t(`price.desc3`)}</p>
                    <p className="pricing_support">{t(`price.sub3`)}</p>
                    <h3 className="price">
                        <em>$</em>30 <span>/ {t(`price.month`)}</span>
                    </h3>
                    <a href="/" className="button">{t(`price.started`)}</a>
                </div>
            </div>
        </div>
    )
}

export default Pricing