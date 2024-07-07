import PropTypes from 'prop-types';

function SmallTextField({ fieldName = "Placeholder" , placeHolder = "" , onInputChange , value}) {
    let forVal = fieldName.split(' ').join('');

    return (
        <div className='field'>
            <label className='field-label' htmlFor={forVal}>{fieldName}</label>
            <input 
                type='text'
                name={forVal}
                id={forVal}
                className='text-input'
                placeholder={placeHolder}
                onChange={onInputChange}
                value={value}
                
                
            />
        </div>
        
    );
}

SmallTextField.propTypes = {
    fieldName: PropTypes.string.isRequired,
    placeHolder: PropTypes.string,
    onInputChange: PropTypes.func,
    value: PropTypes.string
};


export default SmallTextField;