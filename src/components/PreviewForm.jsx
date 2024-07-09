import EducationInfoPreview from "./preview-components/EducationInfoPreview";
import WorkExperiencePreview from "./preview-components/WorkExperiencePreview";
import PersonalInfoPreview from "./preview-components/PersonalInfoPreview";
import TechnicalSkillsPreview from "./preview-components/TechnicalSkillsPreview";
import ProjectsPreview from "./preview-components/ProjectsPreview";
import PropTypes from 'prop-types';
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";


function PreviewForm({ personalInfoValues , contactInfoValues , educationInfoValues , workExperienceValues , projectsValues , technicalSkillsValues}) {
    
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });
    
    return (
        <section className="preview">
            <button type="button" onClick={handlePrint}></button>
            <div className="preview-container" ref={componentRef}>
                <PersonalInfoPreview personalInfoValues={personalInfoValues} contactInfoValues={contactInfoValues} />
                <EducationInfoPreview educationInfoValues={educationInfoValues} />
                <WorkExperiencePreview workExperienceValues={workExperienceValues} />
                <ProjectsPreview projectsValues={projectsValues} />
                <TechnicalSkillsPreview technicalSkillsValues={technicalSkillsValues} />
                
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
    projectsValues: PropTypes.object,
}

export default PreviewForm