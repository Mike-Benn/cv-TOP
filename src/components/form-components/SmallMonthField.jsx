import PropTypes from 'prop-types'


function SmallMonthField({ fieldName = "Placeholder" , onInputChange , value}) {
    let forVal = fieldName.split(' ').join('');

    return (
        <div className='field'>
            <label className='field-label' htmlFor={forVal}>{fieldName}</label>
            <input 
                type="month"
                name={forVal}
                id={forVal} 
                className='text-input'
                onChange={onInputChange}
                value={value}
            />
        </div>
    )
}

SmallMonthField.propTypes = {
    fieldName: PropTypes.string.isRequired,
    onInputChange: PropTypes.func,
    value: PropTypes.string,
};

export default SmallMonthField;