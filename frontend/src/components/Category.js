import React from "react";

import '../components/css/quiz.css';

import blondeImg from "../assets/blonde.jpg";
import brownImg from "../assets/brown.png";
import gingerImg from "../assets/ginger.jpeg";

function Category() {

  const imgStyle = {
    width: "25%"
  }
  function magic() {
    document.getElementById("form1").onsubmit = function() {
      //displays the response DOM element
      document.getElementById("response").style.display = "block";

      //resets the DOM element on submit
      document.getElementById("answer").innerHTML = "";

      let age = document.querySelector('input[name = "age"]:checked').value;

      let activity = document.querySelector('input[name = "activity"]:checked').value;

      let genre = document.querySelector('input[name = "genre"]:checked').value;

      // initialize score variables
      let brown = 0;
      let blonde = 0;
      let ginger = 0;

      //function to calculate score for each question
      function eachscore(x) {
        if (x === "brown") {
          brown = brown + 1
        }
        if (x === "blonde") {
          blonde = blonde + 1
        }
        if (x === "ginger") {
          ginger = ginger + 1
        }
      }

      // for the above function, you could also change the 1 to a variable so you could give more points for certain questions

      //call function for each question
      eachscore(eval("age"));
      eachscore(eval("activity"));
      eachscore(eval("genre"));


      let all = [brown, blonde, ginger];

      //get the max score  in the array
      let maxscore = Math.max.apply(Math, all);

      // object holding scores and feedback
      let scores =
        [{index: 0, feedback: "Brown", img: brownImg},
          {index: 1, feedback: "Blonde", img: blondeImg},
          {index: 2, feedback: "Ginger", img: gingerImg}];

      //figure out which index # holds the max score
      for (let i = 0; i < all.length; i++) {
        if (all[i] === maxscore) {
          document.getElementById("answer").innerHTML = scores[i].feedback;
          document.getElementById("pic").src = scores[i].img;
        }
      }

      return false; // required to not refresh the page; just leave this here
    }// end the submit function
    return false;

  }


  return (
    <div id="square">
      <div id="header"><h1>Which hair color suits your personality the most?</h1></div>

      <form  id="form1">
        <p>How old are you?</p>
        <label><input type="radio" name="age" id="young" value="brown"/>under 18</label>
        <label><input type="radio" name="age" id="mid" value="blonde"/>19-34</label>
        <label><input type="radio" name="age" id="old" value="ginger"/>34+</label>

        <p>What would you prefer to do on your free night?</p>
        <label><input type="radio" name="activity" id="party" value="brown"/>Party</label>
        <label><input type="radio" name="activity" id="rock" value="blonde"/>Rock out</label>
        <label><input type="radio"  name="activity" id="beer" value="ginger"/>Game Night</label>

        <p>What's your favorite style of music?</p>
        <label><input type="radio" name="genre" id="rock2" value="brown"/>Rock</label>
        <label><input type="radio" name="genre" id="indie" value="blonde"/>Indie</label>
        <label><input type="radio" name="genre" id="country" value="ginger"/>Country</label>

        <button onClick={magic}>Submit</button>
      </form>

      <p id="response">You got <span id="answer"/></p>
      <img id="pic" style={imgStyle}/>


    </div>
  )
}

export default Category;