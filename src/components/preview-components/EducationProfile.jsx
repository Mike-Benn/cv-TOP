import PropTypes from 'prop-types';


function EducationProfile({ item }) {

    return (
        <div className="preview-education-profile">
            <div className="preview-section-subheader">
                <p className="preview-topic">{item.organization}</p>
                <p className="preview-subtopic">{item.program}</p>
            </div>
        </div>
    )
    

}

EducationProfile.propTypes = {
    item: PropTypes.object,
}

export default EducationProfile