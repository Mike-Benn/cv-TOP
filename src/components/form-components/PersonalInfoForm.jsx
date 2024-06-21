
import TextArea from './TextArea';
import SmallTextField from './SmallTextField';

function PersonalInfoForm() {

    return (
        <div className='form-section'>
            <h2 className='form-header'>Personal Info</h2>
            <SmallTextField fieldName='First Name' />
            <SmallTextField fieldName='Last Name' />
            <SmallTextField fieldName='Professional title' />
            <TextArea fieldName='Give a short summary about yourself' />
        </div>
    )
}

export default PersonalInfoForm;

