import React, {useState} from 'react'
import './ExpenseItems.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'
function ExpenseItems(props) {
    const  [title, setTitle]=useState(props.title) 
    const  [amount, setAmount] =useState(props.amount)                                                    // useState returns two values fist one value that needs to be change and 2nd is fn
    console.log('Expense item is re evaluated here')                         // it is only called inseide component
 const clickHandler= ()=>{
    setTitle('Updated!!')
    console.log('clicked!')
    //title="Updated!!"
    console.log(title)
 }
 const changeExpense =() =>{
    setAmount('$100')
 }
    return (
        <Card className="expense-item">
        <ExpenseDate date={props.date}/>
        <div className="expense-item__description">
            <h2>{title}</h2>
            <div className="expense-item__price">
                {amount}
            </div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
        <button onClick={changeExpense}>Change Expense</button>
        </Card>
    )
}

export default ExpenseItems