import React from "react";
import Input from "../Utils/Input";
import TextArea from "../Utils/TextArea";
import Button from "../Utils/Button";

const ProjectItem = ({ id, project, onChange, onDelete }) => {
  return (
    <>
      <Input
        onChange={(e) => onChange(e, id)}
        type="text"
        name="projectName"
        placeholder="Project name"
        value={project.projectName}
      />
      <Input
        onChange={(e) => onChange(e, id)}
        type="text"
        name="date"
        placeholder="Year or date"
        value={project.date}
      />
      <TextArea
        onChange={(e) => onChange(e, id)}
        name="description"
        placeholder="Short description"
        value={project.description}
      />
      <Button text="Delete" onClick={() => onDelete(id)}></Button>
    </>
  );
};

export default ProjectItem;
