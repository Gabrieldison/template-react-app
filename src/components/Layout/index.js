import React from "react";

import Header from "../Header";
import Routes from "../../routes";
import { BrowserRouter, Link } from "react-router-dom";
import { Nav } from "./styles";

export default function Layout({ onToggleTheme, selectedTheme }) {
  return (
    <BrowserRouter>
      <Header onToggleTheme={onToggleTheme} selectedTheme={selectedTheme} />
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/posts"> Posts</Link>
        <Link to="/posts/1515">Post</Link>
      </Nav>
      <Routes />
    </BrowserRouter>
  );
}
