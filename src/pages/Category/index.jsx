import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../components/Header'
import ProductCard from '../../components/ProductCard'
import Container from '../../layout/Container'
import classes from './Category.module.scss'
function Category() {
  const {productPage} = useParams()
  const [data, setData] = useState(null)
  
  useEffect(()=>{
    const fetchData = async() => {
      const data = await fetch(`http://localhost:4000/products?category=${productPage}`)
      const cards = await data.json()
      setData(cards)
    }
    fetchData()
  },[productPage])
  return (
    <>
      <Header />
      <Container className={classes['cards']}>
        {data && data.map((card) => (
          <ProductCard key={card.id} className={classes['card-item']} data={card} />
        ))}
      </Container>
    </>
  )
}

export default Category