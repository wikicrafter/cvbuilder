import React from "react";
import styled from "styled-components";
import Subsection from "../Utils/Subsection";

const ProjectItem = ({ project }) => {
  return (
    <ProjectItemWrapper>
      <Period>{project.date}</Period>
      <Info>
        <Subsection title={project.projectName}>
          <Description>{project.description}</Description>
        </Subsection>
      </Info>
    </ProjectItemWrapper>
  );
};

const ProjectItemWrapper = styled.div`
  display: flex;
`;

const Period = styled.div`
  width: 25%;
  font-weight: bold;
  margin-right: 2rem;
`;

const Info = styled.div`
  width: 70%;
`;

const Description = styled.p`
  line-height: 1.4;
`;

export default ProjectItem;
