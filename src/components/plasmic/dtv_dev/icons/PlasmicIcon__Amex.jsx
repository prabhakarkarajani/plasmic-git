// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function AmexIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 29 8"}
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
          "M3.181 0L0 7.247h3.808L4.28 6.09h1.08l.472 1.156h4.191v-.882l.374.882h2.168l.374-.9v.9h8.718l1.06-1.126.992 1.126 4.478.01-3.191-3.613L28.186 0H23.78l-1.032 1.105L21.785 0h-9.483l-.815 1.87L10.654 0h-3.8v.852L6.43 0H3.18zm.737 1.029h1.856l2.11 4.914V1.03h2.034l1.63 3.523L13.05 1.03h2.023v5.2h-1.231l-.01-4.075-1.795 4.075h-1.102L9.131 2.154V6.23H6.598l-.48-1.166H3.523l-.479 1.165H1.687L3.918 1.03zm17.288 0h-5.007v5.197h4.929l1.589-1.722 1.53 1.722h1.601l-2.326-2.583 2.326-2.614h-1.53l-1.581 1.703-1.531-1.703zM4.82 1.91l-.855 2.077h1.709L4.82 1.909zm12.615 1.146v-.95h3.123l1.363 1.518L20.5 5.149h-3.063V4.113h2.73V3.055h-2.73z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default AmexIcon;
/* prettier-ignore-end */
