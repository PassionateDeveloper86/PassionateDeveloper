import React from 'react';
import Exp from './controls/Exp'
import ExpRight from './controls/ExpRight'

const MyExp = (props) => {
  return (
    <div className="area3">
      <div className="cap area2Start area3space">
        My Experience
      </div>
      <div className="cap area2Sub">
        curriculum Vitae
      </div>

      <Exp 
      classAddition="expFirst" 
      link="https://vivavis.com/"
      title="Vivavis AG" 
      subTitle={props.getTranslation("expSub1")} 
      year="03.2020 - heute" 
      city={props.getTranslation("germany") + ", Koblenz"} 
      >
        {props.getTranslation("expText1a")}
        <br />
        <br />
        {props.getTranslation("expText1b")}
      </Exp>

      <ExpRight 
      tooltip={<div>{props.getTranslation("tooltipExp")} <br /> {props.getTranslation("tooltipExp2")}</div>}
      title="SWD Stadt Düsseldorf mbH & Co KG" 
      cert
      link="https://www.swd-duesseldorf.de/"
      subTitle={<span>{props.getTranslation("expSub2a")},<br /> {props.getTranslation("expSub2b")}</span>} 
      year="01.2018 - 03.2020" 
      city={props.getTranslation("germany") + ", Düsseldorf"} 
      >
        {props.getTranslation("expText2a")}
        <br />
        <br />
        {props.getTranslation("expText2b")}
        <br />
        {props.getTranslation("expText2c")}
      </ExpRight>

      <Exp 
      title="Friedrich-List-Berufskolleg" 
      link="https://www.flbk.de"
      subTitle={props.getTranslation("expSub4")} 
      year="08.2017 - 12.2019" 
      city={props.getTranslation("germany") + ", Solingen"} 
      >
        {props.getTranslation("expText3a")}
        <br />
        {props.getTranslation("expText3b")}
        <br /><br />
        {props.getTranslation("expText3c")}
        <br />
        {props.getTranslation("expText3d")}
      </Exp>

      <ExpRight 
      tooltip={<div>{props.getTranslation("tooltipExp")} <br /> {props.getTranslation("tooltipExp2")}</div>}
      title="Wurm GmbH" 
      cert
      link="https://www.wurm.de"
      subTitle={<span>{props.getTranslation("expSub5a")},<br /> {props.getTranslation("expSub5b")}</span>} 
      year="07.2015 - 12.2017" 
      city={props.getTranslation("germany") + ", Remscheid"} 
      >
        {props.getTranslation("expText4a")}
        <br /> <br />
        TechStack: ASP.Net, HTML5, CSS, JavaScript / TypeScript, AngularJS,
        JQuery, EF6, C#7.Net, MS SQL, Big Data
      </ExpRight>

      <Exp 
      tooltip={<div>{props.getTranslation("tooltipExp")} <br /> {props.getTranslation("tooltipExp2")}</div>}
      cert
      title="Trinedy GmbH" 
      link="https://www.trinedy.de"
      subTitle={props.getTranslation("expSub6")} 
      year="01.2013 - 06.2015" 
      city={props.getTranslation("germany") + ", Köln"} 
      >
        {props.getTranslation("expText5a")}
      </Exp>

      <ExpRight 
      title="Freelancer" 
      subTitle={props.getTranslation("expSub7")} 
      year="11.2008 - heute" 
      city={props.getTranslation("germany")} 
      >
        {props.getTranslation("expText6a")}
      </ExpRight>

      <Exp 
      classAddition="expLast" 
        title="TriniDat GmbH" 
        link="https://www.trinidat.de/"
        subTitle={props.getTranslation("expSub8")} 
        year="07.2006 - 07.2008" 
        city={props.getTranslation("germany") + ", Düsseldorf"} >
        {props.getTranslation("expText7a")}
      </Exp>

    </div>
  )
}

export default MyExp;

