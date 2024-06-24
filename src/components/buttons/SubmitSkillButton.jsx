import PropTypes from 'prop-types'


function SubmitSkillButton({ buttonText = "Placeholder", buttonClass = ""}) {
    

    /*return (
        /*<div className='field'>
            <label className='field-label' htmlFor={forVal}>{fieldName}</label>
            <input 
                type="tel"
                name={forVal}
                id={forVal} 
                className='text-input'
                placeholder='###-###-####'
            />
        </div>)*/
        return (
            <div className="field">
                <button type="button" className={buttonClass}>{buttonText}</button>
            </div>
        )
}

SubmitSkillButton.propTypes = {
    buttonText: PropTypes.string.isRequired,
    buttonClass: PropTypes.string.isRequired,
};

export default SubmitSkillButton