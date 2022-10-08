import React, { useState } from "react";

const Header = ({ searchText }) => {
  const [text, setText] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };

  return (
    <div className="w-full p-8 flex justify-center content-center p-8 h-70 ">
      <div className="my-7 py-6 w-full flex flex-col  justify-between">
        <h1 className="text-3xl font-mono text-center mb-16">React Gallery</h1>

        <form onSubmit={onSubmit} className="mx-auto w-96  bg-white flex items-center  rounded-lg drop-shadow-md md:shadow-sm">
         
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="font-mono rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none"
            placeholder="Search For Images"
            autoFocus
          />
          <div className=" md:p-2 mr-2">
            <button
               type="submit"
              className="rounded-full focus:outline-none w-14 h-9 md:w-14 md:h-9 flex items-center justify-center"
              
            >
              <svg
                width="24"
                height="24"
                fill="none"
                aria-hidden="true"
                className=" mr-3 flex-none"
              >
                <path
                  d="m19 19-3.5-3.5"
                  stroke="#c0c0c0"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <circle
                  cx="11"
                  cy="11"
                  r="6"
                  stroke="#c0c0c0"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></circle>
              </svg>
            </button>
          </div>
          </form>
       
      </div>
    </div>
  );
};

export default Header;
