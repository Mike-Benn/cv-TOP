import PropTypes from 'prop-types'


function CheckboxField({ fieldName = "Placeholder" }) {
    let forVal = fieldName.split(' ').join('');

    return (
        <div className='field checkbox-field'>
            <label className='checkbox-label' htmlFor={forVal}>{fieldName}</label>
            <input 
                type="checkbox"
                name={forVal}
                id={forVal} 
                className='checkbox-input'
            />
        </div>
    )
}

CheckboxField.propTypes = {
    fieldName: PropTypes.string.isRequired,
};

export default CheckboxField;