import React from 'react';
import MyProject from './controls/MyProject'
import './css/Project.css'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import proj2 from './images/proj2.jpg'
import proj3 from './images/proj3.png'
import proj9 from './images/proj9.PNG'
import proj10 from './images/proj10.PNG'
import proj12 from './images/proj12.PNG'
import proj13 from './images/proj13.PNG'
import proj14 from './images/proj14.PNG'

const Contact = (props) => {
  return (
    <div className="area5">
      <div className="cap area2Start">
        Latest Projects
        </div>
      <div className="cap area2Sub">
        Freelancing
        </div>

      <CarouselProvider
        naturalSlideWidth={300}
        naturalSlideHeight={300}
        totalSlides={8}
        visibleSlides={3}
        className="caru"
        infinite
      >
        <Slider >
          <Slide index={0}>
            <MyProject top title={props.getTranslation("projectTitle1")} subTitle="2020" img={proj3} width="260" height="80">
              {props.getTranslation("projectText1")}
              <br />
              <br />
              <b>TechStack: </b>ASP.Net Core, TypeScript, React, CSS-In-JS, C#.Net 7, EF Core, AWS, TeamCity, GitBucket, GraphQL<br />
            </MyProject>
          </Slide>
          <Slide index={1}>
            <MyProject bottom title={props.getTranslation("projectTitle2")} subTitle="2018-2019" img={proj10}  width="260" height="80">
            {props.getTranslation("projectText2")}
              <br />
              <br />
              <b>TechStack: </b>ASP.Net Core, TypeScript, jQuery, CSS3, C#.Net 7, EF Core, AWS, TeamCity, GitBucket<br />
            </MyProject>
          </Slide>
          <Slide index={2}>
            <MyProject top title={props.getTranslation("projectTitle3")} subTitle="2016-2017" img={proj9} width="260" height="125">
            {props.getTranslation("projectText3")}
              <br />
              <br />
              <b>TechStack: </b>C#.Net Framework, LinQ, MS SQL<br />
            </MyProject>
          </Slide>
          <Slide index={3}>
            <MyProject bottom title={props.getTranslation("projectTitle4")} subTitle="2013-2014" img={proj13} width="260" height="130">
            {props.getTranslation("projectText4")}
              <br />
              <br />
              <b>TechStack: </b>ASP.Net, HTML5, JavaScript, JQuery, CSS3, C#.Net, EF6<br />
            </MyProject>
          </Slide>
          <Slide index={4}>
            <MyProject top title={props.getTranslation("projectTitle5")} subTitle="2012" img={proj2} width="260" height="100">
            {props.getTranslation("projectText5")}
              <br />
              <br />
              <b>TechStack: </b>ASP.Net, HTML5, JavaScript, JQuery, CSS3, C#.Net, EF6<br />
            </MyProject>
          </Slide>
          <Slide index={5}>
            <MyProject bottom title={props.getTranslation("projectTitle6")} subTitle="2012" img={proj14} width="260" height="120">
            {props.getTranslation("projectText6")}
              <br />
              <br />
              <b>TechStack: </b>ObjectiveC, RestAPI, JSON<br />
            </MyProject>
          </Slide>
          <Slide index={6}>
            <MyProject top title={props.getTranslation("projectTitle7")} subTitle="2010-2011" img={proj12} width="260" height="130">
            {props.getTranslation("projectText7")}
              <br />
              <b>TechStack: </b>ASP.Net, MS SQL 2005, JQuery<br />
            </MyProject>
          </Slide>
          <Slide index={7}>
            <MyProject bottom title={props.getTranslation("projectTitle8")} subTitle="2009-2010" img={proj9} width="260" height="120">
            {props.getTranslation("projectText8")}
              <br />
              <br />
              <b>TechStack: </b>ASP.Net, C#.Net, HTML, MS SQL 2005<br />
            </MyProject>
          </Slide>
        </Slider>
        <ButtonBack className="projectButton projectButtonSpace">&lt;</ButtonBack>
        <ButtonNext className="projectButton">&gt;</ButtonNext>
      </CarouselProvider>

    </div>
  )
}

export default Contact;

