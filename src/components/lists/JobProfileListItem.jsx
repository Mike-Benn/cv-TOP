import PropTypes from 'prop-types'
import EditItemButton from '../buttons/EditItemButton'
import DeleteItemButton from '../buttons/DeleteItemButton'


function JobProfileListItem({ data = {} , onDelete = null , onEdit = null }) {
    return (
        <>
            <li className='generator-list-item' key={data.id}>
                <p>{data.position}</p>
                <div className="list-btn-container">
                    <EditItemButton id={data.id} onEdit={onEdit} />
                    <DeleteItemButton id={data.id} onDelete={onDelete} />
                </div>
            </li>
        </>
    )
}

JobProfileListItem.propTypes = {
    data: PropTypes.object.isRequired,
    onDelete: PropTypes.func,
    onEdit: PropTypes.func,
}

export default JobProfileListItem