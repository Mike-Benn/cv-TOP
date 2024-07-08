import PropTypes from 'prop-types';
import WorkProfile from './WorkProfile';

function WorkExperiencePreview({ workExperienceValues }) {
    
    

    const workProfiles = workExperienceValues.currJobProfileList.map(item => 
        <WorkProfile key={item.id} item={item} />
    )

    return (
        <div className="preview-work-experience">
            <h3 className="preview-section-header">WORK EXPERIENCE</h3>
            <>{workProfiles}</>
        </div>
    )
}

WorkExperiencePreview.propTypes = {
    workExperienceValues: PropTypes.object,
}

export default WorkExperiencePreview