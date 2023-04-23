import {useState} from 'react';

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from '../UI/Card.js';
import ExpensesList from './ExpensesList';

import './Expenses.css';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
    const [year, setYear] = useState('All');
    const limitExpenses = (year) => {
        setYear(year);
    }
    const filteredExpenses = year === 'All' ? props.expenses : props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === year;
    });

    return (
        <div>
            <Card className="expenses">
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesFilter selected={year} captureYear={limitExpenses} />
                <ExpensesList expenses={filteredExpenses}/>
            </Card>
        </div>
    );
}

export default Expenses;