import { useTranslation } from 'react-i18next';
import Image1 from '../../assets/avatar-1.svg'
import Image3 from '../../assets/avatar-3.svg'
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
const DataTestimonials = () => {
    const { t } = useTranslation();
    const data = [
        {
            id: 1,
            image: Image1,
            title: "John Doe",
            subtitle: t('review.sub'),
            comment: t('review.comment'),
        },
        {
            id: 2,
            image: Image3,
            title: "John Doe",
            subtitle: t('review.sub'),
            comment: t('review.comment'),
        },
    ];
    return (
        <Swiper className="testimonials_container grid"
            modules={[Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            grabCursor={true}
            autoplay={true}
            pagination={{ clickable: true }}>
            {
                data.map(({ id, image, title, subtitle, comment }) => {
                    return (
                        <SwiperSlide className="testimonials_item" key={id}>
                            <div className="thumb">
                                <img src={image} alt="" />
                            </div>
                            <h3 className="testimonials_title">{title}</h3>
                            <span className='subtitle'>{subtitle}</span>
                            <div className="comment">{comment}</div>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    )
}

export default DataTestimonials