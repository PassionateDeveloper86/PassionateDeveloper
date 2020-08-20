import React from 'react';
import Donut from './controls/MyDonut'

const Contact = (props) => {
    return (
      <div className="area2">
      <div className="cap area2Start">
        TechStack
      </div>
      <div className="cap area2Sub">
        Expertise
      </div>
      <div className="donutArea">

        <Donut radius="144" perc="90" textBig=".Net Framework"
          textSmall={<span>C# / ASP.Net WebApi / LinQ / Lambda<br /> .Net Core 3.1 / XUnit / EFCore</span>} />

        <Donut radius="90" perc="75" textBig="Frontend"
          textSmall={<span>React / Apollo (GraphQL)<br />TypeScript  </span>} />

        <Donut radius="72" perc="70" textBig="DevOps"
          textSmall={<span>Docker / CI & CD / TDD <br />AWS / GitLab / Sonarqube </span>} />

      </div>
      <div className="donutArea">

        <Donut radius="108" perc="80" textBig={props.getTranslation("database")}
          textSmall={<span>(MS)SQL / {props.getTranslation("databaseAdmin")} / CronJobs <br /> BigData (300+ {props.getTranslation("datensätze")}) </span>} />

        <Donut radius="180" perc="100" textBig={props.getTranslation("passionText1")}
          textSmall={<span>{props.getTranslation("passionText2")}<br /> {props.getTranslation("passionText3")}</span>} />

        <Donut radius="126" perc="85" textBig="Softskills"
          textSmall={<span>{props.getTranslation("softText1")} <br />{props.getTranslation("softText2")}</span>} />

      </div>
    </div>
    )
}

export default Contact;

