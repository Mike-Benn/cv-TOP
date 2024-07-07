import mail from "../../images/mail.png"
import phone from "../../images/phone.png"
import link from "../../images/link.png"
import pin from "../../images/pin.png"


function ContactInfoPreview() {
    return (
        <div className="preview-contact-info">
            <div className="contact-info-item">
                <img className="preview-contact-icon" src={mail} alt="Closed envelope icon" />
                <p className="preview-contact-text">johndoe@site.com</p>
            </div>
            <div className="contact-info-item">
                <img className="preview-contact-icon" src={phone} alt="Small cell phone icon" />
                <p className="preview-contact-text">812-325-3078</p>
            </div>
            <div className="contact-info-item">
                <img className="preview-contact-icon" src={pin} alt="Map marker icon" />
                <p className="preview-contact-text">Chicago, IL</p>
            </div>
            <div className="contact-info-item">
                <img className="preview-contact-icon" src={link} alt="Chain link icon" />
                <p className="preview-contact-text">linkedin.sample.com/johndoeadasasdasdasdadasdasdadsasdasdsad</p>
            </div>
        </div>
    )
}

export default ContactInfoPreview