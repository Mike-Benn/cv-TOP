import edit from '../../images/edit.png'
import PropTypes from 'prop-types'

function EditItemButton({ id = null , onEdit = null }) {

    const handleEdit = () => {
        onEdit(id);
    }

    return (
        <>
            <button key={id} type="button" className={"list-item-edit-btn"} onClick={handleEdit}><img src={edit} alt='Edit (Writing Utensil) button)' className='list-button-image'/></button>
        </>
    )
}

EditItemButton.propTypes = {
    onEdit: PropTypes.func,
    id: PropTypes.string,
}

export default EditItemButton