import x from '../../images/x.png'
import PropTypes from 'prop-types'

function DeleteItemButton({ id = null , onClose = null }) {

    const handleClose = () => {
        onClose(id);
    }

    return (
        <>
            <button key={id} type="button" className={"list-item-delete-btn"} onClick={handleClose}><img src={x} alt='Delete (X button)' /></button>
        </>
    )
}

DeleteItemButton.propTypes = {
    onClose: PropTypes.func,
    id: PropTypes.string,
}

export default DeleteItemButton