import React from 'react'
import  {useState} from 'react'


function Form({addTransaction}) {

    const [description, setDescription] =useState("")
    const [category, setCategory] =useState("")
    const [amount, setAmount] =useState("")
    const [date, setDate] =useState("")

    const uponSubmit = (e) => { 
        e.preventDefault ()

    const newTransaction = {
        description, category, amount: parseFloat (amount), date 
         }
     addTransaction(newTransaction) 
         setDescription("") 
         setCategory("") 
          setAmount("")
           setDate("")  
          }


  return (
    
        <form onSubmit={uponSubmit}> 
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Description' required/>
        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder='Category' required/>
        <input type="number" value={amount}  onChange={(e) => setAmount(e.target.value)} placeholder='Amount' required/>
        <input type="date" value={date}  onChange={(e) => setDate(e.target.value)}required/>

        </form>
    
  )
}

export default Form