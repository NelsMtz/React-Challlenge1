import React from 'react'

function Transaction({transaction}) {
  return (
    <div className='transaction-container'>
        <div>{transaction.date}</div>
        <div>{transaction.description}</div>
        <div>{transaction.category}</div>
        <div>{transaction.amount}</div>
    </div>
  )
}

export default Transaction