import {useState} from "react";
import styled from 'styled-components';

const TileContainer = styled.div`
  background-color: grey;
  height: 200px;
  width: 200px;
  overflow: hidden;
  
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
  
  & button {
    color: green;
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
        {likeCallback && <button onClick={likeCallback}>Like</button>}
        {addToCartCallback &&  <button onClick={addToCartCallback}>Add to cart</button>}
      </div>}
    </TileContainer>
  )

}