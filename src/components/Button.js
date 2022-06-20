import React from 'react'
import styled from 'styled-components'

const Button = ({value, color}) => {
  return (
    <StyledButton className={color}>
        {value}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  padding: 10px 1rem;
  border: none;
  width: 200px;
  height: 47px;
  /* font-family: ; */
  color: white;
  border-radius: 4px;
`;
export default Button;