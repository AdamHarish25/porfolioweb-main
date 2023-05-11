import React, { useState } from "react";
import "./Dropdown.css";
import {FaChevronDown} from 'react-icons/fa';
import { Link } from "react-router-dom";

const Dropdown = ({ options, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange(option);
  };

  return (
    <div className="dropdown-container">
      <button
        className={`dropdown-button ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="dropdown-link">
          <img src={selectedOption.flag} className="dropdown-flag" alt="flag" />
          {selectedOption.label}
        </div>
        <span className={`arrow ${isOpen ? "open" : ""}`}>
          <FaChevronDown />
        </span>
      </button>
      {isOpen && (
        <ul className={`dropdown-list ${isOpen ? "open" : ""}`}>
          {options.map((option) => (
            <li
              key={option.value}
              className={`dropdown-item 
              ${selectedOption === option ? "hidden" : "block"}
              ${
                selectedOption.value === option.value ? "selected" : ""
              }`}
            >
              <Link
                className={`dropdown-link ${
                  selectedOption.value === option.value ? "selected" : ""
                }`}
                to={`/${option.label}`}
                onClick={() => handleOptionClick(option)}
              >
                <img className="dropdown-flag" src={option.flag} alt="flag" />{" "}
                <p>{option.label}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
