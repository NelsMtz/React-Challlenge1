import React from 'react'
import Transaction from './Transaction'

function TransactionList({transactions}) {

    const transactionItems =transactions.map(transaction => (
        <Transaction key={transaction.id}  transaction={transaction}/>
    ))
  return (
    <div>
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

    {transactionItems}
    </div>
  )
}

export default TransactionList