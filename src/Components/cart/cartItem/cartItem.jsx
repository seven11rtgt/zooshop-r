import style from './cartItem.module.css'

const CartItem = (props) => {

    return(
        <div className={style.cartItem}>
            <img className={style.cartImg} src={props.img} alt={props.title} />

            <h3 className={style.cartText}>
                {props.title}
                <hr />
                <span className={style.cartPrice}>{props.price} руб.</span>
            </h3>

            <button 
                onClick={() => props.onRemoveCartItem(props.myId, props.id)} 
                className={style.closeBtn}
            >X</button>
        </div>
    )
}

export default CartItem