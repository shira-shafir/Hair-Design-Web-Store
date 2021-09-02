import React, {useState, useEffect} from 'react';
import {addToCart, getLikedProducts, LikeorUnlike, removeFromCart} from "../utils/api";
import {StoreTile} from "../components/StoreTile";
import {StoreGrid} from "./HairCare";
import {useHistory} from "react-router-dom";
import {useUser} from "../hooks/useUser";
import {routes} from "../routes";

function Liked() {
    const history = useHistory();
    const isLogged = useUser();

    if (isLogged === false){
        console.log("User not logged in");
        history.push(routes.login);
    }

    const [liked, setLiked] = useState([]);

    const getLikedProductsFunc = async () => {
        try {
            const ans = await getLikedProducts();

            if (ans.status === 200) {
                setLiked(await ans.json());
            }
        } catch (e) {
            alert(e);
            alert("Could not reach server");
        }
    }
    useEffect(getLikedProductsFunc, []);

    const likeOrUnlikeFunc = async (name) => {
        try {
            const ans = await LikeorUnlike(name);
            if (ans.status === 200) {
                alert("item unliked");
                window.location.reload(true);
            }
            if (ans.status >= 400) {
                alert(await ans.text())
            }
        } catch (e) {
            alert("Could not reach server")
        }
    }

    const addToCartFunc = async (name) => {
        try {
            const ans = await addToCart(name);
            if (ans.status === 200) {
                alert("item added");
            }
            if (ans.status >= 400) {
                alert(await ans.text())
            }
        } catch (e) {
            alert("Could not reach server")
        }
    }


    return (
        <div>
            <StoreGrid>
                {liked.map(p => <StoreTile name={p.name} description={p.detail} price={p.price} image={p.image} addToCartCallback={() => addToCartFunc(p.name)} likeCallback={() => likeOrUnlikeFunc(p.name)}/>)}
            </StoreGrid>
        </div>
    );
}
export default Liked;