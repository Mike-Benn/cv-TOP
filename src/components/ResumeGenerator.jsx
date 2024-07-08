
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

    // Projects state management //

    const [currProjectName , setCurrProjectName] = useState("");
    const [currTechnology , setCurrTechnology] = useState("");
    const [currProjectObjective , setCurrProjectObjective] = useState("");
    const [currTechnologyList , setCurrTechnologyList] = useState([]);
    const [currProjectObjectiveList, setCurrProjectObjectiveList] = useState([]);
    const [currProjectList , setCurrProjectList] = useState([]);

    const handleCurrProjectNameChange = (e) => {
        setCurrProjectName(e.target.value);
    }

    const handleCurrTechnologyChange = (e) => {
        setCurrTechnology(e.target.value);
    }

    const handleCurrProjectObjectiveChange = (e) => {
        setCurrProjectObjective(e.target.value);
    }

    const handleAddCurrTechnology = () => {
        if (currTechnologyList.length < 5) {
            let inputVal = {id: uuidv4() , value: currTechnology};
            let updatedTechnologyList = currTechnologyList.concat([inputVal]);
            setCurrTechnologyList(updatedTechnologyList);
            setCurrTechnology("");
        } else {
            alert("Please list at max the five most relevant languages or tools that you used on this project.")
        }
    }

    const handleAddCurrProjectObjective = () => {
        if (currProjectObjectiveList.length < 5) {
            let inputVal = {id: uuidv4() , value: currProjectObjective};
            let updatedProjectObjectiveList = currProjectObjectiveList.concat([inputVal]);
            setCurrProjectObjectiveList(updatedProjectObjectiveList);
            setCurrProjectObjective("");
        } else {
            alert("Please list at max the five most relevant objectives or accomplishments related to this project.")
        }
    }

    const handleDeleteTechnology = (id) => {
        let updatedTechnologyList = currTechnologyList.filter(item =>
            id !== item.id
        );
        setCurrTechnologyList(updatedTechnologyList);
    }

    const handleDeleteProjectObjective = (id) => {
        let updatedProjectObjectiveList = currProjectObjectiveList.filter(item =>
            id !== item.id
        );
        setCurrProjectObjectiveList(updatedProjectObjectiveList);
    }

    const handleEditTechnology = (id) => {
        let technologyObject = getItemWithID(id , currTechnologyList);
        let technology = technologyObject.item.value;
        let technologyList = technologyObject.arr;

        setCurrTechnology(technology);
        setCurrTechnologyList(technologyList);
    }

    const handleEditProjectObjective = (id) => {
        let objectiveObject = getItemWithID(id , currProjectObjectiveList);
        let objective = objectiveObject.item.value;
        let objectiveList = objectiveObject.arr;

        setCurrProjectObjective(objective);
        setCurrProjectObjectiveList(objectiveList);
    }

    const handleSubmitProject = () => {
        if (currProjectList.length < 3) {
            let project = {
                id: uuidv4(),
                name: currProjectName,
                technologies: currTechnologyList,
                objectives: currProjectObjectiveList,
            }
            let updatedProjectList = currProjectList.concat([project]);
            setCurrProjectList(updatedProjectList);
            resetProjectsForm();
        } else {
            alert("Please submit no more than three projects.")
        }
    }

    const handleEditProject = (id) => {
        let projectObject = getItemWithID(id , currProjectList);
        let project = projectObject.item;
        let projectList = projectObject.arr;

        setCurrProjectName(project.name);
        setCurrTechnologyList(project.technologies);
        setCurrProjectObjectiveList(project.objectives);
        setCurrProjectList(projectList);


    }

    const handleDeleteProject = (id) => {
        let updatedProjectList = currProjectList.filter(item =>
            id !== item.id
        );
        setCurrProjectList(updatedProjectList);
    }

    
    
    const resetProjectsForm = () => {
        setCurrProjectName("");
        setCurrProjectObjective("");
        setCurrTechnology("");
        setCurrProjectObjectiveList([]);
        setCurrTechnologyList([]);
    }

    const projectsValues = {
        currProjectName,
        currTechnology,
        currProjectObjective,
        currTechnologyList,
        currProjectObjectiveList,
        currProjectList,
    }

    const projectsListeners = {
        handleCurrProjectNameChange,
        handleCurrTechnologyChange,
        handleCurrProjectObjectiveChange,
        handleAddCurrTechnology,
        handleAddCurrProjectObjective,
        handleDeleteTechnology,
        handleDeleteProjectObjective,
        handleEditTechnology,
        handleEditProjectObjective,
        handleSubmitProject,
        handleEditProject,
        handleDeleteProject,

    }

    const projectsData = {
        projectsValues,
        projectsListeners,
    }

    // Technical Skills Form state management //

    const [currLanguage , setCurrLanguage] = useState("");
    const [currFramework , setCurrFramework] = useState("");
    const [currDevTool , setCurrDevTool] = useState("");
    const [currLibrary , setCurrLibrary] = useState("");
    const [currLanguageList , setCurrLanguageList] = useState([]);
    const [currFrameworkList , setCurrFrameworkList] = useState([]);
    const [currDevToolList , setCurrDevToolList] = useState([]);
    const [currLibraryList , setCurrLibraryList] = useState([]);

    const handleLanguageChange = (e) => {
        setCurrLanguage(e.target.value);
    }

    const handleFrameworkChange = (e) => {
        setCurrFramework(e.target.value);
    }

    const handleDevToolChange = (e) => {
        setCurrDevTool(e.target.value);
    }

    const handleLibraryChange = (e) => {
        setCurrLibrary(e.target.value);
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

    const handleAddCurrFramework = () => {
        if (currFramework.length < 1) {
            alert("Please type a framework or tool here.")
        } else if (currFrameworkList.length < 5) {
            let inputVal = {id: uuidv4() , value: currFramework };
            let updatedFrameworkList = currFrameworkList.concat([inputVal]);
            setCurrFrameworkList(updatedFrameworkList);
            setCurrFramework("");
        } else {
            alert("Please list at max five different frameworks that you feel you are most comfortable working with.");
        }
    }

    const handleAddCurrDevTool = () => {
        if (currDevToolList.length < 5) {
            let inputVal = {id: uuidv4() , value: currDevTool};
            let updatedDevToolList = currDevToolList.concat([inputVal]);
            setCurrDevToolList(updatedDevToolList);
            setCurrDevTool("");
        } else {
            alert("Please list at max five different developer tools that you feel you are most comfortable working with.")
        }
    }

    const handleAddCurrLibrary = () => {
        if (currLibraryList.length < 5) {
            let inputVal = {id: uuidv4() , value: currLibrary};
            let updatedLibraryList = currLibraryList.concat([inputVal]);
            setCurrLibraryList(updatedLibraryList);
            setCurrLibrary("");
        } else {
            alert("Please list at max five different libraries that you feel you are most comfortable working with.")
        }
    }

    const handleDeleteDevTool = (id) => {
        let updatedDevToolList = currDevToolList.filter(item =>
            id !== item.id
        );
        setCurrDevToolList(updatedDevToolList);
    }

    const handleEditDevTool = (id) => {
        let devToolObject = getItemWithID(id , currDevToolList);
        let devTool = devToolObject.item.value;
        let devToolList = devToolObject.arr;

        setCurrDevTool(devTool);
        setCurrDevToolList(devToolList);
    }

    const handleDeleteLibrary = (id) => {
        let updatedLibraryList = currLibraryList.filter(item =>
            id !== item.id
        );
        setCurrLibraryList(updatedLibraryList);
    }

    const handleEditLibrary = (id) => {
        let libraryObject = getItemWithID(id , currLibraryList);
        let library = libraryObject.item.value;
        let libraryList = libraryObject.arr;

        setCurrLibrary(library);
        setCurrLibraryList(libraryList);
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

    const handleDeleteFramework = (id) => {
        let updatedFrameworkList = currFrameworkList.filter(item => 
            id !== item.id
        );
        setCurrFrameworkList(updatedFrameworkList);
    }

    const handleEditFramework = (id) => {
        let frameworkObject = getItemWithID(id , currFrameworkList);
        let framework = frameworkObject.item.value;
        let frameworkList = frameworkObject.arr;

        setCurrFramework(framework);
        setCurrFrameworkList(frameworkList);
    }
    
    const technicalSkillsValues = {
        currLanguage,
        currFramework,
        currDevTool,
        currLibrary,
        currLanguageList,
        currFrameworkList,
        currDevToolList,
        currLibraryList,
    }

    const technicalSkillsListeners = {
        handleLanguageChange,
        handleFrameworkChange,
        handleDevToolChange,
        handleLibraryChange,
        handleAddCurrLanguage,
        handleAddCurrFramework,
        handleAddCurrDevTool,
        handleAddCurrLibrary,
        handleDeleteLanguage,
        handleEditLanguage,
        handleDeleteFramework,
        handleEditFramework,
        handleDeleteDevTool,
        handleEditDevTool,
        handleDeleteLibrary,
        handleEditLibrary,
    }

    const technicalSkillsData = {
        technicalSkillsValues,
        technicalSkillsListeners,
    }

    // End of state management // 

    return (
        <main>
            <GeneratorForm personalInfoData={personalInfoData} contactInfoData={contactInfoData} educationInfoData={educationInfoData} workExperienceData={workExperienceData} technicalSkillsData={technicalSkillsData} projectsData={projectsData}/>
            <PreviewForm personalInfoValues={personalInfoValues} contactInfoValues={contactInfoValues} educationInfoValues={educationInfoValues} workExperienceValues={workExperienceValues} technicalSkillsValues={technicalSkillsValues} projectsValues={projectsValues}/>
        </main>
    )
}

export default ResumeGenerator