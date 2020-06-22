import React from 'react';
import Expenses from './Expense'
import './App.css';
import {TransactionProvider} from './Contextapi';
// import

function App() {
  return (
    <>
       <TransactionProvider>
        <Expenses />
       </TransactionProvider>
    </>
  );
}

export default App;
