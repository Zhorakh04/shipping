import React from "react";

const RightSvg = ({ ...props }: any) => {
  return (
    <svg
      width="6"
      height="10"
      viewBox="0 0 6 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.214405 5.49482L4.74041 9.79482C4.88212 9.92654 5.06843 9.99976 5.26191 9.99976C5.45538 9.99976 5.64169 9.92654 5.78341 9.79482C5.85143 9.73156 5.90568 9.65495 5.94278 9.56978C5.97988 9.48461 5.99902 9.39272 5.99902 9.29982C5.99902 9.20692 5.97988 9.11503 5.94278 9.02986C5.90568 8.94469 5.85143 8.86808 5.78341 8.80482L1.78341 4.99982L5.78341 1.19482C5.85143 1.13155 5.90568 1.05495 5.94278 0.96978C5.97988 0.884613 5.99902 0.792717 5.99902 0.699821C5.99902 0.606926 5.97988 0.515022 5.94278 0.429855C5.90568 0.344688 5.85143 0.268085 5.78341 0.204819C5.64175 0.0733843 5.45565 0.000350928 5.26241 0.00035092C5.06916 0.000350912 4.88306 0.0733842 4.74141 0.204819L0.215405 4.50482C0.147382 4.56809 0.0931303 4.64469 0.0560324 4.72986C0.0189345 4.81502 -0.0002134 4.90692 -0.000213404 4.99982C-0.000213409 5.09271 0.0189345 5.18462 0.0560324 5.26978C0.0931303 5.35495 0.147382 5.43155 0.215405 5.49482L0.214405 5.49482Z"
        fill={!props.color ? "#5F6C7B" : props.color}
      />
    </svg>
  );
};

export default RightSvg;
