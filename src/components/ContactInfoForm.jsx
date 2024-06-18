import SmallTextField from './SmallTextField';


function ContactInfoForm() {

    return (
        <div>
            <h2>Contact Info</h2>
            <SmallTextField fieldName='Email' />
            <SmallTextField fieldName='Phone Number' />
            <SmallTextField fieldName='Location' />
            <SmallTextField fieldName='Website/LinkedIn' />
        </div>
    )
}

export default ContactInfoForm;