import SmallTextField from './SmallTextField';
import SmallNumberField from './SmallNumberField';
import CheckboxField from './CheckboxField';


function EducationInfoForm() {


    return (
        <div className='form-section'>
            <h2 className='form-header'>Education</h2>
            <SmallTextField fieldName='University/Organization' placeHolder='University of Illinois' />
            <SmallTextField fieldName='Program/Degree' placeHolder='BS in Computer Science' />
            <CheckboxField fieldName='Still Enrolled' />
            <SmallNumberField fieldName='GPA (optional)' />
        </div>
    )
}

export default EducationInfoForm;