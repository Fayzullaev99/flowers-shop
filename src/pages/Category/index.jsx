import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../components/Header'

function Category() {
  const {productName} = useParams()
  return (
    <Header />
  )
}

export default Category