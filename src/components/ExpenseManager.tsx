import AddTransactionForm from "./AddTransactionForm";
import { EditableTransactionTable } from "./EditableTransactionTable";

const ExpenseManager = () => {
  return (
    <div className="mx-auto w-full">
      <AddTransactionForm />
      <EditableTransactionTable />
    </div>
  );
};

export default ExpenseManager;
