// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function PayIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 10"}
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
          "M.917 7.245V4.31H2.43c.621 0 1.145-.208 1.572-.618l.102-.104c.78-.85.73-2.172-.102-2.958A2.162 2.162 0 002.43 0H0v7.245h.917zm0-3.825V.89h1.537c.33 0 .644.127.878.358.495.485.506 1.294.028 1.797a1.19 1.19 0 01-.905.375H.916zm7.465-.745c-.393-.364-.928-.549-1.606-.549-.871 0-1.526.324-1.959.965l.809.514c.296-.439.7-.658 1.213-.658.324 0 .637.12.882.34.24.208.376.509.376.827v.213c-.353-.196-.797-.3-1.344-.3-.638 0-1.15.15-1.532.456-.381.306-.575.71-.575 1.225-.011.468.188.913.541 1.213.36.324.815.485 1.35.485.632 0 1.133-.283 1.514-.849h.04v.688h.877V4.189c0-.642-.193-1.15-.586-1.514zM5.894 6.332a.753.753 0 01-.302-.607c0-.271.125-.497.37-.676.25-.179.564-.271.934-.271.512-.006.911.11 1.196.34 0 .394-.154.734-.456 1.023a1.446 1.446 0 01-1.03.433 1.11 1.11 0 01-.712-.242zm5.044 3.09l3.064-7.134h-.997l-1.418 3.559h-.017l-1.452-3.559h-.996l2.01 4.639-1.139 2.495h.945z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PayIcon;
/* prettier-ignore-end */
