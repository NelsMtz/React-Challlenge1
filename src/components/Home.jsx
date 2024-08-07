import React from 'react'
import  {useEffect, useState} from 'react'
import TransactionList from './TransactionList';
import Form from './Form';

function Home() {

    const [transactions, setTransactions] = useState ([]);
       
    useEffect (()  => {
        fetch( "http://localhost:3000/transactions")
        .then( res => res.json())
        .then( transactions => setTransactions (transactions))
        .catch(error => console.log(error))
    },[])




  return (
    <div className='home'> 
        <header>Bank of Flatiron</header>        
        <TransactionList   transactions={transactions}/>  
        {/* <Form  addtransaction ={form}/>  */}
    </div>
  )
}

export default Home