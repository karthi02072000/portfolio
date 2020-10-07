import React from 'react';
import './Home.css';
import  Logo  from './Logo.jpg';
function Home() {
    return (
        <div className="home">
            <div className="home_data">
                <center>
                <img className="home_image" src={Logo} alt="Karthi"/>
                <div className="home_details">
                    <h2>Karthikeyan B</h2>
                    <p>Front-end Developer</p>
                    <p>Passionate Coder</p>
                </div>
                </center>
            </div> 
        </div>
    )
}

export default Home
