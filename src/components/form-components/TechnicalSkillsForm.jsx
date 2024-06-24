import SmallTextField from './SmallTextField';
import SubmitSkillButton from '../buttons/SubmitSkillButton';


function TechnicalSkillsForm() {

    return (
        <div className='form-section'>
            <h2 className='form-header'>Technical Skills</h2>
            <SmallTextField fieldName='Programming Languages' />
            <SubmitSkillButton buttonText='Submit Language' />
            <SmallTextField fieldName='Frameworks/Tools' />
            <SubmitSkillButton buttonText='Submit Framework/Tool' />
        </div>
    )
}

export default TechnicalSkillsForm;