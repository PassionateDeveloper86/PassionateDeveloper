import React from 'react';

import hero2 from './images/hero2.jpg'
import magic from './images/magic.png'
import squash from './images/squash.png'
import books from './images/books.png'

const Contact = (props) => {
    return (
<div className="area4">
        <div className="cap area2Start">
          About me
        </div>
        <div className="cap area2Sub">
          Me, myself & I
        </div>
        <div className="aboutMeArea">
          <div>
            <img src={hero2} width="500" alt="logo" />

          </div>
          <div>

            <table>
              <tbody>
                <tr>
                  <td colSpan="2" className="aboutMeText">
                  {props.getTranslation("aboutMeText1")}
                  </td>
                </tr>
                <tr>
                  <td>
                    Name:
                  </td>
                  <td>
                    Rene Koch
                  </td>
                </tr>
                <tr>
                  <td>
                  {props.getTranslation("aboutMeText2")}:
                  </td>
                  <td>
                    11.10.1986
                  </td>
                </tr>
                <tr>
                  <td>
                  {props.getTranslation("aboutMeText3")}:
                  </td>
                  <td>
                  {props.getTranslation("aboutMeText4")}
                  </td>
                </tr>
                <tr>
                  <td>
                    Email:
                  </td>
                  <td>
                    <a href="mailto:info@passionate-developer.com">
                      info@passionate-developer.com
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    Phone:
                  </td>
                  <td>
                    0176 / 856 26651
                  </td>
                </tr>
                <tr>
                  <td>
                  {props.getTranslation("hobbys")}:
                  </td>
                  <td className="hobbyArea">
                       
                  <div>
                      <img src={books} width="60" alt="logo" />
                    </div>
                  <div>
                      <img src={squash} width="60" alt="logo" />
                    </div>
                    <div>
                      <img src={magic} width="100" alt="logo" />
                    </div>

                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
}

export default Contact;

