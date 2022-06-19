import React, { useEffect } from "react";
import css from "./index.css";

export default function Goodbye() {
  useEffect(() => {
    const getApi = () => {
      fetch("http://localhost:3000/api/goodbye")
        .then((res) => res.json())
        .then((res) => console.log({ res }));
    };

    getApi();
  }, []);
  return (
    <div>
      <h1>Adios mundo!!</h1>
    </div>
  );
}
