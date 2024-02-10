import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Users() {
    const [users,setUsers]=useState([]);
    useEffect(()=>{
        axios.get("https://dummyjson.com/users").then((res)=>{
            if(res.status===200)
                setUsers(res.data.users)
        }).catch((err)=>console.log(err));
    },[])
  return (
    <div className='users dash-board-page'>
        <h1 className='heading'>Users</h1>
        <div className="users-table table">
            <table>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Address</th>
                    <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users?.map((user)=>{
                            return(
                                <tr key={user?.id}>
                                    <td>{user?.id}</td>
                                    <td>{user?.firstName}</td>
                                    <td>{user?.age}</td>
                                    <td>{user?.address.address}</td>
                                    <td>{user?.email}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Users