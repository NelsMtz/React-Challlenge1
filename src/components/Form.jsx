import React from 'react'
import  {useState} from 'react'

function Form({addTransaction}) {

    const [description, setDescription] =useState("")

    const [category, setCategory] =useState("")

    const [amount, setAmount] =useState("")

    const [date, setDate] =useState("")

  return (
    <div>
        <input type="text" value={description} placeholder='Description' required/>
        <input type="text" value={category} placeholder='Category' required/>
        <input type="number" value={amount} placeholder='Amount' required/>
        <input type="date" value={date}  required/>


    </div>
  )
}

export default Form