import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./templates/Topnav";
import DropDown from "./templates/DropDown";
import axios from "../utils/axios";
import Cards from "./templates/Cards";
import Spinner from "./templates/Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

const TvShows = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("airing_today");

  const [tvshows, setTvshows] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const getTv = async () => {
    try {
      const { data } = await axios.get( );
      //   setTrending(data.results);
      if (data.results.length > 0) {
        setTvshows((prevState) => [...prevState, ...data.results]);
        setPage(page + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(tvshows);

  const refreshHandler = () => {
    if (tvshows.length === 0) {
      getTv();
    } else {
      setPage(1);
      setTvshows([]);
      getTv();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);

  document.title = "Movie Page " + " - " + category.toUpperCase();

  return tvshows.length > 0 ? (
    <div className=" w-screen h-full bg-[#1F1E24]">
      <div className="px-[5%] flex items-center w-full justify-between ">
        <h1 className="text-2xl text-zinc-400 font-bold">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-fill cursor-pointer"
          ></i>{" "}
          Tvshows <small className="text-sm text-zinc-600">({category})</small>
        </h1>

        <div className="flex items-center w-[80%]">
          <Topnav />
          <DropDown
            title="category"
            option={["on_the_air", "top_rated", "popular", "airing_today"]}
            func={(e) => setCategory(e.target.value)}
          />
          <div className="w-[2%]"></div>
        </div>
      </div>

      <InfiniteScroll
        hasMore={hasMore}
        dataLength={tvshows.length}
        next={getTv}
        loader={<Spinner />}
      >
        <Cards data={tvshows} title= "tv" />
      </InfiniteScroll>
    </div>
  ) : (
    <Spinner />
  );
};

export default TvShows;
