import DiaryDateCalendar from "components/DiaryDateCalendar"
import DiaryAddProductForm from "components/DiaryAddProductForm/DiaryAddProductForm"
import DiaryProductsList from "components/DiaryProductsList/DiaryProductsList"

export default function DiaryPage (){
    return (
        <div>
            <DiaryDateCalendar/>
            <DiaryAddProductForm />
            <DiaryProductsList />
        </div>
    )
}