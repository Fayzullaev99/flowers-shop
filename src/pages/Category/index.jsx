import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../components/Header'
import ProductCard from '../../components/ProductCard'
import Container from '../../layout/Container'
import classes from './Category.module.scss'
function Category() {
  const { productName } = useParams()
  const [data, setData] = useState(null)
  const FetchData = () => {
    fetch('http://localhost:4000/products')
      .then(data => data.json())
      .then(cards => setData(cards))
  }
  return (
    <>
      <Header />
      <Container className={classes['cards']}>
        {data && data.map((card) => (
          <ProductCard key={card.id} className={classes['card-item']} data={card} />
        ))}
        <button onClick={FetchData}>FetchData</button>
      </Container>
    </>
  )
}

export default Category