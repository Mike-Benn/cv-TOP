import PropTypes from 'prop-types';


function ProjectProfile({ item }) {

    return (
        <div className="preview-project-profile">
            <div className="preview-section-subheader">
                <p className="preview-topic">{item.name}</p>
            </div>
        </div>
    )
    

}

ProjectProfile.propTypes = {
    item: PropTypes.object,
}

export default ProjectProfile