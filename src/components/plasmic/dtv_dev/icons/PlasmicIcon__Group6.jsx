// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group6Icon(props) {
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
          "M9.763 0A9.762 9.762 0 000 9.763c0 4.137 2.574 7.669 6.205 9.091-.084-.774-.164-1.956.034-2.799l1.144-4.85s-.294-.584-.294-1.45c0-1.358.786-2.372 1.766-2.372.831 0 1.236.625 1.236 1.377 0 .839-.534 2.09-.809 3.249-.229.972.488 1.766 1.445 1.766 1.736 0 3.07-1.83 3.07-4.47 0-2.338-1.678-3.974-4.076-3.974-2.777 0-4.409 2.083-4.409 4.237 0 .84.324 1.74.729 2.227.08.096.091.183.068.279-.072.309-.24.972-.27 1.106-.042.179-.142.217-.328.13-1.22-.569-1.983-2.35-1.983-3.784 0-3.081 2.238-5.907 6.448-5.907 3.387 0 6.018 2.414 6.018 5.64 0 3.364-2.12 6.072-5.064 6.072-.988 0-1.919-.515-2.239-1.122 0 0-.488 1.865-.606 2.323-.221.846-.816 1.91-1.213 2.559a9.786 9.786 0 002.89.434 9.762 9.762 0 009.763-9.762A9.762 9.762 0 009.763 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group6Icon;
/* prettier-ignore-end */
