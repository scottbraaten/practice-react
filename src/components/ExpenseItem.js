import "./ExpenseItem.css";

function ExpenseItem() {
    const expenseDate = new Date(2021, 2, 29);
    return (
        <div className="expense-item">
            <div>March 31 2010</div>
            <div className="expense-item__description">
                <h2>Car Insurance</h2>
                <div className="expense-item__price">$41.99</div>
            </div>
        </div>
    );
}

export default ExpenseItem;