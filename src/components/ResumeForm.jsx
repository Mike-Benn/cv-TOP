import Header from './form-components/Header';
import PersonalInfoForm from './form-components/PersonalInfoForm';
import ContactInfoForm from './form-components/ContactInfoForm';
import EducationInfoForm from './form-components/EducationInfoForm';
import WorkExperienceForm from './form-components/WorkExperienceForm';
import TechnicalSkillsForm from './form-components/TechnicalSkillsForm';

function ResumeForm() {

  return (

    <section className="generator">
      <Header />
      <PersonalInfoForm />
      <ContactInfoForm />
      <EducationInfoForm />
      <WorkExperienceForm />
      <TechnicalSkillsForm />
    </section>
    

  )
}

export default ResumeForm


