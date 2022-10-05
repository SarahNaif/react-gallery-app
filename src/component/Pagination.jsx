import React from "react";

const Pagination = ({ page, setpage }) => {
  function previousPage() {
    setpage(page - 1);
  }
  function nextPage() {
    setpage(page + 1);
  }

  return (
    <div className="w-full mt-auto my-6 p-8 flex justify-center content-center p-8 h-70 ">
      <div className="inline-flex mt-2 xs:mt-0">
        <button
          disabled={page === 1}
          onClick={previousPage}
          className="text-sm bg-gray-200 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-l"
        >
          Prev
        </button>
        <button className="text-sm bg-gray-200 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 ">
          {page}
        </button>
        <button
          onClick={nextPage}
          className="text-sm bg-gray-200 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-r"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
