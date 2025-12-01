import React from "react";
import ProjectItem from "./ProjectItem";
import Section from "../Utils/Section";
import Button from "../Utils/Button";

const Project = ({ projects, onChange, onAdd, onDelete }) => {
  const projectItems = projects.map((project) => (
    <ProjectItem
      key={project.id}
      id={project.id}
      project={project}
      onChange={onChange}
      onDelete={onDelete}
    />
  ));

  return (
    <Section title="Projects" titlePadding="0.5rem" direction="column">
      {projectItems}
      <Button text="Add" onClick={onAdd}></Button>
    </Section>
  );
};

export default Project;
