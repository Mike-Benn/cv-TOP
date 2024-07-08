
import BulletListField from './BulletListField';
import PropTypes from 'prop-types'
import GeneralListItem from '../lists/GeneralListItem';
import UnorderedList from '../lists/UnorderedList';



function TechnicalSkillsForm({ technicalSkillsData }) {
    

    const languageListItems = technicalSkillsData.technicalSkillsValues.currLanguageList.map(item =>
        <GeneralListItem key={item.id} data={item} onDelete={technicalSkillsData.technicalSkillsListeners.handleDeleteLanguage} onEdit={technicalSkillsData.technicalSkillsListeners.handleEditLanguage} />
    )

    const frameworkListItems = technicalSkillsData.technicalSkillsValues.currFrameworkList.map(item => 
        <GeneralListItem key={item.id} data={item} onDelete={technicalSkillsData.technicalSkillsListeners.handleDeleteFramework} onEdit={technicalSkillsData.technicalSkillsListeners.handleEditFramework} />
    )

    const devToolListItems = technicalSkillsData.technicalSkillsValues.currDevToolList.map(item => 
        <GeneralListItem key={item.id} data={item} onDelete={technicalSkillsData.technicalSkillsListeners.handleDeleteDevTool} onEdit={technicalSkillsData.technicalSkillsListeners.handleEditDevTool} />
    )

    const libraryListItems = technicalSkillsData.technicalSkillsValues.currLibraryList.map(item => 
        <GeneralListItem key={item.id} data={item} onDelete={technicalSkillsData.technicalSkillsListeners.handleDeleteLibrary} onEdit={technicalSkillsData.technicalSkillsListeners.handleEditLibrary} />
    )

    return (
        <div className='form-section'>
            <h2 className='form-header'>Technical Skills</h2>
            <UnorderedList itemList={languageListItems} className="preview-skill-list" />
            <BulletListField fieldName='Programming Languages' onInputChange={technicalSkillsData.technicalSkillsListeners.handleLanguageChange} onAddChange={technicalSkillsData.technicalSkillsListeners.handleAddCurrLanguage} value={technicalSkillsData.technicalSkillsValues.currLanguage} />
            <UnorderedList itemList={frameworkListItems} className="preview-skill-list" />
            <BulletListField fieldName='Frameworks' onInputChange={technicalSkillsData.technicalSkillsListeners.handleFrameworkChange} onAddChange={technicalSkillsData.technicalSkillsListeners.handleAddCurrFramework} value={technicalSkillsData.technicalSkillsValues.currFramework}/>
            <UnorderedList itemList={devToolListItems} className="preview-skill-list" />
            <BulletListField fieldName='Developer Tools' onInputChange={technicalSkillsData.technicalSkillsListeners.handleDevToolChange} onAddChange={technicalSkillsData.technicalSkillsListeners.handleAddCurrDevTool} value={technicalSkillsData.technicalSkillsValues.currDevTool} />
            <UnorderedList itemList={libraryListItems} className="preview-skill-list" />
            <BulletListField fieldName='Libraries' onInputChange={technicalSkillsData.technicalSkillsListeners.handleLibraryChange} onAddChange={technicalSkillsData.technicalSkillsListeners.handleAddCurrLibrary} value={technicalSkillsData.technicalSkillsValues.currLibrary} />
        
        </div>
    )
}

TechnicalSkillsForm.propTypes = {
    technicalSkillsData: PropTypes.object,
}

export default TechnicalSkillsForm;