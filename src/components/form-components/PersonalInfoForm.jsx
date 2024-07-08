
import TextArea from './TextArea';
import SmallTextField from './SmallTextField';
import PropTypes from 'prop-types'

function PersonalInfoForm({ personalInfoData }) {
/*
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
    }*/

    return (
        <div className='form-section'>
            <h2 className='form-header'>Personal Info</h2>
            <SmallTextField fieldName='First Name' onInputChange={personalInfoData.personalInfoListeners.handleFirstNameChange} value={personalInfoData.personalInfoValues.currFirstName}/>
            <SmallTextField fieldName='Last Name' onInputChange={personalInfoData.personalInfoListeners.handleLastNameChange} value={personalInfoData.personalInfoValues.currLastName}/>
            <SmallTextField fieldName='Professional title' onInputChange={personalInfoData.personalInfoListeners.handleTitleChange} value={personalInfoData.personalInfoValues.currTitle}/>
            <TextArea fieldName='Give a short summary about yourself' onInputChange={personalInfoData.personalInfoListeners.handleSummaryChange} value={personalInfoData.personalInfoValues.currSummary}/>
        </div>
    )
}

PersonalInfoForm.propTypes = {
    personalInfoData: PropTypes.object,
    

}

export default PersonalInfoForm;

