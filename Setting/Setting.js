import React, { useState } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../Theme/Theme";
export default function Setting() {
  const [theme, setTheme] = useState("light");
  const StyledApp = styled.div``;

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <StyledApp>
          <button type="button" id = "c_theme"
            onClick={() => themeToggler()}
            style={{
        
              // display: "inline-block",
              // verticalAlign:"top",
              // borderRadius: "10px",
              // outline: "none",
             
            }}
          >
            change theme
          </button>
          {/* <div
            class="form-check form-switch"
            style={{
              float: "right",
              display: "inline-block",
              verticalAlign: "top",
              borderRadius: "10px",
              outline: "none",
            }}
          >
            <input
              onChange={themeToggler}
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckChecked"
              checked
            /> */}
            {/* <label class="form-check-label" for="flexSwitchCheckChecked">
              Checked switch checkbox input
            </label> */}
          {/* </div> */}
        </StyledApp>
      </ThemeProvider>
    </>
  );
}
