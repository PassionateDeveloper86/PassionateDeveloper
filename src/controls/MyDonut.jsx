import React from 'react';

const Donut = (props) =>
{
    const section2Style = { 
        transform: "rotate("+props.radius+"deg)"
    };

    const section3StartStyle = { 
        transform: "rotate(" + (parseInt(props.radius) + 180) + "deg)"
    };

    const section3EndStyle = { 
        transform: "rotate(" + ( 360 - 180 - parseInt(props.radius)) + "deg)"
    };

        return (
            <div className="container">
            <div className="donut-chart-block block">
              <div className="donut-chart">
                <div id="section1" className="clip">
                  <div className="item" data-rel="21"></div>
                </div>
                <div id="section2" className="clip">
                  <div className="item" style={section2Style} data-rel="39"></div>
                </div>
                <div id="section3" style={section3StartStyle} className="clip">
                  <div className="item" style={section3EndStyle} data-rel="31"></div>
                </div>
                <div className="center">
                    {props.perc}%
                </div>
              </div>
            </div>
            <div className="donuttextbig">
              {props.textBig}
            </div>
            <div className="donuttextsmall">
                {props.textSmall}
            </div>
        </div>
        )
}

export default Donut;