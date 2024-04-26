import React from 'react'
import './Blog.scss'
import Image1 from '../../assets/blog-1.svg'
import Image2 from '../../assets/blog-2.svg'
import Image3 from '../../assets/blog-3.svg'
import { useTranslation } from 'react-i18next'
const Blog = () => {
    const { t } = useTranslation()
    return (
        <section className="blog container section" id="blog">
            <h2 className="section_title">{t(`blog.name`)}</h2>

            <div className="blog_container grid">
                <div className="blog_card">
                    <div className="blog_thumb">
                        <a href="/"><img src={Image1} alt="" className='blog_img' /></a>
                    </div>
                    <div className="blog_details">
                        <h3 className="blog_title">{t(`blog.title1`)}</h3>
                        <div className="blog_meta">
                            <span className="blog_dot">{t(`blog.sub1`)}</span>
                            <span className="blog_author">{t(`home.name`)}</span>
                        </div>
                    </div>
                </div>


                <div className="blog_card">
                    <div className="blog_thumb">
                        <a href="/"><span className="blog_category">Tutorial</span></a>
                        <a href="/"><img src={Image2} alt="" className='blog_img' /></a>
                    </div>
                    <div className="blog_details">
                        <h3 className="blog_title">{t(`blog.title2`)}</h3>
                        <div className="blog_meta">
                            <span className="blog_dot">{t(`blog.sub2`)}</span>
                            <span className="blog_author">{t(`home.name`)}</span>
                        </div>
                    </div>
                </div>

                <div className="blog_card">
                    <div className="blog_thumb">
                        <a href="/"><span className="blog_category">Business</span></a>
                        <a href="/"><img src={Image3} alt="" className='blog_img' /></a>
                    </div>
                    <div className="blog_details">
                        <h3 className="blog_title">{t(`blog.title3`)}</h3>
                        <div className="blog_meta">
                            <span className="blog_dot">{t(`blog.sub3`)}</span>
                            <span className="blog_author">{t(`home.name`)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog