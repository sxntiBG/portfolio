import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function ToggleContent({ children }) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="w-[100%] flex flex-col justify-center">
      {isVisible && <div>{children}</div>}
      <div className="w-[100%] flex justify-center">
        <button
          className="bg-[#a987c9] text-white px-8 py-2 mt-4 rounded-full mb-2 transition-transform transform hover:font-bold hover:scale-105 hover:bg-[#915bb8] duration-300 ease-in-out flex items-center gap-1 justify-center"
          onClick={toggleVisibility}
        >
          {isVisible ? (
            <>
              <IoIosArrowUp /> Ver menos
            </>
          ) : (
            <>
              <IoIosArrowDown /> Ver más
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export default ToggleContent;
