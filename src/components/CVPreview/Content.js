import React from "react";
import styled from "styled-components";
import ExperienceItem from "./ExperienceItem";
import EducationItem from "./EducationItem";
import ProjectItem from "./ProjectItem";
import Section from "../Utils/Section";

const Content = ({ personalInfo, experience, education, projects }) => {
  const experienceItems = experience.map((experienceItem) => (
    <ExperienceItem key={experienceItem.id} experienceItem={experienceItem} />
  ));

  const educationItems = education.map((educationItem) => (
    <EducationItem key={educationItem.id} educationItem={educationItem} />
  ));

  const projectItems = projects.map((projectItem) => (
    <ProjectItem key={projectItem.id} project={projectItem} />
  ));

  return (
    <ContentWrapper>
      <Section title="Description" contrastTitle>
        <Description>{personalInfo.description}</Description>
      </Section>
      <Section title="Experience" direction="column" contrastTitle>
        {experienceItems}
      </Section>
      <Section title="Education" direction="column" contrastTitle>
        {educationItems}
      </Section>
      <Section title="Projects" direction="column" contrastTitle>
        {projectItems}
      </Section>
    </ContentWrapper>
  );
};

const ContentWrapper = styled.div`
  padding: 2rem 0 2rem 2rem;
  background-color: ${({ theme }) => theme.colors.light};
  box-sizing: border-box;
`;

const Description = styled.div`
  font-style: italic;
`;

export default Content;
