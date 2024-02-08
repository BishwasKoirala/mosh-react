import React, { useState } from "react";
import ExpandableText from "./components/ExpandableText";
import Form from "./components/Form";
import ExpenseList from "./expense-tracker/components/ExpenseList";

const App = () => {
  const exampleExpenses = [
    { id: 1, description: "I dunn no", amount: 10, category: "Utilities" },
    { id: 2, description: "I dunn no", amount: 10, category: "Utilities" },
    { id: 3, description: "I dunn no", amount: 10, category: "Utilities" },
    { id: 4, description: "I dunn no", amount: 10, category: "Utilities" },
    { id: 5, description: "I dunn no", amount: 10, category: "Utilities" },
    { id: 6, description: "I dunn no", amount: 10, category: "Utilities" },
    { id: 7, description: "I dunn no", amount: 10, category: "Utilities" },
  ];

  const [expenses, setExpenses] = useState(exampleExpenses);

  // RENDER IF WE HAVE 　EXPENSES
  if (expenses.length > 0)
    return (
      <div>
        <ExpenseList
          expenses={expenses}
          onDelete={(id) => setExpenses(expenses.filter((e) => e.id != id))}
        />
      </div>
    );
};

export default App;
