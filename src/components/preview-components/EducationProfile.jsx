import PropTypes from 'prop-types';


function EducationProfile({ item }) {

    let studentStatus = null;
    if (item.stillEnrolled) {
        studentStatus = <p className="preview-status">Currently Enrolled</p>
    } else {
        studentStatus = null;
    }

    return (
        <div className="preview-education-profile">
            <div className="preview-section-subheader">
                <div className="preview-profile-info">
                    <p className="preview-topic">{item.organization}</p>
                    {studentStatus}
                </div>
                <p className="preview-subtopic">{item.program}</p>
            </div>
        </div>
    )
    

}

EducationProfile.propTypes = {
    item: PropTypes.object,
}

export default EducationProfile