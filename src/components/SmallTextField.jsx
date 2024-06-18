import PropTypes from 'prop-types';

function SmallTextField({ fieldName = "Placeholder" }) {
    let forVal = fieldName.split(' ').join('');

    return (
        <div>
            <label htmlFor={forVal}>{fieldName}</label>
            <input 
                type='text'
                name={forVal}
                id={forVal}
            />
        </div>
        
    );
}

SmallTextField.propTypes = {
    fieldName: PropTypes.string.isRequired,
};


export default SmallTextField;