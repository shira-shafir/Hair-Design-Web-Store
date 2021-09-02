import React, {useState} from "react";
import styled from 'styled-components';
import likeButton from '../assets/likeButton.jpg';

const TileContainer = styled.div`
  background-color: #00aabb;
  height: 350px;
  width: 350px;
  overflow: hidden;
  outline: none;
  margin-bottom: 20px;


  & h1 {
    font-family: inherit;
    font-size: 24px;
    font-weight: 500;
    text-align: center;
    line-height: 1.2;
  }

  & h5 {
    text-align: center;
  }

  & p {
    text-align: center;
  }

  & img {
    display: flex;
    width: 100%;
    height: 50%;
    object-fit: cover;
    overflow: hidden;
    justify-content: center;
    text-align: center;
  }

  & button {
    margin: 0;
    position: relative;
    top: 50%;
    -ms-transform: translateY(-100%);
    transform: translateX(200%);
    //transform: translateY(-50%);
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    border: hidden;
    outline: 0;
    padding: 12px;
    color: white;
    background-color: #000;;
    cursor: pointer;
    width: 12%;
    font-size: 20px;
    box-sizing: content-box;
  }
`;

export function StoreTile({name, description, image, price,addToCartCallback,likeCallback}) {
  const [hover, setHover] = useState(false);

  return (
    <TileContainer onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
      {!hover? <div>
        <img src={`http://localhost:3000/assets/${image}`} />
      </div>:
      <div>
        <h1>{name}</h1>
        <p>{description}</p>
        <h5>Price: {price}$</h5>
        {likeCallback && <button onClick={likeCallback}><img src={likeButton}/></button>}
        {addToCartCallback &&  <button onClick={addToCartCallback}>Add to cart</button>}
      </div>}
    </TileContainer>
  )

}