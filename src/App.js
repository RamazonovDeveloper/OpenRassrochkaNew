import { useState } from "react";
import "./App.css";

import SerciseItemTemplate from "./components/SerciseItemTemplate"

import ruFlag from "./assets/Flag.png";
import uzFlag from "./assets/bayroq.png";

import message from "./assets/message.png";
import phone from "./assets/call.png";
import karta from "./assets/karta.png";

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
      {/* NAVBAR SECTION START */}
      <div className="container">
        <div className="flex justify-end gap-x-3.5 mt-11 mb-2">
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
      {/* NAVBAR SECTION END */}

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
      {/* HERO SECTION END */}


      {/* SERVICE SECTION HEADER */}
      <div className="container mt-[56px] ">
        <div className="my_section_name flex text-main_color font-medium xs:text-sm sm:text-base md:text-sm lg:text-base mb-10">
          <p className="uppercase">{langData.service_name}</p>
        </div>
        <div className="text-base mt-4 font-medium">
          {/* <p className='uppercase text-[25px] text-main_color leading-7 font-light'>Open <span className='text-black'>muddatli kartasi</span> - Bu biznesingiz o’sishi va rivojlanishi</p> */}
          {lang === "uz" ? (
            <p className="sm:w-11/12 md:w-9/12 lg:w-8/12 sm:ml-auto sm:mr-0 uppercase xs:text-[25px] sm:text-[27px] md:text-[40px] lg:text-[50px] xl:text-[60px] text-main_color xs:leading-7 sm:leading-8 md:leading-[46px] lg:leading-[58px] xl:leading-[70px] font-light">
              Open <span className="text-black">muddatli kartasi</span> - Bu
              biznesingiz o’sishi va rivojlanishi
            </p>
          ) : (
            <p className="sm:w-11/12 md:w-9/12 lg:w-8/12 sm:ml-auto sm:mr-0 uppercase xs:text-[25px] sm:text-[27px] md:text-[40px] lg:text-[50px] xl:text-[60px] text-main_color xs:leading-7 sm:leading-8 md:leading-[46px] lg:leading-[58px] xl:leading-[70px] font-light">
              <span className="text-black">Карта рассрочки</span> open{" "}
              <span className="text-black">- это</span> рост{" "}
              <span className="text-black">и</span> развитие{" "}
              <span className="text-black">вашего</span> бизнеса
            </p>
          )}
          <div className="sm:ml-auto sm:mr-0 sm:w-11/12 md:w-9/12 lg:w-8/12 xs:text-sm sm:text-base mt-4 font-medium">
            <p>{langData.service_text1}</p>
            <p>{langData.service_text2}</p>
          </div>
        </div>
      </div>
      {/* SERVICE SECTION HEADER END */}



      

      {/* SERVICE SECTION ITEMS */}
      <div className="container">
        <SerciseItemTemplate itemNum={"01"} itemTitle={langData.service_item1_title}/>
        {/* SERVICE ITEM 1 DIAGRAMM */}
        <div className="info__body flex justify-between  min-h-[578px]">
            {/* info ROW */}
            <div className="info__row w-[48.3%] flex flex-col justify-between">
              {/* text BLOCK */}
              <div>

                {/* MUDDATLI TO'LOVSIZ */}
                <div className="info__text i-text mb-4">
                  {/* text BOX */}
                  <div className="i-text__box">
                    <p className="text-gray_table opacity-50 text-sm  sm:text-base xs:text-sm  font-medium">
                      {langData.diagram_bez_rassrochki_title}
                    </p>
                    <p className="text-gray_table text-sm  sm:text-base xs:text-sm uppercase">{langData.diagram_bez_rassrochki_text}</p>
                  </div>
                </div>
                
                {/* UMUMIY QUYMAT */}
                <div className="info__text i-text">
                  {/* text BOX */}
                  <div className="i-text__box mb-4">
                    <p className="text-gray_table opacity-50 text-sm  sm:text-base  font-medium">
                      {langData.diagram_obsh_stoit_title}
                    </p>
                    <p className="text-gray_table text-sm  sm:text-base">{langData.diagram_obsh_stoit1}</p>
                  </div>
                </div>

                <div className="info__text i-text mb-4 md:hidden">
                  {/* text BOX */}
                  <div className="i-text__box">
                    <p className="text-gray_table opacity-50 text-sm  sm:text-base  font-medium">
                      {langData.diagram_pribl_name}
                    </p>
                    <p className="text-gray_table text-sm  sm:text-base  uppercase">{langData.diagram_pribl1_summa}</p>
                  </div>
                </div>
              </div>
              {/* table BLOCK */}
              <div className="flex">
                {/* DIAGRAM ITEM */}
                <div className="info__table i-table md:w-2/3 xs:w-full sm:w-full md:mt-auto md:mb-0">
                  <div className="i-table__head px-2 py-3.5 bg-main_color">
                    <p className="text-sm sm:text-base   text-white">{langData.diagram_pribl1}</p>
                  </div>
                  <div className="i-table__body align-middle px-2.5 py-20 bg-main_color_light">
                    {/* text BOX */}
                    <div className="i-text__box mb-4">
                      <p className="text-gray_table opacity-50 text-sm sm:text-base font-medium">
                        {langData.diagram_sebest}
                      </p>
                      <p className="text-gray_table text-sm sm:text-base md:hidden uppercase">{langData.diagram_sebest_summa1}</p>
                    </div>
                  </div>
                </div>

                {/* DIAGRAM ITEM TEXT */}
                <div className="info__table i-table  md:block xs:hidden md:w-1/3">
                  <div className="i-table__head px-2 py-3.5 border-b-2">
                    <p className="text-sm sm:text-base   text-black">{langData.diagram_pribl1_summa}</p>
                  </div>
                  <div className="i-table__body align-middle px-2.5 py-20 ">
                    {/* text BOX */}
                    <div className="i-text__box mb-4">
                      <p className="text-gray_table opacity-50 md:hidden text-sm sm:text-base font-medium">
                        {langData.diagram_sebest}
                      </p>
                      <p className="text-gray_table text-sm sm:text-base">{langData.diagram_sebest_summa1}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* info ROW */}
            <div className="info__row w-[48.3%] flex flex-col justify-between">
              {/* text BLOCK */}
              <div>
                <div className="info__text i-text">
                  {/* text BOX */}
                  <div className="i-text__box mb-4 md:flex ">
                    <p className="text-gray_table opacity-50 text-sm sm:text-base  md:mr-3 font-medium">
                      {langData.diagram_s_rassrochki_title}
                    </p>
                    <p className="text-gray_table text-sm sm:text-base uppercase">{langData.diagram_s_rassrochki_text}</p>
                  </div>
                </div>

                <div className="info__text i-text md:block xs:hidden">
                {/* text BOX */}
                  <div className="i-text__box mb-4 md:flex">
                    <p className="text-gray_table opacity-50 text-sm sm:text-base  md:mr-3 font-medium">
                      {langData.diagram_obsh_stoit_title}
                    </p>
                    <p className="text-gray_table text-sm sm:text-base">{langData.diagram_obsh_stoit2}</p>
                  </div>
                </div>

                <div className="info__text i-text md:hidden">
                {/* text BOX */}
                  <div className="i-text__box mb-4">
                    <p className="text-gray_table opacity-50 text-sm sm:text-base   font-medium">
                      {langData.diagram_komissiya}
                    </p>
                    <p className="text-gray_table text-sm sm:text-base uppercase">{langData.diagram_komissiya_summa}</p>
                  </div>
                </div>

                <div className="info__text i-text md:hidden">
                {/* text BOX */}
                  <div className="i-text__box mb-4">
                    <p className="text-gray_table opacity-50 text-sm sm:text-base   font-medium">
                      {langData.diagram_pribl_name}
                    </p>
                    <p className="text-gray_table text-sm sm:text-base   uppercase">{langData.diagram_pribl2_summa}</p>
                  </div>
                </div>
              </div>
              {/* table BLOCK */}
              <div className="flex">
                {/* TABLE DIAGRAMM ITEM */}
                <div className="info__table i-table md:w-2/3 xs:w-full sm:w-full md:mt-auto md:mb-0">
                  <div className="i-table__head px-2 py-3.5 bg-main_color">
                    <p className="text-sm sm:text-base   text-white">{langData.diagram_pribl2}</p>
                  </div>
                  <div className="i-table__subhead px-2.5 bg-main_color_middle lg:py-3.5">
                    <p className="text-sm sm:text-base   text-white">{langData.diagram_komissiya}</p>
                  </div>
                  <div className="i-table__body align-middle px-2.5 py-36 bg-main_color_light">
                    {/* text BOX */}
                    <div className="i-text__box mb-4">
                      <p className="text-gray_table opacity-50 text-sm sm:text-base font-medium">
                        {langData.diagram_sebest}
                      </p>
                      <p className="text-gray_table text-sm sm:text-base md:hidden  uppercase">{langData.diagram_sebest_summa2}</p>
                    </div>
                  </div>
                </div>
                {/* TABLE TEXT ITEM */}
                <div className="info__table i-table md:block xs:hidden md:w-1/3">
                  <div className="i-table__head px-2 py-3.5">
                    <p className="text-sm sm:text-base lg:text-base text-black">{langData.diagram_pribl2_summa}</p>
                  </div>
                  <div className="i-table__subhead px-2.5 py-3.5 border-t-2 border-b-2">
                    <p className="text-sm sm:text-base lg:text-base text-black">{langData.diagram_komissiya_summa} </p>
                  </div>
                  <div className="i-table__body align-middle px-2.5 py-36">
                    {/* text BOX */}
                    <div className="i-text__box mb-4">
                      <p className="text-gray_table text-sm sm:text-base lg:text-base">{langData.diagram_sebest_summa2}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/* SERVICE ITEM 1 DIAGRAMM END*/}
        
        <SerciseItemTemplate itemNum={"02"} itemTitle={langData.service_item2_title}/>
        <SerciseItemTemplate itemNum={"03"} itemTitle={langData.service_item3_title} itemText={langData.service_item3_text}/>
        <SerciseItemTemplate itemNum={"04"} itemTitle={langData.service_item4_title} itemText={langData.service_item4_text}/>
        <SerciseItemTemplate itemNum={"05"} itemTitle={langData.service_item5_title} itemText={langData.service_item5_text}/>
        <SerciseItemTemplate itemNum={"06"} itemTitle={langData.service_item6_title} itemText={langData.service_item6_text}/>
        {/* <div className="my-10 font-medium">
          <p className="uppercase text-[14px] font-medium mb-[14px]">
            <span className="text-main_color mr-2">07</span>
            {langData.service_item7_title}
          </p>
          <p className="leading-[18px] text-[14px]">
            {langData.service_item7_text}
          </p>
        </div> */}
      </div>
{/* <p className="leading-[18px] xs:text-sm sm:text-base sm:w-5/6 sm:ml-auto md:w-1/2">
            {itemText}
          </p> */}
      <div className="relative md:mb-80 xl:mb-96">
        <div className="container">
          <SerciseItemTemplate itemNum={"07"} itemTitle={langData.service_item7_title} itemText={langData.service_item7_text}/>
        </div>

        <img className="flex sm:w-11/12 md:w-2/3 lg:w-2/3 xl:w-7/12 md:absolute md:top-8 lg:mt-12 xl:mt-2 xs:mb-4 -z-10" src={karta} alt="karta" />

        <div className="container">
            <div className=" leading-[18px] xs:text-sm sm:text-base sm:w-5/6 sm:ml-auto md:w-1/2 md:mt-40 lg:mt-16 xl:mt-20">
              <div className="flex items-start sm:items-center">
                <div className="w-[15px] h-[15px] bg-main_color mr-[10px]"></div>
                <p className="">{langData.contained_regions}</p>
              </div>
              <div className="flex items-center md:mt-5">
                <div className="w-[15px] h-[15px] border-2 mr-[10px]"></div>
                <p className="">{langData.planned_regions}</p>
              </div>
            </div>
          </div>
      </div>
      <div className="container">
        
        <SerciseItemTemplate className="" itemNum={"08"} itemTitle={langData.service_item8_title} itemText={langData.service_item8_text}/>
      </div>


      {/* FORM SECTION */}
      <div className="form_section xs:h-[160px] sm:h-[200px] md:h-[250px] lg:h-[330px]">
        <div className="container ">

          <div className="relative xs:h-[160px] sm:h-[200px] md:h-[250px] lg:h-[330px]">
            <div className="form_section_card xs:py-[40px] xs:px-[10px] sm:py-12 sm:px-4 md:px-[30px] lg:py-[60px] bg-gray_form absolute top-1/2 md:flex">
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

      {/* Новые возможности  для развития карточного бизнеса   */}
      
      {/* BANKS SECTION */}
      <div className="container md:mt-[280px] sm:mt-[430px] xs:mt-[410px]">
        <div className="my_section_name flex text-main_color font-medium xs:text-sm sm:text-base md:text-sm lg:text-base mb-10">
          <p className="uppercase">{langData.banks_name}</p>
        </div>
        <div className="text-base mt-4 font-medium">
          {/* <p className='uppercase text-[25px] text-main_color leading-7 font-light'>Open <span className='text-black'>muddatli kartasi</span> - Bu biznesingiz o’sishi va rivojlanishi</p> */}
          {lang === "uz" ? (
            <p className="sm:w-11/12 md:w-9/12 lg:w-8/12 sm:ml-auto sm:mr-0 uppercase xs:text-[25px] sm:text-[27px] md:text-[40px] lg:text-[50px] xl:text-[60px] text-main_color xs:leading-7 sm:leading-8 md:leading-[46px] lg:leading-[58px] xl:leading-[70px] font-light">
            <span className="text-black">Biz karta </span> biznesini rivojlantirish  <span className="text-black">uchun yangi</span> imkoniyatlar <span className="text-black">taqdim etamiz</span></p>
          ) : (
            <p className="sm:w-11/12 md:w-9/12 lg:w-8/12 sm:ml-auto sm:mr-0 uppercase xs:text-[25px] sm:text-[27px] md:text-[40px] lg:text-[50px] xl:text-[60px] text-main_color xs:leading-7 sm:leading-8 md:leading-[46px] lg:leading-[58px] xl:leading-[70px] font-light">
              <span className="text-black">Новые</span> возможности{" "}
              <span className="text-black">для</span> развития{" "}
              <span className="text-black">карточного</span> бизнеса{" "}
            </p>
          )}
          <div className="sm:ml-auto sm:mr-0 sm:w-11/12 md:w-9/12 lg:w-8/12 xs:text-sm sm:text-base mt-4 font-medium">
            <p>{langData.banks_text}</p>
          </div>
        </div>
      </div>


      {/* FOOTER SECTION */}
      <div className="footer mt-[500px] py-[78px]">
        <div className="container">
          <div className="bg-gray_light text-black xs:py-8 xs:px-2.5 sm:p-[30px] max-w-sm mx-auto">
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
