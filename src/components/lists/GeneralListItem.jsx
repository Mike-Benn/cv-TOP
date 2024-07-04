import PropTypes from 'prop-types'
import EditItemButton from '../buttons/EditItemButton'
import DeleteItemButton from '../buttons/DeleteItemButton'


function GeneralListItem({ data = {} , onDelete = null , onEdit = null}) {
    return (
        <>
            <li key={data.id}>
                <p>{data.value}</p>
                <div className="list-btn-container">
                    <EditItemButton id={data.id} onEdit={onEdit} />
                    <DeleteItemButton id={data.id} onDelete={onDelete}/>
                </div>
            </li>
            
        </>
    )
}

GeneralListItem.propTypes = {
    data: PropTypes.object,
    onDelete: PropTypes.func,
    onEdit: PropTypes.func,
}

export default GeneralListItem