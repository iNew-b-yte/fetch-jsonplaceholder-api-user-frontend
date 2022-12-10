import React from 'react'

const TableRow = ({id, name, username, email, address, phone, website}) => {
  return (
    <>
    <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{username}</td>
        <td>{email}</td>
        <td>{address}</td>
        <td>{phone}</td>
        <td><a href={`http://${website}`} target="_blank">{website}</a></td>
    </tr>
    </>
  )
}

export default TableRow;