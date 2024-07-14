import Header from './form-components/Header';
import PersonalInfoForm from './form-components/PersonalInfoForm';
import EducationInfoForm from './form-components/EducationInfoForm';
import WorkExperienceForm from './form-components/WorkExperienceForm';
import TechnicalSkillsForm from './form-components/TechnicalSkillsForm';
import ProjectsForm from './form-components/ProjectsForm';
import PropTypes from 'prop-types';

function GeneratorForm({ personalInfoData , contactInfoData , educationInfoData , workExperienceData , technicalSkillsData , projectsData , isPreviewVisible }) {

  let sectionClass = null;
  if (isPreviewVisible) {
    sectionClass = "generator";
  } else {
    sectionClass = "generator full-screen";
  }

  return (

    <section className={sectionClass}>
      <Header />
      <PersonalInfoForm personalInfoData={personalInfoData} contactInfoData={contactInfoData}/>
      <EducationInfoForm educationInfoData={educationInfoData}/>
      <WorkExperienceForm workExperienceData={workExperienceData}/>
      <ProjectsForm projectsData={projectsData}/>
      <TechnicalSkillsForm technicalSkillsData={technicalSkillsData}/>
    </section>
    

  )
}

GeneratorForm.propTypes = {
  personalInfoData: PropTypes.object,
  contactInfoData: PropTypes.object,
  educationInfoData: PropTypes.object,
  workExperienceData: PropTypes.object,
  technicalSkillsData: PropTypes.object,
  projectsData: PropTypes.object,
  isPreviewVisible: PropTypes.bool,
}

export default GeneratorForm


