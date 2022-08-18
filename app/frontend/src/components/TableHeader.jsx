import React from 'react'

function TableHeader({columns}) {
  return (
    <thead>
        {columns.map((column, index) => (
            <th key={index}>
                {column[1]}
            </th>
        ))}
    </thead>
  )
}

export default TableHeader