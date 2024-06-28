import SmallTextField from './SmallTextField';
import SubmitButton from '../buttons/SubmitButton';


function TechnicalSkillsForm() {

    return (
        <div className='form-section'>
            <h2 className='form-header'>Technical Skills</h2>
            <SmallTextField fieldName='Programming Languages' />
            <SubmitButton buttonText='Submit Language' />
            <SmallTextField fieldName='Frameworks/Tools' />
            <SubmitButton buttonText='Submit Framework/Tool' />
        </div>
    )
}

export default TechnicalSkillsForm;