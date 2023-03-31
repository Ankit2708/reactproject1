import './ExpenseItems.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'
function ExpenseItems(props) {
 const clickHandler= ()=>{
    console.log('clicked!')
 }
    return (
        <Card className="expense-item">
        <ExpenseDate date={props.date}/>
        <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">
                {props.amount}
            </div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
        <button >Delete Expenses</button>
        </Card>
    )
}

export default ExpenseItems