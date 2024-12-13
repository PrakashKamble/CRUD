import React from 'react'
import { Link } from 'react-router-dom'
import "./user.css"

const User = () => {
  return (
    <div className='userTable'>
        <Link to={"/add"} className='addButton'>Add User</Link>
        <table border={1} cellPadding={10} cellSpacing={0}>
          <thead>
            <tr>
              <th>S.No.</th>
              <th>User Name</th>
              <th>User email</th>
              <th>Actios</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Prakash</td>
              <td>pk@gmail.com</td>
              <td className='actionButtons'>
                <button><i className="fa-solid fa-trash"></i> Delete</button>
                <Link to={"/edit"}><i className="fa-solid fa-pen"></i> Edit</Link>
              </td>
            </tr>
          </tbody>
        </table>
    </div>
  )
}

export default User