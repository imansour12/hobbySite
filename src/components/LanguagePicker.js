import React from "react";
import languages from "../assets/languages.json";
import Language from "./Language";

function LanguagePicker() {
  return (
    <div>
      {languages.map((language) => (
        <Language
          language={language.name}
          alt={language.alt}
          source={language.imageLink}
        />
      ))}
    </div>
  );
}

export default LanguagePicker;
