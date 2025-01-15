import { AddManyCustomersAction } from "../store/customerReducer"

export const FetchCustomers = ()=>{
    return (dispatch)=>{
        fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => dispatch(AddManyCustomersAction(json)))
    }
}