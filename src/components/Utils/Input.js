import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Input = ({ type, name, placeholder, onChange, value }) => {
  return (
    <InputWrapper
      onChange={onChange}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      aria-label={name || placeholder || "Input field"}
    />
  );
};

const InputWrapper = styled.input`
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid transparent;

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.lightActive};
  }
`;

export default Input;

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
