// import logo from "./logo.svg";
import "./App.css";
import ReactPlayer from "react-player";
import Landing from "./Components/Landingpage/Landing";
import Text from "./Components/Text/Text";
// import { Translator } from "./Components/Translation/Translator";
// import IEighteen from "./Components/I18implement/IEighteen";
import Button from "../src/Components/i18nn/TButton/Button";
// import { Icon } from "@iconify/react";
// import TButton from "./Components/I18final/TranButton/TButton";
import Icon, { Iconify } from "./Components/Images/Icon"

// import Landingpage from "./Components/Components/Landingpage";

function App(props) {
  return (
    <div className="App">
      {/* <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWPVC8HSOKC479w1l_OC3o6w4-R2IoCZIAXw&usqp=CAU"></img> */}
      {/* <ReactPlayer
        url={"https://youtu.be/C5eJrYMfZLE"}
        width="100%"
        height="100%";
        controls={true}
        playing={true}
        loop={true}
      />  */}
      {/* <video src="./src/Components/Videos/H.mp4"/> */}
      {/* <Landingpage /> */}
      {/* <video autoplay muted loop id="myVideo">
        <source src="./public/Videos/H.mp4" type="video/mp4"></source>
      </video> */}
      {/* <video autoPlay width="750" height="500" controls >
      <source src="https://www.kapwing.com/videos/62c67eb45eab5a00c245e28b" type="video/mp4"/>
     </video> */}
      {/* <Landing/> */}
      {/* <Button/> */}
      {/* <Button /> */}
      <Text />

    </div>
  );
}

export default App;
