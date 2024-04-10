// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group5Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M18.08 0H1.442C.644 0 0 .63 0 1.407v16.707c0 .778.644 1.411 1.442 1.411H18.08c.797 0 1.445-.633 1.445-1.407V1.408C19.525.628 18.877 0 18.08 0zM5.793 16.639H2.894v-9.32h2.899v9.32zm-1.45-10.59a1.679 1.679 0 11-.005-3.358 1.679 1.679 0 01.006 3.357zm12.296 10.59h-2.895v-4.53c0-1.08-.019-2.472-1.506-2.472-1.507 0-1.736 1.178-1.736 2.395v4.607h-2.89v-9.32h2.776v1.273h.038c.385-.732 1.331-1.506 2.738-1.506 2.933 0 3.475 1.93 3.475 4.439v5.114z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group5Icon;
/* prettier-ignore-end */
