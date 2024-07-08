import PropTypes from 'prop-types'

function UnorderedList({ itemList , className }) {
    return (
        <>
            <ul className={className}>{itemList}</ul>       
        </>
    )
}

UnorderedList.propTypes = {
    className: PropTypes.string,
    itemList: PropTypes.arrayOf(PropTypes.node),
}

export default UnorderedList