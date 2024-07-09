import PropTypes from 'prop-types';


function ProfileListItem({ item }) {
    
    return (
        <>
            <li>{item.value}</li>
        </>
    )
    

}

ProfileListItem.propTypes = {
    item: PropTypes.object,
}

export default ProfileListItem