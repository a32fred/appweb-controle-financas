import { useState, useEffect } from "react";
import Form from "./componentes/Form";
import Header from "./componentes/header";
import Resume from "./componentes/Resume";
import GlobalStyle from "./styles/global";

const App = () => {
  const data = localStorage.getItem("transactions");
  const [transactionsList, setTransactionsList] = useState(
    data ? JSON.parse(data) : []
  );

  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const amountExpense = transactionsList
      .filter((item) => item.expense)
      .map((transation) => Number(transation.amount));

    const amountIncome = transactionsList
      .filter((item) => !item.expense)
      .map((transation) => Number(transation.amount));

    const expense = amountExpense.reduce((acc, curr) => acc + curr, 0).toFixed(2);
    const income = amountIncome.reduce((acc, curr) => acc + curr, 0).toFixed(2);

    const total = Math.abs(income - expense).toFixed(2);


    setIncome(`R$ ${income}`);
    setExpense(`R$ ${expense}`);
    setTotal(`${Number(income) < Number(expense) ? "-" : ""}R$ ${total}`);
  }, [transactionsList]);

  const handleAdd = (transation) => {
    const newArrayTransactions = [...transactionsList, transation];

    setTransactionsList(newArrayTransactions);

    localStorage.setItem("transactions", JSON.stringify(newArrayTransactions));
  };

  return (
    <>
      <Header />
      <Resume income={income} expense={expense} total={total} />
      <Form handleAdd={handleAdd} transactionsList={transactionsList} setTransactionsList={setTransactionsList} />
      <GlobalStyle />
    </>
  );

};

export default App