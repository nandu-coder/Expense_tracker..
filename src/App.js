import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  "./App.css"
import Auths from './cmp/Auths';
import { FinalExpensePage } from './cmp/FinalExpensePage';

function App() {
  return (
	<div>
		<div className='container'>
                        <Auths />
                </div>

		<FinalExpensePage/>
	</div>
  );
};

export default App;
