import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadperson } from "../../store/actions/personActons";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { removeperson } from "../../store/reducers/personSlice";
import Spinner from "./Spinner";
import HorizontalCards from "./HorizontalCards";

const PersonDetails = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { info } = useSelector((state) => state.person);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncloadperson(id));
    return () => {
      dispatch(removeperson());
    };
  }, [id]);

  return info ? (
    <div className="px-[10%] w-screen bg-[#1F1E24] h-[130vh]">
      <nav className="w-full text-zinc-100 h-[10vh] flex items-center gap-10 text-2xl ">
        <Link
          onClick={() => navigate(-1)}
          className="hover:text-[#6556CD] ri-arrow-left-fill cursor-pointer"
        ></Link>
      </nav>

      <div className="w-full  flex ">
        {/* part -2 */}
        <div className="w-[20%]">
          <img
            className="h-[40vh] object-cover shadow-[8px_17px_38px_2px_rgba(0, 0, 0, .5)]"
            src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path}`}
            alt=""
          />

          <hr className="mt-10 mb-5 border h-[2px] border-zinc-500 " />

          {/* links */}
          <div className="text-white text-2xl flex gap-x-5">
            <a target="_blank" href={info.detail.homepage}>
              <i className="ri-external-link-fill hover:text-[#6556CD]"></i>
            </a>
            <a
              target="_blank"
              href={`https://www.facebook.com/${info.externalid.facebook_id}`}
            >
              <i className="ri-facebook-circle-fill hover:text-[#6556CD]"></i>
            </a>
            <a
              target="_blank"
              href={`https://www.instagram.com/${info.externalid.instagram_id}`}
            >
              <i className="ri-instagram-fill hover:text-[#6556CD]"></i>
            </a>
            <a
              target="_blank"
              href={`https://twitter.com/${info.externalid.twitter_id}`}
            >
              <i className="ri-twitter-x-fill hover:text-[#6556CD]"></i>
            </a>
          </div>

          {/* info */}
          <h1 className="text-zinc-400 text-2xl font-semibold mt-5">
            Personal Info
          </h1>
          <h1 className="text-zinc-400 text-xl font-semibold  mt-3">
            Known For
          </h1>
          <h1 className="text-zinc-400 text-lg ">
            {info.detail.known_for_department}
          </h1>

          <h1 className="text-zinc-400 text-xl font-semibold  mt-3">Gender</h1>
          <h1 className="text-zinc-400 text-lg ">
            {info.detail.gender === 2 ? "Male" : "Female"}
          </h1>

          <h1 className="text-zinc-400 text-xl font-semibold  mt-3">
            Birthday
          </h1>
          <h1 className="text-zinc-400 text-lg ">
            {info.detail.birthday ? info.detail.birthday : "-"}
          </h1>
          <h1 className="text-zinc-400 text-xl font-semibold  mt-3">
            Deathday
          </h1>
          <h1 className="text-zinc-400 text-lg ">
            {info.detail.deathday ? info.detail.deathday : "Still Alive"}
          </h1>
        </div>

        <div className="ml-[5%]">
          <h1 className="text-zinc-400 text-6xl font-black  mt-3">
            {info.detail.name}
          </h1>
          <h1 className="text-zinc-400 text-2xl font-medium mt-3">Biography</h1>
          <h1 className="text-zinc-400 text-lg ">{info.detail.biography}</h1>

          <h1 className="text-zinc-400 text-2xl font-medium mt-3">Known For</h1>
          {/* <HorizontalCards data={info.combinedCredits.cast} /> */}
        </div>
      </div>
    </div>
  ) : (
    <Spinner />
  );
};

export default PersonDetails;
