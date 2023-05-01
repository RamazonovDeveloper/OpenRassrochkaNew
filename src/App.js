import { useRef, useState } from "react";
import "./App.css";

import SerciseItemTemplate from "./components/SerciseItemTemplate";

import ruFlag from "./assets/Flag.png";
import uzFlag from "./assets/bayroq.png";

import message from "./assets/message.png";
import phone from "./assets/call.png";
import karta from "./assets/karta.png";

import bank1 from "./assets/bankImg1.png";
import bank2 from "./assets/bankImg2.png";

import girlOpen from "./assets/girl-open.png";
import mobiles from "./assets/mobiles.png";

import { data } from "./data";

import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import Cleave from 'cleave.js/react';

const SERVICE_ID = "service_9elghc8";
const TEMPLATE_ID = "template_o2hb6ck";
const USER_ID = "WSRBV5ZOthSftBlU0";

function App() {
  const [phoheNumber, setPhoneNumber] = useState('')
  
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Сообщение успешно отправлено'
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        })
      });
    e.target.reset()
  };

  let identifyLang = localStorage.getItem("lang");

  if (!identifyLang) {
    localStorage.
    setItem("lang", "uz");
    identifyLang = "uz";
  }

  const [lang, setLang] = useState(identifyLang);

  const companyRef = useRef()
  const [isValidCompany, setValidCompany] = useState(true)

  const telRef = useRef()
  const [isValidTel, setValidTel] 
  = useState(true)


  // const handleBtnClick = () => {
  //   if(!companyRef.current.value){
  //     setValidCompany(false)
  //   }else{
  //     setValidCompany(true)
  //   }

  //   if(!telRef.current.value){
  //     setValidTel(false)
  //   }else{
  //     setValidTel(true)
  //   }
  // }


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
      <div className="hero overflow-hidden w-full min-h-[700px] xl:pl-[10%] flex flex-col justify-between relative">
        {/* hero TITLE */}
        <h1 className="hero__title text-black text-uppercase text-[35px] max-w-[202px] px-4 py-2 sm:text-[40px] lg:text-[50px] xl:text-[60px] smm:max-w-[300px] md:max-w-[550px] md:mt-[140px]">
          open
          <p className="text-main_color"> {langData?.header_title}</p>
        </h1>

        {/* hero BLOCK */}
        <div className="hero__block bg-main_color py-[30px] px-2.5 sm:px-4 md:px-5 lg:py-[45px] lg:px-[60px] max-w-[309px] sm:max-w-[377px] smm:max-w-[400px] md:max-w-[414px] lg:max-w-[574px] xl:max-w-[650px] xl:px-[70px] xl:py-[60px]">
          <p className="hero__text text-[#E8E8E8] text-base sm:text-xl md:uppercase lg:text-[22px] xl:text-[25px] xs:leading-[21px]  sm:leading-[27px]  lg:leading-[30px] xl:leading-[34px]">
            {langData?.header_text1}
          </p>
          <p className="hero__text text-[#E8E8E8] text-base sm:text-xl md:uppercase lg:text-[22px] xl:text-[25px] leading-[21px] sm:leading-[27px]  lg:leading-[30px] xl:leading-[34px]">
            {langData?.header_text2}
          </p>
        </div>
      </div>
      {/* HERO SECTION END */}

      {/* SERVICE SECTION HEADER */}
      <div className="container mt-[56px] ">
        <div className="my_section_name relative flex text-main_color font-medium xs:text-sm sm:text-base md:text-sm lg:text-base mb-10">
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
      <div className="info overflow-hidden relative">
        <div className="container">
          <SerciseItemTemplate
            itemNum={"01"}
            itemTitle={langData.service_item1_title}
          />
          {/* SERVICE ITEM 1 DIAGRAMM */}
          <div className="info__body flex justify-between  min-h-[578px] lg:w-[74%]">
            {/* info ROW */}
            <div className="info__row w-[48.3%] flex flex-col justify-between">
              {/* text BLOCK */}
              <div>
                {/* MUDDATLI TO'LOVSIZ */}
                <div className="info__text i-text mb-4">
                  {/* text BOX */}
                  <div className="i-text__box md:flex">
                    <p className="text-gray_table opacity-50 text-sm  sm:text-base xs:text-sm md:mr-3 font-medium">
                      {langData.diagram_bez_rassrochki_title}
                    </p>
                    <p className="text-gray_table text-sm  sm:text-base xs:text-sm uppercase">
                      {langData.diagram_bez_rassrochki_text}
                    </p>
                  </div>
                </div>

                {/* UMUMIY QUYMAT */}
                <div className="info__text i-text">
                  {/* text BOX */}
                  <div className="i-text__box mb-4 md:flex">
                    <p className="text-gray_table opacity-50 text-sm md:mr-3 sm:text-base  font-medium">
                      {langData.diagram_obsh_stoit_title}
                    </p>
                    <p className="text-gray_table text-sm  sm:text-base">
                      {langData.diagram_obsh_stoit1}
                    </p>
                  </div>
                </div>

                <div className="info__text i-text mb-4 md:hidden">
                  {/* text BOX */}
                  <div className="i-text__box">
                    <p className="text-gray_table opacity-50 text-sm  sm:text-base  font-medium">
                      {langData.diagram_pribl_name}
                    </p>
                    <p className="text-gray_table text-sm  sm:text-base">
                    20%
                    </p>
                  </div>
                </div>

                <div className="info__text i-text mb-4 md:hidden">
                  {/* text BOX */}
                  <div className="i-text__box">
                    <p className="text-gray_table opacity-50 text-sm  sm:text-base  font-medium">
                      {langData.diagram_pribl_name}
                    </p>
                    <p className="text-gray_table text-sm  sm:text-base">
                    {"22% "+"("+langData.diagram_pribl1_summa+")"}
                    </p>
                  </div>
                </div>
              </div>
              {/* table BLOCK */}
              <div className="flex">
                {/* DIAGRAM ITEM */}
                <div className="info__table i-table md:w-2/3 xs:w-full sm:w-full w-full md:mt-auto md:mb-0">
                  <div className="i-table__head px-2 py-3.5 bg-main_color">
                    <p className="text-sm sm:text-base   text-white">
                      {langData.diagram_pribl1}
                    </p>
                  </div>
                  <div className="i-table__body align-middle px-2.5 py-20 bg-main_color_light">
                    {/* text BOX */}
                    <div className="i-text__box mb-4">
                      <p className="text-gray_table opacity-50 text-sm sm:text-base font-medium">
                        {langData.diagram_sebest}
                      </p>
                      <p className="text-gray_table text-sm sm:text-base md:hidden uppercase">
                        {langData.diagram_sebest_summa1}
                      </p>
                    </div>
                  </div>
                </div>

                {/* DIAGRAM ITEM TEXT */}
                <div className="info__table i-table  md:block hidden md:w-1/3">
                  <div className="i-table__head px-2 py-3.5 border-b-2">
                    <p className="text-sm sm:text-base   text-black">
                      {langData.diagram_pribl1_summa}
                    </p>
                  </div>
                  <div className="i-table__body align-middle px-2.5 py-20 ">
                    {/* text BOX */}
                    <div className="i-text__box mb-4">
                      <p className="text-gray_table opacity-50 md:hidden text-sm sm:text-base font-medium">
                        {langData.diagram_sebest}
                      </p>
                      <p className="text-gray_table text-sm sm:text-base">
                        {langData.diagram_sebest_summa1}
                      </p>
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
                    <p className="text-gray_table text-sm sm:text-base uppercase">
                      {langData.diagram_s_rassrochki_text}
                    </p>
                  </div>
                </div>
                {/*  md:block xs:hidden */}
                <div className="info__text i-text">
                  {/* text BOX */}
                  <div className="i-text__box mb-4 md:flex">
                    <p className="text-gray_table opacity-50 text-sm sm:text-base  md:mr-3 font-medium">
                      {langData.diagram_obsh_stoit_title}
                    </p>
                    <p className="text-gray_table text-sm sm:text-base">
                      {langData.diagram_obsh_stoit2}
                    </p>
                  </div>
                </div>

                <div className="info__text i-text md:hidden">
                  {/* text BOX */}
                  <div className="i-text__box mb-4">
                    <p className="text-gray_table opacity-50 text-sm sm:text-base   font-medium">
                      {langData.diagram_komissiya}
                    </p>
                    <p className="text-gray_table text-sm sm:text-base uppercase">
                      {langData.diagram_komissiya_summa}
                    </p>
                  </div>
                </div>

                <div className="info__text i-text md:hidden">
                  {/* text BOX */}
                  <div className="i-text__box mb-4">
                    <p className="text-gray_table opacity-50 text-sm sm:text-base   font-medium">
                      {langData.diagram_pribl_name}
                    </p>
                    <p className="text-gray_table text-sm sm:text-base">
                      {"22% "+"("+langData.diagram_pribl2_summa+")"}
                    </p>
                  </div>
                </div>
              </div>
              {/* table BLOCK */}
              <div className="flex">
                {/* TABLE DIAGRAMM ITEM */}
                <div className="info__table i-table md:w-2/3 xs:w-full sm:w-full md:mt-auto md:mb-0">
                  <div className="i-table__head px-2 py-3.5 bg-main_color">
                    <p className="text-sm sm:text-base   text-white">
                      {langData.diagram_pribl2}
                    </p>
                  </div>
                  <div className="i-table__subhead px-2.5 bg-main_color_middle lg:py-3.5">
                    <p className="text-sm sm:text-base   text-white">
                      {langData.diagram_komissiya}
                    </p>
                  </div>
                  <div className="i-table__body align-middle px-2.5 py-36 bg-main_color_light">
                    {/* text BOX */}
                    <div className="i-text__box mb-4">
                      <p className="text-gray_table opacity-50 text-sm sm:text-base font-medium">
                        {langData.diagram_sebest}
                      </p>
                      <p className="text-gray_table text-sm sm:text-base md:hidden  uppercase">
                        {langData.diagram_sebest_summa2}
                      </p>
                    </div>
                  </div>
                </div>
                {/* TABLE TEXT ITEM */}
                <div className="info__table i-table md:block hidden md:w-1/3">
                  <div className="i-table__head px-2 py-3.5">
                    <p className="text-sm sm:text-base lg:text-base text-black">
                      {langData.diagram_pribl2_summa}
                    </p>
                  </div>
                  <div className="i-table__subhead px-2.5 py-3.5 border-t-2 border-b-2">
                    <p className="text-sm sm:text-base lg:text-base text-black">
                      {langData.diagram_komissiya_summa}{" "}
                    </p>
                  </div>
                  <div className="i-table__body align-middle px-2.5 py-36">
                    {/* text BOX */}
                    <div className="i-text__box mb-4">
                      <p className="text-gray_table text-sm sm:text-base lg:text-base">
                        {langData.diagram_sebest_summa2}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* SERVICE ITEM 1 DIAGRAMM END*/}
        </div>
      </div>
      <div className="container">
        <SerciseItemTemplate
          itemNum={"02"}
          itemTitle={langData.service_item2_title}
        />
        <SerciseItemTemplate
          itemNum={"03"}
          itemTitle={langData.service_item3_title}
          itemText={langData.service_item3_text}
        />
        <SerciseItemTemplate
          itemNum={"04"}
          itemTitle={langData.service_item4_title}
          itemText={langData.service_item4_text}
        />
      </div>
      <div className="images min-h-[233px] md:h-[440px] xl:h-[530px] flex items-stretch relative">
        <div className="images__left hidden w-1/2 md:flex md:justify-end md:items-end lg:pr-28">
          <img src={girlOpen} alt="girl with open bag" className="h-full" />
        </div>
        <div className="images__right w-4/5 ml-auto mr-2 md:w-[48%] flex items-end">
          <img src={mobiles} alt="mobiles with open logo" className="h-full" />
        </div>
      </div>
      <div className="container">
        <SerciseItemTemplate
          itemNum={"05"}
          itemTitle={langData.service_item5_title}
          itemText={langData.service_item5_text}
        />
        <SerciseItemTemplate
          itemNum={"06"}
          itemTitle={langData.service_item6_title}
          itemText={langData.service_item6_text}
        />
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

      <div className="bank_card_7 relative md:mb-20 lg:mb-[400px] xl:mb-[450px]">
        <div className="container">
          <SerciseItemTemplate
            itemNum={"07"}
            itemTitle={langData.service_item7_title}
            itemText={langData.service_item7_text}
          />
        </div>

        <img
          className="map_image flex sm:w-11/12 md:w-2/3 lg:w-2/3 xl:w-7/12 md:absolute md:top-8 lg:mt-12 xl:mt-2 xs:mb-4 -z-10"
          src={karta}
          alt="karta"
        />

        <div className="container">
          <div className="bank_card_7_items leading-[18px] xs:text-sm sm:text-base sm:w-5/6 sm:ml-auto md:w-1/2 md:mt-40 lg:mt-4 xl:mt-5">
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
        <SerciseItemTemplate
          className=""
          itemNum={"08"}
          itemTitle={langData.service_item8_title}
          itemText={langData.service_item8_text}
        />
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
              <form onSubmit={handleOnSubmit}>
                <input name='to_name' 
                  className='d-none' 
                  defaultValue='Open Tech' 
                  type="text" />

                  <input
                    name="from_name_company"
                    // ref={companyRef}
                    className="w-full py-3 px-2 bg-gray_input text-base text-black my_input"
                    // className={isValidCompany ? "w-full py-3 px-2 bg-gray_input text-base text-black my_input" :"w-full py-3 px-2 bg-gray_input text-base text-black my_input_invalid"}
                    type="text"
                    placeholder={langData.partners_input_name}
                  />
                  {/* <input
                    // ref={telRef}
                    // className={isValidTel ? "w-full py-3 px-2 bg-gray_input text-base text-black xs:mt-4 xs:mb-6 sm:mt-5 sm:mb-11 xl:mb-[60px] my_input" : "w-full py-3 px-2 bg-gray_input text-base text-black xs:mt-4 xs:mb-6 sm:mt-5 sm:mb-11 xl:mb-[60px] my_input_invalid"}
                    className="w-full py-3 px-2 bg-gray_input text-base text-black xs:mt-4 xs:mb-6 sm:mt-5 sm:mb-11 xl:mb-[60px] my_input"
                    type="text"
                    placeholder={langData.partners_input_tel}
                  /> */}
                  <Cleave
                    name='contact_number' 
                    className='w-full py-3 px-2 bg-gray_input text-base text-black xs:mt-4 xs:mb-6 sm:mt-5 sm:mb-11 xl:mb-[60px] my_input'
                    placeholder='Enter your credit card number'
                    options={{
                      prefix: '+998',
                      delimiters: [' ', '(', ') ', '-'],
                      blocks: [4, 0, 2, 3, 2, 2]
                    }}
                    onChange={event => setPhoneNumber(`+${event.target.rawValue.substr(1)}`)}
                  />
                  {/* <input type="text" placeholder={langData.partners_input_tel}/> */}
                  {/*  xs:mt-6 xs:mb-10 sm:m */}
                  <button className="w-full bg-main_color text-white py-3 uppercase" type="submit">
                    {langData.partners_btn}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Новые возможности  для развития карточного бизнеса   */}

      {/* BANKS SECTION */}
      <div className="container md:mt-[280px] sm:mt-[430px] xs:mt-[410px] ">
        <div className="my_section_name flex text-main_color font-medium xs:text-sm sm:text-base md:text-sm lg:text-base mb-10 relative">
          <p className="uppercase">{langData.banks_name}</p>
        </div>
        <div className="text-base mt-4 font-medium">
          {/* <p className='uppercase text-[25px] text-main_color leading-7 font-light'>Open <span className='text-black'>muddatli kartasi</span> - Bu biznesingiz o’sishi va rivojlanishi</p> */}
          {lang === "uz" ? (
            <p className="sm:w-11/12 md:w-9/12 lg:w-8/12 sm:ml-auto sm:mr-0 uppercase xs:text-[25px] sm:text-[27px] md:text-[40px] lg:text-[50px] xl:text-[60px] text-main_color xs:leading-7 sm:leading-8 md:leading-[46px] lg:leading-[58px] xl:leading-[70px] font-light">
              <span className="text-black">Biz karta </span> biznesini
              rivojlantirish <span className="text-black">uchun yangi</span>{" "}
              imkoniyatlar <span className="text-black">taqdim etamiz</span>
            </p>
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

      {/* BANK SECTION ITEM 1 */}

      <div className="bank_section_big mt-10 xl:container">
        {/* BANK CARD 1 */}
        {/* sm:mr-0 sm:w-11/12 md:w-9/12 lg:w-8/12 */}
        <div className="md:flex md:align-bottom md:flex-row-reverse justify-between items-end">
          <div className="xs:w-[96%] md:w-1/2 xs:ml-auto bg-main_color xs:py-[74px] xs:px-2.5 sm:px-5 md:px-[30px] md:py-[90px] text-white text-base relative sm:mr-0 sm:w-11/12 ">
            <p className="bank_sections_p_font absolute xs:top-5 xs:left-2.5 sm:left-4 md:left-5 lg:left-[30px] lg:top-[35px] ">
              01
            </p>
            <h1 className="uppercase leading-[20px] mb-4">
              {langData.banks_item1_title}
            </h1>
            <p className="leading-[20px]">{langData.banks_item1_text}</p>
          </div>
          <div className="md:w-1/2 max-h-[260px] flex justify-center items-end relative z-10">
            <img className="" src={bank1} alt="" />
          </div>
        </div>

        <div className="md:flex ">
          {/* BANK CARD 2 */}
          <div className="xs:py-[54px] md:w-1/2 lg:w-[40%] xs:px-2.5 sm:px-5 md:px-[30px] md:py-[71px] lg:py-[100px] xs:text-black text-base relative md:bg-main_color md:text-white sm:w-11/12">
            <p className="bank_sections_p_font absolute xs:top-5 xs:left-2.5 sm:left-4 md:left-5 lg:left-[30px] lg:top-[35px]">02</p>
            <h1 className="uppercase leading-[20px] mb-4 ">
              {langData.banks_item2_title}
            </h1>
            <p>{langData.banks_item2_text}</p>
          </div>

          {/* BANK CARD 3 */}
          <div className="w-[96%] md:w-1/2 lg:w-[40%] xs:bg-main_color xs:py-[74px] xs:px-2.5 md:px-[30px] md:py-[71px] lg:py-[100px] xs:text-white text-base relative sm:w-11/12 md:bg-transparent md:text-black">
            <p className="bank_sections_p_font md:text-main_color absolute xs:top-5 xs:left-2.5 sm:left-4 md:left-5 lg:left-[30px] lg:top-[35px]">03</p>
            <h1 className="uppercase leading-[20px] mb-4">
              {langData.banks_item3_title}
            </h1>
            <p>{langData.banks_item3_text}</p>
          </div>
        </div>

        {/* BANK CARD 4 */}
        <div className="md:flex lg:w-[60%] lg:ml-auto justify-between relative">
          <div className="xs:py-[74px] md:w-1/2 xs:px-2.5 sm:px-5 md:px-[30px] md:py-[71px] lg:py-[100px] text-black text-base relative">
            <p className="bank_sections_p_font sm:text-main_color absolute xs:top-5 xs:left-2.5 md:left-5 xl:left-[30px] xl:top-[35px]">04</p>
            <h1 className="uppercase leading-[20px] mb-4">
              {langData.banks_item4_title}
            </h1>
            <p>{langData.banks_item4_text}</p>
          </div>
          <div className="md:w-1/2 max-h-[300px] lg:max-h-[800px] flex justify-end items-end z-10 ">
            {/*  md:w-1/2 */}
            <img className="lg:-z-10 lg:absolute lg:right-0 lg:bottom-0" src={bank2} alt="" />
          </div>
        </div>

        <div className="md:flex justify-between">
          {/* BANK CARD 5 */}
          <div className="w-[96%] xs:ml-auto sm:mr-auto sm:ml-0 xs:bg-main_color md:bg-transparent xs:pt-[50px] xs:pb-[30px] sm:px-5 md:px-[30px] md:py-[71px] lg:py-[100px] xs:px-2.5 xs:text-white md:text-black text-base relative sm:w-11/12">
            <p className="bank_sections_p_font md:text-main_color absolute xs:top-5 xs:left-2.5 md:left-5 xl:left-[30px] xl:top-[35px]">05</p>
            <h1 className="uppercase leading-[20px] mb-4">
              {langData.banks_item5_title}
            </h1>
            <p>{langData.banks_item5_text}</p>
          </div>

          {/* BANK CARD 6 */}
          <div className="xs:pt-[50px] xs:pb-[30px] xs:px-2.5 sm:px-5 md:px-[30px] md:py-[71px] lg:py-[100px] md:bg-main_color xs:text-black md:text-white text-base relative sm:ml-auto sm:w-11/12">
            <p className="bank_sections_p_font absolute xs:top-5 xs:left-2.5 md:left-5 xl:left-[30px] xl:top-[35px]">06</p>
            <h1 className="uppercase leading-[20px] mb-4">
              {langData.banks_item6_title}
            </h1>
            <p>{langData.banks_item6_text}</p>
          </div>
        </div>
      </div>

      {/* FOOTER SECTION */}
      <div className="footer mt-[100px] py-[78px]">
        <div className="container">
          <div className="bg-gray_light text-black xs:py-8 xs:px-2.5 sm:p-[30px] max-w-sm mx-auto">
            <p className="uppercase font-medium">{langData.decision}</p>
            <div className="flex items-center mt-7 mb-[20px] font-medium">
              <img className="mr-4" src={message} alt="" />
              <a href="mailto:hello@opentech.uz">hello@opentech.uz</a>
            </div>
            <div className="flex items-center font-medium">
              <img className="mr-4" src={phone} alt="" />
              <a href="tel:998909687881"> +998 (90) 968-7881</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
