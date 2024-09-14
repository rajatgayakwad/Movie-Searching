import React from "react";
import { Link } from "react-router-dom";

const Header = ({ data }) => {
  //   console.log(data);
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.profile_path
        })`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="w-full h-[60vh] flex flex-col justify-end items-start p-[4%] pl-[8%]"
    >
      <h1 className="text-white font-bold text-5xl mb-3">
        {data.name || data.original_name || data.title || data.original_title}
      </h1>
      <p className=" w-[50%] leading-1 text-zinc-300">
        {data.overview.slice(0, 100)}{" "}
        <Link
          to={`/${data.media_type}/details/${data.id}`}
          className="text-blue-400"
        >
          ...more
        </Link>
      </p>
      <p className="text-zinc-200 mt-4">
        <i className="ri-megaphone-fill text-yellow-500"></i>{" "}
        {data.release_date || "NO INFORMATION"}
        <i className="ri-album-fill text-yellow-500 ml-5"></i>{" "}
        {data.media_type.toUpperCase()}
      </p>

      <Link
        to={`${data.media_type}/details/${data.id}/trailer`}
        className=" block p-4 rounded-full mt-5 bg-[#6556CD] font-medium text-white"
      >
        Watch Trailer
      </Link>
    </div>
  );
};

export default Header;
