import x from '../../images/x.png'
import PropTypes from 'prop-types'

function DeleteItemButton({ id = null , onDelete = null }) {

    const handleClose = () => {
        onDelete(id);
    }

    return (
        <>
            <button key={id} type="button" className={"list-item-delete-btn"} onClick={handleClose}><img src={x} alt='Delete (X button)' className='list-button-image'/></button>
        </>
    )
}

DeleteItemButton.propTypes = {
    onDelete: PropTypes.func,
    id: PropTypes.string,
}

export default DeleteItemButton