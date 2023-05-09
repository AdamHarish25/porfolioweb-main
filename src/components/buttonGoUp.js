/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { FaChevronUp } from "react-icons/fa";

function buttonToUp() {
  return (
    <div>
      <a
        href="#"
        data-tooltip-target="tooltip-top"
        data-tooltip-placement="top"
        className={`bottom-0 right-0 py-3 px-5 sticky rounded-none text-center bg-black text-white transform duration-300 block`}
      >
      <FaChevronUp />
      </a>
    </div>
  );
}

export default buttonToUp;
