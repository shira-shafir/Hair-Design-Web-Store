import React from "react"
import SoH4 from "../assets/SoH4.png";
import "./css/footer.css"

function Footer() {

    const logoStyles = {
        width: "20%",
    }

    const textStyle = {
        color: "white",
        verticalAlign: "middle"
    }

    const floating = {

        left: "10px",
        paddingTop: "11px",
        textAlign: "left",
        float:"right",
        verticalAlign: "middle"
    }


    return(
      <>
          <div style={{flexGrow:1}}/>
          <footer className="footer-distributed">
              <div style={floating}>
                  <img src={SoH4} style={logoStyles}/>
                  <br/>
                  <span>Shira Shafir and Eitan Alroy</span>
                  <br/>
                  <span style={textStyle}> Shape of Hue © 2021</span>
              </div>
              <div className="footer-right">
                  <p>Contact Us</p>
                  <form action="mailto:shirashafir@gmail.com" method="post">
                      <input type="text" name="email" placeholder="Email"/>
                      <textarea name="message" placeholder="Message"/>
                      <button>Send</button>
                  </form>
              </div>
          </footer>
      </>

    );
}

export default Footer;