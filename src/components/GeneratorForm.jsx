import Header from './form-components/Header';
import PersonalInfoForm from './form-components/PersonalInfoForm';
import ContactInfoForm from './form-components/ContactInfoForm';
import EducationInfoForm from './form-components/EducationInfoForm';
import WorkExperienceForm from './form-components/WorkExperienceForm';
import TechnicalSkillsForm from './form-components/TechnicalSkillsForm';
import PropTypes from 'prop-types';

function GeneratorForm({ personalInfoData , contactInfoData , educationInfoData , workExperienceData , technicalSkillsData }) {

  return (

    <section className="generator">
      <Header />
      <PersonalInfoForm personalInfoData={personalInfoData}/>
      <ContactInfoForm contactInfoData={contactInfoData}/>
      <EducationInfoForm educationInfoData={educationInfoData}/>
      <WorkExperienceForm workExperienceData={workExperienceData}/>
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
}

export default GeneratorForm


