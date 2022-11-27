import PromoItem from './promoItem/PromoItem'
import style from './promoSection.module.css'

const titles = {
  't1': 'Скидки до 15% на лакомства, игрушки и декор для аквариумов',
  't2': 'Копи пет-коины на лежаки, домики и когтеточки со скидкой до 30%',
  't3': 'Дарим 150 баллов в подарок за отзыв с фото о продукте Unica'
}

const dates = {
  'd1': 'c 04.10.2022 00:01:00',
  'd2': 'c 01.10.2022 00:01:00',
  'd3': 'c 01.10.2022 00:01:00'
}

const imgPaths = {
  'p1': '/zooshop-r/img/promo/promo1.webp',
  'p2': '/zooshop-r/img/promo/promo2.webp',
  'p3': '/zooshop-r/img/promo/promo3.webp'
}

const PromoSection = () => {
  return(
    <section className={style.promoSection}>
      <h2>Акции</h2>

      <div className={style.promoContent}>
        <div className={style.promoHolder}>
          <PromoItem className='ph1' pTitle={titles['t1']} pDate={dates['d1']} pImg={imgPaths['p1']} />
          <PromoItem className='ph2' pTitle={titles['t2']} pDate={dates['d2']} pImg={imgPaths['p2']} />
          <PromoItem className='ph3' pTitle={titles['t3']} pDate={dates['d3']} pImg={imgPaths['p3']} />
        </div>
      </div>
    </section>
  )
}

export default PromoSection