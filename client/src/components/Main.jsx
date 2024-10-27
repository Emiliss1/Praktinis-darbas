import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './css/main.css';
import axios from 'axios';
import citybg from './assets/citybg.jpg'
import document from './assets/document.png'
import logo from './assets/logo.png'


export function Navigation() {
    const [username, setUsername] = useState('');
    const [classname, setClassname] = useState('display')
    const [profileimg, setProfileimg] = useState('')

    const navigate = useNavigate();
    axios.defaults.withCredentials = true;

    useEffect(() => {
        axios.get('http://localhost:3000/login').then((response) => {
            if (response.data.LoggedIn == true) {
                setUsername(response.data.user[0].username)
                setProfileimg(response.data.user[0].profilepicture)
                console.log(response)
                if (response.data.user[0].banned === 1) {
                    navigate('/')
                    const responses = axios.post('http://localhost:3000/logout')
                }
            } else {
                navigate('/')
            }
        })
    }, []);

    const handleLogOut = async () => {
        try {
            const response = await axios.post('http://localhost:3000/logout')
            if(response.status === 200) {
                navigate('/')
            }
            
        } catch (error) {
            console.log(error);
        }
    };

    const handleProfile = () => {
        if(classname == 'display') {
            setClassname('profileMenu');
        } else {
            setClassname('display');
        }
    }

    return (
        <div className="nav">
                <ul className="links">
                    <li className="home" onClick={() => {navigate('/main')}}><img src={logo} alt="."></img>Miesto renginiai</li>
                    <li className="link" onClick={() => {navigate('/postevent')}}>Skelbti renginį</li>
                </ul>
                <ul className="profile">
                    <li className="profilelink"><img src={profileimg} onClick={() => {navigate('/profile')}}></img><button className="profileMenubtn" onClick={handleProfile}>{ username }⮟</button></li>
                    <div className={classname}>
                        <p onClick={() => {navigate('/profile')}}>Profilis</p>
                        <button className="logoutbtn" onClick={handleLogOut}>Atsijungti</button>
                    </div>
                </ul>
                
            </div>
    )
}


function Main() {
    const navigate = useNavigate();
    
    return (
        <div className="main">
            
            <Navigation />
            
            <div className="homeScreen">
                <img src={citybg} alt="."></img>
                <div className="homeScreenText">
                    <div className="homeScreensection">
                        <h3>Miesto renginiai</h3>
                        <p>Naujausi vykstantis miesto renginiai</p>
                    </div>
                    <div className="homeScreensection2">
                        <p>Nori peržiurėti savo sukurta turinį ar kaip nors jį redaguoti? Spausk mygtuką apačioje.</p>
                        <button className="homeScreenBtn" onClick={() => {navigate('/profile')}}>Peržiurėti</button>
                    </div>
                    
                </div>
            </div>
            <div className="Events">               
                <h3 className="eventHeader"><div className="sqr"></div><div className="dec"><img src={document} alt="." /></div>Patvirtinti renginiai</h3>
                <p>Čia skelbimi visi naujausi administracijos patvirtinti renginiai.</p>
                <button className="eventBtn" onClick={() => {navigate('/verified')}}>Atidaryti skiltį</button>
            </div>
            <div className="Events" id="event">               
                <h3 className="eventHeader"><div className="sqr"></div><div className="dec"><img src={document} alt="." /></div>Nepatvirtinti renginiai</h3>
                <p>Čia skelbimi visi administracijos nepatvirtinti renginiai.</p>
                <button className="eventBtn" onClick={() => {navigate('/unverified')}}>Atidaryti skiltį</button>
            </div>
            
            <footer>2024 © Miesto renginiai</footer>
        </div>
    )
}

export default Main;