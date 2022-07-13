// import i18n from "../Translation";
import React, { useState } from "react";
import { Translatorlang } from "../Translation/Translatorlang";

// import { Translatorlang } from "../";
import i18n from "../Translation/i18n";
const TButton = (props) => {
  console.log(props);
  const [language, setLanguage] = useState("en");

  const handleOnclick = () => {
  
  };
  return (
    <div className="i_btn">
      <button value="ar" onClick={handleOnclick}>
        Arabic
      </button>
      <button value="en" onClick={handleOnclick}>
        English
      </button>
      <button value="hi" onClick={handleOnclick}>
        Hindi
      </button>

      <Translatorlang lang={language} />
    </div>
  );
};

export default TButton;
