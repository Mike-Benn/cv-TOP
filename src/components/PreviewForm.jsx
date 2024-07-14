import EducationInfoPreview from "./preview-components/EducationInfoPreview";
import WorkExperiencePreview from "./preview-components/WorkExperiencePreview";
import PersonalInfoPreview from "./preview-components/PersonalInfoPreview";
import TechnicalSkillsPreview from "./preview-components/TechnicalSkillsPreview";
import ProjectsPreview from "./preview-components/ProjectsPreview";
import PropTypes from 'prop-types';
import eye from '../images/eye.png';
import printer from '../images/printer.png';
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";


function PreviewForm({ personalInfoValues , contactInfoValues , educationInfoValues , workExperienceValues , projectsValues , technicalSkillsValues}) {
    
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });
    
    return (
        <section className="preview">
            <div className="button-overlay">
                <button type="button" className="toggle-display-button"><img src={eye} alt="Open eye ball icon" className="overlay-icon" /></button>
                <button type="button" onClick={handlePrint} className="print-button"><img src={printer} alt="Printer icon" className="overlay-icon" /></button>
            </div>
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