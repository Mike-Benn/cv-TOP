import PropTypes from 'prop-types';

import UnorderedList from '../lists/UnorderedList';


function BulletListField({ fieldName = "Placeholder" , onInputChange , onAddChange , value , itemList  }) {
    
    let forVal = fieldName.split(' ').join('');
    
    return (
        
        <div className="bullet-field">
            <UnorderedList itemList={itemList} className="job-experience-list" />
            <div className="field">
                <label htmlFor={forVal} className="field-label">{fieldName}</label>
                <input 
                    type="text"
                    name={forVal}
                    id={forVal}
                    className='text-input'
                    onChange={onInputChange}
                    value={value}
                    />
                <button type="button" className="submit-btn" onClick={onAddChange}>Add</button>
            </div>
            
        </div>
        
    )
}

BulletListField.propTypes = {
    fieldName: PropTypes.string.isRequired,
    value: PropTypes.string,
    onInputChange: PropTypes.func,
    onAddChange: PropTypes.func,
    itemList: PropTypes.array,/* This doesn't feel like it should be an array */
    
    
    
}

export default BulletListField

