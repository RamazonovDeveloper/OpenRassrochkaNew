import { useRef, useState } from "react";
import "./App.css";

import SerciseItemTemplate from "./components/SerciseItemTemplate";

import ruFlag from "./assets/Flag.png";
import uzFlag from "./assets/bayroq.png";

import menu from './assets/menu.png'
import close from './assets/close.png'

import headerGirlNew from './assets/rassNewHero3.png'
import headerGirlNew2 from './assets/rassNewHero5.png' 
import headerGirlNew3 from './assets/rassNewHero6.png' 
// import headerGirlNew3 from './assets/rassNewHero5 (2).png' 

import logo from "./assets/open_rass_logo.png"

import message from "./assets/message.png";
import phone from "./assets/call.png";
import karta from "./assets/karta.png";

import bank1 from "./assets/bankImg1.png";
import bank2 from "./assets/bankImg2.png";
import bank3 from './assets/bankImgNew3.png'

import girlOpen from "./assets/girl-open.png";
import mobiles from "./assets/telNew.png";
import mobile2 from "./assets/telefonNewImg.png"

import singleTel1 from "./assets/singleTel1.png"
import singleTel2 from "./assets/singleTel2.png"

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
  // const [isValidCompany, setValidCompany] = useState(true)

  // const telRef = useRef()
  // const [isValidTel, setValidTel] = useState(true)

  const handleLangClick = (name) => {
    localStorage.setItem("lang", name);
    setLang(name);
  };

  let langData = data[lang];

  const [navbarIsActive, setNavbarActive] = useState(false)

  function handleClick (value) {
    setNavbarActive(value)
  }

  // onInvalid={F => {lang == 'ru' ? (F.target.setCustomValidity('Заполните это поле !!!')) : (F.target.setCustomValidity('Ushbu maydonni to`ldiring !!!'))}}
  
  const submitFunction = (e) => {
    if(e.target.value == ''){
      if (lang == 'uz') {
        e.target.setCustomValidity('Ushbu maydonni to`ldiring !!!')
      }else{
        e.target.setCustomValidity('Заполните это поле !!!')
      }
    }else{
      e.target.setCustomValidity('')

      // emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      //   .then((result) => {
      //     console.log(result.text);
      //     Swal.fire({
      //       icon: 'success',
      //       title: 'Сообщение успешно отправлено'
      //     })
      //   }, (error) => {
      //     console.log(error.text);
      //     Swal.fire({
      //       icon: 'error',
      //       title: 'Ooops, something went wrong',
      //       text: error.text,
      //     })
      //   });
      // e.target.reset()

    }

    return true
  }

  // console.log(langData);

  return (
    <div className="relative">
      {/* NAVBAR SECTION START */}
      <div className="my_navbar">
        <div className="container flex justify-between items-center pt-6 pb-[10px]">

          <div className="md:hidden cursor-pointer">
            {
              navbarIsActive ?
              <div>
                <img onClick={() => handleClick(false)} src={close} alt="" />
              </div>
              :
              <div>
                <img onClick={() => handleClick(true)} src={menu} alt="" />
              </div>
            }
          </div>
          <div className="flex">
            <a href="#">
              <img className="w-[100px]" src={logo} alt="Logo" />
            </a>

            <div className="md:flex hidden">
              <ul className="flex text-uppercase items-center">
                <li className="lg:ml-[60px] md:ml-[40px]"><a href="#store">{langData.nav_link_1}</a></li>
                <li className="lg:ml-[60px] md:ml-[40px]"><a href="#bank">{langData.nav_link_2}</a></li>
              </ul>
            </div>

            <div className={!navbarIsActive ? "my_navbar_links md:hidden" : "my_navbar_links my_navbar_links-active"}>
              <ul className="flex text-uppercase">
                <li className="lg:ml-[60px] mb-3 "><a href="#store">{langData.nav_link_3}</a></li>
                <li className="lg:ml-[60px] mb-3"><a href="#bank">{langData.nav_link_2}</a></li>
              </ul>
            </div>

          </div>


          {/* LANGUAGES WITH TEXT */}
          <div className="hidden md:flex">
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
                  ? "opacity-50 flex cursor-pointer ml-[30px]"
                  : "flex cursor-pointer ml-[30px]"
              }
              onClick={() => handleLangClick("uz")}
            >
              <img className="w-7 me-2" src={uzFlag} alt="" />
              <p className="text-base">O'zbek</p>
            </div>
          </div>


          {/* LANGUAGES WITHOUT TEXT */}
          <div className="md:hidden flex">
            <img
              className={lang != "uz" ? "hidden" : "flex w-6"}
              onClick={() => setLang("ru")}
              src={ruFlag}
              alt="RuFlag"
            />
            <img
              className={lang != "ru" ? "hidden" : "flex w-6"}
              onClick={() => setLang("uz")}
              src={uzFlag}
              alt="UzFlag"
            />
          </div>

        </div>
        {/* <div className="flex justify-end gap-x-3.5 mt-11 mb-2">
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
        </div> */}
      </div>
      {/* NAVBAR SECTION END */}

      {/* HERO SECTION START */}
      {/* <div className="xxl:relative w-[100%] max-w-[1200px] "> */}
        <div className="xxl:relative mt-[70px]">
          <div className="hero xxl:container overflow-hidden w-full min-h-[700px] flex flex-col justify-between relative xxl:static">

            {/* hero TITLE */}
            <div className="container xl:clear-left xxl:px-0">
              <h1 className="hero__title text-black text-uppercase text-[35px] max-w-[202px] py-2 sm:text-[40px] lg:text-[50px] xl:text-[60px] smm:max-w-[300px] md:max-w-[550px] md:mt-[140px]">
                open
                <p className="text-main_color"> {langData?.header_title}</p>
              </h1>
            </div>


            <div className="header_girl_new absolute bottom-[25%] -z-[1]">
              <img className="header_girl_new_image h-[400px] object-cover" src={headerGirlNew2} alt="" />
            </div>

            {/* hero BLOCK */}
            <div className="xl:container  xxl:px-0">
              <div className="hero__block xl:static rounded-e-xl xl:rounded-xl bg-main_color py-[30px] px-2.5 sm:px-4 md:px-5 xl:px-[70px] lg:py-[45px] lg:px-[60px] max-w-[309px] sm:max-w-[377px] smm:max-w-[400px] md:max-w-[414px] lg:max-w-[574px] xl:max-w-[650px] xl:py-[60px]">
                <p className="hero__text text-[#E8E8E8] text-base sm:text-xl lg:text-[22px] xl:text-[25px] xs:leading-[21px]  sm:leading-[27px]  lg:leading-[30px] xl:leading-[34px]">
                  {langData?.header_text1}
                </p>
                <p className="hero__text text-[#E8E8E8] text-base sm:text-xl lg:text-[22px] xl:text-[25px] leading-[21px] sm:leading-[27px]  lg:leading-[30px] xl:leading-[34px]">
                  {langData?.header_text2}
                </p>
              </div>
            </div>

          </div>
        </div>
      {/* </div> */}
      {/* HERO SECTION END */}

      {/* SERVICE SECTION HEADER */}
      <div className="container mt-[56px] ">
        <div  id="store" className="my_section_name relative flex text-main_color font-medium xs:text-sm sm:text-base md:text-sm lg:text-base mb-10">
          <p className="uppercase">{langData.service_name}</p>
        </div>
        <div className="text-base mt-4 font-medium">
          {/* <p className='uppercase text-[25px] text-main_color leading-7 font-light'>Open <span className='text-black'>muddatli kartasi</span> - Bu biznesingiz o’sishi va rivojlanishi</p> */}
          {lang === "uz" ? (
            <p className="sm:w-11/12 md:w-9/12 lg:w-8/12 sm:ml-auto sm:mr-0 xs:text-[25px] sm:text-[27px] md:text-[40px] lg:text-[50px] xl:text-[60px] text-main_color xs:leading-7 sm:leading-8 md:leading-[46px] lg:leading-[58px] xl:leading-[70px] font-light">
              OPEN <span className="text-black">muddatli kartasi</span> - Bu
              biznesingiz o’sishi va rivojlanishi
            </p>
          ) : (
            <p className="sm:w-11/12 md:w-9/12 lg:w-8/12 sm:ml-auto sm:mr-0 xs:text-[25px] sm:text-[27px] md:text-[40px] lg:text-[50px] xl:text-[60px] text-main_color xs:leading-7 sm:leading-8 md:leading-[46px] lg:leading-[58px] xl:leading-[70px] font-light">
              <span className="text-black">Карта рассрочки</span> OPEN{" "}
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
      {/* <div className="info overflow-hidden relative"> */}
      <div>
        <div className="container">
          <SerciseItemTemplate
            itemNum={"01"}
            itemTitle={langData.service_item1_title}
            itemText={langData.service_item3_text}
          />
        </div>
      </div>
      <div className="container">
{/* =======
      <div className="container mt-[90px]">
        <SerciseItemTemplate
          itemNum={"01"}
          itemTitle={langData.service_item1_title}
          itemText={langData.service_item1_text}
        />
>>>>>>> 370306878debdb3bab0a07d5e2b052845738d063 */}
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
        <div className="images__right w-4/5 ml-auto mr-2 md:w-[48%] flex items-end ">
          <img src={mobiles} className="h-full" alt="" />
          {/* <img className="images__right_img1" src={singleTel1} alt="mobiles with open logo" />
          <img className="images__right_img2" src={singleTel2} alt="mobiles with open logo" /> */}
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

      <div className="bank_card_7 relative md:mb-20 lg:mb-[400px]">
        <div className="container">
          <SerciseItemTemplate
            itemNum={"07"}
            itemTitle={langData.service_item7_title}
            itemText={langData.service_item7_text}
          />
        </div>

        <div className="xxl:container xxl:relative">
          <img
            className="map_image flex sm:w-11/12 md:w-2/3 lg:w-2/3 xl:w-[53%] md:absolute md:top-8 lg:mt-12 xl:mt-[-20px] xs:mb-4 xxl:mt-14 -z-10"
            src={karta} 
            alt="karta"
          />
        </div>

        <div className="container">
          <div className="bank_card_7_items leading-[18px] xs:text-sm sm:text-base sm:w-5/6 sm:ml-auto md:w-1/2 md:mt-40 lg:mt-4 xl:mt-5 font-medium">
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
      <div className="form_section xs:h-[160px] sm:h-[200px] md:h-[250px] lg:h-[330px] xl:h-[438px]">
        <div className="container ">
          <div className="relative xs:h-[160px] sm:h-[200px] md:h-[250px] lg:h-[330px]">
            <div className="form_section_card rounded-xl xs:py-[40px] xs:px-[10px] sm:py-12 sm:px-4 md:px-[30px] lg:py-[60px] bg-gray_form absolute top-1/2 md:flex">
              <div className="md:w-1/2">
                <h3 className="font-medium text-base uppercase sm:text-[18px] lg:text-[20px]">
                  {langData.partners_header}
                </h3>
                <p className="xs:text-[14px] sm:text-base my-6 font-medium lg:w-3/4 sm:mt-8">
                  {langData.partners_text}
                </p>
              </div>
              <div className="md:w-1/2">

                {/* onSubmit={handleOnSubmit} */}

                <form onSubmit={handleOnSubmit}>
                  <input name='to_name' 
                  className='d-none rounded-[3px]'
                  defaultValue='Open Tech' 
                  type="text" />

                  <input
                    name="from_name_company"
                    ref={companyRef}
                    autoComplete="off"
                    required
                    onInvalid={e => submitFunction(e)}
                    // onInvalid={F => {lang == 'ru' ? (F.target.setCustomValidity('Заполните это поле !!!')) : (F.target.setCustomValidity('Formani to`g`ri to`ldiring !!!'))}}
                    className="w-full py-3 px-2 bg-gray_input text-base text-black my_input rounded-[3px]"
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
                  <button className="w-full bg-main_color text-white py-3 rounded-[5px] uppercase" type="submit">
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
        <div id="bank" className="my_section_name flex text-main_color font-medium xs:text-sm sm:text-base md:text-sm lg:text-base mb-10 relative">
          <p className="uppercase">{langData.banks_name}</p>
        </div>
        <div className="text-base mt-4 font-medium">
          {/* <p className='uppercase text-[25px] text-main_color leading-7 font-light'>Open <span className='text-black'>muddatli kartasi</span> - Bu biznesingiz o’sishi va rivojlanishi</p> */}
          {lang === "uz" ? (
            <p className="sm:w-11/12 md:w-9/12 lg:w-8/12 sm:ml-auto sm:mr-0 xs:text-[25px] sm:text-[27px] md:text-[40px] lg:text-[50px] xl:text-[60px] text-main_color xs:leading-7 sm:leading-8 md:leading-[46px] lg:leading-[58px] xl:leading-[70px] font-light">
              <span className="text-black">Biz karta </span> biznesini
              rivojlantirish <span className="text-black">uchun yangi</span>{" "}
              imkoniyatlar <span className="text-black">taqdim etamiz</span>
            </p>
          ) : (
            <p className="sm:w-11/12 md:w-9/12 lg:w-8/12 sm:ml-auto sm:mr-0 xs:text-[25px] sm:text-[27px] md:text-[40px] lg:text-[50px] xl:text-[60px] text-main_color xs:leading-7 sm:leading-8 md:leading-[46px] lg:leading-[58px] xl:leading-[70px] font-light">
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
          {/* <div className="xs:w-[96%] md:w-1/2 xs:ml-auto bg-[#F0CEAF] xs:py-[74px] xs:px-2.5 sm:px-5 md:px-[30px] md:py-[90px] text-black rounded-s-xl text-base relative sm:mr-0 sm:w-11/12 "> */}
          <div className="xs:w-[96%] md:w-1/2 xs:ml-auto bg-[#F0CEAF] xl:rounded-xl rounded-s-xl xs:py-[74px] xs:px-2.5 sm:px-5 md:px-[30px] md:py-[90px] text-black text-base relative sm:mr-0 sm:w-11/12 ">
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
          <div className="xs:py-[54px] md:w-1/2 lg:w-[40%] xs:px-2.5 sm:px-5 md:px-[30px] md:py-[71px] lg:py-[100px] xs:text-black text-base relative md:bg-[#ECB0B7] xl:rounded-xl rounded-e-xl sm:w-11/12">
{/* >>>>>>> 370306878debdb3bab0a07d5e2b052845738d063 */}
            <p className="bank_sections_p_font absolute xs:top-5 xs:left-2.5 sm:left-4 md:left-5 lg:left-[30px] lg:top-[35px]">02</p>
            <h1 className="uppercase leading-[20px] mb-4 ">
              {langData.banks_item2_title}
            </h1>
            <p>{langData.banks_item2_text}</p>
          </div>

          {/* BANK CARD 3 */}
{/* <<<<<<< HEAD
          <div className="w-[96%] md:w-1/2 xs:ml-auto xs:mr-0 lg:w-[40%] xs:bg-[#ECB0B7] xs:py-[74px] xs:px-2.5 md:px-[30px] md:py-[71px] lg:py-[100px] xs:text-black rounded-s-xl text-base relative sm:w-11/12 md:bg-[#00000000] md:text-black">
======= */}
          <div className="w-[96%] md:w-1/2 lg:w-[40%] xs:bg-[#ECB0B7] rounded-e-xl xs:py-[74px] xs:px-2.5 md:px-[30px] md:py-[71px] lg:py-[100px] xs:text-black text-base relative sm:w-11/12 md:bg-transparent md:text-black">
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
            <p className="bank_sections_p_font xs:text-main_color absolute xs:top-5 xs:left-2.5 md:left-5 xl:left-[30px] xl:top-[35px]">04</p>
            <h1 className="uppercase leading-[20px] mb-4">
              {langData.banks_item4_title}
            </h1>
            <p>{langData.banks_item4_text}</p>
          </div>
{/* <<<<<<< HEAD
          <div className="md:w-1/2 max-h-[300px] w-full lg:max-h-[800px] min-h-[250px] flex justify-end items-end z-10">
            <img className="-z-10 absolute -right-[50px] bottom-0 md:hidden sm:static" src={bank3} alt="" />
            <img className="my_crazy_card lg:absolute lg:right-0 lg:bottom-0 hidden md:flex" src={bank2} alt="" />
======= */}
          <div className="md:w-1/2 max-h-[300px] lg:max-h-[800px] flex justify-end items-end z-10 ">
            {/*  md:w-1/2 */}
            <img className="lg:-z-10 lg:absolute lg:right-0 lg:bottom-0 hidden md:flex absolute z-20" src={bank2} alt="" />
            <img className="lg:-z-10 lg:absolute lg:right-0 lg:bottom-0 md:hidden" src={bank3} alt="" />
{/* >>>>>>> 370306878debdb3bab0a07d5e2b052845738d063 */}
          </div>
        </div>

        <div className="md:flex justify-between">
          {/* BANK CARD 5 */}
{/* <<<<<<< HEAD
          <div className="w-[96%] xs:ml-auto sm:mr-auto sm:ml-0 xs:bg-[#DCCFE8] md:bg-transparent xs:pt-[50px] xs:pb-[30px] sm:px-5 md:px-[30px] md:py-[71px] lg:py-[100px] xs:px-2.5 rounded-s-xl sm:rounded-e-xl sm:rounded-s-none xs:text-black md:text-black text-base relative sm:w-11/12">
======= */}
          <div className="w-[96%] xs:ml-auto sm:mr-auto sm:ml-0 xs:bg-[#DCCFE8] sm:rounded-e-xl sm:rounded-s-none rounded-s-xl  md:bg-transparent xs:pt-[50px] xs:pb-[30px] sm:px-5 md:px-[30px] md:py-[71px] lg:py-[100px] xs:px-2.5 xs:text-black md:text-black text-base relative sm:w-11/12">
{/* >>>>>>> 370306878debdb3bab0a07d5e2b052845738d063 */}
            <p className="bank_sections_p_font md:text-main_color absolute xs:top-5 xs:left-2.5 md:left-5 xl:left-[30px] xl:top-[35px]">05</p>
            <h1 className="uppercase leading-[20px] mb-4">
              {langData.banks_item5_title}
            </h1>
            <p>{langData.banks_item5_text}</p>
          </div>

          {/* BANK CARD 6 */}
          {/* <div className="xs:pt-[50px] xs:pb-[30px] xs:px-2.5 sm:px-5 md:px-[30px] md:py-[71px] lg:py-[100px] md:bg-[#DCCFE8] xs:text-black md:text-black rounded-s-xl text-base relative sm:ml-auto sm:w-11/12">
            <p className="bank_sections_p_font absolute xs:top-5 xs:left-2.5 sm:left-5 md:left-5 xl:left-[30px] xl:top-[35px]">06</p> */}
          <div className="xs:pt-[50px] xs:pb-[30px] xs:px-2.5 sm:px-5 md:px-[30px] md:py-[71px] lg:py-[100px] md:bg-[#DCCFE8] xs:text-black xl:rounded-xl rounded-s-xl text-base relative sm:ml-auto sm:w-11/12">
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
          <div className="bg-gray_light rounded-xl text-black xs:py-8 xs:px-2.5 sm:p-[30px] max-w-sm mx-auto">
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
