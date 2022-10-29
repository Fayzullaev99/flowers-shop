import { useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons'
import { faHeart as faHeartSolid} from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames'
import React from 'react'
import classes from './ProductCard.module.scss'
import { handlefavorite } from '../../redux/favorite'
import { addToCard, removeFromCard } from '../../redux/cart'

function ProductCard({className,data,liked,selected}) {
    const [image] = data.images
    const selectItem = ()=> dispatch(selected ? removeFromCard(data.id) : addToCard(data))
    const dispatch = useDispatch()
    const handlefavoriteButtonClick = ()=>{
      dispatch(handlefavorite(data))
    }
  return (
    <div className={classNames(classes['card'],className)}>
        <img src={image} alt={data.name} className={classes['card__image']} />
        <h3 className={classes['card__title']}>{data.name}</h3>
        <p className={classes['card__price']}>{data.price} USD. <span className={classes['card__discount']}>{data.discount} USD.</span></p>
        <button className={classNames(classes['card__button'],selected && classes['card__button_selected'])} onClick={selectItem} >{selected ? 'Added' : 'Add To Cart'}</button>
        <button className={classes['card__like']} onClick={handlefavoriteButtonClick}><FontAwesomeIcon icon={liked ? faHeartSolid : faHeartRegular}/></button>
    </div>
  )
}

export default ProductCard