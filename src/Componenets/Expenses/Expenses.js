
import Card from "../UI/Card";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart";
function Expenses(props){
  const [filteredYear, setFilteredYear] =useState('2020')
  const filterChangeHandler =(selectedYear)=>{
    setFilteredYear(selectedYear)
  }
  const filtererdExpenses = props.item.filter(expense=>{
    return expense.date.getFullYear().toString() === filteredYear
  })

    return (
    <Card className="expenses">
     
   
    <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
    <ExpensesChart expenses={filtererdExpenses}/>
    {
      <ExpensesList item = {filtererdExpenses}/>
      
    }
     {/* <ExpenseItems title={props.items[0].title}                                                                                
      amount={props.items[0].amount} 
      date={props.items[0].date} />
      <ExpenseItems title={props.items[1].title} 
      amount={props.items[1].amount} 
      date={props.items[1].date} />
      <ExpenseItems title={props.items[2].title} 
      amount={props.items[2].amount} 
      date={props.items[2].date} />
      <ExpenseItems title={props.items[3].title} 
      amount={props.items[3].amount} 
      date={props.items[3].date} />  */}
      </Card>
    )

}
export default Expenses