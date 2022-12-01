import React from "react";

import Header from "../Header";
import Footer from "../Footer";

export default function Layout({ onToggleTheme, selectedTheme }) {
  return (
    <>
      <Header onToggleTheme={onToggleTheme} selectedTheme={selectedTheme}/>
      <Footer onToggleTheme={onToggleTheme} selectedTheme={selectedTheme}/>
    </>
  );
}
