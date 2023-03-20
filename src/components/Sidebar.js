/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Logo from "../images/Logo2.png";
import LogoBW from "../images/LogoBW2.png";

import "./AppIn.css";

export default function Sidebar() {

  const [isOpen, setIsOpen] = useState(false);

  const [colorChange, setColorChange] = useState(false);
  const changeTextColor = () => {
    if (window.scrollY >= 600) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };
  window.addEventListener("scroll", changeTextColor);

  var active1, active2, active3, active4;

  var winHash = window.location.hash;

  if (winHash === "") {
    active1 = "text-blue-400";
    active2 = "text-black";
    active3 = "text-black";
    active4 = "text-black";
  } else if (winHash === "#AboutSect") {
    active1 = "text-black";
    active2 = "text-blue-400";
    active3 = "text-black";
    active4 = "text-black";
  } else if (winHash === "#WorksSect") {
    active1 = "text-black";
    active2 = "text-black";
    active3 = "text-blue-400";
    active4 = "text-black";
  } else if (winHash === "#ContactSect") {
    active1 = "text-black";
    active2 = "text-black";
    active3 = "text-black";
    active4 = "text-blue-400";
  }

  return (
    <>
      <div>
        <header
          className={`inset-x-0 duration-200 py-4 px-10 fixed top-0 flex items-center justify-between mb-10 ${
            colorChange ? "text-black bg-white shadow-md" : "text-white shadow-none"
          }`}
        >
          <a href="#">
            {
              colorChange ? <img src={ Logo } alt="logo header" className="h-20 w-20" /> : <div className="h-20"></div>
            }
          </a>
          {!isOpen ? (
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="px-6 py-2 font-bold text-xs rounded-md hover:shadow-md transform flex items-center gap-2"
            >
              Menu <FontAwesomeIcon className="text-xl" icon={faBars} />
            </button>
          ) : (
            <button
              className="text-black hover:text-gray-400 transform duration-200 fixed top-4 right-4 text-xs z-10 flex gap-2 items-center"
              onClick={() => setIsOpen(!isOpen)}
            >
             Close <FontAwesomeIcon className="text-xl" icon={faXmark} />
            </button>
          )}
          <aside
            className={`inset-y-0 -right-1 fixed bg-white shadow-xl shadow-gray-400 p-14 w-72 ${
              isOpen ? "translate-x-0" : "translate-x-full"
            } duration-300 ease-in-out`}
          >
            <a
              href="#"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <h3
                className={`text-xl hover:text-blue-400 transform duration-200 ${active1}`}
              >
                Home
              </h3>
            </a>
            <a
              href="#AboutSect"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <h3
                className={`text-xl hover:text-blue-400 mt-5 transform duration-200 ${active2}`}
              >
                About
              </h3>
            </a>
            <a
              href="#WorksSect"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <h3
                className={`text-xl hover:text-blue-400 mt-5 transform duration-200 ${active3}`}
              >
                My Works
              </h3>
            </a>
            <a
              href="#ContactSect"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <h3
                className={`text-xl hover:text-blue-400 mt-5 transform duration-200 ${active4}`}
              >
                Contact me
              </h3>
            </a>
          </aside>
        </header>
      </div>
    </>
  );
}
