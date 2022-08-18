import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { executeGet } from '../services/api';
import Table from '../components/Table';
import CreateUserModal from '../components/CreateUser';

function Users() {
    const Navigate = useNavigate();
    const [users, setUsers] = useState([])
    const [userToken, setUserToken] = useState('')
    const [modalShow, setModalShow] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token') || '';
        if (!token && token === '') return Navigate('/login')
        setUserToken(token);
        const endpoint = '/user';
        (async () => {
            const data = await executeGet(endpoint, token)
            setUsers(data)
        })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const afterSave = () => {
        setModalShow(false);
        window.location.reload(false)
    }

  return (
   <main>
    <CreateUserModal show={modalShow} onHide={afterSave} token={userToken} />
    <header>
        <button type="button" onClick={() => setModalShow(true)}>Novo</button>
        <input type="text" name="search" id="search" />
        <button type="button">Refresh</button>
    </header>
    { users && <Table data={users}/> }
   </main>
  )
}

export default Users