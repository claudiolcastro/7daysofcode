import './styles.css';

import React from "react";

export default function Menu(params) {
  return (
    <header className="menu">
      <div className="menu__logo">
        <img src="/images/logo.png" alt="logo casa verde" />
      </div>

      <nav className="menu__nav">
        <ul aria-label="menu">
          <li>Como fazer</li>
          <i>/</i>
          <li>Ofertas</li>
          <i>/</i>
          <li>Depoimentos</li>
          <i>/</i>
          <li>Vídeos</li>
          <i>/</i>
          <li>Meu carrinho</li>
        </ul>
      </nav>
    </header>
  );
}