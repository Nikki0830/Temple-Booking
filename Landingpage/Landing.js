import React, { useState } from "react";

import Text from "../Text/Text";
import { Route, Link, Switch } from "react-router-dom";
import Login from "./Login";

import "./Landing.css";

import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "../Home/Home";
// import Slideshow from "./ImgSlider";
import Videobox from "../Videobox/Videobox";
import Setting from "../Setting/Setting";

import Booking from "../Booking/Booking";

import { useTranslation } from "react-i18next";
import Lastpage from "../Lastpage/Lastpage";
// import { Translator } from "../Translation/Translator";
// import {i18n} from './Translations/I18n';
import { Booking_box, Login_box, Setting_box, Video_box, Last_page} from "../Constant/Constants";

export default function Landing(props) {
  const { t } = useTranslation();
  const [btn, setBtn] = useState(false);
  console.log(props);
  const buttonClick = () => {
    setBtn(true);
  };
  return (
    <>
      {/* Roiuting for all contents in my lanf=ding page */}
      <div className="container">
        {/* /////////////////////////////////////////////////
        NAVBAR CODE */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light border border-info" id = "b_nav">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
            <p style = {{color:"skyblue",fontFamily:"cursive",fontSize:"30px"}}>{props.title}</p>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarScroll"
              aria-controls="navbarScroll"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarScroll">
              <ul
                className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
                // style={{"--bs-scroll-height: 100px;"}}
              >
                {/* <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Link
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarScrollingDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Link
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarScrollingDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled">Link</a>
                </li> */}
              </ul>
              <form className="d-flex">
                {/* <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                /> */}
                <Link to = {Login_box}>
                <button className="btn btn-outline-primary" type="submit" id = "n_login">
                  Login
                </button>
                </Link>
                {/* <button className="btn btn-outline-success" type="submit"> */}
                <Setting />
                {/* </button> */}
              </form>
            </div>
          </div>
        </nav>

        {/* /////////////////////////////////////////////////
        NAVBAR CODE */}
        {/* <div className="button_box"> */}
        {/* <div className="nav_box">
          <h2
            className="text"
            style={{
              color: "white",
              fontSize: "40px",
              fontFamily: "cursive",
            }}
          >
            {props.title}
          </h2>
     
          <Link to="/login">
       
            <button
              type="button"
              className="btn btn-light"
              onClick={buttonClick}
            > */}
              {/* {btn ?  "Logout":t("Login")} */}
              {/* {t("Login")}
            </button>
          </Link>
          <Link to="/last"></Link>
        </div> */}
        <Link to="/last"></Link>

        <Switch>
          <Route exact path={Video_box}>
            <Videobox />
          </Route>
          <Route exact path={Login_box}>
            <Login />
            {/* <Videobox/> */}
          </Route>
          <Route exact path={Booking_box}>
            <Booking />
            {/* <Videobox/> */}
          </Route>
          <Route
            exact
            path="/home"
            component={() => <Home authorized={false} />}
          />
          <Route path={Setting_box}>
                <Setting/>
            </Route>
          <Route exact path={Last_page}>
            <Lastpage />
             {/* <Videobox/> */}
          </Route>
        </Switch> 
      {/* </div> */}
      </div>
    </>
  );
}
