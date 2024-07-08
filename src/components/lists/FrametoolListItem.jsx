import PropTypes from 'prop-types';


function FrametoolListItem({ item }) {

    return (
        <>
            <li>{item.value}</li>
        </>
    )
    

}

FrametoolListItem.propTypes = {
    item: PropTypes.func,
}

export default FrametoolListItem