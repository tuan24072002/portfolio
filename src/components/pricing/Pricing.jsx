import React from 'react'
import './Pricing.scss'
import img1 from '../../assets/price-1.svg'
import img2 from '../../assets/price-2.svg'
import img3 from '../../assets/price-3.svg'

const Pricing = () => {
    return (
        <div className="section pricing container section">
            <h2 className="section_title">Pricing Plans</h2>

            <div className="pricing_container grid">
                <div className="pricing_item">
                    <img src={img1} alt="" className="pricing_img" />
                    <h3 className="pricing_plan">Basic</h3>
                    <p className="pricing_title">A Simple option but powerful to manage your business</p>
                    <p className="pricing_support">Email support</p>
                    <h3 className="price">
                        <em>$</em>5 <span>Month</span>
                    </h3>
                    <a href="/" className="btn">Get Started</a>
                </div>
                <div className="pricing_item">
                    <span className="badge">Recommended</span>
                    <img src={img2} alt="" className="pricing_img" />
                    <h3 className="pricing_plan">Premium</h3>
                    <p className="pricing_title">Unlimited product including app integration and more features</p>
                    <p className="pricing_support">Mon-Fri support</p>
                    <h3 className="price">
                        <em>$</em>15 <span>Month</span>
                    </h3>
                    <a href="/" className="btn">Get Started</a>
                </div>
                <div className="pricing_item">
                    <img src={img3} alt="" className="pricing_img" />
                    <h3 className="pricing_plan">Ultimate</h3>
                    <p className="pricing_title">A wise option for large companies and individuals</p>
                    <p className="pricing_support">24/7 support</p>
                    <h3 className="price">
                        <em>$</em>30 <span>Month</span>
                    </h3>
                    <a href="/" className="btn">Get Started</a>
                </div>
            </div>
        </div>
    )
}

export default Pricing