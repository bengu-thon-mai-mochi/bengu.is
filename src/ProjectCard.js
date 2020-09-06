import React from 'react';
import './ProjectCard.css';
import { Icon } from 'semantic-ui-react'

const ProjectCard = ({ title, githubRepo, desc, deployLink, thumbnail }) => (
    <div className="project-card">
        <h3>{title}</h3>
        <div className="project-desc">
            <div className="project-icon">
                <Icon name={thumbnail} size="massive" color='red'/>
            </div>
            <p>{desc}</p>
        </div>
        <div className="project-links">
            <a href={githubRepo}>Visit Repo</a>
            <a href={deployLink}>Live Demo</a>  
        </div>
    </div>
)

export default ProjectCard;
