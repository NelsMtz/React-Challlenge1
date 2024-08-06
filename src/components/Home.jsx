import React from 'react'
import  {useEffect, useState} from 'react'

function Home() {

    const [transactions, useTransactions] = useState ([]);
       
    useEffect (()  => {
        fetch( "http://localhost:3000/transactions")
        .then( res => res.json())
        .then( transactions => setUsers (transactions))
        .catch(error => console.log(error))
    },[])




  return (
    <div>
        <header>Bank of Flatiron</header>
    </div>
  )
}

export default Home