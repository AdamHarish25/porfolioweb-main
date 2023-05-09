/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Logo from "../images/Logo2.png";
import "./AppIn.css";
import { DataStorageEN, DataStorageID } from "./Data/WholeDatas";
import Dropdown from "./Dropdown/Dropdown";
import {} from 'react-icons';
import { FaBars, FaTimes } from "react-icons/fa";

export default function Sidebar({ lang = "", setScrollTo }) {
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

  var Data = (lang === "EN" ? DataStorageEN : DataStorageID);
 
  return (
    <>
      <div>
        <header
          className={`inset-x-0 duration-200 py-4 px-10 fixed top-0 flex items-center justify-between mb-10 ${
            colorChange
              ? "bg-white text-black shadow-md"
              : "shadow-none text-white"
          }`}
        >
          <a href="#">
            {colorChange ? (
              <img src={Logo} alt="logo header" className="h-20 w-20" />
            ) : (
              <div className="h-20"></div>
            )}
          </a>
          {!isOpen ? (
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="px-6 py-2 font-bold text-xs rounded-md hover:shadow-md transform flex items-center gap-2"
            >
              <FaBars className="text-xl" />
              {Data.SidebarData.buttonTitle1}{" "}
            </button>
          ) : (
            <button
              className="text-black hover:text-gray-400 transform duration-200 fixed top-4 right-4 text-xs z-10 flex gap-2 items-center"
              onClick={() => setIsOpen(!isOpen)}
            >
              <FaTimes className="text-xl" />
              {Data.SidebarData.buttonTitle2}{" "}
            </button>
          )}
          <aside
            className={`inset-y-0 -right-1 fixed bg-white shadow-xl shadow-gray-400 p-14 w-72 ${
              isOpen ? "translate-x-0" : "translate-x-full"
            } duration-300 ease-in-out space-y-5`}
          >
            {Data.SidebarData.menus.map((data, index) => (
              <a
                href={data.link}
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
                key={index}
              >
                <h3
                  className={`text-xl hover:text-blue-600 mb-5 transform duration-200 ${
                    window.location.hash === data.link
                      ? "text-blue-600"
                      : "text-black"
                  }`}
                >
                  {data.title}
                </h3>
              </a>
            ))}

            <Dropdown options={Data.DropdownData} />
          </aside>
        </header>
      </div>
    </>
  );
}
