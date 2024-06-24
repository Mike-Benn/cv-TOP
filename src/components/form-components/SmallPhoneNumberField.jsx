import PropTypes from 'prop-types'


function SmallPhoneNumberField({ fieldName = "Placeholder" }) {
    let forVal = fieldName.split(' ').join('');

    return (
        <div className='field'>
            <label className='field-label' htmlFor={forVal}>{fieldName}</label>
            <input 
                type="tel"
                name={forVal}
                id={forVal} 
                className='text-input'
                placeholder='###-###-####'
            />
        </div>
    )
}

SmallPhoneNumberField.propTypes = {
    fieldName: PropTypes.string.isRequired,
};

export default SmallPhoneNumberField