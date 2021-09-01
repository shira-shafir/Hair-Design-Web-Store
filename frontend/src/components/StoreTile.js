import {useState} from "react";
import styled from 'styled-components';

const TileContainer = styled.div`
  color: grey;
  min-height: 50px;
  max-height: 200px;
  width: 200px;
  overflow: hidden;
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
        <button onClick={likeCallback}>Like</button>
        <button onClick={addToCartCallback}>Add to cart</button>
      </div>}
    </TileContainer>
  )

}