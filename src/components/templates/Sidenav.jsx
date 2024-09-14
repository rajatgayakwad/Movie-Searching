import React from "react";
import { Link } from "react-router-dom";

const Sidenav = () => {
  return (
    <div className="w-[20%] h-full border-r-2 border-zinc-400 p-10">
      <h1 className="text-2xl font-bold text-white">
        <span>SCSDB</span>
      </h1>

      <nav className="flex flex-col text-zinc-400 text-xl gap-2">
        <h1 className="text-white font-medium text-xl mt-10 mb-5">New Feeds</h1>

        <Link
          to="/trending"
          className="hover:text-white hover:bg-[#6556CD] p-4 rounded-lg duration-300"
        >
          <i className="ri-fire-fill"></i> Trending
        </Link>
        <Link
          to="/popular"
          className="hover:text-white hover:bg-[#6556CD] p-4 rounded-lg duration-300"
        >
          <i className="ri-bard-fill"></i> Popular
        </Link>
        <Link
          to="/movie"
          className="hover:text-white hover:bg-[#6556CD] p-4 rounded-lg duration-300"
        >
          <i className="ri-movie-2-fill"></i> Movies
        </Link>
        <Link
          to="/tv"
          className="hover:text-white hover:bg-[#6556CD] p-4 rounded-lg duration-300"
        >
          <i className="ri-tv-2-fill"></i> Tv Shows
        </Link>
        <Link
          to="/person"
          className="hover:text-white hover:bg-[#6556CD] p-4 rounded-lg duration-300"
        >
          <i className="ri-team-fill"></i> People
        </Link>
      </nav>

      <hr />

      <nav className="flex flex-col text-zinc-400 text-xl gap-2">
        <h1 className="text-white font-medium text-xl mt-10 mb-5">
          Website Information
        </h1>

        <Link className="hover:text-white hover:bg-[#6556CD] p-4 rounded-lg duration-300">
          <i className="ri-information-2-fill"></i> About
        </Link>
        <Link className="hover:text-white hover:bg-[#6556CD] p-4 rounded-lg duration-300">
          <i className="ri-phone-fill"></i> Contact Us
        </Link>
      </nav>
    </div>
  );
};

export default Sidenav;
