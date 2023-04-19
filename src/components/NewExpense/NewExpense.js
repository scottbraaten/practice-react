import ExpenseForm from './ExpenseForm.js';

import './NewExpense.css';

const NewExpense = (props) => {
    const onSaveExpenseDataHandler = (data) => {
        const expenseData = {
            ...data,
            id: Math.random()
        }
        props.onAddNewExpense(expenseData);
    }

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
        </div>
    )
}

export default NewExpense;