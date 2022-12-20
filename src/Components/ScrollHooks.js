import React, { useState, useEffect } from "react";

export default function ScrollHooks(props) {
  const [scrollY, setScrollY] = useState(0);

  const detectarScrollY = () => setScrollY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", detectarScrollY);

    return () => {
      window.removeEventListener("scroll", detectarScrollY);
    };
  });

  return (
    <>
      <h2>Hooks - useEffect y el ciclo de vida</h2>
      <p>Scroll Y del navegador {scrollY}px</p>
    </>
  );
}
