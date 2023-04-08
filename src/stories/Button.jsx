import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DefaultButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  margin-top: 10px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
    transition: opacity 0.5s;
  }
`;

export const Button = ({ children, onClick, ...props }) => {
  return (
    <DefaultButton onClick={onClick} {...props}>
      <span>{children}</span>
    </DefaultButton>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func
};

Button.defaultProps = {
  children: 'Button',
  onClick: () => alert('Btn clicked!')
};
