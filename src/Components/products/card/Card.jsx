import style from './card.module.css'
import { useState } from 'react'

const Card = (props) =>{
  const [ cartAdded, setCartAdded ] = useState(false)
  const [ favAdded, setFavAdded ] = useState(false)

  const onClickPlus = () => {
    let id = props.id
    let title = props.title
    let description = props.description
    let price = props.price
    let img = props.img
    
    props.onPlus({ id, title, description, price, img })
    setCartAdded(!cartAdded)
  }
  
  const onClickFav = () => {
    let id = props.id
    let title = props.title
    let description = props.description
    let price = props.price
    let img = props.img

    props.onFav({ id, title, description, price, img })
    setFavAdded(!favAdded)
  }

  return(
    <div className={style.productItem}>
        <button className={ favAdded ? style.favActiveBtn : style.favBtn } onClick={ onClickFav } >
          { favAdded ? 'Добавлено' : 'Добавить' } в избранное
        </button>
        
        <img className={style.productImg} src={props.img} alt='productImage' />
        <div className={style.productTitle}>{props.title}</div>
        <div className={style.productDescription}>{props.description}</div>
        <div className={style.price}>Цена</div>

        <div className={style.productPrice}>
          <span>{props.price} ₽</span>

          <button className={cartAdded ? style.checkBtn : style.plusBtn} onClick={onClickPlus} >
            <img src={cartAdded ? props.checkImg : props.plusImg} alt='addToCartImage' />
          </button>
        </div>
    </div>
  )
}

export default Card