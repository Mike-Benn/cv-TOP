import PropTypes from 'prop-types';

function TextArea({ fieldName = "Placeholder" }) {
    let forVal = fieldName.split(' ').join('');

    return (
        <div className='field'>
            <label className='field-label' htmlFor={forVal}>{fieldName}</label>
            <textarea 
                name={forVal} 
                id={forVal}>
            </textarea>
        </div>
    );
}

TextArea.propTypes = {
    fieldName: PropTypes.string.isRequired,
};

export default TextArea;