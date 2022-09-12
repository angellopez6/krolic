import React, { useEffect, useState } from "react";

import Footer from "../Footer";
import Header from "../Header";
import { H2, H3, H4, H5 } from "../Text";
import {
  AccesibilityItem,
  AccesibilityOptions,
  AdventagesList,
  AdventagesListItem,
  ContentWrapper,
  IconSpeak,
  ImagesContainer,
  ImagesContainerItem,
  ImagesPDE,
  MainContent,
  MainLayoutContainer,
  MainLeftContent,
  MainRightContent,
  TextTalkWrapper,
} from "./styled";
import "./index.css";
import ReactSelect from "../presentational/Select";
import Assistant from "../../hooks/Assistant";
import { fontFamilyList } from "../../Themes/themeModes";
import { texts } from "./constants";
import SpeakerButton from "../SpeakerButton";
import IconSpeaker from "../../assets/images/sounds.gif";
import { useTheme } from "styled-components";
import Redbull from "../../assets/images/branches/redbull.png";
import airbnb from '../../assets/images/branches/airbnb.png';
import disney from "../../assets/images/branches/disney.jpg";
import vimeo from "../../assets/images/branches/vimeo.jpg";
import Reddit from "../../assets/images/branches/Reddit.webp";
import w from "../../assets/images/branches/w.jpg";
import atlassian from "../../assets/images/branches/atlassian.jpg";
import google from "../../assets/images/branches/google.webp";
import github from "../../assets/images/branches/github.jpg";
import spotify from "../../assets/images/branches/spotify.png";
import imdb from "../../assets/images/branches/imdb.png";
import blockchain from "../../assets/images/branches/blockchain.webp";
import PagoEnLinea from "../../assets/images/pago-en-linea-pde.png";
import Pagos from "../presentational/Pagos";

const STORAGE = window.localStorage;

const fontFactorArray = [
  { label: "✖️ Sin factor de aumento", value: "0" },
  { label: "Aumento + 2️⃣", value: "2" },
  { label: "Aumento + 4️⃣", value: "4" },
  { label: "Aumento + 6️⃣", value: "6" },
  { label: "Aumento + 8️⃣", value: "8" },
  { label: "Aumento + 🔟", value: "10" },
];

function MainLayout({
  themeModes,
  themeSwitcher,
  changeFontFamily,
  accesibilityFontSizeSetter,
}) {
  const GlobalTheme = useTheme();
  const { assistant, changeVoice } = Assistant(GlobalTheme.voice.value);
  const [state, setState] = useState({
    themes:
      Object.keys(themeModes).map((el, index) => ({
        label: `${
          index === 0
            ? "☀️"
            : index === 1
            ? "🌚"
            : index === 2
            ? "🌙"
            : index === 3
            ? "🐰"
            : "🌀"
        } ${el}`,
        value: el,
      })) || [],
    tipography: fontFamilyList.map((el) => ({
      label: `👉🏻 ${el}`,
      value: el,
    })),
    assistantVoice: [],
  });
  const [themeValue, setThemeValue] = useState(
    state.themes.find(
      (val, index) => val.value === GlobalTheme.key && `${index}`
    ) || "0"
  );
  const [fontFamilyValue, setFontFamilyValue] = useState(
    state.tipography.find(
      (val, index) => val.value === GlobalTheme.defaultFont && `${index}`
    ) || "0"
  );
  const [fontSizeValue, setFontSizeValue] = useState(
    fontFactorArray.find((el) => el.value === GlobalTheme.fontFactor)
  );
  const [voiceValue, setVoiceValue] = useState(GlobalTheme.voice);
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    const voices = window.speechSynthesis
      .getVoices()
      .map((el) => ({ label: `🌍 ${el.name} - (${el.lang})`, value: el.name }));
    setState({ ...state, assistantVoice: voices });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.speechSynthesis, window.speechSynthesis.speaking]);

  const selectsHandleChange = ({ name, value }) => {
    switch (name) {
      case "themes":
        setThemeValue(value);
        themeSwitcher(value.value);
        STORAGE.setItem(
          "theme",
          JSON.stringify({
            ...themeModes[value.value],
            key: value.value,
          })
        );
        break;

      case "font-family":
        setFontFamilyValue(value);
        changeFontFamily(value.value);
        STORAGE.setItem(
          "theme",
          JSON.stringify({
            ...GlobalTheme,
            defaultFont: value.value,
          })
        );
        break;

      case "font-size":
        setFontSizeValue(value);
        accesibilityFontSizeSetter(value.value);
        STORAGE.setItem(
          "theme",
          JSON.stringify({
            ...GlobalTheme,
            fontFactor: value.value,
          })
        );
        break;

      case "voices":
        setVoiceValue(value);
        changeVoice(value.value);
        STORAGE.setItem(
          "theme",
          JSON.stringify({
            ...GlobalTheme,
            voice: value,
          })
        );
        break;

      default:
        break;
    }
  };

  const handleSpeak = (text) => {
    speechSynthesis.cancel();
    assistant.text = text;
    assistant.onstart = () => {
      setIsSpeaking(true);
    };
    assistant.onend = () => {
      setIsSpeaking(false);
    };
    speechSynthesis.speak(assistant);
  };

  return (
    <MainLayoutContainer>
      <Header />
      <MainContent>
        <MainLeftContent>
          <TextTalkWrapper>
            <H2>{texts.whatStyledComponents}</H2>
            <SpeakerButton
              handleSpeak={() => handleSpeak(texts.whatStyledComponents)}
            />
          </TextTalkWrapper>
          <TextTalkWrapper>
            <H5>{texts.whatStyledComponentsContent}</H5>
            <SpeakerButton
              handleSpeak={() => handleSpeak(texts.whatStyledComponentsContent)}
            />
          </TextTalkWrapper>
          <TextTalkWrapper>
            <H3>{texts.styledAdventages}</H3>
            <SpeakerButton
              handleSpeak={() => handleSpeak(texts.styledAdventages)}
            />
          </TextTalkWrapper>
          <TextTalkWrapper margin="0 2rem">
            <H5>{texts.adventajesInit}</H5>
          </TextTalkWrapper>
          <AdventagesList>
            <AdventagesListItem>
              <H4>{texts.adventaje1} </H4>
              <SpeakerButton
                handleSpeak={() => handleSpeak(texts.adventaje1)}
              />
            </AdventagesListItem>
            <AdventagesListItem>
              <H4>{texts.adventaje2} </H4>
              <SpeakerButton
                handleSpeak={() => handleSpeak(texts.adventaje2)}
              />
            </AdventagesListItem>{" "}
            <AdventagesListItem>
              <H4>{texts.adventaje3} </H4>
              <SpeakerButton
                handleSpeak={() => handleSpeak(texts.adventaje3)}
              />
            </AdventagesListItem>{" "}
            <AdventagesListItem>
              <H4>{texts.adventaje4} </H4>
              <SpeakerButton
                handleSpeak={() => handleSpeak(texts.adventaje4)}
              />
            </AdventagesListItem>
          </AdventagesList>
          <TextTalkWrapper>
            <H2>{texts.posibilities}</H2>
            <SpeakerButton
              handleSpeak={() => handleSpeak(texts.posibilities)}
            />
          </TextTalkWrapper>
          <TextTalkWrapper>
            <H5>{texts.last}</H5>
            <SpeakerButton handleSpeak={() => handleSpeak(texts.last)} />
          </TextTalkWrapper>
          <TextTalkWrapper>
            <H3>¿Qué marcas los utilizan?</H3>
          </TextTalkWrapper>
          <ImagesContainer>
            <ImagesContainerItem src={airbnb} alt={"airbnb"} />
            <ImagesContainerItem src={atlassian} alt={"atlassian"} />
            <ImagesContainerItem src={disney} alt={"disney"} />
            <ImagesContainerItem src={github} alt={"github"} />
            <ImagesContainerItem src={google} alt={"google"} />
            <ImagesContainerItem src={Redbull} alt={"redbull"} />
            <ImagesContainerItem src={Reddit} alt={"reddit"} />
            <ImagesContainerItem src={vimeo} alt={"vimeo"} />
            <ImagesContainerItem src={w} alt={"w"} />
            <ImagesContainerItem src={spotify} alt={"spotify"} />
            <ImagesContainerItem src={imdb} alt={"imdb"} />
            <ImagesContainerItem src={blockchain} alt={"blockchain"} />
          </ImagesContainer>
          <TextTalkWrapper>
            <H3>Componente del portal del estudiante ( PDE )</H3>
          </TextTalkWrapper>
          <ImagesPDE src={PagoEnLinea} alt={"PDE image"} />
          <TextTalkWrapper>
            <H3>Replica con styled-components</H3>
          </TextTalkWrapper>
          <ContentWrapper>
            <Pagos/>
          </ContentWrapper>
        </MainLeftContent>
        <MainRightContent>
          <H2 className={"main-layout__text"} align="center">
            Menú de accesibilidad
          </H2>
          <AccesibilityOptions>
            <AccesibilityItem>
              <H3>Tema</H3>
              <ReactSelect
                name="themes"
                data={state.themes}
                placeholder="Seleccione un tema..."
                value={themeValue}
                onChange={(value) =>
                  selectsHandleChange({ name: "themes", value })
                }
              />
            </AccesibilityItem>
            <AccesibilityItem>
              <H3>Tipografía</H3>
              <ReactSelect
                name="font-family"
                data={state.tipography}
                placeholder="Seleccione una tipografía..."
                value={fontFamilyValue}
                onChange={(value) =>
                  selectsHandleChange({ name: "font-family", value })
                }
              />
            </AccesibilityItem>
            <AccesibilityItem>
              <H3>Tamaño de fuente</H3>
              <ReactSelect
                name="font-size"
                placeholder="Seleccione un factor de aumento..."
                value={fontSizeValue}
                data={fontFactorArray}
                onChange={(value) =>
                  selectsHandleChange({ name: "font-size", value })
                }
              />
            </AccesibilityItem>
            <AccesibilityItem>
              <H3>Voz de asistente</H3>
              <ReactSelect
                name="voices"
                data={state.assistantVoice}
                placeholder="Seleccione un tipo de voz..."
                value={voiceValue}
                onChange={(value) =>
                  selectsHandleChange({ name: "voices", value })
                }
              />
            </AccesibilityItem>
          </AccesibilityOptions>
        </MainRightContent>
      </MainContent>
      <Footer />
      {isSpeaking && (
        <IconSpeak
          onClick={() => {
            speechSynthesis.cancel();
          }}
          src={IconSpeaker}
          alt="Icon speak"
        />
      )}
    </MainLayoutContainer>
  );
}

export default MainLayout;
