import SmallTextField from './SmallTextField';
import SmallPhoneNumberField from './SmallPhoneNumberField';
import SmallEmailField from './SmallEmailField';
import SmallUrlField from './SmallUrlField';


function ContactInfoForm() {

    return (
        <div className='form-section'>
            <h2 className='form-header'>Contact Info</h2>
            <SmallEmailField fieldName='Email' />
            <SmallPhoneNumberField fieldName='Phone Number' />
            <SmallTextField fieldName='Location' placeHolder='Chicago, IL'/>
            <SmallUrlField fieldName='Website/LinkedIn' />
        </div>
    )
}

export default ContactInfoForm;