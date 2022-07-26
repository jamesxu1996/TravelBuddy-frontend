import React from "react";
// import Navigation from "./components/Navbar/Navigation";
import { Navbar } from "./components";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Home, Explore, Travels, Profile, Login } from "./pages";
import TravelPostDetails from "./pages/Travels/TravelPostDetails";

// import Home from "./pages/Home/Home";
// import Explore from "./pages/Explore/Explore";
// import Travels from "./pages/Travels/Travels";
// import Profile from "./pages/Profile/Profile";
// import LoginForm from "./pages/Login/LoginForm";

import "./App.scss";
// import AppCss from "./styles/App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Router>
//           <Navbar />
//           <Routes>
//             <Route exact path="pages/home/home" element={<Home />} />
//             <Route path="pages/explore/explore" element={<Explore />} />
//             <Route path="pages/travels/travels" element={<Travels />} />
//             <Route path="pages/profile/profile" element={<Profile />} />
//             <Route path="pages/login/login" element={<LoginForm />} />
//           </Routes>
//         </Router>
//       </header>
//     </div>
//   );
// }

const App = () => (
  <div className="app">
    <Router>
      <Navbar />
      <Home />
      <Explore />
      <Travels />
      <Profile />
      <Routes>
        <Route exact path="/posts/:id" element={<TravelPostDetails />} />
      </Routes>
    </Router>
  </div>
);

export default App;
