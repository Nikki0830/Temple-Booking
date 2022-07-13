//Importing all the fils
import React, { useState } from "react";
import Lastpage from "../Lastpage/Lastpage";
import { Link, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { formdata } from "../Redux/ActionTypes";
import axios from "axios";

export default function Booking() {
  let history = useHistory();

  //creating states
  const [msg, setMsg] = useState("");
  const [adult, setAdult] = useState("");
  const [children, setChildren] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time,setTime] = useState("")

  //input name function
  const handleChange = (event) => {
    setMsg(event.target.value);
    console.log(msg);
  };

  //input date and time function
  const handleDateChange = (event) => {
    setDate(event.target.value);
    let item = event.target.value;
  };
  const handleTimeChange = (event) => {
    setTime(event.target.value);
    let item = event.target.value;
  };

  //input children function
  const handleChildChange = (event) => {
    setChildren(event.target.value);
    // let item1 = event.target.value
  };

  //input email function
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    // let item2 = event.target.value
  };

  //input phone no> function
  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
    // let item3 = event.target.value
  };

  //input adult function
  const handleAdultChange = (event) => {
    setAdult(event.target.value);
    // let item5 = event.target.value
  };

  //storing the dispatch method in a variable
  const dispatch = useDispatch();

  //creating a array for all input data
  let formData = [];

  //button click funtion
  function handleLastClick() {
    formData = [...formData, { msg, date, children, adult }];
    console.log("formdata", formData);

    //axios code forn json server
    //post method
    axios
      .post("http://localhost:8000/users", {
        adult,
        children,
        date,
        email,
        msg,
        phone,
        time,
      })
      .then((response) => {
        console.log(response.data);
        dispatch(formdata(response.data));
      })
      .catch((err) => {
        console.log(err);
      });
    //get method
    axios
      .get("http://localhost:8000/users")
      .then((response) => {
        console.log("response", response);
      })
      .catch((err) => {
        console.log(err);
      });

    history.push("/last");
  }
  //axios call

  //funtion returning
  return (
    <>
      {/* maindiv to store all input data */}
      <div
        className="main_div"
        style={{
          border: "1px solid black",
          height: "auto",
          width: "400px",
          margin: "auto",
          borderRadius: "10px",
          marginTop: "30px",
          backgroundColor: "transparent",
          color: "skyblue",
          border: "none",
          boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}
      >
        <h5 className="con_text">Confirm your appoinment</h5>
        <br />
        <h5>Name:</h5>
        <input
          type="text"
          id="message"
          name="message"
          onChange={handleChange}
          value={msg}
          autoComplete="off"
          placeholder="Enter your name"
        />

        <br />
        <br />
        <h5>Date</h5>
        {/* <input
         }
          type="datetime-local"
          id="Test_DatetimeLocal"
        /> */}
        <input  onChange={handleDateChange} type="date"></input>
        <br />
        <br />
        <h5>Time</h5>
        <input  onChange={handleTimeChange} type="time"></input>

        <br />
        <br />
        <h5>Adults:</h5>
        <input
          type="number"
          placeholder="no of adults"
          onChange={handleAdultChange}
        ></input>
        {/* <h2>Adults: {adult}</h2> */}
        <br />
        <br />
        <h5>Children:</h5>
        <input
          type="number"
          placeholder="no of children"
          onChange={handleChildChange}
        ></input>
        {/* <h2>Children: {children}</h2> */}
        <br />
        <br />
        <h5>Email:</h5>
        <input
          type="text"
          placeholder="Enter your email"
          onChange={handleEmailChange}
        ></input>
        {/* <h2>Email: {email}</h2> */}
        <br />
        <br />
        <h5>Phone:</h5>
        <input
          type="text"
          placeholder="Phone no"
          onChange={handlePhoneChange}
        ></input>
        {/* <h2>Phone no: {phone}</h2> */}
        <br />
        <br />
        <button
          onClick={() => handleLastClick()}
          style={{
            marginBottom: "10px",
            borderRadius: "10px",
            backgroundColor: "#2390e4",
            color: "white",
            border:"none",
            outline:"none",
            padding:"5px",
            width:"80px"
          }}
        >
          Submit
        </button>
      </div>
      {/* <Lastpage msg = {msg}/> */}

      {/* </div> */}
    </>
  );
}
