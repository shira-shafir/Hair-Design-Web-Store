import React from "react"
import { useHistory } from 'react-router-dom';
import Category from "./Category";
import ProductLine from "./ProductLine";

function Home() {

    const history = useHistory();

    const goToCatalog = () => {
        history.push("/catalog");
    }

    return(
        <div>
            <Category/>
            <ProductLine/>
        </div>);
}

export default Home