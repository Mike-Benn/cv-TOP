import PropTypes from 'prop-types';

function TextArea({ fieldName = "Placeholder" , onInputChange }) {
    let forVal = fieldName.split(' ').join('');

    return (
        <div className='field'>
            <label className='field-label' htmlFor={forVal}>{fieldName}</label>
            <textarea 
                name={forVal} 
                id={forVal}
                className='text-input'
                onChange={onInputChange}>
            </textarea>
        </div>
    );
}

TextArea.propTypes = {
    fieldName: PropTypes.string.isRequired,
    onInputChange: PropTypes.func,
};

export default TextArea;