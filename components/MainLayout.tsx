import React from "react";
import NavBar from "./NavBar";

const MainLayout = ({ children }) => {
  return (
    <div className="bg-slate-100 w-full min-h-screen">
      <NavBar />
      <h1>MainLayout</h1>
      <hr />
      <main> {children} </main>
    </div>
  );
};

export default MainLayout;
