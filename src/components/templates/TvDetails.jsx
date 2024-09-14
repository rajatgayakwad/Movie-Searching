import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadTv } from "../../store/actions/tvActions";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { removetv } from "../../store/reducers/tvSlice";
import Spinner from "./Spinner";
import HorizontalCards from "./HorizontalCards";

const TvDetails = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { info } = useSelector((state) => state.tv);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncloadTv(id));
    return () => {
      dispatch(removetv());
    };
  }, [id]);
  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="  relative w-screen h-[200vh] px-[10%]"
    >
      <nav className="w-full text-zinc-100 h-[10vh] flex items-center gap-10 text-2xl ">
        <Link
          onClick={() => navigate(-1)}
          className="hover:text-[#6556CD] ri-arrow-left-fill cursor-pointer"
        ></Link>
        <a target="_blank" href={info.detail.homepage}>
          <i className="ri-external-link-fill hover:text-[#6556CD]"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
        >
          <i className="ri-earth-fill hover:text-[#6556CD]"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.imdb.com/title/${info.externalid.imdb_id}`}
          className="hover:text-[#6556CD]"
        >
          imdb
        </a>
      </nav>

      {/* part-2 */}
      <div className="w-full flex ">
        <img
          className="h-[50vh] object-cover shadow-[8px_17px_38px_2px_rgba(0, 0, 0, .5)]"
          src={`https://image.tmdb.org/t/p/original/${
            info.detail.backdrop_path || info.detail.poster_path
          }`}
          alt=""
        />
        <div className="content ml-[5%]">
          <h1 className="text-white font-bold text-5xl ">
            {info.detail.name ||
              info.detail.original_name ||
              info.detail.title ||
              info.detail.original_title}

            <small className="text-2xl text-zinc-400">
              ({info.detail.first_air_date.split("-")[0]})
            </small>
          </h1>
          <div className="text-sm text-white flex items-center gap-x-3 mt-5 font-normal">
            <div className="h-[6vh] w-[6vh] bg-yellow-500 rounded-full text-lg font-medium text-white flex justify-center items-center">
              {(info.detail.vote_average * 10).toFixed()} <sup>%</sup>
            </div>

            <h1 className="w-[45px] text-xl leading-6 font-medium">
              User score
            </h1>
            <h1>{info.detail.release_date}</h1>
            <h1>{info.detail.genres.map((g) => g.name).join(",")}</h1>
            <h1>{info.detail.runtime}min</h1>
          </div>

          <h1 className="text-white italic text-xl mt-3">
            {info.detail.tagline}
          </h1>

          <h1 className="text-white  text-2xl mt-3">Overview :</h1>

          <h1 className=" text-md text-zinc-100 mt-3">
            {info.detail.overview}
          </h1>

          <h1 className=" text-xl font-medium text-zinc-100 mt-3">
            tv Translated :
          </h1>
          <h1 className=" text-md text-zinc-100 mt-3 mb-8">
            {info.translations.join(", ")}
          </h1>

          <Link
            to={`${pathname}/trailer`}
            className="bg-[#6556CD] p-5  rounded-md font-medium text-white"
          >
            <i className="ri-play-fill"></i>
            Play Trailer
          </Link>
        </div>
      </div>

      {/* part - 3 */}
      <div className="w-[80%]    flex flex-col gap-y-5 mt-10">
        {info.watchproviders && info.watchproviders.flatrate && (
          <div className="flex gap-x-10 items-center text-white">
            <h1>Availlable on Platforms</h1>
            {info.watchproviders.flatrate.map((w, i) => (
              <img
                key={i}
                title={w.provider_name}
                className="w-[5vh] h-[5vh] object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}
        {info.watchproviders && info.watchproviders.rent && (
          <div className="flex gap-x-10 items-center text-white">
            <h1>Availlable on Rent</h1>
            {info.watchproviders.rent.map((w, i) => (
              <img
                key={i}
                title={w.provider_name}
                className="w-[5vh] h-[5vh] object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}
        {info.watchproviders && info.watchproviders.buy && (
          <div className="flex gap-x-10 items-center text-white">
            <h1>Availlable on Buy</h1>
            {info.watchproviders.buy.map((w, i) => (
              <img
                key={i}
                title={w.provider_name}
                className="w-[5vh] h-[5vh] object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}
      </div>

      <hr className="mt-10 mb-5 border h-[2px] border-zinc-500 " />
      <h1 className="text-2xl font-bold text-white">Seasons</h1>
      <div className="w-[100%] flex overflow-y-hidden mb-5 p-5">
        {info.detail.seasons.length > 0 ? (
          info.detail.seasons.map((s, i) => (
            <div className="w-[25vh] mr-[8%]">
              <img
                key={i}
                className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5) min-w-[24vh] h-[30vh]"
                src={`https://image.tmdb.org/t/p/original/${s.poster_path}`}
                alt=""
              />
              <h1 className="text-2xl text-zinc-300 mt-3 font-semibold">
                {s.name }
              </h1>
            </div>
          ))
        ) : (
          <h1 className="text-3xl font-medium text-white">
            No Seasons Available
          </h1>
        )}
      </div>

      {/* part - 4 */}

      <hr className="mt-10 mb-5 border h-[2px] border-zinc-500 " />
      <h1 className="text-2xl font-bold text-white">
        Recommendations & Similar stuff
      </h1>

      <HorizontalCards
        data={
          info.recommendations.length > 0 ? info.recommendations : info.similar
        }
      />
      <Outlet />
    </div>
  ) : (
    <Spinner />
  );
};

export default TvDetails;
