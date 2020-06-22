import React,{createContext , useReducer} from 'react';
import transReducer from './Usereducer';

const init_trans = [
    {amount:500, desc:"Cash"},
    {amount:-200, desc:"Bill"},
    {amount:1500, desc:"Salary"}
]

export const initialVal = createContext(init_trans);

export const TransactionProvider = ({children})=> {
    let [state, dispatch] = useReducer(transReducer, init_trans);

    function addTransaction(transObj){
        dispatch({
            type: "addTrans",
            payload: { 
                amount: transObj.amount, 
                desc: transObj.desc 
            },
        })
    }
    function addTransaction(transObj){
        dispatch({
            type: "addTrans",
            payload: { 
                amount: transObj.amount, 
                desc: transObj.desc 
            },
        })
    }

    return(
        <initialVal.Provider value={{
            newtransactions: state,
            addTransaction
        }}>
            {children}
        </initialVal.Provider>
    )
}