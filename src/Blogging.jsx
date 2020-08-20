import React from 'react';
import './css/Blog.css'

const Contact = (props) => {
    return (
        <div className="area6">
        <div className="cap area2Start">
            Blogging
          </div>
          <div className="cap area2Sub">
            Teach the world what you know
          </div>

          <div>
            <b> {props.getTranslation("bloggingText1")}</b>
            <br />
            {props.getTranslation("bloggingText2")}<br />
          </div>
        </div>
    )
}

export default Contact;

