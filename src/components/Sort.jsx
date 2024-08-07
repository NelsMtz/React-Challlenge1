import React from 'react'

function Sort({sortOption, onSortChange}) {
  return (
    <select className="sort" onChange={onSortChange} value={sortOption}>
        <option value="date">Date</option>
        <option value="description">Description</option>
        <option value="category">Category</option>
    </select>



  )
}

export default Sort