import React from 'react'
import  {useEffect, useState} from 'react'
import TransactionList from './TransactionList';
import Form from './Form';
import SearchTransaction from './SearchTransaction';

function Home() {
    
    const [transactions, setTransactions] = useState ([]);
    const [searchQuery, setSearchQuery] = useState ([]);

    useEffect (()  => {
        fetch( "http://localhost:3000/transactions")
        .then( res => res.json())
        .then( transactions => setTransactions (transactions))
        .catch(error => console.log(error))
    },[])

    const addTransaction = (newTransaction) => {
      fetch("http://localhost:3000/transactions", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTransaction),
      })
        .then(res => res.json())
        .then(data => setTransactions([...transactions, data]))
        .catch(error => console.log(error))
    };
        
  return (
    <div className='home'> 
        <header>Bank of Flatiron</header>  
        <Form  addTransaction ={addTransaction}/> 
        <SearchTransaction  searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>      
        <TransactionList   transactions={transactions}/>  
        
    </div>
  )
}

export default Home