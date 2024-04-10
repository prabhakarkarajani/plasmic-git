// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function VisaLogoIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 8"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M5.95 7.758H3.89L2.347 1.692c-.073-.279-.229-.525-.458-.642A6.573 6.573 0 000 .408V.175h3.318c.458 0 .801.35.859.758l.801 4.376L7.037.175h2.002L5.95 7.758zm4.234 0H8.24L9.841.175h1.945l-1.602 7.583zm4.119-5.482c.057-.409.4-.642.801-.642a3.534 3.534 0 011.888.35L17.336.35A4.801 4.801 0 0015.562 0C13.674 0 12.3 1.05 12.3 2.508c0 1.11.973 1.692 1.66 2.042.743.35 1.03.584.972.934 0 .524-.572.758-1.143.758a4.79 4.79 0 01-2.003-.467l-.343 1.633c.687.292 1.43.409 2.117.409 2.117.058 3.432-.992 3.432-2.567 0-1.984-2.69-2.1-2.69-2.974zM23.8 7.758L22.255.175h-1.659a.862.862 0 00-.801.583l-2.86 7h2.002l.4-1.108h2.46l.23 1.108H23.8zm-2.917-5.54l.571 2.857h-1.602l1.03-2.858z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default VisaLogoIcon;
/* prettier-ignore-end */
