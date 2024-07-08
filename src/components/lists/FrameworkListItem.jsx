import PropTypes from 'prop-types';


function FrameworkListItem({ item }) {

    return (
        <>
            <li>{item.value}</li>
        </>
    )
    

}

FrameworkListItem.propTypes = {
    item: PropTypes.object,
}

export default FrameworkListItem