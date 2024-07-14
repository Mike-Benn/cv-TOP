import PropTypes from 'prop-types';
import ProfileListItem from '../lists/ProfileListItem';
import { createStringFromList } from '../../utils/utils';

function ProjectProfile({ item }) {

    

    let projectName = item.name + " | ";
    let technologyString = createStringFromList(item.technologies);

    let objectives = item.objectives.map(objective => 
        <ProfileListItem key={objective.id} item={objective} />
    )

    return (
        <div className="preview-project-profile">
            <div className="preview-section-subheader">
                <p className="preview-topic">{projectName}<span className='preview-technology'>{technologyString}</span></p>
            </div>
            <ul>
                {objectives}
            </ul>
        </div>

    )
    

}

ProjectProfile.propTypes = {
    item: PropTypes.object,
}

export default ProjectProfile