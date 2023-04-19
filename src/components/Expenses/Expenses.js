import {useState} from 'react';

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from '../UI/Card.js';

import './Expenses.css';

function Expenses(props) {
    const [year, setYear] = useState('All');
    const limitExpenses = (year) => {
        setYear(year);
    }
    return (
        <div>
            {/* retrieve year from ExpensesFilter */}
            <ExpensesFilter selected={year} captureYear={limitExpenses} />
            <Card className="expenses">

                {/* dynamically return ExpenseItem components with map */}
                {props.expenses.map(function(a) {
                    
                    /* return an ExpenseItem for all expenses */
                    if (year == 'All')
                    return (<ExpenseItem expenseAmount={a.amount} expenseDate={a.date} expenseTitle={a.title}/>);
                    
                    /* only return an ExpenseItem if provided date consists of
                    the same year as the year retrieved from ExpensesFilter */
                    else if (a.date.getFullYear() == year)
                    return (<ExpenseItem expenseAmount={a.amount} expenseDate={a.date} expenseTitle={a.title}/>);
                })}
            </Card>
        </div>
    );
}

export default Expenses;