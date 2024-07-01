import PropTypes from 'prop-types'


function SubmitButton({ buttonText = "Placeholder" , onClickAction }) {
    
    return (
        <div className="field">
            <button type="button" className="submit-btn" onClick={onClickAction}>{buttonText}</button>
        </div>
    )
}

SubmitButton.propTypes = {
    buttonText: PropTypes.string,
    onClickAction: PropTypes.func,
    
    
};

export default SubmitButton