
import TextArea from './TextArea';
import SmallTextField from './SmallTextField';
import { useState } from 'react';

function PersonalInfoForm() {

    const [currFirstName , setCurrFirstName] = useState("");
    const [currLastName , setCurrLastName] = useState("");
    const [currTitle , setCurrTitle] = useState("");
    const [currSummary , setCurrSummary] = useState("");

    const handleFirstNameChange = (e) => {
        setCurrFirstName(e.target.value);
    }

    const handleLastNameChange = (e) => {
        setCurrLastName(e.target.value);
    }

    const handleTitleChange = (e) => {
        setCurrTitle(e.target.value);
    }

    const handleSummaryChange = (e) => {
        setCurrSummary(e.target.value);
    }

    return (
        <div className='form-section'>
            <h2 className='form-header'>Personal Info</h2>
            <SmallTextField fieldName='First Name' onInputChange={handleFirstNameChange} value={currFirstName}/>
            <SmallTextField fieldName='Last Name' onInputChange={handleLastNameChange} value={currLastName}/>
            <SmallTextField fieldName='Professional title' onInputChange={handleTitleChange} value={currTitle}/>
            <TextArea fieldName='Give a short summary about yourself' onInputChange={handleSummaryChange} value={currSummary}/>
        </div>
    )
}

export default PersonalInfoForm;

