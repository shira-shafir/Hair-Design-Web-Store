import './App.css';
import {BrowserRouter as Router, Route, Switch,} from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import { routes } from "./routes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import FindAStylist from "./components/FindAStylist";
import DoYourStyle from "./components/DoYourStyle";
import HairCare from "./pages/HairCare";
import Liked from "./components/Liked";
import LikedProducts from "./components/Liked";
// import ReadMeEitan from "../../src/components/ReadMeEitan";
function App() {
  return (
    <div id={"App"}>
      <Router>
        <Header />
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
          <Route path={routes.products_liked}>
            <Liked/>
          </Route>
          <Route path={routes.store}>
            <HairCare/>
          </Route>
          //TODO: add "liked products"
          {/*<Route path={routes.stylist}>*/}
          {/*  <Liked/>*/}
          {/*</Route>*/}
          {/*<Route path={routes.readmeEitan}>*/}
          {/*  <ReadMeEitan/>*/}
          {/*</Route>*/}
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
