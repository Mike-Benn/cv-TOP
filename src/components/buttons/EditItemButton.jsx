import edit from '../../images/edit.png'
import PropTypes from 'prop-types'

function EditItemButton({ id = null , onDelete = null }) {

    const handleClose = () => {
        onDelete(id);
    }

    return (
        <>
            <button key={id} type="button" className={"list-item-edit-btn"} onClick={handleClose}><img src={edit} alt='Edit (Writing Utensil) button)' /></button>
        </>
    )
}

EditItemButton.propTypes = {
    onDelete: PropTypes.func,
    id: PropTypes.string,
}

export default EditItemButton