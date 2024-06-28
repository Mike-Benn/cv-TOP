import PropTypes from 'prop-types'


function ListItem({ id = "" , text = "" }) {
    return (
        <>
            <li key={id}>{text}</li>
        </>
    )
}

ListItem.propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default ListItem