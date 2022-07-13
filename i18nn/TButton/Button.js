import i18n from "../Translation/i18n";
import React, { useState } from "react";

import { Translator } from "../Translator";

const Button = (props) => {
  console.log(props);
  const [language, setLanguage] = useState("en");

  const handleOnclick = (e) => {
    e.preventDefault();
    setLanguage(e.target.value);
    i18n.changeLanguage(e.target.value);
    // const {i18n} = props
    // const changeLanguage = lng => {i18n.changeLanguage(lng)}
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

      <Translator lang={language} />
    </div>
  );
};

export default Button;
