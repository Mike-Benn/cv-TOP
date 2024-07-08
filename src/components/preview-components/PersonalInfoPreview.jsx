import PropTypes from 'prop-types'

function PersonalInfoPreview({ personalInfoValues }) {
    return (
    <div className="preview-personal-info">
        <div className="preview-profile">
            <h2 className="preview-name">{`${personalInfoValues.currFirstName} ${personalInfoValues.currLastName}`}</h2>
            <p className="preview-title">{personalInfoValues.currTitle}</p>
        </div>
        <p className="preview-summary">{personalInfoValues.currSummary}</p>
    </div>
    )
}

PersonalInfoPreview.propTypes = {
    personalInfoValues: PropTypes.object,
}

export default PersonalInfoPreview