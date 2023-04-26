import { useState } from "react";
import "./App.css";

import SerciseItemTemplate from "./components/SerciseItemTemplate"

import ruFlag from "./assets/Flag.png";
import uzFlag from "./assets/bayroq.png";

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
        <div className="flex justify-end gap-x-3.5 mt-11">
          <div
            className={
              lang === "uz"
                ? "opacity-50 flex cursor-pointer"
                : "flex cursor-pointer"
            }
            onClick={() => handleLangClick("ru")}
          >
            <img className="w-7 me-2" src={ruFlag} alt="" />
            <p className="text-base">Русский</p>
          </div>
          <div
            className={
              lang === "ru"
                ? "opacity-50 flex cursor-pointer"
                : "flex cursor-pointer"
            }
            onClick={() => handleLangClick("uz")}
          >
            <img className="w-7 me-2" src={uzFlag} alt="" />
            <p className="text-base">O'zbek</p>
          </div>
        </div>
      </div>

      {/* HERO SECTION START */}
      <div className="hero overflow-hidden w-full min-h-[700px] xl:pl-[10%] flex flex-col justify-between">
        {/* hero TITLE */}
        <h1 className="hero__title text-black text-uppercase text-[35px] max-w-[202px] px-4 py-2 sm:text-[40px] lg:text-[50px] xl:text-[60px] smm:max-w-[300px] md:max-w-[550px] md:mt-[140px]">
          open
          <p className="text-main_color"> {langData?.header_title}</p>
        </h1>

        {/* hero BLOCK */}
        <div className="hero__block bg-main_color py-[30px] pl-2.5 pr-7 lg:px-[60px] lg:py-[45px]  max-w-[309px] sm:max-w-[377px] smm:max-w-[400px] md:max-w-[414px] lg:max-w-[574px] xl:max-w-[650px] xl:px-[70px] ">
          <p className="hero__text text-white text-base sm:text-xl md:uppercase lg:text-[22px] xl:text-[25px]">
            {langData?.header_text1}
          </p>
          <p className="hero__text text-white text-base sm:text-xl md:uppercase lg:text-[22px] xl:text-[25px]">
            {langData?.header_text2}
          </p>
        </div>
      </div>

      <div className="container mt-[56px] ">
        <div className="flex text-main_color font-medium text-[14px] mb-10">
          <p className="uppercase">{langData.service_name}</p>
        </div>
        <div className="text-base mt-4 font-medium">
          {/* <p className='uppercase text-[25px] text-main_color leading-7 font-light'>Open <span className='text-black'>muddatli kartasi</span> - Bu biznesingiz o’sishi va rivojlanishi</p> */}
          {lang === "uz" ? (
            <p className="uppercase text-[25px] text-main_color leading-7 font-light">
              Open <span className="text-black">muddatli kartasi</span> - Bu
              biznesingiz o’sishi va rivojlanishi
            </p>
          ) : (
            <p className="uppercase text-[25px] text-main_color leading-7 font-light">
              <span className="text-black">Карта рассрочки</span> open{" "}
              <span className="text-black">- это</span> рост{" "}
              <span className="text-black">и</span> развитие{" "}
              <span className="text-black">вашего</span> бизнеса
            </p>
          )}
          <div className="text-base mt-4 font-medium">
            <p>{langData.service_text1}</p>
            <p>{langData.service_text1}</p>
          </div>
        </div>
      </div>

      <div className="container">
      <div className="my-10 font-medium">
          <p className="uppercase text-[14px] font-medium mb-[14px]">
            <span className="text-main_color mr-2">01</span>
            {langData.service_item1_title}
          </p>
        </div>
        <SerciseItemTemplate itemNum={"02"} itemTitle={langData.service_item2_title}/>
        <SerciseItemTemplate itemNum={"03"} itemTitle={langData.service_item3_title} itemText={langData.service_item3_text}/>
        <div className="my-10 font-medium">
          <p className="uppercase text-[14px] font-medium mb-[14px]">
            <span className="text-main_color mr-2">04</span>
            {langData.service_item4_title}
          </p>
          <p className="leading-[18px] text-[14px]">
            {langData.service_item4_text}
          </p>
        </div>
        <SerciseItemTemplate itemNum={"05"} itemTitle={langData.service_item5_title} itemText={langData.service_item5_text}/>
        <SerciseItemTemplate itemNum={"06"} itemTitle={langData.service_item6_title} itemText={langData.service_item6_text}/>
        <div className="my-10 font-medium">
          <p className="uppercase text-[14px] font-medium mb-[14px]">
            <span className="text-main_color mr-2">07</span>
            {langData.service_item7_title}
          </p>
          <p className="leading-[18px] text-[14px]">
            {langData.service_item7_text}
          </p>
        </div>
        <SerciseItemTemplate itemNum={"08"} itemTitle={langData.service_item8_title} itemText={langData.service_item8_text}/>
      </div>

      <div className="form_section xs:h-[160px] sm:h-[200px] md:h-[250px] lg:h-[330px]">
        <div className="container ">

          <div className="relative xs:h-[160px] sm:h-[200px] md:h-[250px] lg:h-[330px]">
            <div className="form_section_card xs:py-[40px] xs:px-[10px] sm:py-12 sm:px-4 bg-gray_form absolute top-1/2 md:flex">
              <div className="md:w-1/2">
                <h3 className="font-medium text-base uppercase sm:text-[18px] lg:text-[20px]">
                  {langData.partners_header}
                </h3>
                <p className="xs:text-[14px] sm:text-base my-6 font-medium lg:w-3/4 sm:mt-8">
                  {langData.partners_text}
                </p>
              </div>
              <div className="md:w-1/2">
                <input
                  className="w-full py-3 px-2 bg-gray_input text-base text-black my_input"
                  type="text"
                  placeholder={langData.partners_input_name}
                />
                <input
                  className="w-full py-3 px-2 bg-gray_input text-base text-black my_input xs:mt-4 xs:mb-6 sm:mt-5 sm:mb-11 xl:mb-[60px]"
                  type="text"
                  placeholder={langData.partners_input_tel}
                />
                {/* <input type="text" placeholder={langData.partners_input_tel}/> */}
                {/*  xs:mt-6 xs:mb-10 sm:m */}
                <button className="w-full bg-main_color text-white py-3 uppercase">
                  {langData.partners_btn}
                </button> 
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer mt-[500px] py-[78px]">
        <div className="container">
          <div className="bg-gray_light xs:py-8 xs:px-2.5 sm:p-[30px] max-w-sm mx-auto">
            <p className="uppercase font-medium">{langData.decision}</p>
            <div className="flex items-center mt-7 mb-[20px] font-medium">
              <img className="mr-4" src={message} alt="" />
              <p>hello@opentech.uz</p>
            </div>
            <div className="flex items-center font-medium">
              <img className="mr-4" src={phone} alt="" />
              <p> +998 (90) 968-7881</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
