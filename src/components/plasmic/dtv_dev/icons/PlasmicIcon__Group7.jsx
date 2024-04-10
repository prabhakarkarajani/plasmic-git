// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group7Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 110 110"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g filter={"url(#LPZOzib7l1IBa)"}>
        <circle cx={"55"} cy={"47"} r={"17"} fill={"currentColor"}></circle>
      </g>

      <defs>
        <filter
          id={"LPZOzib7l1IBa"}
          x={"0"}
          y={"0"}
          width={"110"}
          height={"110"}
          filterUnits={"userSpaceOnUse"}
          colorInterpolationFilters={"sRGB"}
        >
          <feFlood floodOpacity={"0"} result={"BackgroundImageFix"}></feFlood>

          <feColorMatrix
            in={"SourceAlpha"}
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}
            result={"hardAlpha"}
          ></feColorMatrix>

          <feMorphology
            radius={"8"}
            operator={"dilate"}
            in={"SourceAlpha"}
            result={"effect1_dropShadow_405_452"}
          ></feMorphology>

          <feOffset dy={"8"}></feOffset>

          <feGaussianBlur stdDeviation={"15"}></feGaussianBlur>

          <feColorMatrix
            values={"0 0 0 0 0.354167 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0"}
          ></feColorMatrix>

          <feBlend
            in2={"BackgroundImageFix"}
            result={"effect1_dropShadow_405_452"}
          ></feBlend>

          <feBlend
            in={"SourceGraphic"}
            in2={"effect1_dropShadow_405_452"}
            result={"shape"}
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default Group7Icon;
/* prettier-ignore-end */
