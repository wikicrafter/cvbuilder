import React from "react";
import styled from "styled-components";

const CVHeader = ({ personalInfo }) => {
  const { firstName, lastName, title } = personalInfo;

  return (
    <CVHeaderWrapper>
      <h1>
        {firstName} {lastName}
      </h1>
      <p>{title}</p>
    </CVHeaderWrapper>
  );
};

const CVHeaderWrapper = styled.header`
  grid-column: span 2;
  padding: 2rem 0;
  padding-left: 2rem;
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.light};
  box-sizing: border-box;
`;

export default CVHeader;
