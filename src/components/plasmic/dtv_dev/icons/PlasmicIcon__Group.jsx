// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function GroupIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 7 13"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M6.103 5.622L1.372.214A.54.54 0 00.96.021a.548.548 0 00-.413.197l-.35.4a.738.738 0 00-.002.944l3.974 4.54-3.996 4.579a.718.718 0 00-.17.472.71.71 0 00.168.471l.349.398a.54.54 0 00.412.193c.156 0 .302-.07.412-.196l4.758-5.45a.719.719 0 00.17-.474.71.71 0 00-.169-.473z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default GroupIcon;
/* prettier-ignore-end */
