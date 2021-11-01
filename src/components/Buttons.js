import styled, { css } from "styled-components";

export const DefaultButton = styled.button.attrs((props) => {
  return { type: props.type || "button" };
})`
  background: #645cff;
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  text-transform: capitalize;
  display: block;
  width: 200px;
  margin: 1rem auto;
  ${({ large }) =>
    large
      ? css`
          padding: 1rem;
          font-size: 1.5rem;
          font-weight: 700;
        `
      : css`
          padding: 0.5rem;
          font-size: 1rem;
          font-weight: 400;
        `}
`;

export const HipsterButton = styled(DefaultButton)`
  width: 400px;
  background: transparent;
  color: #645cff;
  border: 1px solid #645cff;
  padding: 1rem;
  display: inline-block;
  margin-right: 1rem;

  text-decoration: none;
  text-align: center;
  font-size: 1rem;
`;
