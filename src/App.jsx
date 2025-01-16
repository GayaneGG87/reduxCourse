import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementCreator, decrementCreator, asyncIncrementCreator, asyncDecrementCreator } from './store/countReducer';
import './style/style.scss'
import { fetchUsers } from './store/usersReducer';

function App() {
  const count = useSelector(state => state.count.count)
  const users = useSelector(state=>state.users.users) 
   const dispatch = useDispatch()


  const [value, setValue] = useState(5);
 
  return (
    <div className="app-container">
      <div className="count">
          <div>{count}</div>
          <div className="btn-group">
              <button onClick={()=>dispatch(asyncIncrementCreator())}>add++</button>
              <button onClick={()=>dispatch(asyncDecrementCreator())}>get--</button>
              <button onClick={()=>dispatch(fetchUsers())}>add user++</button>
          </div>
      </div> 
      <div className="users-list">
        {users.map(user=>
        <div className="user-item">
          {user.name}
        </div>
        )}
      </div>
      {/* <div className="customer">
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
      </div> */}
      
    </div>
  );
}

export default App;
