import React from 'react'
import columns from './TableStructure'
import TableHeader from './TableHeader'
import TableRow from './TableRow'

export default function Table({data}) {
  return (
    <table>
        <TableHeader columns={columns}/>
        <tbody>
        { data && data.map((user) => (
            <TableRow key={user.id} columns={columns} userData={user} />
        ))}
        </tbody>
    </table>
  )
}
