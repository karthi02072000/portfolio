import React from 'react';
import PhoneAndroidRoundedIcon from '@material-ui/icons/PhoneAndroidRounded';
import MailOutlineRoundedIcon from '@material-ui/icons/MailOutlineRounded';
import './Contact.css';

function Contact() {
    return (
        <div className="contact">
            <div className="contact_mail">
                <MailOutlineRoundedIcon />
                <p>karthikeyanbas02@gmail.com</p>
            </div>
            <div className="contact_mail">
                <PhoneAndroidRoundedIcon />
                <p>+91-8610566008</p>
            </div>
        </div>
    )
}

export default Contact;
