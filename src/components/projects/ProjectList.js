import React from 'react'
import ProjectSummary from './ProjectSummary'
import {Link } from 'react-router-dom'


const ProjectList = ({projects})=>{
    return (
        <div className="project-list section">
            {projects && projects.map(project => { // projects && is used in the beginning of this sentence mainly because we want it to display something even though there is no data that might be currently available
                return (
                    <Link to={'/projects/' + project.id} key={project.id}>
                    <ProjectSummary project={project} />
                    </Link>
                )
            })}
        </div>
        

    );
}

export default ProjectList;