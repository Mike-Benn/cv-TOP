import SmallTextField from './SmallTextField';
import CheckboxField from './CheckboxField';
import SubmitButton from '../buttons/SubmitButton';
import EducationProfileListItem from '../lists/EducationProfileListItem';
import UnorderedList from '../lists/UnorderedList';
import PropTypes from 'prop-types';



function EducationInfoForm({ educationInfoData }) {

    const educationProfileListItems = educationInfoData.educationInfoValues.currEducationProfileList.map(item =>
        <EducationProfileListItem key={item.id} data={item} onDelete={educationInfoData.educationInfoListeners.handleDeleteEducationProfile} onEdit={educationInfoData.educationInfoListeners.handleEditEducationProfile} />
    )


    return (
        <form className='form-section'>
            <h2 className='form-header'>Education</h2>
            <UnorderedList itemList={educationProfileListItems} className="unordered-profile-list" />
            <SmallTextField fieldName='University/Organization' placeHolder='University of Illinois' onInputChange={educationInfoData.educationInfoListeners.handleOrganizationChange} value={educationInfoData.educationInfoValues.currOrganization}/>
            <SmallTextField fieldName='Program/Degree' placeHolder='BS in Computer Science' onInputChange={educationInfoData.educationInfoListeners.handleProgramChange} value={educationInfoData.educationInfoValues.currProgram}/>
            <CheckboxField fieldName='Still Enrolled' onInputChange={educationInfoData.educationInfoListeners.handleStillEnrolled} checked={educationInfoData.educationInfoValues.currEnrolled} value={educationInfoData.educationInfoValues.currEnrolled}/>
            <SubmitButton buttonText='Submit Education Background' onClickAction={educationInfoData.educationInfoListeners.handleSubmitEducationProfile}/>
        </form>
    )
}

EducationInfoForm.propTypes = {
    educationInfoData: PropTypes.object,
}

export default EducationInfoForm;