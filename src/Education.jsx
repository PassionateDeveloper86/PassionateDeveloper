import React from 'react';
import './css/Education.css'
import me from './images/me3.png'
import arrow from './images/arrow.png'

const Contact = (props) => {
  return (
    <div className="area7">
      <div className="cap area2Start">
        My Education
      </div>
      <div className="cap area2Sub">
        Qualification
      </div>
      <div className="educationArea">

        <div className="eduMeArea">
          <img src={me} width="260" alt="Education" />
        </div>

        <div className="arrowArea">
          <img src={arrow} width="200" alt="Education" />
          <div className="eduBox eduBox1">
            <div className="eduTitle">
            {props.getTranslation("edu1")}
              
            </div>
            <div className="eduSubTitle">
              [2017] IHK Düsseldorf
            </div>
            <div className="eduText">
            {props.getTranslation("edu2")}
              
            </div>
          </div>
          <div className="eduBox eduBox2">
            <div className="eduTitle">
            {props.getTranslation("edu3")}
              
            </div>
            <div className="eduSubTitle">
              [2007] Friedrich-List-Berufskolleg
            </div>
            <div className="eduText">
            {props.getTranslation("edu4")}
              
            </div>
          </div>
          <div className="eduBox eduBox3">
            <div className="eduTitle">
            {props.getTranslation("edu5")}
               
            </div>
            <div className="eduSubTitle">
             [2007] Friedrich-List-Berufskolleg
            </div>
            <div className="eduText">
            {props.getTranslation("edu6")}
              
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Contact;

