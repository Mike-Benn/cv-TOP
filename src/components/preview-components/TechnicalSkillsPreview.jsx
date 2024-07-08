import PropTypes from 'prop-types';
import LanguageListItem from '../lists/LanguageListItem';
import FrametoolListItem from '../lists/FrametoolListItem';

function TechnicalSkillsPreview({ technicalSkillsValues }) {

    const languageListItems = technicalSkillsValues.currLanguageList.map(item => 
        <LanguageListItem key={item.id} item={item} />        
    )

    const frametoolListItems = technicalSkillsValues.currFrametoolList.map(item =>
        <FrametoolListItem key={item.id} item={item} />
    )

    return (
        <div className="preview-technical-skills">
            <h3 className="preview-section-header">TECHNICAL SKILLS</h3>
            <div className="preview-section-subheader">
                <p className="preview-organization">Programming Languages</p>
                <ul>
                    {languageListItems}
                </ul>
            </div>
            <div className="preview-section-subheader">
                <p className="preview-organization">Frameworks and Tools</p>
                <ul>
                    {frametoolListItems}
                </ul>
            </div>
        </div>
    )
}

TechnicalSkillsPreview.propTypes = {
    technicalSkillsValues: PropTypes.object,
}

export default TechnicalSkillsPreview