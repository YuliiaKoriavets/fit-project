import css from '../DiaryAddProductForm/DiaryAddProductForm.module.css'
// import { GrFormAdd } from 'react-icons/gr';
// import { IconContext } from "react-icons";

export default function DiaryAddProductForm (){
    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        // dispatch(addTask(event.target.elements.text.value));
        form.reset();
    }
    return (
        <form className={css.form} onSubmit={handleSubmit}>
            <input className={css.input__product} type="text" placeholder="Enter product name"/>
            <input className={css.input__grams} type="number" placeholder="Grams"/>
            <button className={css.button__mobile} type="submit">Add</button>
            <button className={css.button} type="submit">+
            {/* <IconContext.Provider value={{color:'ffffff'}}>
                <GrFormAdd />
            </IconContext.Provider> */}
            </button>
        </form>
    )
}