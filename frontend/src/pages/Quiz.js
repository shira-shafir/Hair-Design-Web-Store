import React, {useState} from "react"
import {submitQuiz} from '../utils/api';
import {StoreTile} from "../components/StoreTile";
import {StoreGrid} from "./HairCare";

function Quiz() {
    const [hairColor, setHairColor] = useState('Black');
    const [hairTexture, setHairTexture] = useState('Straight');
    const [hairLength, setHairLength] = useState('Long');

    const [ans, setAns] = useState(null);

    const selectStyle = {
        border: "1px solid #3C1C78",
        position: "relative",
        overflow: "hidden",
        outline: "none",
        background: "transparent",
        webkitAppearance: "none",
        mozAppearance: "none",
        appearance: "none",
        borderRadius: "0",
        margin: "0",
        display: "block",
        width: "100%",
        padding: "12px 55px 15px 15px",
        fontSize: "14px",
        color: " #714BB9"
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

    return (
        <div>
            <h1>Quiz</h1>

            <label htmlFor="hairColor">What is your Hair Color?</label>
            <br/>
            <select value={hairColor} onChange={(e) => setHairColor(e.target.value)} id="color" name="colors"
                    style={selectStyle}>
                <option value="Black">Black</option>
                <option value="Brown">Brown</option>
                <option value="Red">Red</option>
                <option value="Blond">Blond</option>
            </select>
            <br/>
            <label htmlFor="hairTexture">What is your Hair Texture?</label>
            <br/>
            <select value={hairTexture} onChange={(e) => setHairTexture(e.target.value)} id="texture" name="texture">
                <option value="Straight">Straight</option>
                <option value="Curly">Curly</option>
            </select>
            <br/>
            <label htmlFor="hairLen">What is your Hair Length?</label>
            <br/>
            <select value={hairLength} onChange={(e) => setHairLength(e.target.value)} id="length" name="Length">
                <option value="Long">Long</option>
                <option value="Medium">Medium</option>
                <option value="Short">Short</option>
            </select>
            <br/>
            <input type="submit" onClick={submit}/>

            {ans && <div>
                {ans.recommended_product && <div>
                    <h2>Your perfect product</h2>
                    <StoreTile name={ans.recommended_product.name} price={ans.recommended_product.price}
                               description={ans.recommended_product.detail} image={ans.recommended_product.image}/>
                </div>}

                {ans.similar_products && <div>
                    <h2>Similar products</h2>
                    <StoreGrid>
                        {ans.similar_products.map(p => <StoreTile name={p.name} price={p.price} description={p.detail}
                                                                  image={p.image}/>)}
                    </StoreGrid>
                </div>}
            </div>}

        </div>);
}

export default Quiz