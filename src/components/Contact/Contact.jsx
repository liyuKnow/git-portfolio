import "./Contact.css";
import Phone from '../../img/phone.png';
import Email from '../../img/email.png';
import Address from '../../img/address.png';
import { useState, useRef, useContext } from 'react';
import emailjs from 'emailjs-com';
import { ThemeContext } from '../../context';
function Contact() {
    const theme = useContext(ThemeContext);
    const [done, setDone] = useState(false);
    const formRef = useRef();
    const darkMode = theme.state.darkMode;
    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_g1wbhxl', 'template_63r4mxq', formRef.current, 'user_eU4zeCrQgKpx98VLrd56i')
            .then((result) => {
                console.log(result.text);
                document.getElementById("contact-form").reset();
                setDone(true);
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <div className="contact">
            <div className="contact-bg"></div>
            <div className="contact-wrapper">
                <div className="contact-left">
                    <h1 className="contact-title">Lets Discuss your Project</h1>

                    <div className="contact-info">
                        <div className="contact-info-item"></div>
                        <img src={Phone} alt="" className="contact-icon" />
                        +251-913974307
                    </div>
                    <div className="contact-info">
                        <div className="contact-info-item"></div>
                        <img src={Email} alt="" className="contact-icon" />
                        kidus2011@gmail.com
                    </div>
                    <div className="contact-info">
                        <div className="contact-info-item"></div>
                        <img src={Address} alt="" className="contact-icon" />
                        Addis Abeba, Ethiopia
                    </div>
                </div>
                <div className="contact-right">
                    <p className="contact-desc">
                        <b>What’s your story?</b> Get in touch. Always available for
                        freelancing if the right project comes along. me.
                    </p>
                    <form id="contact-form" ref={formRef} onSubmit={handleSubmit}>
                        <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder="Name" name="user_name" />
                        <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder="Subject" name="user_subject" />
                        <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder="Email" name="user_email" />
                        <textarea style={{ backgroundColor: darkMode && "#333" }} id="" rows="5" placeholder="Message" name="user_message"></textarea>
                        <button  >Submit</button>
                        {done ? <p className="contact-success"> Message sent successfully, Thank you for contacting me.</p> : null}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
