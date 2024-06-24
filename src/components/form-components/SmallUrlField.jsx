import PropTypes from 'prop-types'


function SmallUrlField({ fieldName = "Placeholder" }) {
    let forVal = fieldName.split(' ').join('');

    return (
        <div className='field'>
            <label className='field-label' htmlFor={forVal}>{fieldName}</label>
            <input 
                type="url"
                name={forVal}
                id={forVal} 
                className='text-input'
                placeholder='www.mywebsite.com'
            />
        </div>
    )
}

SmallUrlField.propTypes = {
    fieldName: PropTypes.string.isRequired,

};

export default SmallUrlField