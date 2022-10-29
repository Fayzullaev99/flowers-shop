import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import Container from '../../layout/Container'
import ProductCard from '../ProductCard'
import classes from './DisCountsCarousel.module.scss'
import 'swiper/css';
import 'swiper/css/navigation';
import './DiscountSlider.styles.scss'
import { useSelector } from 'react-redux';
function DisCountsCarousel() {
  const [data, setData] = useState(null)
  const {favorite} = useSelector(state=>state)
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:4000/discounts`)
      const discounts = await res.json()
      setData(discounts)
    }
    fetchData()
  }, [])
  return (
    <Container className={classes['discounts']}>
      <h2 className={classes['discounts__title']}>Special Discount</h2>
      {data && <Swiper
        slidesPerView={4}
        navigation={true}
        modules={[Navigation]}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}><ProductCard data={item} liked={item.id in favorite} /></SwiperSlide>
        ))
        }
      </Swiper>}
    </Container>
  )
}

export default DisCountsCarousel