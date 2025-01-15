import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddCustomerAction, RemoveCustomerAction } from './store/customerReducer';
import { AddCashAction, GetCashAction } from './store/cashReducer';
import { FetchCustomers } from './asyncAction/customers';
import './style/style.scss'

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
    <div className="app-container">
      <div className="cash">
      <input type='number' 
          value={value} 
          onChange={(e)=> {setValue(Number(e.target.value))}}/>
                  <div style={{fontSize: 20}}>{cash}</div>
        <button onClick={()=>addData(value)}>add</button>
        <button onClick={()=>getData(value)}>get</button>

      </div> 
      <div className="customer">
        <div className="btn-group">
        <button onClick={()=>addCustomer(prompt())}>add customer</button>
        <button onClick={()=>dispatch(FetchCustomers())}> add customers from db or API</button>
        </div>
          {customers.length > 0 ?
          <div>
            {customers.map(customer =>
              <div className='item-block'
              onClick={()=>removeCustomer(customer.id)}>{customer.name}</div>
            )}
          </div>
          :
          <div>Field is Empty</div>
          }
      </div>
      
    </div>
  );
}

export default App;
