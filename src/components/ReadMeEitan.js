import React, { useState } from "react";
import './css/readmeEitan.css';

function ReadMe() {

    return(
        <div className="square">
            <div>
                <table className="rwd-table">
                    <tr>
                        <th>Question</th>
                        <th>Answer</th>
                    </tr>
                    <tr>
                        <td>Store name</td>
                        <td>Shape of Hue</td>
                    </tr>
                    <tr>
                        <td>What are you selling?</td>
                        <td>We are selling stylistic, cosmetic hair products and creams.</td>
                    </tr>
                    <tr>
                        <td>What additional pages did you add?</td>
                        <tr>
                            <li>We added a quiz to tell which hair product is most suited for you (Quiz)</li>
                            <li>We added a page to find a stylist which help us get people to buy products in person</li>
                            <li>We also added a page to get all the liked and most liked products</li>
                            <li>And a tutorial for how to do your own hair style</li>
                        </tr>
                        <br/>
                    </tr>
                    <tr>
                        <td>How to operate it?</td>
                        <li>Choose the options based on your likes and click submit to get your hair color</li>
                        <li>We added a page to find a stylist which help us get people to buy products in person</li>
                        <li>Person can view and look at the most liked products and that can help decide what to get</li>
                    </tr>
                    <tr>
                        <td>What was hard to do?</td>
                        <td>
                            Centring a div c:
                            <br/>The hardest part in the front was making sure that all the components align well together.
                            <br/>I bet that the hardest part by far was the backend and dealing with making a DB run locally.
                        </td>
                    </tr>
                    <tr>
                        <td>Who is your partner?</td>
                        <td>Shira Shafir 👑</td>
                    </tr>
                    <tr>
                        <td>What did you do?</td>
                        <td>
                            I did the front-end and additional pages.
                            {/*<br/>With a bit of a supporting hand helping with some back functionality*/}
                            {/*<br/>like hashing the passwords and a bit more.*/}
                        </td>
                    </tr>
                    <tr>
                        <td>What did your partner do?</td>
                        <td>Shira did all the background and databases including the backend and endpoints,
                        <br/>She also helped creating and editing in the frontend, for that I am grateful.</td>
                    </tr>
                    <tr>
                        <td>all the different routes your app</td>
                        <li>/login</li>
                        <li>/register</li>
                        <li>/home</li>
                        <li>/about</li>
                        <li>/customize</li>
                        <li>/readme</li>
                        <li>/cart</li>
                        <li>/checkout</li>
                        <li>/admin</li>
                        <li>/logout</li>
                        <li>/admin-auth</li>
                    </tr>

                </table>
            </div>
        </div>
    );
}

export default ReadMe;