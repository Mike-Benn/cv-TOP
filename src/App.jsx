import './App.css';
import Header from './components/Header';
import PersonalInfoForm from './components/PersonalInfoForm';
import ContactInfoForm from './components/ContactInfoForm';
import EducationInfoForm from './components/EducationInfoForm';
import WorkExperienceForm from './components/WorkExperienceForm';
import TechnicalSkillsForm from './components/TechnicalSkillsForm';

function App() {

  return (
    <>
      <Header />
      <PersonalInfoForm />
      <ContactInfoForm />
      <EducationInfoForm />
      <WorkExperienceForm />
      <TechnicalSkillsForm />
    </>
  )
}

export default App
