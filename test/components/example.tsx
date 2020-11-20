import React from "react";

const SVG = ({
  fill = "#92929D",
  width = "100%",
  className = "",
  viewBox = "0 0 20 20",
}) => (
  <svg
    width={width}
    height={width}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <g fill="none" fillRule="evenodd" opacity=".9">
      <path
        fill="#FFF"
        d="M5.833 10.833H10.833V15.833H5.833z"
        transform="translate(1.667 1.667)"
      />
      <path
        fill={fill}
        d="M8.886.21c-.315-.28-.79-.28-1.106 0l-1.114.99-5 4.444L.28 6.877c-.344.306-.375.832-.07 1.177.306.344.832.373 1.176.07l.28-.25v7.96c0 .46.373.833.834.833h11.666c.461 0 .834-.374.834-.834V7.874l.28.25c.158.14.356.21.553.21.23 0 .458-.095.623-.28.305-.345.275-.87-.07-1.177L8.886.21zM13.333 15h-1.667v-4.167c0-.46-.372-.833-.833-.833h-5c-.46 0-.833.373-.833.833V15H3.333V6.393l5-4.445 5 4.444V15zm-6.667 0H10v-3.333H6.666V15z"
        transform="translate(1.667 1.667)"
      />
    </g>
  </svg>
);

export default SVG;
