import React from "react";

function Expenses() {
  const expense = {
    id: "e001",
    title: "grocery",
    amount: 19.9,
    createdAt: new Date("Dec 21, 2022"),
  };

  return (
    <div className="container">
      <h1 className="text-center">My Expenses</h1>

      <div className="row">
        <div className="col-4">
          <div className="card">
            <div className="card-header">
              <h5>{expense.title.toUpperCase()}</h5>
            </div>
            <div className="card-body">
              <p>Amount : {expense.amount}</p>
              <p>Date : {expense.createdAt.toISOString()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expenses;
