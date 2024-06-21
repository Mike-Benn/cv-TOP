import PropTypes from 'prop-types'


function SmallNumberField({ fieldName = "Placeholder" }) {
    let forVal = fieldName.split(' ').join('');

    return (
        <div className='field'>
            <label className='field-label' htmlFor={forVal}>{forVal}</label>
            <input 
                type="number"
                name={forVal}
                id={forVal} 
            />
        </div>
    )
}

SmallNumberField.propTypes = {
    fieldName: PropTypes.string.isRequired,
};

export default SmallNumberField