import style from './favCard.module.css'
import { useState } from 'react'

const FavCard = (props) => {

  const [ cartAdded, setCartAdded ] = useState(false)

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
    props.onFav(props.id)
  }

  return(
    <div className={style.productItem}>

        <button className={ style.favBtnActive } onClick={ onClickFav } >
          Убрать из избранных
        </button>
        
        <img className={style.productImg} src={props.img} alt='productImage' />
        <div className={style.productTitle}>{props.title}</div>
        <div className={style.productDescription}>{props.description}</div>
        <div className={style.price}>Цена</div>

        <div className={style.productPrice}>
          <span>{props.price} руб.</span>

          <button 
            className={ cartAdded ? style.checkBtn : style.plusBtn } 
            onClick={ onClickPlus } 
          >
            <img src={cartAdded ? '/img/check.png' : '/img/plus.png'} alt='productImage' />
          </button>
        </div>
    </div>
  )
}

export default FavCard