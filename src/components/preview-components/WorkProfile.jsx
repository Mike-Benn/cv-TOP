import PropTypes from 'prop-types';
import ProfileListItem from '../lists/ProfileListItem';
import { parseDateString } from '../../utils/utils';

function WorkProfile({ item }) {
    console.log(parseDateString(item.startingDate));
    let employmentStatus = null;
    if (item.stillEmployed) {
        employmentStatus = <p className="preview-status">{parseDateString(item.startingDate)} - Present</p>
    } else {
        employmentStatus = <p className="preview-status">{parseDateString(item.startingDate)} - {parseDateString(item.endingDate)}</p>
    }

    const responsibilities = item.responsibilities.map(resp => 
        <ProfileListItem key={resp.id} item={resp} />
    )

    return (
        <div className="preview-work-profile">
            <div className="preview-section-subheader">
                <div className="preview-profile-info">
                    <p className="preview-topic">{item.position}</p>
                    {employmentStatus}
                </div>
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