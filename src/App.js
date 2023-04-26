import { useState } from 'react';
import './App.css';

import ruFlag from './assets/Flag.png'
import uzFlag from './assets/bayroq.png'
import headerGirl from './assets/headerGirl.png'

import message from './assets/message.png'
import phone from './assets/call.png'

import { data } from './data'

function App() {

  let identifyLang = localStorage.getItem("lang")
  
  if (!identifyLang) {
    localStorage.setItem("lang","uz")
    identifyLang = "uz"
  }

  const [lang, setLang] = useState(identifyLang)

  const handleLangClick = (name) => {
    localStorage.setItem("lang", name)
    setLang(name)
  }

  let langData = data[lang]

  // console.log(langData);

  return (
    <div className="">
      <div className="container">
        <div className="flex justify-end">
          <div className={lang == "uz" ? "opacity-50 flex" : "flex"} onClick={() => handleLangClick("ru")}>
            <img className='w-7' src={ruFlag} alt="" />
            <p className='text-x'>Русский</p>
          </div>
          <div className={lang == "ru" ? "opacity-50 flex" : "flex"} onClick={() => handleLangClick("uz")}>
            <img className='w-7' src={uzFlag} alt="" />
            <p className='w-4'>O'zbek</p>
          </div>
        </div>
      </div>

      <div className="section_form">
        <div className="container text-red-400">
          section
        </div>
      </div>
      
      <div className="footer">
        <div className="container footer_big">
          <div className="footer_card">
            <p className='text-uppercase mb-4'>{langData.decision}</p>
            <div className='footer_card_items'>
              <img src={message} alt="" />
              <p>hello@opentech.uz</p>
            </div>
            <div className='footer_card_items'>
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
