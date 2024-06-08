import React from "react";
import ExpenseItem from "./ExpenseItem/ExpenseItem";

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

  return (
    <div className="container">
      <h1 className="text-center">My Expenses</h1>
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
