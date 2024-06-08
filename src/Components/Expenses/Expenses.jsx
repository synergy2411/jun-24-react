import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem/ExpenseItem";
import AddExpense from "./AddExpense/AddExpense";

function Expenses() {
  const expenses = [
    {
      id: "e001",
      title: "grocery",
      amount: 19.9,
      createdAt: new Date("Dec 21, 2022"),
    },
    {
      id: "e002",
      title: "shopping",
      amount: 29.9,
      createdAt: new Date("Mar 2, 2024"),
    },
    {
      id: "e003",
      title: "planting",
      amount: 99.9,
      createdAt: new Date("Aug 1, 2023"),
    },
  ];

  let [isShowForm, setIsShowForm] = useState(false);

  const showFormClickHandler = () => {
    // isShowForm = !isShowForm;        // NEVER EVER CHANGE THE STATE MUTABLY
    setIsShowForm(!isShowForm);
  };

  return (
    <div className="container">
      <h1 className="text-center">My Expenses</h1>

      {/* Show Form Button */}
      <div className="row mb-4">
        <div className="col-4 offset-4">
          <div className="d-grid">
            <button
              className="btn btn-secondary"
              onClick={showFormClickHandler}
            >
              Show Form
            </button>
          </div>
        </div>
      </div>

      {isShowForm && <AddExpense />}

      <div className="row">
        {expenses.map((expense) => (
          // <ExpenseItem {...expense} />
          <ExpenseItem
            key={expense.id}
            id={expense.id}
            title={expense.title}
            createdAt={expense.createdAt}
            amount={expense.amount}
          />
        ))}
      </div>
    </div>
  );
}

export default Expenses;
