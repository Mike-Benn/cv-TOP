
import BulletListField from './BulletListField';
import PropTypes from 'prop-types'
import GeneralListItem from '../lists/GeneralListItem';
import UnorderedList from '../lists/UnorderedList';



function TechnicalSkillsForm({ technicalSkillsData }) {
    /*
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

    
    */

    const languageListItems = technicalSkillsData.technicalSkillsValues.currLanguageList.map(item =>
        <GeneralListItem key={item.id} data={item} onDelete={technicalSkillsData.technicalSkillsListeners.handleDeleteLanguage} onEdit={technicalSkillsData.technicalSkillsListeners.handleEditLanguage} />
    )

    const frametoolListItems = technicalSkillsData.technicalSkillsValues.currFrametoolList.map(item => 
        <GeneralListItem key={item.id} data={item} onDelete={technicalSkillsData.technicalSkillsListeners.handleDeleteFrametool} onEdit={technicalSkillsData.technicalSkillsListeners.handleEditFrametool} />
    )

    return (
        <div className='form-section'>
            <h2 className='form-header'>Technical Skills</h2>
            <UnorderedList itemList={languageListItems} className="language-experience-list" />
            <BulletListField fieldName='Programming Languages' onInputChange={technicalSkillsData.technicalSkillsListeners.handleLanguageChange} onAddChange={technicalSkillsData.technicalSkillsListeners.handleAddCurrLanguage} value={technicalSkillsData.technicalSkillsValues.currLanguage} />
            <UnorderedList itemList={frametoolListItems} className="frametool-experience-list" />
            <BulletListField fieldName='Frameworks/Tools' onInputChange={technicalSkillsData.technicalSkillsListeners.handleFrametoolChange} onAddChange={technicalSkillsData.technicalSkillsListeners.handleAddCurrFrametool} value={technicalSkillsData.technicalSkillsValues.currFrametool}/>
        </div>
    )
}

TechnicalSkillsForm.propTypes = {
    technicalSkillsData: PropTypes.object,
}

export default TechnicalSkillsForm;