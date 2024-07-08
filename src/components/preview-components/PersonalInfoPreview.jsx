import PropTypes from 'prop-types'



function PersonalInfoPreview({ personalInfoValues , contactInfoValues }) {
    return (
        <header className='preview-page-header'>
            <h2 className="preview-fullname">{`${personalInfoValues.currFirstName} ${personalInfoValues.currLastName}`}</h2>
            <div className="preview-contact-info">
                <p className="preview-phone-number">{contactInfoValues.currPhoneNumber}</p>
                <p className="preview-contact-pipe">|</p>
                <p className="preview-email">{contactInfoValues.currEmail}</p>
                <p className="preview-contact-pipe">|</p>
                <p className="preview-url"> {contactInfoValues.currUrl}</p>
            </div>
        </header>
    )
}

PersonalInfoPreview.propTypes = {
    personalInfoValues: PropTypes.object,
    contactInfoValues: PropTypes.object,
}

export default PersonalInfoPreview