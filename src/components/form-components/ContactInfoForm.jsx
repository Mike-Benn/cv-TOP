import SmallTextField from './SmallTextField';
import SmallPhoneNumberField from './SmallPhoneNumberField';
import SmallEmailField from './SmallEmailField';
import SmallUrlField from './SmallUrlField';

import { useState } from 'react';


function ContactInfoForm() {


    const [currEmail , setCurrEmail] = useState("");
    const [currPhoneNumber , setCurrPhoneNumber] = useState("");
    const [currLocation , setCurrLocation] = useState("");
    const [currUrl , setCurrUrl] = useState("");
    /*const [currContactProfileList, setCurrContactProfileList] = useState("");*/

    const handleEmailChange = (e) => {
        setCurrEmail(e.target.value);
    }

    const handlePhoneNumberChange = (e) => {
        setCurrPhoneNumber(e.target.value);
    }

    const handleLocationChange = (e) => {
        setCurrLocation(e.target.value);
    }

    const handleUrlChange = (e) => {
        setCurrUrl(e.target.value);
    }

    return (
        <div className='form-section'>
            <h2 className='form-header'>Contact Info</h2>
            <SmallEmailField fieldName='Email' onInputChange={handleEmailChange} value={currEmail}/>
            <SmallPhoneNumberField fieldName='Phone Number' onInputChange={handlePhoneNumberChange} value={currPhoneNumber} />
            <SmallTextField fieldName='Location' placeHolder='Chicago, IL' onInputChange={handleLocationChange} value={currLocation}/>
            <SmallUrlField fieldName='Website/LinkedIn' onInputChange={handleUrlChange} value={currUrl}/>
        </div>
    )
}

export default ContactInfoForm;