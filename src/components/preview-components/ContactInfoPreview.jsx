import mail from "../../images/mail.png"
import phone from "../../images/phone.png"
import link from "../../images/link.png"
import pin from "../../images/pin.png"
import PropTypes from 'prop-types'


function ContactInfoPreview({ contactInfoValues }) {
    return (
        <div className="preview-contact-info">
            <div className="contact-info-item">
                <img className="preview-contact-icon" src={mail} alt="Closed envelope icon" />
                <p className="preview-contact-text">{contactInfoValues.currEmail}</p>
            </div>
            <div className="contact-info-item">
                <img className="preview-contact-icon" src={phone} alt="Small cell phone icon" />
                <p className="preview-contact-text">{contactInfoValues.currPhoneNumber}</p>
            </div>
            <div className="contact-info-item">
                <img className="preview-contact-icon" src={pin} alt="Map marker icon" />
                <p className="preview-contact-text">{contactInfoValues.currLocation}</p>
            </div>
            <div className="contact-info-item">
                <img className="preview-contact-icon" src={link} alt="Chain link icon" />
                <p className="preview-contact-text">{contactInfoValues.currUrl}</p>
            </div>
        </div>
    )
}

ContactInfoPreview.propTypes = {
    contactInfoValues: PropTypes.object,
}

export default ContactInfoPreview