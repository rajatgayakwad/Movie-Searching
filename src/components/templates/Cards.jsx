import React from "react";
import { Link } from "react-router-dom";
import noimg from "/noimg.jpg";
const Cards = ({ data, title }) => {
  // console.log(title);
  return (
    <div className=" px-[5%] flex flex-wrap w-full mx-auto  bg-[#1F1E24]">
      {data.map((c, i) => (
        <Link
          to={`/${data.media_type || title}/details/${c.id}`}
          key={i}
          className="w-[25vh] relative mx-auto ml-[3.5%] mb-[5%]"
        >
          <img
            className="h-[40vh] object-cover shadow-[8px_17px_38px_2px_rgba(0, 0, 0, .5)]"
            src={
              c.backdrop_path || c.profile_path
                ? `https://image.tmdb.org/t/p/original/${
                    c.backdrop_path || c.profile_path
                  }`
                : noimg
            }
            alt=""
          />
          <h1 className="text-zinc-400 font-bold text-2xl mb-3">
            {c.name || c.original_name || c.title || c.original_title}
          </h1>
          <div className="h-[8vh] absolute right-[-14%] bottom-[30%] w-[8vh] bg-yellow-500 rounded-full text-lg font-medium text-white flex justify-center items-center">
            {c.vote_average} <sup>%</sup>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Cards;
