import SmallTextField from './SmallTextField';
import SmallMonthField from './SmallMonthField';
import CheckboxField from './CheckboxField';



function WorkExperienceForm() {

    return (
        <div>
            <h2>Work Experience</h2>
            <SmallTextField fieldName='Title/Position' />
            <SmallTextField fieldName='Workplace/Company' />
            <SmallMonthField fieldName='Starting Date' />
            <CheckboxField fieldName='Still Employed' />
        </div>

    )
}

export default WorkExperienceForm;