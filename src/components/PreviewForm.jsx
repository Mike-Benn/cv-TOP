import EducationInfoPreview from "./preview-components/EducationInfoPreview";
import WorkExperiencePreview from "./preview-components/WorkExperiencePreview";
import PersonalInfoPreview from "./preview-components/PersonalInfoPreview";
import ContactInfoPreview from "./preview-components/ContactInfoPreview";
import TechnicalSkillsPreview from "./preview-components/TechnicalSkillsPreview"

function PreviewForm() {
    return (
    <section className="preview">
        <div className="preview-container">
            <div className="preview-header">
                <PersonalInfoPreview />
                <ContactInfoPreview />
            </div>
            <div className="preview-body">
                <div className="preview-body-left">
                    <EducationInfoPreview />
                    <WorkExperiencePreview />
                </div>
                <div className="preview-body-right">
                    <TechnicalSkillsPreview />
                </div>
            </div>
        </div>
    </section>
    )

    
}

export default PreviewForm