// // App.js
// import React from "react";
// import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
// import Home from "./components/Home";
// import About from "./components/About";
// import Nav from "../common/Nav";
// import Footer from "../common/Footer";

// const Rutourservices = () => {
//   return (
//     <Router>
//       <div>
//         <nav
//           style={{
//             backgroundColor: "lightblue",
//             padding: "10px",
//             position: "fixed",
//             width: "100%",
//             zIndex: "1",
//           }}
//         >
//           <ul
//             style={{
//               display: "flex",
//               justifyContent: "space-around",
//               listStyle: "none",
//             }}
//           >
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//           </ul>
//         </nav>
//         <div style={{ paddingTop: "60px", paddingLeft: "20px" }}>
//           {" "}
//           {/* Adjust paddingTop to accommodate the navbar's height */}
//           <Switch>
//             <Route exact path="/" component={<Nav />} />
//             <Route path="/about" component={<Footer />} />
//           </Switch>
//         </div>
//       </div>
//     </Router>
//   );
// };

// export default Rutourservices;
