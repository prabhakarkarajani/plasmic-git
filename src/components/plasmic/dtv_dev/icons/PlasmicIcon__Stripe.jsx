// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function StripeIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 25 11"}
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
          "M13.411 1.434l-1.727.382V.374L13.41 0v1.434zm3.592.799a1.92 1.92 0 00-1.349.551l-.09-.438h-1.513v8.239l1.72-.375.007-2c.248.184.612.446 1.218.446 1.232 0 2.353-1.018 2.353-3.258-.007-2.049-1.142-3.165-2.346-3.165zM16.59 7.1c-.406 0-.647-.148-.812-.332l-.007-2.621c.179-.205.427-.346.819-.346.626 0 1.06.72 1.06 1.646 0 .947-.427 1.653-1.06 1.653zm8.18-1.63c0-1.809-.853-3.236-2.484-3.236-1.637 0-2.628 1.427-2.628 3.222 0 2.127 1.17 3.2 2.849 3.2.818 0 1.438-.19 1.906-.458V6.783a3.58 3.58 0 01-1.686.389c-.668 0-1.26-.24-1.335-1.074h3.365l.005-.23a17.4 17.4 0 00.008-.399zm-3.399-.671c0-.799.475-1.13.909-1.13.42 0 .867.331.867 1.13h-1.776zm-9.688-2.445h1.727v6.183h-1.727V2.353zm-1.961 0l.11.523c.406-.763 1.211-.608 1.431-.523v1.625c-.213-.078-.901-.176-1.307.368v4.19h-1.72V2.353h1.486zM6.393.82l-1.68.367-.006 5.66c0 1.046.763 1.816 1.782 1.816.564 0 .977-.106 1.204-.233V6.995c-.22.092-1.308.417-1.308-.629V3.858h1.308V2.353H6.385L6.392.82zM2.325 3.766c-.365 0-.585.106-.585.382 0 .3.379.433.849.597.766.268 1.775.62 1.78 1.925 0 1.265-.985 1.993-2.416 1.993-.592 0-1.238-.12-1.878-.403V6.578c.578.326 1.307.566 1.878.566.386 0 .66-.106.66-.431 0-.334-.41-.486-.906-.67C.953 5.763 0 5.41 0 4.233c0-1.251.929-2 2.326-2 .57 0 1.135.092 1.706.325v1.66a3.759 3.759 0 00-1.706-.452z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default StripeIcon;
/* prettier-ignore-end */
