import React from "react";
import { useNavigate } from "react-router-dom";
import css from "./index.css";

export default function Home() {
  const navegate = useNavigate();

  return (
    <div>
      <h1>Hola mundo!!</h1>
      <h2 onClick={() => navegate("goodbye")}>Go to DB</h2>
      <h2 onClick={() => navegate("exit")}>Go to exit</h2>
    </div>
  );
}
