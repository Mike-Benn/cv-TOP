import PropTypes from 'prop-types'


function SubmitButton({ buttonText = "Placeholder" }) {
    
    return (
        <div className="field">
            <button type="button" className="submit-btn">{buttonText}</button>
        </div>
    )
}

SubmitButton.propTypes = {
    buttonText: PropTypes.string.isRequired,
    
};

export default SubmitButton