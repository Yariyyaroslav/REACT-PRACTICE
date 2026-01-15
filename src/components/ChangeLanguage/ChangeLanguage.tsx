import React from "react";

type ChangeLanguageProps = {
  language: "Ukrainian" | "English";
};

const ChangeLanguage: React.FC<ChangeLanguageProps> = ({ language }) => {
  if (language === "Ukrainian") {
    return <p>Текст на Українській</p>;
  } else {
    return <p>Text in English</p>;
  }
};

export default ChangeLanguage;
