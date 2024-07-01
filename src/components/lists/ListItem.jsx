import PropTypes from 'prop-types'
import DeleteItemButton from '../buttons/DeleteItemButton'


function ListItem({ id = "" , text = "" , onClose = null}) {
    return (
        <>
            <li key={id}>
                <p>{text}</p>
                <DeleteItemButton id={id} onClose={onClose}/>
            </li>
            
        </>
    )
}

ListItem.propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onClose: PropTypes.func,
}

export default ListItem