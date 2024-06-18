import SmallTextField from './SmallTextField';


function TechnicalSkillsForm() {

    return (
        <div>
            <h2>Technical Skills</h2>
            <SmallTextField fieldName='Programming Languages' />
            <SmallTextField fieldName='Frameworks/Tools' />
        </div>
    )
}

export default TechnicalSkillsForm;