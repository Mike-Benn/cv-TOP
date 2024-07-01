import PropTypes from 'prop-types'
import DeleteItemButton from '../buttons/DeleteItemButton'


function JobResponsibilityListItem({ id = "" , text = "" , onDelete = null , }) {
    return (
        <>
            <li key={id}>
                <p>{text}</p>
                <DeleteItemButton id={id} onDelete={onDelete}/>
            </li>
            
        </>
    )
}

JobResponsibilityListItem.propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string,
    onDelete: PropTypes.func,
}

export default JobResponsibilityListItem