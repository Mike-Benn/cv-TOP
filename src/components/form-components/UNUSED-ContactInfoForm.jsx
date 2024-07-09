import SmallTextField from './SmallTextField';
import SmallPhoneNumberField from './SmallPhoneNumberField';
import SmallEmailField from './SmallEmailField';
import SmallUrlField from './SmallUrlField';
import PropTypes from 'prop-types'



function ContactInfoForm({ contactInfoData }) {

    return (
        <div className='form-section'>
            <h2 className='form-header'>Contact Info</h2>
            <SmallEmailField fieldName='Email' onInputChange={contactInfoData.contactInfoListeners.handleEmailChange} value={contactInfoData.contactInfoValues.currEmail}/>
            <SmallPhoneNumberField fieldName='Phone Number' onInputChange={contactInfoData.contactInfoListeners.handlePhoneNumberChange} value={contactInfoData.contactInfoValues.currPhoneNumber} />
            <SmallTextField fieldName='Location' placeHolder='Chicago, IL' onInputChange={contactInfoData.contactInfoListeners.handleLocationChange} value={contactInfoData.contactInfoValues.currLocation}/>
            <SmallUrlField fieldName='Website/LinkedIn' onInputChange={contactInfoData.contactInfoListeners.handleUrlChange} value={contactInfoData.contactInfoValues.currUrl}/>
        </div>
    )
}

ContactInfoForm.propTypes = {
    contactInfoData: PropTypes.object,
}

export default ContactInfoForm;