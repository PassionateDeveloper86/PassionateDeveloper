import React from 'react';
import './css/Blog.css'

import github from './images/github.png'
import xing from './images/xing.png'
import stackoverflow from './images/stackoverflow.png'


const Links = (props) => {
    return (
        <React.Fragment>
            <div className="linkarea">
                <a href="https://www.xing.com/profile/Rene_Koch20" target="_blank" rel="noopener noreferrer">
                    <div className="xingArea">
                        <div>
                            <img src={xing} height="20" alt="logo" />
                        </div>
                        <div>
                            XING
            </div>
                    </div>
                </a>
                <a href="https://stackoverflow.com/users/133584/passionatedeveloper" target="_blank" rel="noopener noreferrer">
                    <div className="soArea">
                        <div>
                            <img src={stackoverflow} height="20" alt="logo" />
                        </div>
                        <div>
                            STACK OVERFLOW
            </div>
                    </div>
                </a>
                <a href="https://github.com/PassionateDeveloper86" target="_blank" rel="noopener noreferrer">
                    <div className="githubArea">
                        <div>
                            <img src={github} height="20" alt="logo" />
                        </div>
                        <div>
                            GITHUB
              </div>
                    </div>
                </a>
            </div>

            <div className="linkareaSmall">
                <a href="https://www.xing.com/profile/Rene_Koch20" target="_blank" rel="noopener noreferrer">
                    <div className="xingAreaSmall">
                        <div>
                            <img src={xing} height="20" alt="logo" />
                        </div>
                    </div>
                </a>
                <a href="https://stackoverflow.com/users/133584/passionatedeveloper" target="_blank" rel="noopener noreferrer">
                    <div className="soAreaSmall">
                        <div>
                            <img src={stackoverflow} height="20" alt="logo" />
                        </div>
                    </div>
                </a>
                <a href="https://github.com/PassionateDeveloper86" target="_blank" rel="noopener noreferrer">
                    <div className="githubAreaSmall">
                        <div>
                            <img src={github} height="20" alt="logo" />
                        </div>
                    </div>
                </a>
            </div>

            <div className="linkareaNo">
                <a href="https://www.xing.com/profile/Rene_Koch20" target="_blank" rel="noopener noreferrer">
                    <div className="xingAreaNo">
                        <div>
                            <img src={xing} height="20" alt="logo" />
                        </div>
                    </div>
                </a>
                <a href="https://stackoverflow.com/users/133584/passionatedeveloper" target="_blank" rel="noopener noreferrer">
                    <div className="soAreaNo">
                        <div>
                            <img src={stackoverflow} height="20" alt="logo" />
                        </div>
                    </div>
                </a>
                <a href="https://github.com/PassionateDeveloper86" target="_blank" rel="noopener noreferrer">
                    <div className="githubAreaNo">
                        <div>
                            <img src={github} height="20" alt="logo" />
                        </div>
                    </div>
                </a>
            </div>
        </React.Fragment>
    )
}

export default Links;

