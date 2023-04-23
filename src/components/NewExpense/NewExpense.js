import { useState } from 'react';

import ExpenseForm from './ExpenseForm.js';
import Card from '../UI/Card.js';

import './NewExpense.css';

const NewExpense = (props) => {
    const [showForm, setShowForm] = useState(false);
    const onSaveExpenseDataHandler = (data) => {
        const expenseData = {
            ...data,
            id: Math.random()
        }
        props.onAddNewExpense(expenseData);
        setShowForm(false);
    }
    const showFormHandler = (e) => {
        setShowForm(true);
    }
    const onCancelAddExpenseHandler = (e) => {
        setShowForm(false);
    }

    let content = (showForm ? 
        <ExpenseForm cancel={onCancelAddExpenseHandler} onSaveExpenseData={onSaveExpenseDataHandler} /> :
        <button onClick={showFormHandler}>Add New Expense</button>
    );

    return (
        <div className='new-expense'>
            {content}
        </div>
    )
}

export default NewExpense;