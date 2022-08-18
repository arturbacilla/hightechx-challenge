import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { executeGet } from '../services/api';
import Table from '../components/Table';


function Users() {
    const Navigate = useNavigate();
    const [users, setUsers] = useState([])

    useEffect(() => {
        const token = localStorage.getItem('token') || '';
        if (!token && token === '') return Navigate('/login')
        const endpoint = '/user';
        (async () => {
            const data = await executeGet(endpoint, token)
            setUsers(data)
        })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  return (
   <main>
    <header>
        <button type="button">Novo</button>
        <input type="text" name="search" id="search" />
        <button type="button">Refresh</button>
    </header>
    { users && <Table data={users}/> }
   </main>
  )
}

export default Users