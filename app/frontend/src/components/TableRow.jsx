import React from 'react'

function TableRow({columns, userData}) {
  return (
    <tr>
        {columns.map((col, index) => (
            <td key={index}>{userData[col[0]]}</td>
        ))}
    </tr>
  )
}

export default TableRow