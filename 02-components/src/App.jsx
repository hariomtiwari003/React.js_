import React from "react";
import Card from "./components/card";
import NavBar from "./components/NavBar";

const App = () => {
  const user = "Hariom Tiwari"
  return (
   <>
   <h1>Hellow! , I am {user}</h1>
   <NavBar/>
   <Card/>
   </>
  );
};

export default App;
