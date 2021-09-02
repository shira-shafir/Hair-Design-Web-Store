import React, {useState} from "react";
import ReadMeEitan from "./ReadMeEitan";
import soh3 from "../assets/SoH3.png"

const imgStyle ={
    width:"20%"
}
const textStyle ={
    alignContent:"center",
    margin:"auto",
    border:"20px solid",
    borderColor:"#9933ff",
    borderRadius:"30px",
    textAlign:"center",
    fontFamily:"cursive"
}

function ReadMeShira(){
    return (
        <div style={textStyle}>
            Store name: <img src={soh3} style={imgStyle}/> <br/>
            <br/>
            What are we selling?: <br/>We are selling hair products, stylist locations and more<br/>
            <br/>
            What additional page(s) did you add? How to operate it?:
            <ul>
                <li>I added a quiz to see which of the stores products best suits you</li>
                <li>We added a Find a Stylist which marks all the nearest stylist</li>
                <li>A tutorial video that shows how to braid your hair</li>
                <li>Shows the products marked "Liked"</li>
            </ul>
            <br/><br/>
            What was hard to do?
            <br/>
            Connect the back and front. Please note that to activate you need to run build and then run!
            <br/><br/>
            Who is your partner?
            <br/>
            Eitan Alroy
            <br/><br/>
            What  did you do?
            <br/> all of the backend and some of the front end <br/><br/>
            What did your partner do? <br/>some of the front end
            <br/><br/>
            Specify all the different routes:
            <ul>
                <li>home: '/home',</li>
                <li>register: '/register',</li>
                <li>login: '/login',</li>
                <li> quiz: '/quiz',</li>
                <li>stylist: '/FindAStylist',</li>
                <li>productsLiked:'/Liked',</li>
                <li>store:'/HairCare',</li>
                <li>readme: '/ReadMeShira',</li>
                <li>readmeEitan:'/ReadMeEitan'</li>
                <li>doYou:'/DoYourStyle',</li>
                <li>products_liked: '/Liked',</li>
                <li>cart: '/cart'</li>
                <li>admin:'/admin'</li>
            </ul>
        </div>
    )
}

export default ReadMeShira;