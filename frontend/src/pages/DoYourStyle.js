import React from "react";
import {useHistory} from "react-router-dom";
import {useUser} from "../hooks/useUser";
import {routes} from "../routes";


function DoYourOwnStyle() {
    const history = useHistory();
    const isLogged = useUser();

    if (isLogged === false){
        console.log("User not logged in");
        history.push(routes.login);
    }

    const bubble = {
        // position: "relative",
        top:"0",
        bottom:"",
        width:"98%",
        height:"1000px",
        border: "20px solid",
        borderTopColor: "#00aabb",
        borderRightColor: "#4FC1E9",
        borderLeftColor: "#4FC1E9",
        borderBottomColor: "#00aabb",
        borderLeft: "0",
        marginLeft:"10px"

    }

    return (
        <div>
            <iframe style={bubble} width="560" height="315" src="https://www.youtube.com/embed/bVk0G-TQPEE"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen/>
        </div>
    );
}

export default DoYourOwnStyle;