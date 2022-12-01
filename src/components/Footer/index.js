import React from "react";

import { Container } from "./styles";

export default function Footer({ onToggleTheme, selectedTheme }) {
  return (
    <Container>
      <span>
        REVISE TUDO PRA SABER SE ESTÁ CERTINHO BELEZA MEU PATRÃO? {" "}
        {selectedTheme === "dark" ? "🙂" : "😉"}
      </span>
      <button type="button" onClick={onToggleTheme}>
        {selectedTheme === "dark" ? "🌞" : "🌙"}
      </button>
    </Container>
  );
}
