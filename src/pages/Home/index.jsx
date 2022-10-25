import React from 'react'
import Badge from '../../components/Badge'
import CategoriesBlock from '../../components/CategoriesBlock'
import DisCountsCarousel from '../../components/DisCountsCarousel'
import Header from '../../components/Header/'
import OrderForm from '../../components/OrderForm'
const Home = () => {
  return (
    <>
      <Header />
      <Badge />
      <CategoriesBlock />
      <DisCountsCarousel />
      <OrderForm />
    </>
  )
}

export default Home