import PropTypes from 'prop-types';
import ProfileListItem from '../lists/ProfileListItem';

function WorkProfile({ item }) {
    
    const responsibilities = item.responsibilities.map(resp => 
        <ProfileListItem key={resp.id} item={resp} />
    )

    return (
        <div className="preview-work-profile">
            <div className="preview-section-subheader">
                <p className="preview-organization">{item.position}</p>
                <p className="preview-program">{item.company}</p>
            </div>
            <ul>
                {responsibilities}
            </ul>
            
        </div>
    )
    

}

WorkProfile.propTypes = {
    item: PropTypes.object,
}

export default WorkProfile