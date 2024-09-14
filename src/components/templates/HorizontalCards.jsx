import React from "react";
import { Link } from "react-router-dom";
import noimg from "/noimg.jpg";

const HorizontalCards = ({ data }) => {
  return (
    <div className="w-full  p-5">
      <div className="w-[100%]  flex overflow-y-hidden">
        {data.length > 0 ? (
          data.map((d, i) => (
            <Link
              to={`/${d.media_type}/details/${d.id}`}
              key={i}
              className="min-w-[20%] bg-zinc-900 mr-5 mb-5 shadow-lg rounded-md overflow-hidden"
            >
              <img
                className="w-full h-[45%] object-cover"
                src={
                  d.backdrop_path || d.profile_path
                    ? `https://image.tmdb.org/t/p/original/${
                        d.backdrop_path || d.profile_path
                      })`
                    : noimg
                }
                alt=""
              />
              <div className="text-white p-3 h-[45%] overflow-y-auto">
                <h1 className=" font-semibold text-xl ">
                  {d.name || d.original_name || d.title || d.original_title}
                </h1>
                <p className=" leading-1 text-zinc-300 text-center mt-3 w-full block">
                  {d.overview.slice(0, 50)}
                  <span className="text-zinc-600">...more</span>
                </p>
              </div>
            </Link>
          ))
        ) : (
          <h1 className="text-white text-3xl mt-5">No Recommendations</h1>
        )}
      </div>
    </div>
  );
};

export default HorizontalCards;
