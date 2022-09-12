import React from "react";
import { Button } from "./styled";

function SpeakerButton({ handleSpeak }) {
  const handleOnClick = () => {
    if (typeof handleSpeak === "function") {
      handleSpeak();
    }
  };
  return <Button onClick={handleOnClick}>Dictar 🔊</Button>;
}

export default SpeakerButton;
