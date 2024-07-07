import { useState } from 'react';
import BulletListField from './BulletListField';
import { v4 as uuidv4 } from 'uuid';
import GeneralListItem from '../lists/GeneralListItem';
import UnorderedList from '../lists/UnorderedList';
import { getItemWithID } from '../../utils/utils';


function TechnicalSkillsForm() {

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

    


    const languageListItems = currLanguageList.map(item =>
        <GeneralListItem key={item.id} data={item} onDelete={handleDeleteLanguage} onEdit={handleEditLanguage} />
    )

    const frametoolListItems = currFrametoolList.map(item => 
        <GeneralListItem key={item.id} data={item} onDelete={handleDeleteFrametool} onEdit={handleEditFrametool} />
    )

    return (
        <div className='form-section'>
            <h2 className='form-header'>Technical Skills</h2>
            <UnorderedList itemList={languageListItems} className="language-experience-list" />
            <BulletListField fieldName='Programming Languages' onInputChange={handleLanguageChange} onAddChange={handleAddCurrLanguage} value={currLanguage} />
            <UnorderedList itemList={frametoolListItems} className="frametool-experience-list" />
            <BulletListField fieldName='Frameworks/Tools' onInputChange={handleFrametoolChange} onAddChange={handleAddCurrFrametool} value={currFrametool}/>
        </div>
    )
}

export default TechnicalSkillsForm;