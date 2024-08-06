import React from 'react'
import  {useEffect, useState} from 'react'
import TransactionList from './TransactionList';

function Home() {

    const [transactions, setTransactions] = useState ([]);
       
    useEffect (()  => {
        fetch( "http://localhost:3000/transactions")
        .then( res => res.json())
        .then( transactions => setTransactions (transactions))
        .catch(error => console.log(error))
    },[])




  return (
    <div>
        <header>Bank of Flatiron</header>        
        <TransactionList   transactions={transactions}/>   
    </div>
  )
}

export default Home