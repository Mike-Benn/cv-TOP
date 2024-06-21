import SmallTextField from './SmallTextField';


function TechnicalSkillsForm() {

    return (
        <div className='form-section'>
            <h2 className='form-header'>Technical Skills</h2>
            <SmallTextField fieldName='Programming Languages' />
            <SmallTextField fieldName='Frameworks/Tools' />
        </div>
    )
}

export default TechnicalSkillsForm;