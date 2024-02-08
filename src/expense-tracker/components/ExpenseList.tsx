import React from "react";

interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface Props {
  expenses: Expense[];
  onDelete: (id: number) => void;
}

const ExpenseList = ({ expenses, onDelete }: Props) => {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>id</th>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          {/* DELETE のTITLEはないから blank */}
          <th></th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.id}</td>
            <td>{expense.description}</td>
            <td>{expense.amount}</td>
            <td>{expense.category}</td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => onDelete(expense.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          {/* blank にして clolum を合わせる */}
          <td></td>
          <td>
            ¥
            {expenses.reduce(
              (accumulator, expenses) => expenses.amount + accumulator,
              0
              // 0は初期値
            )}
          </td>
          <td></td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ExpenseList;
