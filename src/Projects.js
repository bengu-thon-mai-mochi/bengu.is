import React from 'react';
import ProjectCard from './ProjectCard.js';

const Projects = () => (
    <>
    <h1 className="section__title">What I've done</h1>
    <section className="projects" id="projects">
        
        <ProjectCard title="To-do list" githubRepo="https://github.com/bengu-thon-mai-mochi/To-do-List" deployLink="https://laughing-joliot-045068.netlify.app/" desc="An app to track things to do. Built with ReactJS, deployed with Netlify" thumbnail="list alternate outline"/>
        <ProjectCard title="Github User Search" desc="An app browses through github API through user query. Built with ReactJS, deployed with Netlify." thumbnail="keyboard outline"/>
        <ProjectCard title="Share a Meal" githubRepo="https://github.com/bengu-thon-mai-mochi/share-a-meal" deployLink="https://share-a-meal.herokuapp.com/" desc="Reservation app for sharing meals. Built with Javascript, mySQL, NodeJS, ExpressJS. Deployed with Heroku." thumbnail="utensils"/>
    </section>
    </>
)

export default Projects;
