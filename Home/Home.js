import React, { Component, useState } from "react";
import { data } from "../../db";
import { Route, Link, Redirect } from "react-router-dom";
import Booking from "../Booking/Booking";
import Iconify from "../Images/Icon";
import { Login_box } from "../Constant/Constants";

export default function Home({ authorized }) {
  const [search, setSearch] = useState("");

  //search input function
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   console.log("clicked", search);
  // };

  //storing the filtering temple data in filterBame variable
  const filterName = data.filter((ele) =>
    ele.temple_name.toLowerCase().includes(search.toLowerCase())
  );

  console.log("filter", filterName);
  //   console.log("flower",flowerName)
  if (authorized) {
    return <Redirect to={Login_box} />;
  }
  return (
    <>
      <input
        style={{
          height: "30px",
          outline: "none",
          border: "none",
          borderBottom: "2px solid black",
          display: "inline-block",
        }}
        type="text"
        id="message"
        name="message"
        onChange={handleChange}
        value={search}
        autoComplete="off"
        placeholder="Search your temple"
      />

      {/* <h2>Message: {search}</h2> */}

      {/* <button
        onClick={handleClick}
        style={{
          border: "none",
          outline: "none",
          backgroundColor: "orange",
          borderRadius:"5px",
          color:"white",
          fontFamily:"cursive"
        }}
      >
        Click
      </button> */}
      
      {/* importing a temple icon from iconify component */}
      <Iconify />
      <div>
        {/* {data.map((ele) => {
          console.log(ele);
          return <></>;
        })} */}
      </div>
      <div>
        {/* mapping all the temple_name data from db.js file */}
        {filterName.map((e) => {
          console.log("filter", e);
          return (
            <>
              <div className="main_temple_div">
                <div className="temple_div">
                  <h2 className="temple_name">{e.temple_name}</h2>
                  <img className="temple_img" src={e.url}></img>
                  {/* creating link in book now button for booing page */}
                  <Link to="/booking">
                    <button type="button" className="btn btn-warning">
                      Book now
                    </button>
                  </Link>

                  <Route exact path="/booking">
                    <Booking />
                  </Route>
                </div>
              </div>
            </>
          );
        })}
        {/* 
        {flowerName.map((e) => {
          console.log("filter", e);
          return (
            <>
              <h2>{e.flowers.name}</h2>
            
            </>
          );
        })} */}
      </div>
    </>
  );
}
