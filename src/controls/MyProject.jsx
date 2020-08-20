import React from 'react';

const MyProject = (props) => {
    return (
        <div className="projectContainer">
            {
                props.top &&
                <React.Fragment>
                    <div>
                        <img src={props.img} width={props.width} height={props.height} alt="ExampleImage" />
                    </div>
                    <div className="projectBorder">
                    </div>
                </React.Fragment>
            }
            <div className="projectTitle">
                {props.title}
            </div>
            <div className="projectSubTitle">
                {props.subTitle}
            </div>
            <div className="projectChildren">
                {props.children}
            </div>
            {
                props.bottom &&
                <React.Fragment>
                    <div className="projectBorder">
                    </div>
                    <div>
                        <img src={props.img} width={props.width} height={props.height} alt="ExampleImage" />
                    </div>
                </React.Fragment>
            }

        </div>
    )
}

export default MyProject;