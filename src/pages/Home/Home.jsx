import React from "react";

import "./Home.css";
import NavBar from "../../components/nav bar/NavBar";
import Card from "../../components/home cards/Card";

export default function Home() {
  return (
    <div className="homePage">
      <NavBar />
      <div className="cardShow">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
