import React, {useEffect, useState} from "react"
import {getProducts, addToCart, searchProduct, LikeorUnlike} from "../utils/api";
import {StoreTile} from "../components/StoreTile";
import styled from "styled-components";
import {useHistory} from "react-router-dom";
import {useUser} from "../hooks/useUser";
import {routes} from "../routes";

export const StoreGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

function HairCare() {
    const history = useHistory();
    const isLogged = useUser();

    if (isLogged === false){
        console.log("User not logged in");
        history.push(routes.login);
    }

    const [products, setProducts] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const getProductsFunc = async () => {
        try {
            const ans = await getProducts();

            if (ans.status === 200) {
                setProducts(await ans.json());
            }

        } catch (e) {
            alert("Could not retrieve products from server")
        }

    }

    const searchProductFunc = async () => {
        try {
            const ans = await searchProduct(searchValue);
            if (ans.status === 200) {
                setProducts(await ans.json());
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


    const likeOrUnlikeFunc = async (name) => {
        try {
            const ans = await LikeorUnlike(name);
            if (ans.status === 200) {
                alert("item liked");
            }
            if (ans.status >= 400) {
                alert(await ans.text())
            }
        } catch (e) {
            alert("Could not reach server")
        }
    }

    useEffect(getProductsFunc, []);

    return (
        <div>
            <div>
                <input value={searchValue} onChange={(e)=>setSearchValue(e.target.value)} placeholder="Search.."/>
                <button onClick={searchProductFunc}>Search</button>
            </div>
            <StoreGrid>
                {products.map(p => <StoreTile name={p.name} description={p.detail} price={p.price} image={p.image}
                                              addToCartCallback={() => addToCartFunc(p.name)}
                                              likeCallback={() => likeOrUnlikeFunc(p.name)}/>)}
            </StoreGrid>
        </div>);
}

export default HairCare