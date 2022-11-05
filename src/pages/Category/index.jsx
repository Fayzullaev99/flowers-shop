import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'
import DisCountsCarousel from '../../components/DisCountsCarousel'
import Header from '../../components/Header'
import ProductCard from '../../components/ProductCard'
import Container from '../../layout/Container'
import categories from '../../routes/categories'
import Title from '../../Title'
import classes from './Category.module.scss'
function Category() {
  const {productPage} = useParams()
  const {pathname} = useLocation()
  const [data, setData] = useState(null)
  const {favorite,cart:cartItems}= useSelector(state=>state)
  const {text:title} = categories.find(item => item.link === pathname)
  useEffect(()=>{
    const fetchData = async() => {
      const data = await fetch(`${process.env.REACT_APP_API_URL}/flowershop_items?category=${productPage}`)
      const cards = await data.json()
      setData(cards)
    }
    fetchData()
  },[productPage])
  return (
    <>
      <Header />
      {title && <Title>{title}</Title>}
      <Container className={classes['cards']}>
        {data && data.map((card) => (
          <ProductCard key={card.id} className={classes['card-item']} data={card} liked={card.id in favorite} selected={card.id in cartItems} />
        ))}
      </Container>
      <DisCountsCarousel />
    </>
  )
}

export default Category