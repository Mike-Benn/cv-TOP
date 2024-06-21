import PropTypes from 'prop-types'


function SmallMonthField({ fieldName = "Placeholder" }) {
    let forVal = fieldName.split(' ').join('');

    return (
        <div className='field'>
            <label className='field-label' htmlFor={forVal}>{fieldName}</label>
            <input 
                type="month"
                name={forVal}
                id={forVal} 
            />
        </div>
    )
}

SmallMonthField.propTypes = {
    fieldName: PropTypes.string.isRequired,
};

export default SmallMonthField;