import PropTypes from 'prop-types'
import EducationProfile from './EducationProfile'



function EducationInfoPreview({ educationInfoValues }) {

    const educationProfiles = educationInfoValues.currEducationProfileList.map(item =>
        <EducationProfile key={item.id} item={item} />
    )
    

    return (
        <section className="preview-education-info">
            <h3 className="preview-section-header">EDUCATION</h3>
            <div className="preview-education-profiles">
                {educationProfiles}  
            </div>
        </section>
    )
}

EducationInfoPreview.propTypes = {
    educationInfoValues: PropTypes.object,

}

export default EducationInfoPreview