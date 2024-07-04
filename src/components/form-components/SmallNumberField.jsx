import PropTypes from 'prop-types'


function SmallNumberField({ fieldName = "Placeholder", placeHolder = "" , onInputChange , value}) {
    let forVal = fieldName.split(' ').join('');

    return (
        <div className='field'>
            <label className='field-label' htmlFor={forVal}>{fieldName}</label>
            <input 
                type="number"
                name={forVal}
                id={forVal} 
                className='text-input'
                placeholder={placeHolder}
                onChange={onInputChange}
                value={value}
            />
        </div>
    )
}

SmallNumberField.propTypes = {
    fieldName: PropTypes.string.isRequired,
    placeHolder: PropTypes.string,
    value: PropTypes.string,
    onInputChange: PropTypes.func,

};

export default SmallNumberField