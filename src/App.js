// import logo from './logo.svg';
import './App.css';
import Login from "./components/Login";
import Cart from "./components/Cart";
// import Home from "./components/Home";
// import Main from "./components/Main";
// import Register from "./components/Register";
// import Login from "./components/Login";

const user = {
  "id": "1234567",
  "username": "example",
  "password": "$2a$10$GMU4lvHb.OY1Hdbg/gmA7uGMHXQALJA388EVFRpz6d2tOH5630Cli",
  "cart": [{
    "name": "Wella",
    "detail": "Color Charm Lightest Ash Blonde Toner",
    "price": "8.49",
    "amount": "2",
    "image": "wella.jpg"
  },
    {
      "name": "Idella Labs",
      "detail": "Original Leave In Treatment",
      "price": "7.99",
      "amount": "3",
      "image": "SBS-106001.jpg"
    },
    {
      "name": "Beyond the Zone",
      "detail": "Curling Creme",
      "price": "6.5",
      "amount": "1",
      "image": "Beyond.jpg"
    }],
  "purchases": [],
  "logins": [],
  "logouts": [],
  "sessions": [],
  "isAdmin": false
}

function App() {
  return (
    <div className="App">
    <Home/>
    </div>
  );
}

export default App;
