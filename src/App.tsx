import React, { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import categories from "./expense-tracker/categories";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const exampleExpenses = [
    { id: 1, description: "I dunn no", amount: 10, category: "Utilities" },
    { id: 2, description: "I dunn no", amount: 12, category: "Utilities" },
    { id: 3, description: "I dunn no", amount: 13, category: "Utilities" },
    { id: 4, description: "I dunn no", amount: 143, category: "Utilities" },
    { id: 5, description: "I dunn no", amount: 1231, category: "Utilities" },
    { id: 6, description: "I dunn no", amount: 123, category: "Utilities" },
    { id: 7, description: "I dunn no", amount: 999, category: "Utilities" },
  ];
  const [expenses, setExpenses] = useState(exampleExpenses);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  // RENDER IF WE HAVE 　EXPENSES
  if (expenses.length > 0)
    return (
      <div>
        <div className="mb-5">
          <ExpenseForm
            onSubmit={(expense) =>
              setExpenses([
                ...expenses,
                { ...expense, id: expenses.length + 1 },
              ])
            }
          />
        </div>
        <div className="mb-3">
          <ExpenseFilter
            onSelectCategory={(category) => setSelectedCategory(category)}
          />
        </div>
        <ExpenseList
          expenses={visibleExpenses}
          onDelete={(id) => setExpenses(expenses.filter((e) => e.id != id))}
        />
      </div>
    );
};

export default App;
