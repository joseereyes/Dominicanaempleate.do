import React from "react";

import topimgcontainer from "../assets/icons/Background.jpg";
import searchIcon from "../assets/icons/SearchICon.svg";
import locationIcon from "../assets/icons/locationICon.svg";
import { useJobsContext } from "../context/jobs_context";

const Search = () => {
  const { setFilterObjec, setFilterObjec_2, todaysJob } = useJobsContext();

  return (
    <div className="search-container ">
      <img className="topVar-img" src={topimgcontainer} alt="" />

      <div className="container search-inputs ">
        <div className="d-flex flex-wrap justify-content-around">
          <div className="input-container ">
            <img src={searchIcon} alt="" />
            <input
              onChange={(e) =>
                setFilterObjec({ type: "Name", value: e.target.value })
              }
              type="text"
              placeholder="Escribe el empleo que buscas"
              className="input-search input-search-1"
              autoFocus
            />
          </div>
          <div className="input-container ">
            <img src={locationIcon} alt="" />
            <input
              onChange={(e) =>
                setFilterObjec_2({ type: "Loc", value: e.target.value })
              }
              type="text"
              placeholder="Ubicacion del empleo"
              className="input-search input-search-1"
            />
          </div>
        </div>

        <div className="line-search-form"></div>

        <div className="after-search-form mt-2  display-flex align-items-center   justify-content-center">
          <p className="ml-3 mr-3 ">{todaysJob} nuevos empleos hoy.</p>
        </div>
      </div>
    </div>
  );
};

export default Search;
