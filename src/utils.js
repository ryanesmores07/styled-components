export const colors = {
  primary: "#645cff",
  secondary: "red",
};

export const setupBorder = ({ width, type = "solid", color }) => {
  return `${width}px ${type} ${color}`;
};
