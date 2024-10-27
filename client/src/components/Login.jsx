import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './css/login.css';
import axios from 'axios';
import logo from './assets/logo.png'

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errormes, setErrormes] = useState('');
    const [style, setStyle] = useState('logform');

    const navigate = useNavigate();

    axios.defaults.withCredentials = true;

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/login', { username, password });

            if (response.data.result[0].banned === 1) {
                setErrormes('Šis vartotojas yra užblokuotas');
                setUsername('');
                setPassword('');
                setStyle('logform2')
                const responses = await axios.post('http://localhost:3000/logout')
            } else if (response.status === 200) {
                navigate('/main');
                console.log(response)     
            }
            
        } catch (error) {           
                console.log('Error:', error);
                setErrormes('Blogas prisijungimo vardas arba slaptažodis');
                setUsername('');
                setPassword('');
                setStyle('logform2')
            
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
                <h1 className="header">Prisijungimas</h1>
                <form onSubmit={handleClick}>
                    <label>Vardas</label>
                    <input value={username} required  type="text" onChange={(e) => {setUsername(e.target.value)}} placeholder="Vardas" />
                    <label>Slaptažodis</label>
                    <input  value={password} required  type="password" onChange={(e) => {setPassword(e.target.value)}} placeholder="Slaptažodis" />
                    <p className="errormessage">{errormes}</p>
                    <p className="login">Neturite paskyros? <span className="loginbtn" onClick={() => {navigate('/register')}}>Prisiregistruok</span></p>                   
                    <button type="submit">Prisijungti</button>
                </form>
            </div>
            <footer>2024 © Miesto renginiai</footer>
        </div>
        
    )
}

export default LoginForm;