import SmallTextField from './SmallTextField';
import SmallMonthField from './SmallMonthField';
import CheckboxField from './CheckboxField';
import BulletListField from './BulletListField';
import UnorderedList from '../lists/UnorderedList';
import GeneralListItem from '../lists/GeneralListItem';
import JobProfileListItem from '../lists/JobProfileListItem';
import SubmitButton from '../buttons/SubmitButton';
import PropTypes from 'prop-types';



function WorkExperienceForm({ workExperienceData }) {

    const jobProfileListItems = workExperienceData.workExperienceValues.currJobProfileList.map(item =>
        <JobProfileListItem key={item.id} data={item} onDelete={workExperienceData.workExperienceListeners.handleDeleteJobProfile} onEdit={workExperienceData.workExperienceListeners.handleEditJobProfile} />
    );


    const jobResponsibilityListItems = workExperienceData.workExperienceValues.currJobResponsibilitiesList.map(item => 
        <GeneralListItem key={item.id} data={item} onDelete={workExperienceData.workExperienceListeners.handleDeleteResponsibility} onEdit={workExperienceData.workExperienceListeners.handleEditResponsibility}/>
    )
    
    let endingDate;
    if (workExperienceData.workExperienceValues.currEmployed) {
        endingDate = null;
    } else {
        endingDate = <SmallMonthField fieldName='Ending Date' onInputChange={workExperienceData.workExperienceListeners.handleEndingDateChange} value={workExperienceData.workExperienceValues.currEndingDate} />
    }


    return (
        <form className='form-section'>
            <h2 className='form-header'>Work Experience</h2>
            <UnorderedList itemList={jobProfileListItems} className="unordered-profile-list"/>
            <SmallTextField fieldName='Title/Position' onInputChange={workExperienceData.workExperienceListeners.handlePositionChange} value={workExperienceData.workExperienceValues.currPosition}/>
            <SmallTextField fieldName='Workplace/Company' onInputChange={workExperienceData.workExperienceListeners.handleCompanyChange} value={workExperienceData.workExperienceValues.currCompany}/>
            <SmallMonthField fieldName='Starting Date' onInputChange={workExperienceData.workExperienceListeners.handleStartingDateChange} value={workExperienceData.workExperienceValues.currStartingDate}/>
            <CheckboxField fieldName='Still Employed' onInputChange={workExperienceData.workExperienceListeners.handleStillEmployed} checked={workExperienceData.workExperienceValues.currEmployed}/>
            {endingDate}
            <BulletListField fieldName='Job Responsibilities' value={workExperienceData.workExperienceValues.currResponsibility} onInputChange={workExperienceData.workExperienceListeners.handleCurrResponsibility} onAddChange={workExperienceData.workExperienceListeners.handleAddCurrResponsibility} itemList={jobResponsibilityListItems} classIdentifier={"unordered-profile-list"}/>
            <SubmitButton buttonText='Submit Job Profile' onClickAction={workExperienceData.workExperienceListeners.handleSubmitJobProfile} />
        </form>

    )
}

WorkExperienceForm.propTypes = {
    workExperienceData: PropTypes.object,
}

export default WorkExperienceForm;