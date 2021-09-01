import React from "react";


function DoYourOwnStyle() {
    const bubble = {
        // position: "relative",
        top:"0",
        bottom:"",
        width:"50%",
        height:"10000x",
        border: "20px solid",
        borderTopColor: "#00aabb",
        borderRightColor: "#4FC1E9",
        borderLeftColor: "#4FC1E9",
        borderBottomColor: "#00aabb",
        borderLeft: "0",
        marginLeft: "400px"

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