import axios from 'axios'
import style from './cartItem.module.css'

const CartItem = (props) => {
    const onRemoveCartItem = (id) => {
        // удаляем товар по id на фронте
        props.setCartItems(currentItems => currentItems.filter(item => Number(item.id) !== Number(id)))
        // удаляем товар по id на бэке
        axios.delete(`https://6354294be64783fa82807083.mockapi.io/cart/${id}`)
    }

    return(
        <div className={style.cart_item}>
            <img className={style.cart_img} src={props.img} alt={props.cart_title} />

            <h3 className={style.cart_title}>
                {props.title}
                <br />
                <span className={style.cart_price}>{props.price} руб.</span>
            </h3>

            <button onClick={() => onRemoveCartItem(props.id)} className={style.close_btn}>X</button>
        </div>
    )
}

export default CartItem