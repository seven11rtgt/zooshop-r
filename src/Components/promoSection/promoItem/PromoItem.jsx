import style from "./promoItem.module.css"

const PromoItem= (props) => {
 return (
  <div className={style.promoItem}>
    <img src={props.pImg} className={style.promoImg} alt="promo" />
    <div className={style.tag}>Акция</div>
    <div className={style.promoTitle}>{props.pTitle}</div>
    <div className={style.promoDate}>{props.pDate}</div>
  </div>
 )
}

export default PromoItem