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
        <div className="expenses">
            <ExpensesFilter selected={year} captureYear={limitExpenses} />
            <Card>
                {props.expenses.map(function(a) {
                    if (year === 'All') return (
                        <ExpenseItem
                            key={a.id}
                            expenseAmount={a.amount}
                            expenseDate={a.date}
                            expenseTitle={a.title}
                        />
                    );
                    else if (a.date.getFullYear() === year) return (
                        <ExpenseItem
                            key={a.id}
                            expenseAmount={a.amount}
                            expenseDate={a.date} 
                            expenseTitle={a.title}
                        />
                    );
                    return null;
                })}
            </Card>
        </div>
    );
}

export default Expenses;