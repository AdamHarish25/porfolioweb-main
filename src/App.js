/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import ButtonUp from "./components/buttonGoUp";
import HelpButton from "./components/HelpButton";
import "./components/AppIn.css";
import Home from "./components/Contents/Home";
import About from "./components/Contents/About";
import Services from "./components/Contents/Services";
import Works from "./components/Contents/Works";
import Contact from "./components/Contents/Contact";
import Footer from "./components/Contents/Footer";
import { Navigate, Route, Routes } from "react-router-dom";
import Pricing from "./components/Contents/Pricing";

function App() {
  const [scrollTo, setScrollTo] = useState("");



 useEffect(() => {
   const element = document.getElementById(scrollTo);
   if (element) {
     window.scrollTo({
       top: element.offsetTop - 40,
       behavior: "smooth",
     });
   }
 }, [scrollTo]);


  return (
    <div className="w-screen overflow-y-hidden">
      <Routes>
        <Route
          path="/EN"
          element={
            <div>
              <Home lang="EN" />
              <About lang="EN" />
              <Services lang="EN" />
              <Works lang="EN" />
              <Pricing lang="EN" />
              <Contact lang="EN" />
              <Footer lang="EN" />
              <HelpButton />
              <Sidebar lang="EN" />
              <ButtonUp />
            </div>
          }
        />
        <Route
          path={"/ID"}
          element={
            <div>
              <Home lang="ID" />
              <About lang="ID" />
              <Services lang="ID" />
              <Works lang="ID" />
              <Pricing lang="ID" />
              <Contact lang="ID" />
              <Footer lang="ID" />
              <HelpButton />
              <Sidebar lang="ID" />
              <ButtonUp />
            </div>
          }
        />
        <Route path={"/*"} exact element={<Navigate to={"ID"} replace />} />
      </Routes>
    </div>
  );
}

export default App;
