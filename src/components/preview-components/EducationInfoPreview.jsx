import PropTypes from 'prop-types'
import EducationProfile from './EducationProfile'



function EducationInfoPreview({ educationInfoValues }) {

    const educationProfiles = educationInfoValues.currEducationProfileList.map(item =>
        <EducationProfile key={item.id} item={item} />
    )
    

    return (
        <div className="preview-education-info">
            <h3 className="preview-section-header">EDUCATION BACKGROUND</h3>
            <>{educationProfiles}</>
        </div>
    )
}

EducationInfoPreview.propTypes = {
    educationInfoValues: PropTypes.object,

}

export default EducationInfoPreview