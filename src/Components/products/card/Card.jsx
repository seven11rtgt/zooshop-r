import { useContext } from 'react'
import style from './card.module.css'
import { AppContext } from "../../../App"

const Card = (props) =>{

  const context = useContext(AppContext)

  const onClickPlus = () => {
    let id = props.id
    let title = props.title
    let description = props.description
    let price = props.price
    let img = props.img
    
    props.onPlus({ id, title, description, price, img })
  }
  
  const onClickFav = () => {
    let id = props.id
    let title = props.title
    let description = props.description
    let price = props.price
    let img = props.img

    props.onFav({ id, title, description, price, img })
  }

  return(
    <div className={style.productItem}>

      {
        context.hasThisItemInFavs(props.id) === true ? 
        <button className={style.favBtnActive} onClick={onClickFav} >Убрать из избранного</button>

        : <button className={style.favBtn} onClick={onClickFav} >Добавить в избранное</button>
      }
        
      <img className={style.productImg} src={props.img} alt={props.title} />
      <div className={style.productTitle}>{props.title}</div>
      <div className={style.productDescription}>{props.description}</div>
      <div className={style.price}>Цена</div>

      <div className={style.productPrice}>
        <span>{props.price} руб.</span>

        <button className={context.hasThisItemInCart(props.id) ? 
          style.checkBtn : style.plusBtn} onClick={onClickPlus}
        >
          <img src={context.hasThisItemInCart(props.id) ? 
            '/img/check.png' : '/img/plus.png'} alt="" />
        </button>
      </div>
    </div>
  )
}

export default Card