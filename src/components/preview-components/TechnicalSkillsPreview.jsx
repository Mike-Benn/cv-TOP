import PropTypes from 'prop-types';
import { createStringFromList } from '../../utils/utils';

function TechnicalSkillsPreview({ technicalSkillsValues }) {

    

    const languages = createStringFromList(technicalSkillsValues.currLanguageList);
    const frameworks = createStringFromList(technicalSkillsValues.currFrameworkList);
    const devtools = createStringFromList(technicalSkillsValues.currDevToolList);
    const libraries = createStringFromList(technicalSkillsValues.currLibraryList);

    return (
        <div className="preview-technical-skills">
            <h3 className="preview-section-header">TECHNICAL SKILLS</h3>
            <div className="preview-skill-areas">
                <p className="preview-text"><span className="preview-topic">Languages: </span>{languages}</p>
                <p className="preview-text"><span className="preview-topic">Frameworks: </span>{frameworks}</p>
                <p className="preview-text"><span className="preview-topic">Developer Tools: </span>{devtools}</p>
                <p className="preview-text"><span className="preview-topic">Libraries </span>{libraries}</p>
            </div>
        </div>
    )
}

TechnicalSkillsPreview.propTypes = {
    technicalSkillsValues: PropTypes.object,
}

export default TechnicalSkillsPreview