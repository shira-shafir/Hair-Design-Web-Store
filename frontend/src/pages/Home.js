import React from "react"
import {useHistory} from 'react-router-dom';
import ASP30 from "../assets/ASP30.jpg"
import AGEbeautiful from "../assets/AGEbeautiful.jpg"
import BlondB from "../assets/BlondB.jpg"
import Beyond from "../assets/Beyond.jpg"
import SLNCAR60 from "../assets/SLNCAR60.jpg"
import ION159 from "../assets/ION159.jpg"


// import Category from "../components/Category";
// import ProductLine from "./ProductLine";

function Home() {

    const history = useHistory();

    const goToCatalog = () => {
        history.push("/catalog");
    }
    const productStyle = {
        boxShadow: "0 4px 8px 0 rgba(0, 0, 5, 0.2)",
        boxSizing: "border-box",
        maxWidth: "300px",
        marginRight: "40px",
        textAlign: "center",
        fontFamily: "arial",
        display: "inline-block",
        whiteSpace: "revert",
        marginLeft: "200px",
        marginBottom: "30px",
        overflowX: "auto"
    }
    const buttonStyle = {
        border: "none",
        outline: "0",
        padding: "12px",
        color: "white",
        backgroundColor: "#000",
        textAlign: "center",
        cursor: "pointer",
        width: "100%",
        fontSize: "18px",
        boxSizing: "border-bix"
    }
    const priceStyle = {
        color: "grey",
        fontSize: "22px"
    }
    const h2Style = {
        marginBottom: "0.5rem",
        fontFamily: "inherit",
        fontSize: "2rem",
        fontWeight: "500",
        textAlign: "center",
        lineHeight: '1.2'
    }
    return (

        <div class="OnlyAtHue">
            <h2 style={h2Style}>Only At Hue</h2>
            <ul>
                <li style={productStyle}>
                    <img src={ASP30}/>
                    <h1>ASP</h1>
                    <p style={priceStyle}>8.79</p>
                    <p className="description">Quick Dip Powders</p>
                    <p>
                        <button style={buttonStyle}>Add to Cart</button>
                    </p>
                </li>

                <li style={productStyle}>
                    <img src={AGEbeautiful}/>
                    <h1>AGEbeautiful</h1>
                    <p style={priceStyle}>19.99</p>
                    <p className="description">Anti-Aging Permanent Liqui-Creme Hair</p>
                    <p>
                        <button style={buttonStyle}>Add to Cart</button>
                    </p>
                </li>
                <li style={productStyle}>
                    <img src={BlondB}/>
                    <h1>BlondB</h1>
                    <p style={priceStyle}>29.99</p>
                    <p className="description">Express NINE Level Lightener</p>
                    <p>
                        <button style={buttonStyle}>Add to Cart</button>
                    </p>
                </li>
                <li style={productStyle}>
                    <img src={SLNCAR60}/>
                    <h1>Salon Care</h1>
                    <p style={priceStyle}>9.96</p>
                    <p className="description">20 Volume Creme Developer</p>
                    <p>
                        <button style={buttonStyle}>Add to Cart</button>
                    </p>
                </li>
                <li style={productStyle}>
                    <img src={ION159}/>
                    <h1>ion</h1>
                    <p style={priceStyle}>15.59</p>
                    <p className="description">Color Defense Sulfate Free Shampoo</p>
                    <p>
                        <button style={buttonStyle}>Add to Cart</button>
                    </p>
                </li>
                <li style={productStyle}>
                    <img src={Beyond}/>
                    <h1>Beyond the Zone</h1>
                    <p style={priceStyle}>6.59</p>
                    <p className="description">Curling Creme</p>
                    <p>
                        <button style={buttonStyle}>Add to Cart</button>
                    </p>
                </li>
            </ul>

            {/*<Category/>*/}
            {/*<ProductLine/>*/}
        </div>);
}

export default Home