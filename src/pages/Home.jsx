import React, { useState, useEffect } from "react";
import Header from "../component/Header";
import Images from "../component/Images";
import Pagination from "../component/Pagination";
import axios from "axios";

const Home = () => {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("office");
  const [page, setpage] = useState(1);
  const [isLoding, setIsLoding] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      const result = await axios.get(
        `https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=${process.env.REACT_APP_ACCESS_KEY}&per_page=20`
      );
      setItems(result.data.results);
      console.log(result.data.results);
      setIsLoding(false);
    };
    fetchImages(); //.catch((err) => console.log(err));
  }, [query, page]);

  return (
    <div className="flex flex-col h-screen">
      <Header searchText={(query) => setQuery(query)} />
      {!isLoding && items.length === 0 && (
        <h1 className="text-5xl text-center mx-auto mt-32">No Images Found</h1>
      )}

      {isLoding ? (
        <div className="mx-auto lds-dual-ring"></div>
      ) : (
        <>
          <div className="mx-7">
            <div className="gap-8 lg:columns-3 md:columns-2 sm:columns-1">
              <Images item={items} />
            </div>
          </div>
          <Pagination page={page} setpage={setpage} />
        </>
      )}
    </div>
  );
};

export default Home;
