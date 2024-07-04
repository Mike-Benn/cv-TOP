import SmallTextField from './SmallTextField';
import SmallMonthField from './SmallMonthField';
import CheckboxField from './CheckboxField';
import BulletListField from './BulletListField';
import UnorderedList from '../lists/UnorderedList';
import { v4 as uuidv4 } from 'uuid';
import GeneralListItem from '../lists/GeneralListItem';
import JobProfileListItem from '../lists/JobProfileListItem';
import SubmitButton from '../buttons/SubmitButton';
import { getItemWithID } from '../../utils/utils';
import { useState } from 'react';



function WorkExperienceForm() {
    
    const [currPosition , setCurrPosition] = useState("");
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
        if (currJobResponsibilitiesList.length < 5) {
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

    const jobProfileListItems = currJobProfileList.map(item =>
        <JobProfileListItem key={item.id} data={item} onDelete={handleDeleteJobProfile} onEdit={handleEditJobProfile} />
    );


    const jobResponsibilityListItems = currJobResponsibilitiesList.map(item => 
        <GeneralListItem key={item.id} data={item} onDelete={handleDeleteResponsibility} onEdit={handleEditResponsibility}/>
    )
    
    return (
        <div className='form-section'>
            <h2 className='form-header'>Work Experience</h2>
            <UnorderedList itemList={jobProfileListItems}/>
            <SmallTextField fieldName='Title/Position' onInputChange={handlePositionChange} value={currPosition}/>
            <SmallTextField fieldName='Workplace/Company' onInputChange={handleCompanyChange} value={currCompany}/>
            <SmallMonthField fieldName='Starting Date' onInputChange={handleStartingDateChange} value={currStartingDate}/>
            <CheckboxField fieldName='Still Employed' onInputChange={handleStillEmployed} checked={currEmployed}/>
            <BulletListField fieldName='Job Responsibilities' value={currResponsibility} onInputChange={handleCurrResponsibility} onAddChange={handleAddCurrResponsibility} itemList={jobResponsibilityListItems}/>
            <SubmitButton buttonText='Submit Job Profile' onClickAction={handleSubmitJobProfile} />
        </div>

    )
}

export default WorkExperienceForm;