import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './Budget.js';
import Remaining from './Remaining.js';
import ExpenseTotal from './ExpenseTotal.js';
import Listing from './Listing.js';
import AddExpenseForm from './AddExpenseForm.js';
import { AppProvider } from '../context/AppContext';

export const FinalExpensePage = () => {
    return (<AppProvider>
        <div className='container'>
                    <h1 className='mt-3'>My Expense Tracker</h1>
                    <div className='row mt-3'>
                        <div className='col-sm'>
                            <Budget />
                        </div>
                        <div className='col-sm'>
                            <Remaining />
                        </div>
                        <div className='col-sm'>
                            <ExpenseTotal/>
                        </div>
                    </div>
                     <h3 className='mt-3'> Expenses</h3>
                     <div className='row mt-3'>
                         <div className='col-sm'>
                             <Listing/>
                         </div>
                     </div>
    
                     <h3 className='mt-3'>Add Expense</h3>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <AddExpenseForm />
                    </div>
                </div>
    
                </div>
                </AppProvider>
    )
}
