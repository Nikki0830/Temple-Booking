import React from "react";
import { Link } from "react-router-dom";
import Home from "../Home/Home";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from "react-router-dom";
import { Home_page } from "../Constant/Constants";

export default function Login(setLoadLogin, setAuth, shouldLoginLoad) {
  let history = useHistory();

  return (
    <>
      <div className="login">
        {/* login form */}
        <form>
          <div className="mb-3">
            <label
              for="exampleInputEmail1"
              className="form-label"
              style={{
                fontSize: "15px",
                fontFamily: "cursive",
                color: "skyblue",
                marginTop: "30px",
              }}
            >
              Email address
            </label>
            <input
            //  onChange={handleLogChange}
              style={{ width: "200px", margin: "auto", outline: "none" }}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              required
            />
            {/* <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div> */}
          </div>
          <div className="mb-3">
            <label
              for="exampleInputPassword1"
              className="form-label"
              style={{
                fontSize: "17px",
                fontFamily: "cursive",
                color: "skyblue",
                marginTop: "20px",
              }}
            >
              Password
            </label>
            <input
              style={{ width: "200px", margin: "auto", outline: "none" }}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              required
            />
          </div>
          {/* <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div> */}
          <button
         
            onClick={() => {
              history.push(Home_page);
            }}
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
      
          {/* <input type="submit"/> */}
    
        </form>
        {/* login form */}
        {/* <div>
        <h1>Login</h1>
      </div> */}
        {(isLoggedin) => {
          {
            <>
              {isLoggedin ? (
                <>
                  <Link to={Home_page}>
                    <Home />
                  </Link>
                </>
              ) : (
                "lkkk"
              )}
            </>;
          }
        }}
      </div>
    </>
  );
}
