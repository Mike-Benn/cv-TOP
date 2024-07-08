import PropTypes from 'prop-types';


function ResponsibilityListItem({ item }) {
    
    return (
        <>
            <li>{item.value}</li>
        </>
    )
    

}

ResponsibilityListItem.propTypes = {
    item: PropTypes.object,
}

export default ResponsibilityListItem