import PropTypes from 'prop-types'


function CheckboxField({ fieldName = "Placeholder" }) {
    let forVal = fieldName.split(' ').join('');

    return (
        <div className='field'>
            <label className='field-label' htmlFor={forVal}>{fieldName}</label>
            <input 
                type="checkbox"
                name={forVal}
                id={forVal} 
            />
        </div>
    )
}

CheckboxField.propTypes = {
    fieldName: PropTypes.string.isRequired,
};

export default CheckboxField;