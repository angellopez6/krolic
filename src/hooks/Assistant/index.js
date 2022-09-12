import { useEffect, useState } from "react";

function Assistant(voice) {
  // eslint-disable-next-line no-unused-vars
  const [assistant, setAssistant] = useState(new SpeechSynthesisUtterance());

  useEffect(() => {
    changeVoice(voice);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeVoice = (voiceName) => {
    const newVoice = speechSynthesis
      .getVoices()
      .find((voice) => voice.name === voiceName);
    assistant.voice = newVoice;
  };

  return {
    assistant,
    changeVoice,
  };
}

export default Assistant;
