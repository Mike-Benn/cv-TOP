import PropTypes from 'prop-types'


function SmallPhoneNumberField({ fieldName = "Placeholder" , onInputChange }) {
    let forVal = fieldName.split(' ').join('');

    return (
        <div className='field'>
            <label className='field-label' htmlFor={forVal}>{fieldName}</label>
            <input 
                type="tel"
                name={forVal}
                id={forVal} 
                className='text-input'
                onChange={onInputChange}
            />
        </div>
    )
}

SmallPhoneNumberField.propTypes = {
    fieldName: PropTypes.string.isRequired,
    onInputChange: PropTypes.func,
};

export default SmallPhoneNumberField