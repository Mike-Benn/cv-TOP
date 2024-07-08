import PropTypes from 'prop-types';


function WorkProfile({ item }) {

    return (
        <div className="preview-work-profile">
            <div className="preview-section-subheader">
                <p className="preview-organization">{item.position}</p>
                <p className="preview-program">{item.company}</p>
            </div>
            <ul>
                <li>Awards</li>
                <li>Organizations</li>
                <li>Courses</li>
            </ul>
        </div>
    )
    

}

WorkProfile.propTypes = {
    item: PropTypes.func,
}

export default WorkProfile