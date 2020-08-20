import React, { useState } from 'react';
import './css/Contact.css'
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { FiSend, FiMapPin } from 'react-icons/fi';
import { TextField, Button } from '@material-ui/core'

const Contact = (props) => {

    const [email, setEmail] = useState('');
    const [text, setText] = useState('');
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [isSent, setIsSent] = useState(false);
    const [isError, setIsError] = useState("");

    const validate = e => {
        e.preventDefault()

        if (name === "") {
            setIsError(props.getTranslation("contactErrorName"));
            return;
        }

        if (email === "") {
            setIsError(props.getTranslation("contactErrorEmail"));
            return;
        }

        if (text === "") {
            setIsError(props.getTranslation("contactErrorText"));
            return;
        }

        submit(e);
    }

    const submit = e => {
        e.preventDefault()
        fetch(`https://hooks.zapier.com/hooks/catch/8147397/okwb6uv`, {
            method: 'POST',
            body: JSON.stringify({ email, text, phone, name }),
        })
            .then(() => setIsSent(true))
            .catch(() => setIsError(props.getTranslation("contactErrorCon")))
    }

    return (
        <div className="area7">
            <div className="cap area2Start">
                Get in touch
            </div>
            <div className="cap area2Sub">
                Contact
            </div>

            <div className="contactArea">
                <div className="contactFormArea">
                    {
                        isSent ?
                            <div className="succededContact">
                                {props.getTranslation("contactText1")}<br />
                                {props.getTranslation("contactText2")}<br />
                                <br />
                                {props.getTranslation("contactText3")}
                            </div>
                            :
                            <form className={""} noValidate autoComplete="off" onSubmit={validate}>
                                <div className="fieldSpace">
                                    <TextField id="standard-basic"
                                        style={{ width: '300px' }}
                                        inputProps={{
                                            className: "textField",
                                        }}
                                        InputLabelProps={{
                                            className: "labelTextField",

                                        }}
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                        label="Name*" />
                                </div>
                                <div className="fieldSpace">
                                    <TextField id="standard-basic"
                                        style={{ width: '300px' }}
                                        inputProps={{
                                            className: "textField",
                                        }}
                                        InputLabelProps={{
                                            className: "labelTextField",

                                        }}
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        label="Email*" />
                                </div>
                                <div className="fieldSpace">
                                    <TextField id="standard-basic"
                                        style={{ width: '300px' }}
                                        inputProps={{
                                            className: "textField",
                                        }}
                                        InputLabelProps={{
                                            className: "labelTextField",

                                        }}
                                        value={phone}
                                        onChange={e => setPhone(e.target.value)}
                                        label="Phone" />
                                </div>
                                <div className="fieldSpace">
                                    <TextField id="standard-basic"
                                        style={{ width: '300px' }}
                                        inputProps={{
                                            className: "textField",
                                        }}
                                        InputLabelProps={{
                                            className: "labelTextField",

                                        }}
                                        rows={2}
                                        multiline
                                        value={text}
                                        onChange={e => setText(e.target.value)}
                                        label={props.getTranslation("contactMessage")} />
                                </div>
                                <div className="buttonArea">
                                    <Button type="submit" startIcon={<FiSend />} classes={{ root: "buttonSend" }} >
                                    {props.getTranslation("send")}
                                    </Button>
                                </div>
                                {
                                    isError !== "" &&
                                    <div className="contactError">
                                        {isError}
                                    </div>
                                }
                            </form>
                    }
                </div>
                <div className="nameArea">
                    <div className="contactName">
                        Rene Koch
                    </div>
                    <div>
                        <div>
                            <AiOutlineMail />
                        </div>
                        <div>
                            <a href="mailto:info@passionate-developer.com">
                                info@passionate-developer.com
                            </a>
                        </div>
                    </div>
                    <div>
                        <div>
                            <AiOutlinePhone />
                        </div>
                        <div>
                            0176 / 856 26651
                        </div>
                    </div>
                    <div>
                        <div>
                            <FiMapPin />
                        </div>
                        <div>
                            Achtert Wallen 14<br />
                            26607 Aurich<br />
                            {props.getTranslation("germany")} <br />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact;

