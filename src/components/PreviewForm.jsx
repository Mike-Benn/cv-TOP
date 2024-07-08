import EducationInfoPreview from "./preview-components/EducationInfoPreview";
import WorkExperiencePreview from "./preview-components/WorkExperiencePreview";
import PersonalInfoPreview from "./preview-components/PersonalInfoPreview";
import ContactInfoPreview from "./preview-components/ContactInfoPreview";
import TechnicalSkillsPreview from "./preview-components/TechnicalSkillsPreview";
import PropTypes from 'prop-types';

function PreviewForm({ personalInfoValues , contactInfoValues , educationInfoValues , workExperienceValues , technicalSkillsValues}) {
    return (
    <section className="preview">
        <div className="preview-container">
            <div className="preview-header">
                <PersonalInfoPreview personalInfoValues={personalInfoValues}/>
                <ContactInfoPreview contactInfoValues={contactInfoValues}/>
            </div>
            <div className="preview-body">
                <div className="preview-body-left">
                    <EducationInfoPreview educationInfoValues={educationInfoValues}/>
                    <WorkExperiencePreview workExperienceValues={workExperienceValues}/>
                </div>
                <div className="preview-body-right">
                    <TechnicalSkillsPreview technicalSkillsValues={technicalSkillsValues}/>
                </div>
            </div>
        </div>
    </section>
    )

    
}

PreviewForm.propTypes = {
    personalInfoValues: PropTypes.object,
    contactInfoValues: PropTypes.object,
    educationInfoValues: PropTypes.object,
    workExperienceValues: PropTypes.object,
    technicalSkillsValues: PropTypes.object,
}

export default PreviewForm