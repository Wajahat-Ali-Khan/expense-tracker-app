import React,{useContext, useState} from 'react';
import {initialVal} from './Contextapi'
 

function Expenses() {
    let { newtransactions, addTransaction } = useContext(initialVal);
    let [newDesc, setDesc] = useState("");
    let [newAmount, setAmount] = useState();


    const handleAddition = (event) => {
        event.preventDefault();
        if (Number(newAmount) === 0) {
            alert("Please enter correct value");
            return false;
        }
        addTransaction({
            amount: Number(newAmount),
            desc: newDesc
        });

        setDesc('');
        setAmount(0)
    }

    const getIncome = () => {
        let income = 0;
        for (var i = 0; i < newtransactions.length ; i++) {
            if (newtransactions[i].amount > 0)
                income = income + newtransactions[i].amount
        };
        return income;
    }

    const getExpense = () => {
        let expense = 0;
        for (var i = 0; i < newtransactions.length ; i++) {
            if (newtransactions[i].amount < 0)
                expense += newtransactions[i].amount
        }
        return expense;
    }

    return (
        <div className="container">
            <h1 className="text-center">Expense Tracker</h1>

            <h3>Your Balance <br /> ${getIncome() + getExpense()}</h3>

            <div className="expense-container">
                <h4>INCOME <br /> ${getIncome()}</h4>
                <h4>EXPENSE <br /> ${getExpense()}</h4>
            </div>

            <h3>History</h3>
            <hr />

            <ul className="trnsaction-list">
                {newtransactions.map((transObj, ind) => {
                    return (<li key={ind}>
                        <span>{transObj.desc}</span>
                        <span>${transObj.amount}</span>
                    </li>
                    )
                })}

            </ul>

            <h3>Add new transaction</h3>
            <hr />

            <form className="transaction-form" onSubmit={handleAddition}>
                <label className="label">
                    <h5>Enter Description</h5>  
                    <input type="text"
                        value={newDesc}
                        placeholder="Description"
                        onChange={(ev) => setDesc(ev.target.value)}
                        required />
                </label>

                <br />
                <label className="label">
                    <h5> Enter Amount</h5>
                    <input type="number"
                        value={newAmount}
                        placeholder="Amount"
                        onChange={(ev) => setAmount(ev.target.value)}
                        required />
                </label>
                <br />
                <input type="submit" value="Add Transaction" className="addtransbtn" />
            </form>
        </div>
    );
};


export default Expenses;