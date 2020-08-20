import React from 'react';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';

import heart from './images/heart.png'
import me from './images/me2.png'
import sig from './images/signature.png'
import Links from './Links'

import ger from './images/ger.png'
import en from './images/en.PNG'

import './css/Link.css'

const Contact = (props) => {
  return (
    <div className="area1">

      <Links />

      <div className="header">
        <div>
          <img src={heart} height="150" width="150" alt="logo" />
        </div>

        <div className="mailAndPhoneArea">

          <div className="flagArea">
            <div className="flag" onClick={() => props.changeLanguageHandler("en")}>
              <img src={en} width="30" height="18" alt="flag" />
            </div>
            <div className="flag" onClick={() => props.changeLanguageHandler("de")}>
              <img src={ger} width="30" height="18" alt="flag" />
            </div>
          </div>

          <span className="withIcon phone">
            <div>
              <AiOutlinePhone />
            </div>
            <div>
              0176 / 856 26651
            </div>
          </span>

          <a href="mailto:info@passionate-developer.com" className="withIcon mail">
            <div>
              <AiOutlineMail />
            </div>
            <div>
              info@passionate-developer.com
            </div>
          </a>
        </div>
      </div>

      <div className="heroArea">
        <div className="heroAreaLeft">
          <div className="textArea cap">
            <div className="smallHeroSize">
              {props.getTranslation("landingText1")}
            </div>
            <div className="mainTextColor fat heroSize">
              {props.getTranslation("landingText2")}
            </div>
            <div className="heroSize">
              {props.getTranslation("landingText3")}
            </div>
          </div>

          <div className="sig">
            <img src={sig} width="300" alt="Signature" />
          </div>
        </div>

        <div className="person1">
          <img src={me} height="500" width="350" alt="Foto" />
        </div>
      </div>

    </div>
  )
}

export default Contact;

