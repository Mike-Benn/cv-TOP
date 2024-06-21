import SmallTextField from './SmallTextField';


function ContactInfoForm() {

    return (
        <div className='form-section'>
            <h2 className='form-header'>Contact Info</h2>
            <SmallTextField fieldName='Email' />
            <SmallTextField fieldName='Phone Number' />
            <SmallTextField fieldName='Location' />
            <SmallTextField fieldName='Website/LinkedIn' />
        </div>
    )
}

export default ContactInfoForm;