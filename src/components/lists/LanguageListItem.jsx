import PropTypes from 'prop-types';


function LanguageListItem({ item }) {

    return (
        <>
            <li>{item.value}</li>
        </>
    )
    

}

LanguageListItem.propTypes = {
    item: PropTypes.object,
}

export default LanguageListItem