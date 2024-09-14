import axios from "../../utils/axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import noimg from "/noimg.jpg";

const Topnav = () => {
  const [query, setQuery] = useState("");

  const [searches, setSearches] = useState([]);

  const getSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      //   console.log(data.results);
      setSearches(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSearches();
  }, [query]);

  return (
    <div className="w-[50%] mx-auto relative h-[10vh] flex justify-start items-center ">
       <i className="ri-search-line text-3xl text-zinc-400"></i>
      <input
        type="text"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className="w-[50%] p-5 bg-transparent border-none mx-10 text-xl text-zinc-300 outline-none"
        placeholder="search anything"
      />
      {query.length > 0 && (
        <i
          onClick={() => setQuery("")}
          className="ri-close-line text-3xl text-zinc-400 cursor-pointer"
        ></i>
      )}

      <div className=" z-[100] w-[80%] bg-zinc-200 max-h-[50vh] absolute top-[100%] rounded-md overflow-auto">
        {searches.map((s, i) => (
          <Link to={`/${s.media_type}/details/${s.id}`}
            key={i}
            className=" hover:bg-zinc-300 font-semibold hover:text-black duration-300 text-zinc-500  p-6 flex justify-start items-center  w-[100%]  border-zinc-100 border-b-2"
          >
            <img
              className="w-[10vw] h-[10vh] rounded-md object-cover mr-5 shadow-lg bg-no-repeat"
              src={
                s.backdrop_path || s.profile_path
                    ? `https://image.tmdb.org/t/p/original/${
                        s.backdrop_path || s.profile_path
                      } `
                  : noimg
              }
              alt=""
            />
            <span>
              {s.name || s.original_name || s.title || s.original_title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Topnav;
