import React, {useState} from "react";
import Expenses from "./Componenets/Expenses/Expenses";
import NewExpense from "./Componenets/NewExpense/NewExpense";
const Dummy_Expense = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {
  
  const [expenses, setNewExpenses] = useState(Dummy_Expense)
  function addExpenseHandler(expense){
    console.log(expense)
    setNewExpenses((prevExpense)=>{
      return [expense, ...prevExpense]
    })
   
  }
  return (
    <div>
      <NewExpense onAddExpense ={addExpenseHandler}/>
    <Expenses item={expenses}/>
    
    </div>
  );
}

export default App;
