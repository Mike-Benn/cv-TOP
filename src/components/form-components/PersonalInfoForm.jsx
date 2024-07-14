
import SmallEmailField from './SmallEmailField';
import SmallTextField from './SmallTextField';
import PropTypes from 'prop-types'
import SmallPhoneNumberField from './SmallPhoneNumberField';
import SmallUrlField from './SmallUrlField';

function PersonalInfoForm({ personalInfoData , contactInfoData }) {

    return (
        <form className='form-section'>
            <h2 className='form-header'>Personal Info</h2>
            <SmallTextField fieldName='First Name' onInputChange={personalInfoData.personalInfoListeners.handleFirstNameChange} value={personalInfoData.personalInfoValues.currFirstName}/>
            <SmallTextField fieldName='Last Name' onInputChange={personalInfoData.personalInfoListeners.handleLastNameChange} value={personalInfoData.personalInfoValues.currLastName}/>
            <SmallPhoneNumberField fieldName='Phone Number' onInputChange={contactInfoData.contactInfoListeners.handlePhoneNumberChange} value={contactInfoData.contactInfoValues.currPhoneNumber} />
            <SmallEmailField fieldName='Email' onInputChange={contactInfoData.contactInfoListeners.handleEmailChange} value={contactInfoData.contactInfoValues.currEmail}/>
            <SmallUrlField fieldName='Website/LinkedIn' onInputChange={contactInfoData.contactInfoListeners.handleUrlChange} value={contactInfoData.contactInfoValues.currUrl}/>
        </form>
    )
}

PersonalInfoForm.propTypes = {
    personalInfoData: PropTypes.object,
    contactInfoData: PropTypes.object,
    

}

export default PersonalInfoForm;

