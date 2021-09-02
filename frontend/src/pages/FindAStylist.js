import React from "react";

import '../components/css/findStylist.css';
import {useHistory} from "react-router-dom";
import {useUser} from "../hooks/useUser";
import {routes} from "../routes";

function FindAStylist() {
    const history = useHistory();
    const isLogged = useUser();

    if (isLogged === false){
        console.log("User not logged in");
        history.push(routes.login);
    }
    return (
        <div id="square">
            <div id="header">
                <h1>Find a hair stylist closest to your place:</h1>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d54096.98917895309!2d34.78380969999999!3d32.06757655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1shair%20stylers!5e0!3m2!1sen!2sil!4v1629899049065!5m2!1sen!2sil" width="auto" height="450" />
            <div>
                <h1>Don't forget to ask them about our products!</h1>
            </div>
        </div>
    );
}

export default FindAStylist;