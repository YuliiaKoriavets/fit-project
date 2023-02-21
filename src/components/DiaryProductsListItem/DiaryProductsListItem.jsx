import css from '../DiaryProductsListItem/DiaryProductsListItem.module.css'

export default function DiaryProductsListItem (){
    return(
       <div className={css.wrapper}>
        <p className={css.text__product}>Nut</p>
        <p className={css.text__weight}>100 g</p>
        <p className={css.text__kcal}>250 kcal</p>
        <button className={css.button} type="button"></button>
       </div>
    )
}