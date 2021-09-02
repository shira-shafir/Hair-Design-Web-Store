import React, {useState} from "react"

import ageBLogo from "../assets/agebeautifulLogo.png"
import btzLogo from "../assets/btzLogo.png"
import ionLogo from "../assets/ionLogo.png"
import wellaLogo from "../assets/wellaLogo.png"
import myHair from "../assets/myHair.jpg"
import {Link, useHistory} from "react-router-dom";
import {routes} from "../routes";
import {useUser} from "../hooks/useUser";


function Home() {
    const history = useHistory();
    const isLogged = useUser();

    if (isLogged === false){
        console.log("User not logged in");
        history.push(routes.login);
    }

    const imgStyle = {
        width: "100%"
    }

    const h2Style = {
        marginBottom: "0.5rem",
        fontFamily: "inherit",
        fontSize: "2rem",
        fontWeight: "500",
        textAlign: "center",
        lineHeight: '1.2'
    }
    const brandStyle = {
        marginRight: "40px",
        marginLeft: "75px",
        display: "inline-block"
    }


    return (
        <div>
            <Link to={routes.store}> <img src={myHair} style={imgStyle}/></Link>

            <div>
                <h2 style={h2Style}>Top Brands</h2>
                <ul>
                    <li style={brandStyle}><img src={ageBLogo}/></li>
                    <li style={brandStyle}><img src={btzLogo}/></li>
                    <li style={brandStyle}><img src={ionLogo}/></li>
                    <li style={brandStyle}><img src={wellaLogo}/></li>
                </ul>
            </div>
        </div>
    );
}

export default Home