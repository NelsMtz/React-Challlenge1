import React from 'react'
import  {useEffect, useState} from 'react'
import TransactionList from './TransactionList';
import Form from './Form';
import SearchTransaction from './SearchTransaction';
import Sort from './Sort';

function Home() {
    
    const [transactions, setTransactions] = useState ([]);
    const [searchQuery, setSearchQuery] = useState ('');
    const [sortOption, setSortOption] = useState ('');
    

    useEffect (()  => {
        fetch( "https://bank-of-flatiron-ashen.vercel.app/transactions")
        .then( res => res.json())
        .then( transactions => setTransactions (transactions))
        .catch(error => console.log(error))
    },[])

    const addTransaction = (newTransaction) => {
      fetch("https://bank-of-flatiron-ashen.vercel.app/transactions", {
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

    const handleSortChange = (e)=> {
      setSortOption (e.target.value)
    }
     
    const sortedTransactions = [...transactions].sort((a, b) => {
      if (sortOption === 'category') {
        return a.category.localeCompare(b.category)
      } else if (sortOption === 'description') {
        return a.description.localeCompare(b.description)
      } else {
        return new Date(a.date) - new Date(b.date)
      }
    });
   
    const filteredTransactions = sortedTransactions.filter(transaction =>
      transaction.description.includes(searchQuery)
    );

    const deleteTransaction = (id)=>{
      fetch (`https://bank-of-flatiron-ashen.vercel.app/transactions//${id}`,{
      method : "DELETE",}
    )
      .then (() => setTransactions(transactions.filter(transaction => transaction.id  !==id)))
      .catch (error => console.log(error))
  }
    

  return (
    <div className='home'> 
        <header>Bank of Flatiron</header>  
        <Form  addTransaction ={addTransaction}/> 
        <SearchTransaction  searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>      
        <Sort sortOption={sortOption} onSortChange={handleSortChange}  />
        <TransactionList   transactions={filteredTransactions} onDelete={deleteTransaction}/> 
        
    </div>
  )
}

export default Home