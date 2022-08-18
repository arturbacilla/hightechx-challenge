import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {executeLogin} from '../services/api'

function Login() {
    const [email, setEmail] = useState('');
    const [isLogged, setIsLogged] = useState(false);
    const Navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token') || '';
        if (token && token !== '') return Navigate('/users')
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLogged])

    const handleChange = ({target}) => {
        const { value } = target;
        setEmail(value)
    }

    const login = async (event) => {
    event.preventDefault();
        const endpoint = '/login';
        const result = await executeLogin(endpoint, { email })
        if (result.token) {
            localStorage.setItem('token', result.token);
            setIsLogged(true);
        }
    } 

  return (
    <main>
        <label htmlFor="email">
            <input type="email" name="email" id="email" onChange={ handleChange }/>
        </label>
        <button type="button" onClick={(event) => login(event)}>Login</button>
    </main>
  )
}

export default Login