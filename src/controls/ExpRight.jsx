import React, { useState } from 'react';
import { AiOutlineLink } from 'react-icons/ai'
import Tooltip from 'react-power-tooltip'
import zert from '../images/zeugniss.png'


const ExpRight = (props) => {
    const [myState, setState] = useState(false);

    return (

        <div className="expContainer">
            <div className="expRightSmallBoxSpacer">
                {
                    props.cert &&
                    <div style={{ position: 'relative' }}>
                        <div 
                            className="certArea" 
                            onMouseOver={() => setState(true)} 
                            onMouseLeave={() => setState(false)}>
                            <img src={zert} width="70" height="65" alt="Certificate" />
                        </div>
                        {
                            myState && 
                            <Tooltip
                                show={true}
                                position="bottom center"
                                textBoxWidth="300px"
                                animation="bounce">
                                <div className="certText">
                                    {props.tooltip}
                                </div>
                            </Tooltip>
                        }
                    </div>
                }
                <div className="expRightSmallBox">
                    <div>
                        <b>{props.year}</b>
                    </div>
                    <div>
                        {props.city}
                    </div>
                </div>
            </div>

            <div className={"expMiddle " + props.classAddition}>
                <div className="expMiddleRoundWhite">

                </div>
                <div className="expMiddleRound">

                </div>
            </div>


            <div className="expRightBigBoxSpacer">
                <div className="expRightBigBox">
                    <div className="expTitle">
                        {props.link ?
                            <React.Fragment>
                                <a href={props.link} className="expLink" target="_blank" rel="noopener noreferrer">
                                    <AiOutlineLink className="expLinkIcon" />
                                    <span>
                                        {props.title}
                                    </span>
                                </a>
                            </React.Fragment>
                            :
                            <React.Fragment>
                                {props.title}
                            </React.Fragment>
                        }
                    </div>
                    <div className="expSubTitle">
                        {props.subTitle}
                    </div>
                    <div className="expText">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExpRight;