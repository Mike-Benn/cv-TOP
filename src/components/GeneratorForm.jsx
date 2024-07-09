import Header from './form-components/Header';
import PersonalInfoForm from './form-components/PersonalInfoForm';
import EducationInfoForm from './form-components/EducationInfoForm';
import WorkExperienceForm from './form-components/WorkExperienceForm';
import TechnicalSkillsForm from './form-components/TechnicalSkillsForm';
import ProjectsForm from './form-components/ProjectsForm';
import PropTypes from 'prop-types';

function GeneratorForm({ personalInfoData , contactInfoData , educationInfoData , workExperienceData , technicalSkillsData , projectsData }) {

  return (

    <section className="generator">
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
}

export default GeneratorForm


