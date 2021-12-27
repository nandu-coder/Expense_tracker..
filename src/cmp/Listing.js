import React,{useContext} from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';

const Listing= () =>{
    const { expenses } = useContext(AppContext);

    return (
        <u1 classsName='list-group'>
            {expenses.map((expense) => (
                <ExpenseItem id={expense.id}  name={expense.name} cost={expense.cost} />

            ))}
        </u1>
    )
}

export default Listing