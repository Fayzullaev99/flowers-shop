import React from 'react'
import { useSelector } from 'react-redux'
import Header from '../../components/Header'
import ProductCard from '../../components/ProductCard'
import Container from '../../layout/Container'
import Title from '../../Title'
import classes from './Favorite.module.scss'

function Favorite() {
  const { favorite, cartItems } = useSelector(state => state)
  const items = Object.values(favorite)
  return (
    <>
      <Header />
      {items.length ? (
        <>
          <Title>Favorite Products</Title>
          <Container className={classes['cards']}>

            {items && items.map((card) => (
              <ProductCard key={card.id} className={classes['card-item']} data={card} liked={card.id in favorite} selected={card.id in cartItems} />
            ))}
          </Container>
        </>
      ) : (
        <Title>You don't have Favorite Products</Title>
      )}
    </>
  )
}

export default Favorite