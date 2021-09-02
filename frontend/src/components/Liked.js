import React, {useState, useEffect} from 'react';
import {getLikedProducts} from "../utils/api";

function Liked() {
    const [liked, setLiked] = useState([]);

    // const getLikedProductsFunc = async () => {
    //     try {
    //         const ans = await getLikedProducts();
    //
    //         if (ans.status === 200) {
    //             setLiked(await ans.json());
    //         }
    //     } catch (e) {
    //         alert(e);
    //         alert("Could not reach server");
    //     }
    // }
    // const bubble = {
    //     // position: "relative",
    //     top:"0",
    //     bottom:"",
    //     width:"50%",
    //     height:"10000x",
    //     border: "20px solid",
    //     borderTopColor: "#00aabb",
    //     borderRightColor: "#4FC1E9",
    //     borderLeftColor: "#4FC1E9",
    //     borderBottomColor: "#00aabb",
    //     borderLeft: "0",
    //     marginLeft: "400px"

    // }

    return (
        <div>
            tmp
        </div>
    );
}
export default Liked;