// import React from "react";
// import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
// import Helmet from "react-helmet";
// import { positions, Provider } from "react-alert";
// import AlertTemplate from "react-alert-template-basic";
// import Favicon from 'react-favicon';
// import faviconImg from "../assets/SoH3-copy.png";
// import Header from "./Header";
// import NavBar from "./NavBar";
// import Footer from "./Footer";
// import ProtectedRoute from "./ProtectedRoute";
// import LoggedOutRoute from "./LoggedOutRoute";
// import AdminRoute from "./AdminRoute";
// import Home from "../pages/Home";
// import Checkout from "./Checkout";
// import Login from "../pages/Login";
// import Register from "../pages/Register";
// import About from "./About";
// import Catalog from "./Catalog"
// import Customize from "./Customize";
// import ReadMeEitan from "./ReadMeEitan";
// import Cart from "./Cart";
// import AdminScreen from "./AdminScreen";
// import Quiz from "../pages/Quiz";
// import FindAStylist from "./FindAStylist";
//
// function Main() {
//
//     const alertOptions = {
//         timeout: 5000,
//         position: positions.TOP_CENTER,
//         transition: "fade",
//     }
//
//     return (
//         <div>
//             <Favicon url={faviconImg} />
//             <Router>
//                 <Helmet>
//                      <style>
//                          {"body {  background-image: url('https://cdn.career.guru99.com/wp-content/uploads/2021/03/career-logo_v1.pnghttps://cdn.career.guru99.com/wp-content/uploads/2021/03/career-logo_v1.png'); }"}
//                      </style>
//                 </Helmet>
//                 <Provider template={AlertTemplate} {...alertOptions}>
//                     <Header/>
//                     <NavBar/>
//                     <Switch>
//                         <ProtectedRoute exact path='/' component={Home} />
//                         <LoggedOutRoute path='/login' component={Login} />
//                         <LoggedOutRoute path='/register' component={Register} />
//                         <ProtectedRoute path='/home' component={Home} />
//                         <ProtectedRoute path='/catalog' component={Catalog} />
//                         {/*<ProtectedRoute path='/about' component={About} />*/}
//                         {/*<ProtectedRoute path='/customize' component={Customize} />*/}
//                         <ProtectedRoute path='/Quiz' component={Quiz} />
//                         <ProtectedRoute path='/FindAStylist' component={FindAStylist} />
//                         {/*<Route path='/readme' component={ReadMeEitan} />*/}
//                         <ProtectedRoute path='/cart' component={Cart} />
//                         <ProtectedRoute path='/checkout' component={Checkout} />
//                         <AdminRoute path='/admin' component={AdminScreen} />
//                         <Redirect to="/" component={Home} />
//                     </Switch>
//                     <Footer />
//                 </Provider>
//             </Router>
//         </div>
//     );
// }
//
// export default Main;