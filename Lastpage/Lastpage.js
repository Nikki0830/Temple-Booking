import React from "react";
import { useSelector } from "react-redux";
import { Video_box } from "../Constant/Constants";
import { Link, useHistory } from "react-router-dom";

export default function Lastpage() {
  const dataForBooking = useSelector((state) => state.userDetails);
  let count = 1;

  console.log(dataForBooking);
  // history.push(Video_box);
  return (
    <>
      <div
        style={{
          border: "1px solid navy",
          height: "auto",
          width: "400px",
          margin: "auto",
          borderRadius: "40px",
          marginTop: "10px",
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;",
        }}
      >
        {/* <h1>{props.name}</h1> */}
        <h5
          style={{ color: "navy", fontWeight: "bold", fontFamily: "cursive" }}
        >
          Your booking confirmed
        </h5>
        {/* <p>{msg}</p> */}

        {dataForBooking.map((element) => {
          return (
            <div
              className="content_div"
              style={{
                border: "1px solid navy",
                width: "80%",
                margin: "auto",
                borderRadius: "10px",
                height: "auto",
                marginTop: "10px",
              }}
            >
              <h6 style={{ color: "navy", fontFamily: "fantasy" }}>
                Booking : {count++}
              </h6>
              <h4 style={{ color: "skyblue", fontFamily: "cursive" }}>
                Name : {element.msg}
              </h4>
              <h4 style={{ color: "skyblue", fontFamily: "cursive" }}>
                Date : {element.date}
              </h4>
              <h4 style={{ color: "skyblue", fontFamily: "cursive" }}>
                Date : {element.time}
              </h4>
              <h4 style={{ color: "skyblue", fontFamily: "cursive" }}>
                No of adults : {element.adult}
              </h4>
              <h4 style={{ color: "skyblue", fontFamily: "cursive" }}>
                No of children : {element.children}
              </h4>
              {/* <p>{dataForBooking.msg}</p> */}
            </div>
          );
        })}
      </div>
      <Link to={Video_box}>
        <button
          type="button"
          class="btn btn-primary"
          style={{ marginTop: "20px" }}
        >
          Back to home page
        </button>
      </Link>
    </>
  );
}
