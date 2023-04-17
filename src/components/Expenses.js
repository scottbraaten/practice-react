import ExpenseItem from "./ExpenseItem";

import './Expenses.css';

function Expenses(props) {
    return (
    <div className="expenses">
        {props.expenses.map(function(a, b) {
            return (<ExpenseItem expenseAmount={a.amount} expenseDate={a.date} expenseTitle={a.title}/>);
        })}
    </div>
    );
}

export default Expenses;