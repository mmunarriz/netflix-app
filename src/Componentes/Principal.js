import React from "react";
import "../App.css";
import Banner from "./Banner";
import Nav from "./Nav";
import TopRated from "./TopRated";
import { useAuth } from "../context/authContext";
import Footer from "./footer";

// Función principal, llama a los componentes: Nav, Banner y TopRated
function Principal() {
  const { user } = useAuth();
  console.log(user)
  return (
    <div className="App">
      <Nav />
      <Banner />
      <TopRated />
      <Footer/>
    </div>
  );
}

export default Principal;
