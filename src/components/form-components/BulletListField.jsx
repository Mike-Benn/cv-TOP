import PropTypes from 'prop-types';
import UnorderedList from '../lists/UnorderedList';


function BulletListField({ fieldName = "Placeholder" , onInputChange , onAddChange , value , itemList , classIdentifier }) {
    
    let forVal = fieldName.split(' ').join('');
    
    const enterPressed = (e) => {
        if (e.key === 'Enter') {
            onAddChange();
        }
    }

    return (
        
        <div className="bullet-field">
            <UnorderedList itemList={itemList} className={classIdentifier} />
            <div className="field">
                <label htmlFor={forVal} className="field-label">{fieldName}</label>
                <input 
                    type="text"
                    name={forVal}
                    id={forVal}
                    className='text-input'
                    onChange={onInputChange}
                    value={value}
                    onKeyDown={enterPressed}
                    />
                <button type="button" className="submit-btn" onClick={onAddChange}>Add</button>
            </div>
            
        </div>
        
    )
}

BulletListField.propTypes = {
    classIdentifier: PropTypes.string,
    fieldName: PropTypes.string.isRequired,
    value: PropTypes.string,
    onInputChange: PropTypes.func,
    onAddChange: PropTypes.func,
    itemList: PropTypes.arrayOf(PropTypes.node),
    
    
    
    
}

export default BulletListField

