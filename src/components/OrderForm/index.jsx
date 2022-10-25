import React, { useState } from 'react'
import Container from "../../layout/Container";
import classes from "./OrderForm.module.scss";
import image from '../../images/OrderFormImage.jpeg'

const initialData = {
  name:'',
  tel:'',
  text:''
}

function OrderForm() {
  const [fields,setFields] = useState(initialData)
  const handleChange = (e)=>setFields((prev)=>({...prev,[e.target.name]:e.target.value}))
  const handleSubmit = (e)=>{
    e.preventDefault()
    setFields(initialData)
  }
  return (
    <Container className={classes['order-form']}>
      <h2 className={classes['order-form__title']}>Order A Unique Basket!</h2>
      <form className={classes['order-form__form']}>
        <div className={classes['order-form__fields']}>
          <input className={classes['order-form__input']} type="text" placeholder='Name*' name='name' value={fields.name} onChange={handleChange} />
          <input className={classes['order-form__input']} type="tel" placeholder='Phone Number*' name='tel' value={fields.tel} onChange={handleChange} />
          <textarea className={classes['order-form__textarea']} placeholder='Your Ideas' name='text' value={fields.text} onChange={handleChange} />
          <button className={classes['order-form__button']} onClick={handleSubmit} >Send</button>
        </div>
        <img className={classes['order-form__image']} src={image} alt="flower" />
      </form>
    </Container>
  )
}

export default OrderForm