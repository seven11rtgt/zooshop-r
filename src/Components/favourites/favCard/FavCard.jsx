import style from './favCard.module.css'
import { useState, useContext } from 'react'
import { AppContext } from "../../../App"

const FavCard = (props) => {

  const context = useContext(AppContext)
  const [ cartAdded, setCartAdded ] = useState(false)

  const onClickPlus = () => {
    let id = props.id
    let myId = props.myId
    let title = props.title
    let description = props.description
    let price = props.price
    let img = props.img
    
    props.onPlus({ id, myId, title, description, price, img })

    setCartAdded(!cartAdded)
  }
  
  const onClickFav = () => {
    let id = props.id
    let myId = props.myId
    let title = props.title
    let description = props.description
    let price = props.price
    let img = props.img
    
    props.onFav({ id, myId, title, description, price, img })
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
            className={ context.hasThisItemInCart(props.myId) ? style.checkBtn : style.plusBtn } 
            onClick={ onClickPlus } 
          >
            <img src={ context.hasThisItemInCart(props.myId) ? '/zooshop-r/img/check.png' : '/zooshop-r/img/plus.png'} alt='productImage' />
          </button>
        </div>
    </div>
  )
}

export default FavCard