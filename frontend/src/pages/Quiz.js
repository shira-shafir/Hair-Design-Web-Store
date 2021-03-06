import React, {useState} from "react"
import {addToCart, LikeorUnlike, submitQuiz} from '../utils/api';
import {StoreTile} from "../components/StoreTile";
import {StoreGrid} from "./HairCare";
import {useHistory} from "react-router-dom";
import {useUser} from "../hooks/useUser";
import {routes} from "../routes";

function Quiz() {
    const history = useHistory();
    const isLogged = useUser();

    if (isLogged === false) {
        console.log("User not logged in");
        history.push(routes.login);
    }

    const [hairColor, setHairColor] = useState('Black');
    const [hairTexture, setHairTexture] = useState('Straight');
    const [hairLength, setHairLength] = useState('Long');

    const [ans, setAns] = useState(null);

    const selectStyle = {
        border: "1px solid #3C1C78",
        outline: "none",
        background: "transparent",
        borderRadius: "0",
        width: "11%",
        padding: "12px 55px 15px 15px",
        fontSize: "30px",
        color: " #00aabb"
    }
    const buttonStyle = {
        border: "hidden",
        outline: "0",
        padding: "12px",
        color: "white",
        backgroundColor: "#24b9b9",
        textAlign: "center",
        cursor: "pointer",
        width: "100%",
        fontSize: "18px",
        boxSizing: "content-box"
    }
    const centerDiv = {
        textAlign: "center",
    }
    const h1Style = {
        color: "#6a4dad",
        fontFamily: "Great Vibes, cursive",
        fontSize: "60px",
        lineHeight: "160px",
        fontWeight: "normal",
        textShadow: "0 1px 1px #fff"
    }


    const submit = async () => {
        try {
            const ans = await submitQuiz({hairColor, hairTexture, hairLength});

            if (ans.status === 200) {
                setAns(await ans.json());
            }
        } catch (e) {
            alert(e);
            alert("Could not reach server");
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
        <div style={centerDiv}>
            <h1 style={h1Style}>Find Your Perfect Product!</h1>

            <h5>What is your Hair Color?</h5>
            <br/>
            <select value={hairColor} onChange={(e) => setHairColor(e.target.value)} id="color" name="colors"
                    style={selectStyle}>
                <option value="Black">Black</option>
                <option value="Brown">Brown</option>
                <option value="Red">Red</option>
                <option value="Blond">Blond</option>
            </select>
            <br/>
            <h5>What is your Hair Texture?</h5>
            <br/>
            <select value={hairTexture} style={selectStyle} onChange={(e) => setHairTexture(e.target.value)}
                    id="texture" name="texture">
                <option value="Straight">Straight</option>
                <option value="Curly">Curly</option>
            </select>
            <br/>
            <h5>What is your Hair Length?</h5>
            <br/>
            <select value={hairLength} style={selectStyle} onChange={(e) => setHairLength(e.target.value)} id="length"
                    name="Length">
                <option value="Long">Long</option>
                <option value="Medium">Medium</option>
                <option value="Short">Short</option>
            </select>
            <br/> <br/>
            <input type="submit" onClick={submit} style={buttonStyle}/>

            {ans && <div>
                {ans.recommended_product && <div>
                    <h2>Your perfect product</h2>
                    <StoreTile name={ans.recommended_product.name} price={ans.recommended_product.price}
                               description={ans.recommended_product.detail} image={ans.recommended_product.image}
                               addToCartCallback={() => addToCartFunc(ans.recommended_product.name)}
                               likeCallback={() => likeOrUnlikeFunc(ans.recommended_product.name)}
                               key={ans.recommended_product.name}/>
                </div>}

                {ans.similar_products && <div>
                    <h2>Similar products</h2>
                    <StoreGrid>
                        {ans.similar_products.map(p => <StoreTile name={p.name} price={p.price} description={p.detail}
                                                                  image={p.image}
                                                                  addToCartCallback={() => addToCartFunc(p.name)}
                                                                  likeCallback={() => likeOrUnlikeFunc(p.name)}
                                                                  key={p.name}/>)}
                    </StoreGrid>
                </div>}
            </div>}

        </div>);
}

export default Quiz