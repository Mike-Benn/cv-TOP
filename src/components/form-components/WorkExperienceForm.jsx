import SmallTextField from './SmallTextField';
import SmallMonthField from './SmallMonthField';
import CheckboxField from './CheckboxField';
import BulletListField from './BulletListField';
import SubmitButton from '../buttons/SubmitButton';



function WorkExperienceForm() {

    return (
        <div className='form-section'>
            <h2 className='form-header'>Work Experience</h2>
            <SmallTextField fieldName='Title/Position' />
            <SmallTextField fieldName='Workplace/Company' />
            <SmallMonthField fieldName='Starting Date' />
            <CheckboxField fieldName='Still Employed' />
            <BulletListField fieldName='Job Responsibilities' />
            <SubmitButton buttonText='Submit Work Experience' />
        </div>

    )
}

export default WorkExperienceForm;