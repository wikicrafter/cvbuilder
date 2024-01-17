// Import the necessary packages
import React from "react";
import styled from "styled-components";

// Define the FileInput component
const FileInput = ({ label, name, onChange }) => {
  return (
    // Render a label with a hidden file input and a visible label
    <Label>
      <FileInputWrapper type="file" onChange={onChange} name={name} />
      {label}
    </Label>
  );
};

// Style the file input to be hidden
const FileInputWrapper = styled.input`
  display: none;
`;

// Style the label to make it look like a button
const Label = styled.label`
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid transparent;
  background-color: #fff;

  &:active {
    border: 1px solid ${({ theme }) => theme.colors.lightActive};
  }
`;

// Export the FileInput component
export default FileInput;