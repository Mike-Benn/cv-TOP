import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import ListItem from '../lists/ListItem'
import UnorderedList from '../lists/UnorderedList';


function BulletListField({ fieldName = "Placeholder" }) {
    let forVal = fieldName.split(' ').join('');
    const [currVal , setCurrVal] = useState('');
    const [currList , setCurrList] = useState([]);
    

    const handleChange = (e) => {
        setCurrVal(e.target.value);
    }

    const handleSubmit = () => {
        if (currList.length === 0) {
            let inputValue = [ {id: uuidv4() , value: currVal} ];
            setCurrList(inputValue);
            setCurrVal('');
        } else if (currList.length > 4) {
            alert("Please limit your responsibilities to no more than five examples.");
        } else {
            let inputValue = [ {id: uuidv4() , value: currVal} ];
            let updatedList = currList.concat(inputValue);
            setCurrList(updatedList);
            setCurrVal('');
        }
    }

    const handleClose = (id) => {
        let updatedList = currList.filter(item => 
            id !== item.id
        );
        setCurrList(updatedList);
    }
    
    const listItems = currList.map(item => 
        <ListItem key={item.id} id={item.id} text={item.value} onClose={handleClose}  />
    )

    return (
        
        <div className="bullet-field">
            <UnorderedList itemList={listItems} className="job-experience-list" />
            <div className="field">
                <label htmlFor={forVal} className="field-label">{fieldName}</label>
                <input 
                    type="text"
                    name={forVal}
                    id={forVal}
                    className='text-input'
                    onChange={handleChange}
                    value={currVal}
                    />
                <button type="button" className="submit-btn" onClick={handleSubmit}>Add</button>
            </div>
        </div>
    )
}

BulletListField.propTypes = {
    fieldName: PropTypes.string.isRequired,
}

export default BulletListField

