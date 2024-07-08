import SmallTextField from './SmallTextField';
import CheckboxField from './CheckboxField';
import SubmitButton from '../buttons/SubmitButton';
import EducationProfileListItem from '../lists/EducationProfileListItem';
import UnorderedList from '../lists/UnorderedList';
import PropTypes from 'prop-types';



function EducationInfoForm({ educationInfoData }) {
/*
    const [currOrganization , setCurrOrganization] = useState("");
    const [currProgram , setCurrProgram] = useState("");
    const [currEnrolled, setCurrEnrolled] = useState(false);
    const [currGPA , setCurrGPA] = useState("");
    const [currEducationProfileList , setCurrEducationProfileList] = useState([]);
    

    const handleOrganizationChange = (e) => {
        setCurrOrganization(e.target.value);
    }

    const handleProgramChange = (e) => {
        setCurrProgram(e.target.value);
    }

    const handleStillEnrolled = () => {
        if (currEnrolled) {
            setCurrEnrolled(false);
        } else {
            setCurrEnrolled(true);
        }
    }

    const handleGPAChange = (e) => {
        setCurrGPA(e.target.value);
    }

    const handleSubmitEducationProfile = () => {
        if (currEducationProfileList.length <= 3) {
            let profile = {
                id: uuidv4(),
                organization: currOrganization,
                program: currProgram,
                stillEnrolled: currEnrolled,
                gpa: currGPA
            }
            let updatedProfileList = currEducationProfileList.concat([profile]);
            setCurrEducationProfileList(updatedProfileList);
            resetForm();
        } else {
            alert("Please submit no more than three of your most relevant education examples whether they be collegiate degrees or some other form of formal education.");
        }
    }

    const handleDeleteEducationProfile = (id) => {
        let updatedProfList = currEducationProfileList.filter(item =>
            id !== item.id
        );
        setCurrEducationProfileList(updatedProfList);
    }
    
    const handleEditEducationProfile = (id) => {
        let profileObject = getItemWithID(id , currEducationProfileList);
        let profile = profileObject.profile;
        let educationProfileList = profileObject.arr;

        setCurrOrganization(profile.organization);
        setCurrProgram(profile.program);
        setCurrEnrolled(profile.stillEnrolled);
        setCurrGPA(profile.gpa);
        setCurrEducationProfileList(educationProfileList);

    }
    
    const resetForm = () => {
        setCurrOrganization("");
        setCurrProgram("");
        setCurrEnrolled(false);
        setCurrGPA("");

    }
*/
    const educationProfileListItems = educationInfoData.educationInfoValues.currEducationProfileList.map(item =>
        <EducationProfileListItem key={item.id} data={item} onDelete={educationInfoData.educationInfoListeners.handleDeleteEducationProfile} onEdit={educationInfoData.educationInfoListeners.handleEditEducationProfile} />
    )


    return (
        <div className='form-section'>
            <h2 className='form-header'>Education</h2>
            <UnorderedList itemList={educationProfileListItems} className="education-experience-list" />
            <SmallTextField fieldName='University/Organization' placeHolder='University of Illinois' onInputChange={educationInfoData.educationInfoListeners.handleOrganizationChange} value={educationInfoData.educationInfoValues.currOrganization}/>
            <SmallTextField fieldName='Program/Degree' placeHolder='BS in Computer Science' onInputChange={educationInfoData.educationInfoListeners.handleProgramChange} value={educationInfoData.educationInfoValues.currProgram}/>
            <CheckboxField fieldName='Still Enrolled' onInputChange={educationInfoData.educationInfoListeners.handleStillEnrolled} checked={educationInfoData.educationInfoValues.currEnrolled} value={educationInfoData.educationInfoValues.currEnrolled}/>
            <SubmitButton buttonText='Submit Education Background' onClickAction={educationInfoData.educationInfoListeners.handleSubmitEducationProfile}/>
        </div>
    )
}

EducationInfoForm.propTypes = {
    educationInfoData: PropTypes.object,
}

export default EducationInfoForm;