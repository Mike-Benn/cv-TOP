
import PreviewForm from "./PreviewForm";
import GeneratorForm from "./GeneratorForm"
import { getItemWithID } from "../utils/utils";
import { v4 as uuidv4 } from "uuid"


import { useState } from "react";


function ResumeGenerator() {


    // Personal Info Form state management //

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

    const personalInfoListeners = {
        handleFirstNameChange,
        handleLastNameChange,
        handleTitleChange,
        handleSummaryChange,
    }

    const personalInfoValues = {
        currFirstName,
        currLastName,
        currTitle,
        currSummary,
    }

    const personalInfoData = {
        personalInfoListeners,
        personalInfoValues,
    }

    // Contact Info Form state management //

    const [currEmail , setCurrEmail] = useState("");
    const [currPhoneNumber , setCurrPhoneNumber] = useState("");
    const [currLocation , setCurrLocation] = useState("");
    const [currUrl , setCurrUrl] = useState("");

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

    const contactInfoListeners = {
        handleEmailChange,
        handlePhoneNumberChange,
        handleLocationChange,
        handleUrlChange,
    }

    const contactInfoValues = {
        currEmail,
        currPhoneNumber,
        currLocation,
        currUrl
    }

    const contactInfoData = {
        contactInfoListeners,
        contactInfoValues
    }

    // Education Info Form state management //

    const [currOrganization , setCurrOrganization] = useState("");
    const [currProgram , setCurrProgram] = useState("");
    const [currEnrolled, setCurrEnrolled] = useState(false);
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

    

    const handleSubmitEducationProfile = () => {
        if (currEducationProfileList.length < 2) {
            let profile = {
                id: uuidv4(),
                organization: currOrganization,
                program: currProgram,
                stillEnrolled: currEnrolled,
            }
            let updatedProfileList = currEducationProfileList.concat([profile]);
            setCurrEducationProfileList(updatedProfileList);
            resetEducationInfoForm();
        } else {
            alert("Please submit your two most relevant examples of formal education or training in the IT field.");
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
        setCurrEducationProfileList(educationProfileList);

    }
    
    const resetEducationInfoForm = () => {
        setCurrOrganization("");
        setCurrProgram("");
        setCurrEnrolled(false);

    }

    const educationInfoValues = {
        currOrganization,
        currProgram,
        currEnrolled,
        currEducationProfileList,
    }

    const educationInfoListeners = {
        handleOrganizationChange,
        handleProgramChange,
        handleStillEnrolled,
        handleSubmitEducationProfile,
        handleDeleteEducationProfile,
        handleEditEducationProfile,

    }

    const educationInfoData = {
        educationInfoValues,
        educationInfoListeners,

    }

    // Work Experience Form state management //

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

    }

    const workExperienceValues = {
        currPosition,
        currCompany,
        currStartingDate,
        currEmployed,
        currResponsibility,
        currJobResponsibilitiesList,
        currJobProfileList,
    }

    const workExperienceListeners = {
        handlePositionChange,
        handleCompanyChange,
        handleStartingDateChange,
        handleStillEmployed,
        handleCurrResponsibility,
        handleAddCurrResponsibility,
        handleEditResponsibility,
        handleDeleteResponsibility,
        handleEditJobProfile,
        handleDeleteJobProfile,
        handleSubmitJobProfile
    }

    const workExperienceData = {
        workExperienceValues,
        workExperienceListeners,
    }

    // Technical Skills Form state management //

    const [currLanguage , setCurrLanguage] = useState("");
    const [currFrametool , setCurrFrametool] = useState("");
    const [currLanguageList , setCurrLanguageList] = useState([]);
    const [currFrametoolList , setCurrFrametoolList] = useState([]);

    const handleLanguageChange = (e) => {
        setCurrLanguage(e.target.value);
    }

    const handleFrametoolChange = (e) => {
        setCurrFrametool(e.target.value);
    }

    const handleAddCurrLanguage = () => {
        if (currLanguage.length < 1) {
            alert("Please list a language.")
        } else if (currLanguageList.length < 5) {
            let inputVal = {id: uuidv4() , value: currLanguage };
            let updatedLanguageList = currLanguageList.concat([inputVal]);
            setCurrLanguageList(updatedLanguageList);
            setCurrLanguage("");
        } else {
            alert("Please list at max five languages that you feel most comfortable working with.");
        }
    }

    const handleAddCurrFrametool = () => {
        if (currFrametool.length < 1) {
            alert("Please type a framework or tool here.")
        } else if (currFrametoolList.length < 5) {
            let inputVal = {id: uuidv4() , value: currFrametool };
            let updatedFrametoolList = currFrametoolList.concat([inputVal]);
            setCurrFrametoolList(updatedFrametoolList);
            setCurrFrametool("");
        } else {
            alert("Please list at max five frameworks, tools, or software ideologies that you feel you are most comfortable working with and represesnts you as a programmer.");
        }
    }

    const handleDeleteLanguage = (id) => {
        let updatedLanguageList = currLanguageList.filter(item =>
            id !== item.id
        );
        setCurrLanguageList(updatedLanguageList);
    }

    const handleEditLanguage = (id) => {
        let languageObject = getItemWithID(id , currLanguageList);
        let language = languageObject.item.value;
        let languageList = languageObject.arr;

        setCurrLanguage(language);
        setCurrLanguageList(languageList);
    }

    const handleDeleteFrametool = (id) => {
        let updatedFrametoolList = currFrametoolList.filter(item => 
            id !== item.id
        );
        setCurrFrametoolList(updatedFrametoolList);
    }

    const handleEditFrametool = (id) => {
        let frametoolObject = getItemWithID(id , currFrametoolList);
        let frametool = frametoolObject.item.value;
        let frametoolList = frametoolObject.arr;

        setCurrFrametool(frametool);
        setCurrFrametoolList(frametoolList);
    }
    
    const technicalSkillsValues = {
        currLanguage,
        currFrametool,
        currLanguageList,
        currFrametoolList,
    }

    const technicalSkillsListeners = {
        handleLanguageChange,
        handleFrametoolChange,
        handleAddCurrLanguage,
        handleAddCurrFrametool,
        handleDeleteLanguage,
        handleEditLanguage,
        handleDeleteFrametool,
        handleEditFrametool,
    }

    const technicalSkillsData = {
        technicalSkillsValues,
        technicalSkillsListeners,
    }

    // End of state management // 

    return (
        <main>
            <GeneratorForm personalInfoData={personalInfoData} contactInfoData={contactInfoData} educationInfoData={educationInfoData} workExperienceData={workExperienceData} technicalSkillsData={technicalSkillsData}/>
            <PreviewForm personalInfoValues={personalInfoValues} contactInfoValues={contactInfoValues} educationInfoValues={educationInfoValues} workExperienceValues={workExperienceValues} technicalSkillsValues={technicalSkillsValues}/>
        </main>
    )
}

export default ResumeGenerator