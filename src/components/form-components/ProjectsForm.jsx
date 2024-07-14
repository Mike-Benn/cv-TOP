import PropTypes from 'prop-types'
import UnorderedList from '../lists/UnorderedList'
import SmallTextField from './SmallTextField'
import BulletListField from './BulletListField'
import ProjectListItem from '../lists/ProjectListItem'
import GeneralListItem from '../lists/GeneralListItem'
import SubmitButton from '../buttons/SubmitButton'


function ProjectsForm({ projectsData }) {

    const projectListItems = projectsData.projectsValues.currProjectList.map(item => 
        <ProjectListItem key={item.id} data={item} onDelete={projectsData.projectsListeners.handleDeleteProject} onEdit={projectsData.projectsListeners.handleEditProject} />
    )

    const technologyListItems = projectsData.projectsValues.currTechnologyList.map(item => 
        <GeneralListItem key={item.id} data={item} onDelete={projectsData.projectsListeners.handleDeleteTechnology} onEdit={projectsData.projectsListeners.handleEditTechnology} />
    )

    const objectiveListItems = projectsData.projectsValues.currProjectObjectiveList.map(item => 
        <GeneralListItem key={item.id} data={item} onDelete={projectsData.projectsListeners.handleDeleteProjectObjective} onEdit={projectsData.projectsListeners.handleEditProjectObjective} />
    )

    return (
        <form className="form-section">
            <h2 className="form-header">Projects</h2>
            <UnorderedList itemList={projectListItems} className="unordered-profile-list"/>
            <SmallTextField fieldName='Project Name' onInputChange={projectsData.projectsListeners.handleCurrProjectNameChange} value={projectsData.projectsValues.currProjectName}/>
            <BulletListField fieldName='Languages/Tech Used' onInputChange={projectsData.projectsListeners.handleCurrTechnologyChange} onAddChange={projectsData.projectsListeners.handleAddCurrTechnology} itemList={technologyListItems} value={projectsData.projectsValues.currTechnology} classIdentifier={"unordered-profile-list"}/>
            <BulletListField fieldName='Project Accomplishments/Objectives' onInputChange={projectsData.projectsListeners.handleCurrProjectObjectiveChange} onAddChange={projectsData.projectsListeners.handleAddCurrProjectObjective} itemList={objectiveListItems} value={projectsData.projectsValues.currProjectObjective} classIdentifier={"unordered-profile-list"}/>
            <SubmitButton buttonText='Submit Project' onClickAction={projectsData.projectsListeners.handleSubmitProject} />
        </form>
    )


}

ProjectsForm.propTypes = {
    projectsData: PropTypes.object,
}

export default ProjectsForm
