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
import Benefits from "./components/Contents/Benefits";

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
              <Home lang="EN" setScrollTo={setScrollTo} />
              <Benefits lang="EN" setScrollTo={setScrollTo} />
              <Services lang="EN" setScrollTo={setScrollTo} />
              <Works lang="EN" setScrollTo={setScrollTo} />
              <Pricing lang="EN" setScrollTo={setScrollTo} />
              <About lang="EN" setScrollTo={setScrollTo} />
              <Contact lang="EN" setScrollTo={setScrollTo} />
              <Footer lang="EN" setScrollTo={setScrollTo} />
              <Sidebar lang="EN" setScrollTo={setScrollTo} />
              <ButtonUp />
            </div>
          }
        />
        <Route
          path={"/ID"}
          element={
            <div>
              <Home lang="ID" setScrollTo={setScrollTo} />
              <Benefits lang="ID" setScrollTo={setScrollTo} />
              <Services lang="ID" setScrollTo={setScrollTo} />
              <Works lang="ID" setScrollTo={setScrollTo} />
              <Pricing lang="ID" setScrollTo={setScrollTo} />
              <About lang="ID" setScrollTo={setScrollTo} />
              <Contact lang="ID" setScrollTo={setScrollTo} />
              <Footer lang="ID" setScrollTo={setScrollTo} />
              <Sidebar lang="ID" setScrollTo={setScrollTo} />
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
