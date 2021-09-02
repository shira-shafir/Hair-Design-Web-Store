import './App.css';
import {BrowserRouter as Router, Route, Switch,} from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import {routes} from "./routes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import FindAStylist from "./pages/FindAStylist";
import DoYourStyle from "./pages/DoYourStyle";
import HairCare from "./pages/HairCare";
import Liked from "./pages/Liked";
import Cart from './pages/Cart.js';
import ReadMeShira from './pages/ReadMeShira'
import ReadMeEitan from "./pages/ReadMeEitan";
import Admin from "./pages/Admin";


function App() {
    return (
        <div id={"App"}>
            <Router>
                <Header/>
                <NavBar/>
                <Switch>
                    <Route exact path={routes.home}>
                        <Home/>
                    </Route>
                    <Route path={routes.register}>
                        <Register/>
                    </Route>
                    <Route path={routes.login}>
                        <Login/>
                    </Route>
                    <Route path={routes.register}>
                        <Quiz/>
                    </Route>
                    <Route path={routes.quiz}>
                        <Quiz/>
                    </Route>
                    <Route path={routes.stylist}>
                        <FindAStylist/>
                    </Route>
                    <Route path={routes.doYou}>
                        <DoYourStyle/>
                    </Route>
                    <Route path={routes.store}>
                        <HairCare/>
                    </Route>
                    <Route path={routes.cart}>
                        <Cart/>
                    </Route>
                    <Route path={routes.productsLiked}>
                        <Liked/>
                    </Route>
                    <Route path={routes.readme}>
                        <ReadMeShira/>
                    </Route>
                    <Route path={routes.readmeEitan}>
                      <ReadMeEitan/>
                    </Route>
                    <Route path={routes.admin}>
                        <Admin/>
                    </Route>
                </Switch>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;
