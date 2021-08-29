import React from "react"

// import  "./css/quiz.css"
function Quiz() {
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

    return (
        <div>
            <h1>Quiz</h1>
            <form>
                <label htmlFor="hairColot">What is your Hair Color?</label>
                <br/>
                <select id="color" name="colors" style={selectStyle}>
                    <option value="Black">Black</option>
                    <option value="Brown">Brown</option>
                    <option value="Red">Red</option>
                    <option value="Blond">Blond</option>
                </select>
                <br/>
                <label htmlFor="hairTexture">What is your Hair Texture?</label>
                <br/>
                <select id="texture" name="texture">
                    <option value="Straight">Straight</option>
                    <option value="Curly">Curly</option>
                </select>
                <br/>
                <label htmlFor="hairLen">What is your Hair Length?</label>
                <br/>
                <select id="length" name="Length">
                    <option value="Long">Long</option>
                    <option value="Medium">Medium</option>
                    <option value="Short">Short</option>
                </select>
                <br/>
                <input type="submit"/>
            </form>
        </div>);
}

export default Quiz