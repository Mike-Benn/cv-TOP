import SmallTextField from './SmallTextField';
import SmallMonthField from './SmallMonthField';
import CheckboxField from './CheckboxField';
import BulletListField from './BulletListField';
import UnorderedList from '../lists/UnorderedList';
import { v4 as uuidv4 } from 'uuid';
import JobResponsibilityListItem from '../lists/JobResponsibilityListItem';
import JobProfileListItem from '../lists/JobProfileListItem';
import SubmitButton from '../buttons/SubmitButton';
import { useState } from 'react';



function WorkExperienceForm() {

    /*const [currJobExperienceList , setCurrJobExperienceList] = useState([]);*/
    

    const [currPosition , setCurrPosition] = useState("");
    const [currCompany , setCurrCompany] = useState("");
    const [currStartingDate , setCurrStartingDate] = useState("");
    const [currEmployed , setCurrEmployed] = useState(false);
    const [currResponsibility , setCurrResponsibility] = useState("");
    const [currJobResponsibilitiesList , setCurrJobResponsibilitiesList] = useState([]);
    const [currJobProfileList , setCurrJobProfileList] = useState([]);

    /*const [currJobList , setCurrJobList] = useState([]);*/

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
        if (currJobResponsibilitiesList.length < 5) {
            let inputVal = {id: uuidv4() , value: currResponsibility };
            let updatedRespList = currJobResponsibilitiesList.concat([inputVal]);
            setCurrJobResponsibilitiesList(updatedRespList);
            setCurrResponsibility("");

        } else {
            alert("Please limit your responsibilities to no more than five examples.");
        }
        
    }

    const handleDeleteResponsibility = (id) => {
        let updatedRespList = currJobResponsibilitiesList.filter(item =>
            id !== item.id
        );
        setCurrJobResponsibilitiesList(updatedRespList);
    }
    
    const handleDeleteProfile = (id) => {
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
            resetForm();
        } else {
            alert("Please submit no more than three job profiles.");
        }
    }

    const resetForm = () => {
        setCurrPosition("");
        setCurrCompany("");
        setCurrStartingDate("");
        setCurrEmployed(false);
        setCurrJobResponsibilitiesList([]);
        setCurrResponsibility("");

    }

    const JobProfileListItems = currJobProfileList.map(item =>
        <JobProfileListItem key={item.id} data={item} onDelete={handleDeleteProfile} />
    );


    const JobResponsibilityListItems = currJobResponsibilitiesList.map(item => 
        <JobResponsibilityListItem key={item.id} id={item.id} text={item.value} onClose={handleDeleteResponsibility} />
    )
    
    return (
        <div className='form-section'>
            <h2 className='form-header'>Work Experience</h2>
            <UnorderedList itemList={JobProfileListItems}/>
            <SmallTextField fieldName='Title/Position' onInputChange={handlePositionChange} value={currPosition}/>
            <SmallTextField fieldName='Workplace/Company' onInputChange={handleCompanyChange} value={currCompany}/>
            <SmallMonthField fieldName='Starting Date' onInputChange={handleStartingDateChange} value={currStartingDate}/>
            <CheckboxField fieldName='Still Employed' onInputChange={handleStillEmployed} checked={currEmployed}/>
            <BulletListField fieldName='Job Responsibilities' currInputVal={currResponsibility} onInputChange={handleCurrResponsibility} onAddChange={handleAddCurrResponsibility} itemList={JobResponsibilityListItems}/>
            <SubmitButton buttonText='Submit Job Profile' onClickAction={handleSubmitJobProfile} />
        </div>

    )
}

export default WorkExperienceForm;