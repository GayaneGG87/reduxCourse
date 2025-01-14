import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddCustomerAction, RemoveCustomerAction } from './store/customerReducer';
import { AddCashAction, GetCashAction } from './store/cashReducer';

function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash)
  const customers = useSelector(state=>state.customers.customers)

  const [value, setValue] = useState(5);

  const addData = (num)=>{
    dispatch(AddCashAction(num))
  }

  const getData = (num)=>{
    dispatch(GetCashAction(num))
  }
  const addCustomer = (name)=>{
    const customer = {
      name,
      id: Date.now()
    }
    dispatch(AddCustomerAction(customer))
  }
  const removeCustomer = (id)=>{
    dispatch(RemoveCustomerAction(id))
  }

  return (
    <div className="App">
        gdfgdf
        <input type='number' 
        value={value} 
        onChange={(e)=> {setValue(Number(e.target.value))}}/>
        <button onClick={()=>addData(value)}>add</button>
        <button onClick={()=>getData(value)}>get</button>
        <button onClick={()=>addCustomer(prompt())}>add customer</button>
        
        <div style={{fontSize: 20}}>{cash}</div>
      {customers.length > 0 ?
      <div>
        {customers.map(customer =>
          <div style={{background: 'lightBlue', margin:10, padding:10}}
          onClick={()=>removeCustomer(customer.id)}>{customer.name}</div>
        )}
      </div>
      :
      <div>Field is Empty</div>
      }
    </div>
  );
}

export default App;
