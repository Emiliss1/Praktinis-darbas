import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './css/register.css';
import axios from 'axios';
import logo from './assets/logo.png'

function RegisterForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errormes, setErrormes] = useState('');
    const [style, setStyle] = useState('regform');

    const navigate = useNavigate();

    axios.defaults.withCredentials = true;

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/register', { username, password });

            if (response.status === 200) {
                navigate('/');
            }
        } catch (error) {
            console.log('Error:', error);
            if (error.status === 400) {
                setErrormes('Vartotojas su tokiu vardu jau egzistuoja');
                setUsername('');
                setPassword('');
                setStyle('regform2')
            }
        }
    }
    return (
        <div>
            <div className="nav">
                <ul className="links">
                    <li className="home" onClick={() => {navigate('/main')}}><img src={logo} alt="."></img>Miesto renginiai</li>
                </ul>
            </div>
            <div className={style}>
                <h1 className="header">Registracija</h1>
                <form onSubmit={handleClick}>
                    <label>Vardas</label>
                    <input value={username} required minLength={3} maxLength={20} type="text" onChange={(e) => {setUsername(e.target.value)}} placeholder="Vardas" />
                    <p className="errormessage">{errormes}</p>
                    <label>Slaptažodis</label>
                    <input  value={password} required minLength={6} maxLength={50} type="password" onChange={(e) => {setPassword(e.target.value)}} placeholder="Slaptažodis" />
                    <p className="login">Jau turite paskyra? <span className="loginbtn" onClick={() => {navigate('/')}}>Prisijunk</span></p>                   
                    <button type="submit">Registruotis</button>
                </form>
            </div>
            <footer>2024 © Miesto renginiai</footer>
        </div>
        
    )
}

export default RegisterForm;