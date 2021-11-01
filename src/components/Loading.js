import styled, { keyframes } from "styled-components";
import { colors, setupBorder } from "../utils";

const spinner = keyframes`
to {
    transform: rotate(360deg);
}
`;

const Loading = styled.div`
  width: 6rem;
  height: 6rem;
  border: ${setupBorder({ width: 5, color: "#ccc" })};
  border-radius: 50%;
  border-top-color: ${colors.primary};
  animation: ${spinner} 0.6s linear infinite;
`;

export default Loading;
