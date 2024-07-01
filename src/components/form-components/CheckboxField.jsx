import PropTypes from 'prop-types'


function CheckboxField({ fieldName = "Placeholder" , onInputChange , checked}) {
    let forVal = fieldName.split(' ').join('');

    return (
        <div className='field checkbox-field'>
            <label className='checkbox-label' htmlFor={forVal}>{fieldName}</label>
            <input 
                type="checkbox"
                name={forVal}
                id={forVal} 
                className='checkbox-input'
                onChange={onInputChange}
                checked={checked}
            />
        </div>
    )
}

CheckboxField.propTypes = {
    fieldName: PropTypes.string.isRequired,
    onInputChange: PropTypes.func,
    checked: PropTypes.bool,
};

export default CheckboxField;