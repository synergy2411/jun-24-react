import ExpenseDate from "../ExpenseDate/ExpenseDate";

function ExpenseItem({ id, amount, title, createdAt }) {
  return (
    <div className="col-4">
      <div className="card">
        <div className="card-header">
          <h5>{title.toUpperCase()}</h5>
        </div>
        <div className="card-body">
          <p>Amount : {amount}</p>
          <ExpenseDate createdAt={createdAt} />
        </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
