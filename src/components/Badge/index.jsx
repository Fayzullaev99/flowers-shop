import React from 'react'
import Container from '../../layout/Container'
import classes from './Badge.module.scss'
function Badge() {
  return (
    <Container>
      <div className={classes['badge']}>
        <div className={classes["badge__content"]}>
            <h1 className={classes["badge__title"]}>Fruit baskets</h1>
            <p className={classes["badge__text"]}>you can choose any fruit baskets from our catalog or order them</p>
        </div>
      </div>
    </Container>
  )
}

export default Badge