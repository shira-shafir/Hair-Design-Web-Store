import React, {useEffect, useState} from "react"
import {getProducts} from "../utils/api";
import {StoreTile} from "../components/StoreTile";
import styled from "styled-components";

const StoreGrid = styled.div`
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

  useEffect(getProductsFunc,[]);

  return (
    <div>
      <h1>HairCare</h1>
      <StoreGrid>
        {products.map(p=> <StoreTile name={p.name} description={p.description} price={p.price} image={p.image} addToCartCallback={()=>alert("1")} likeCallback={()=>alert("2")} />)}
      </StoreGrid>
    </div>);
}

export default HairCare