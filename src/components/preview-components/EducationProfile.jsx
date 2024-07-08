import PropTypes from 'prop-types';


function EducationProfile({ item }) {

    return (
        <div className="preview-education-profile">
            <div className="preview-section-subheader">
                <p className="preview-organization">{item.organization}</p>
                <p className="preview-program">{item.program}</p>
            </div>
            <ul>
                <li>Awards</li>
                <li>Organizations</li>
                <li>Courses</li>
            </ul>
        </div>
    )
    

}

EducationProfile.propTypes = {
    item: PropTypes.func,
}

export default EducationProfile