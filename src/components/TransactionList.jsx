import React from 'react'
import Transaction from './Transaction'

function TransactionList({transactions}) {

    const transactionItems =transactions.map(transaction => (
        <Transaction key={transaction.id}  transaction={transaction}/>
    ))
  return (
    <div className='transaction-list-container'>
      <div className='transaction-list-header'>
      <div>
        Date
    </div>
    <div>
        Descriptions
    </div>
    <div>
        Category
    </div>
    <div>
          Amount
    </div>
</div>
    {transactionItems}
    </div>
  )
}

export default TransactionList