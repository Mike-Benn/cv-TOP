import PropTypes from 'prop-types'
import ProjectProfile from './ProjectProfile'




function ProjectsPreview({ projectsValues }) {
    
    const projects = projectsValues.currProjectList.map(item => 
        <ProjectProfile key={item.id} item={item} />
    )


    return (
        <section className="preview-projects-info">
            <h3 className="preview-section-header">PROJECTS</h3>
            <div className="preview-project-profiles">
                {projects}
            </div>
        </section>
    )
}

ProjectsPreview.propTypes = {
    projectsValues: PropTypes.object,

}

export default ProjectsPreview