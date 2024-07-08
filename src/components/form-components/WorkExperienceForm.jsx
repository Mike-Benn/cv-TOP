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
    
    /*const [currPosition , setCurrPosition] = useState("");
    const [currCompany , setCurrCompany] = useState("");
    const [currStartingDate , setCurrStartingDate] = useState("");
    const [currEmployed , setCurrEmployed] = useState(false);
    const [currResponsibility , setCurrResponsibility] = useState("");
    const [currJobResponsibilitiesList , setCurrJobResponsibilitiesList] = useState([]);
    const [currJobProfileList , setCurrJobProfileList] = useState([]);


    const handlePositionChange = (e) => {
        setCurrPosition(e.target.value);
        
    }

    const handleCompanyChange = (e) => {
        setCurrCompany(e.target.value);
    }

    const handleStartingDateChange = (e) => {
        setCurrStartingDate(e.target.value);
        
    }

    const handleStillEmployed = () => {
        if (currEmployed) {
            setCurrEmployed(false);
        } else {
            setCurrEmployed(true);
        }
    }

    const handleCurrResponsibility = (e) => {
        setCurrResponsibility(e.target.value);
    }

    const handleAddCurrResponsibility = () => {
        if (currResponsibility.length < 1) {
            alert("Please type your job responsibility here.");
        } else if (currJobResponsibilitiesList.length < 5) {
            let inputVal = {id: uuidv4() , value: currResponsibility };
            let updatedRespList = currJobResponsibilitiesList.concat([inputVal]);
            setCurrJobResponsibilitiesList(updatedRespList);
            setCurrResponsibility("");

        } else {
            alert("Please limit your responsibilities to no more than five examples.");
        }
        
    }

    const handleEditResponsibility = (id) => {
        let responsibilityObject = getItemWithID(id , currJobResponsibilitiesList);
        let responsibility = responsibilityObject.item.value;
        let jobResponsibilityList = responsibilityObject.arr;

        setCurrResponsibility(responsibility);
        setCurrJobResponsibilitiesList(jobResponsibilityList);


    }

    const handleDeleteResponsibility = (id) => {
        let updatedRespList = currJobResponsibilitiesList.filter(item =>
            id !== item.id
        );
        setCurrJobResponsibilitiesList(updatedRespList);
    }
    
    const handleEditJobProfile = (id) => {
        let profileObject = getItemWithID(id , currJobProfileList);
        let profile = profileObject.item;
        let jobProfileList = profileObject.arr;

        setCurrPosition(profile.position);
        setCurrCompany(profile.company);
        setCurrStartingDate(profile.startingDate);
        setCurrEmployed(profile.stillEmployed);
        setCurrJobResponsibilitiesList(profile.responsibilities);
        setCurrResponsibility("");
        setCurrJobProfileList(jobProfileList);
    }

    const handleDeleteJobProfile = (id) => {
        let updatedProfList = currJobProfileList.filter(item =>
            id !== item.id
        );
        setCurrJobProfileList(updatedProfList);
    }

    const handleSubmitJobProfile = () => {
        if (currJobProfileList.length < 3) {
            let profile = {
                id: uuidv4(), 
                position: currPosition,
                company: currCompany,
                startingDate: currStartingDate,
                stillEmployed: currEmployed,
                responsibilities: currJobResponsibilitiesList,  
            }
            let updatedProfileList = currJobProfileList.concat([profile]);
            setCurrJobProfileList(updatedProfileList);
            resetWorkExperienceForm();
        } else {
            alert("Please submit no more than three job profiles.");
        }
    }

    const resetWorkExperienceForm = () => {
        setCurrPosition("");
        setCurrCompany("");
        setCurrStartingDate("");
        setCurrEmployed(false);
        setCurrJobResponsibilitiesList([]);
        setCurrResponsibility("");

    }*/

    const jobProfileListItems = workExperienceData.workExperienceValues.currJobProfileList.map(item =>
        <JobProfileListItem key={item.id} data={item} onDelete={workExperienceData.workExperienceListeners.handleDeleteJobProfile} onEdit={workExperienceData.workExperienceListeners.handleEditJobProfile} />
    );


    const jobResponsibilityListItems = workExperienceData.workExperienceValues.currJobResponsibilitiesList.map(item => 
        <GeneralListItem key={item.id} data={item} onDelete={workExperienceData.workExperienceListeners.handleDeleteResponsibility} onEdit={workExperienceData.workExperienceListeners.handleEditResponsibility}/>
    )
    
    return (
        <div className='form-section'>
            <h2 className='form-header'>Work Experience</h2>
            <UnorderedList itemList={jobProfileListItems} className="job-profile-list"/>
            <SmallTextField fieldName='Title/Position' onInputChange={workExperienceData.workExperienceListeners.handlePositionChange} value={workExperienceData.workExperienceValues.currPosition}/>
            <SmallTextField fieldName='Workplace/Company' onInputChange={workExperienceData.workExperienceListeners.handleCompanyChange} value={workExperienceData.workExperienceValues.currCompany}/>
            <SmallMonthField fieldName='Starting Date' onInputChange={workExperienceData.workExperienceListeners.handleStartingDateChange} value={workExperienceData.workExperienceValues.currStartingDate}/>
            <CheckboxField fieldName='Still Employed' onInputChange={workExperienceData.workExperienceListeners.handleStillEmployed} checked={workExperienceData.workExperienceValues.currEmployed}/>
            <BulletListField fieldName='Job Responsibilities' value={workExperienceData.workExperienceValues.currResponsibility} onInputChange={workExperienceData.workExperienceListeners.handleCurrResponsibility} onAddChange={workExperienceData.workExperienceListeners.handleAddCurrResponsibility} itemList={jobResponsibilityListItems}/>
            <SubmitButton buttonText='Submit Job Profile' onClickAction={workExperienceData.workExperienceListeners.handleSubmitJobProfile} />
        </div>

    )
}

WorkExperienceForm.propTypes = {
    workExperienceData: PropTypes.object,
}

export default WorkExperienceForm;