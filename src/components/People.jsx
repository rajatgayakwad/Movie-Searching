import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./templates/Topnav";
import DropDown from "./templates/DropDown";
import axios from "../utils/axios";
import Cards from "./templates/Cards";
import Spinner from "./templates/Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

const People = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("popular");

  const [person, setPerson] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const getPersson = async () => {
    try {
      const { data } = await axios.get(`/person/${category}?page=${page}`);
      //   setTrending(data.results);
      if (data.results.length > 0) {
        setPerson((prevState) => [...prevState, ...data.results]);
        setPage(page + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(person);

  const refreshHandler = () => {
    if (person.length === 0) {
      getPersson();
    } else {
      setPage(1);
      setPerson([]);
      getPersson();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);

  document.title = "Movie Page " + " - " + category.toUpperCase();

  return person.length > 0 ? (
    <div className=" w-screen h-full bg-[#1F1E24]">
      <div className="px-[5%] flex items-center w-full justify-between ">
        <h1 className="text-2xl text-zinc-400 font-bold">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-fill cursor-pointer"
          ></i>{" "}
          People
        </h1>

        <div className="flex items-center w-[80%]">
          <Topnav />

          <div className="w-[2%]"></div>
        </div>
      </div>

      <InfiniteScroll
        hasMore={hasMore}
        dataLength={person.length}
        next={getPersson}
        loader={<Spinner />}
      >
        <Cards data={person} title="person" />
      </InfiniteScroll>
    </div>
  ) : (
    <Spinner />
  );
};

export default People;
