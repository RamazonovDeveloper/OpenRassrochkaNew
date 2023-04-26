import { useState } from "react";
import "./App.css";

import ruFlag from "./assets/Flag.png";
import uzFlag from "./assets/bayroq.png";
import headerGirl from "./assets/headerGirl.png";

import message from "./assets/message.png";
import phone from "./assets/call.png";

import { data } from "./data";

function App() {
  let identifyLang = localStorage.getItem("lang");

  if (!identifyLang) {
    localStorage.setItem("lang", "uz");
    identifyLang = "uz";
  }

  const [lang, setLang] = useState(identifyLang);

  const handleLangClick = (name) => {
    localStorage.setItem("lang", name);
    setLang(name);
  };

  let langData = data[lang];

  // console.log(langData);

  return (
    <div className="">
      <div className="container">
        <div className="flex justify-end items-center">
          <div
            className={lang === "uz" ? "opacity-50 flex" : "flex"}
            onClick={() => handleLangClick("ru")}
          >
            <img className="w-7" src={ruFlag} alt="" />
            <p className="text-base">Русский</p>
          </div>
          <div
            className={lang === "ru" ? "opacity-50 flex" : "flex"}
            onClick={() => handleLangClick("uz")}
          >
            <img className="w-7" src={uzFlag} alt="" />
            <p className="text-base">O'zbek</p>
          </div>
        </div>
      </div>

      {/* HERO SECTION START */}
      <div className="hero overflow-hidden">
        {/* hero TITLE */}
        <h1 className="hero__title text-black text-uppercase text-[35px] max-w-[202px] px-4 py-2 sm:text-[40px] smm:max-w-[300px] md:align-middle">
          open
          <span className="text-main_color"> {langData?.header_title}</span>
        </h1>
        <div className="relative">
          <div className="hero__img-block relative -z-10 bg-gray_form w-[920px] h-[620px] translate-x-[9%] -translate-y-[18%] lg:translate-x-[40%] lg-w-70%">
            <img
              className="hero__img w-full -translate-x-[21%] sm:-translate-x-[12%] smm:-translate-x-[5%] md:translate-x-0 -translate-y-[4%]"
              src={headerGirl}
              alt="main girl"
            />
          </div>
        </div>

        {/* hero BLOCK */}
        <div className="hero__block bg-main_color py-[30px] pl-2.5 pr-7 max-w-[309px]  sm:max-w-[377px] smm:max-w-[400px] md:max-w-[414px]  -translate-y-[200px] smm:-translate-y-[300px] lg:px-[60px] lg:py-[45px] lg:max-w-[574px]">
          <p className="hero__text text-white text-base sm:text-xl md:uppercase lg:text-[22px]">
            {langData?.header_text1}
          </p>
          <p className="hero__text text-white text-base sm:text-xl md:uppercase lg:text-[22px]">
            {langData?.header_text2}
          </p>
        </div>
      </div>
      {/* HERO SECTION END */}

      <div className="footer">
        <div className="container footer_big">
          <div className="footer_card">
            <p className="text-uppercase mb-4">{langData.decision}</p>
            <div className="footer_card_items">
              <img src={message} alt="" />
              <p>hello@opentech.uz</p>
            </div>
            <div className="footer_card_items">
              <img src={phone} alt="" />
              <p> +998 (90) 968-7881</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
