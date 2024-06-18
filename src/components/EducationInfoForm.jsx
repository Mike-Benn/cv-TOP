import SmallTextField from './SmallTextField';
import SmallMonthField from './SmallMonthField';
import SmallNumberField from './SmallNumberField';
import CheckboxField from './CheckboxField';


function EducationInfoForm() {


    return (
        <div>
            <h2>Education</h2>
            <SmallTextField fieldName='University/Organization' />
            <SmallTextField fieldName='Program/Degree' />
            <CheckboxField fieldName='Still Enrolled' />
            <SmallNumberField fieldName='GPA' />

            
        </div>
    )
}

export default EducationInfoForm;