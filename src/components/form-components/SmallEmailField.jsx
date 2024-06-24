import PropTypes from 'prop-types'


function SmallEmailField({ fieldName = "Placeholder" }) {
    let forVal = fieldName.split(' ').join('');

    return (
        <div className='field'>
            <label className='field-label' htmlFor={forVal}>{fieldName}</label>
            <input 
                type="email"
                name={forVal}
                id={forVal} 
                className='text-input'
                placeholder="example@site.com"
            />
        </div>
    )
}

SmallEmailField.propTypes = {
    fieldName: PropTypes.string.isRequired,
    
};

export default SmallEmailField