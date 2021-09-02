import React, {useEffect, useState} from "react"
import {getProducts, addToCart, searchProduct, LikeorUnlike} from "../utils/api";
import {StoreTile} from "../components/StoreTile";
import styled from "styled-components";

export const StoreGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

function HairCare() {
  const [products, setProducts] = useState([]);

  const getProductsFunc = async () => {
    try{
      const ans = await getProducts();

      if(ans.status === 200){
        setProducts(await ans.json());
      }

    }
    catch (e) {
     alert("Could not retrieve products from server")
    }

  }

    // const searchProductFunc = async (name) => {
    //     try{
    //         const ans = await searchProduct(name);
    //         if(ans.status === 200){
    //             alert("item found");
    //         }
    //         if(ans.status >= 400){
    //             alert(await ans.text())
    //         }
    //     }
    //     catch (e) {
    //         alert("Could not reach server")
    //     }
    // }

    const addToCartFunc = async (name) => {
        try{
            const ans = await addToCart(name);
            if(ans.status === 200){
                alert("item added");
            }
            if(ans.status >= 400){
                alert(await ans.text())
            }
        }
        catch (e) {
            alert("Could not reach server")
        }
    }

    //
    // const likeOrUnlikeFunc = async () => {
    //     try{
    //         const ans = await LikeorUnlike();
    //         if(ans.status === 200){
    //             alert("item liked");
    //         }
    //         if(ans.status >= 400){
    //             alert(await ans.text())
    //         }
    //     }
    //     catch (e) {
    //         alert("Could not reach server")
    //     }
    // }

  useEffect(getProductsFunc,[]);

  return (
    <div>
        <input type="text" placeholder="Search.." />
      <StoreGrid>
        {products.map(p=> <StoreTile name={p.name} description={p.detail} price={p.price} image={p.image} addToCartCallback={()=>addToCartFunc(p.name)} likeCallback={()=>alert("2")} />)}
      </StoreGrid>
    </div>);
}

export default HairCare