// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group4Icon(props) {
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
          "M9.763 1.758c2.608 0 2.917.011 3.943.057.953.042 1.468.202 1.811.336a3.02 3.02 0 011.122.728c.343.343.553.668.728 1.121.133.344.294.862.335 1.812.046 1.03.058 1.338.058 3.943 0 2.609-.012 2.917-.058 3.943-.041.954-.202 1.468-.335 1.812a3.02 3.02 0 01-.728 1.12 3.002 3.002 0 01-1.122.73c-.343.133-.861.293-1.811.335-1.03.046-1.339.057-3.943.057-2.609 0-2.918-.011-3.944-.057-.953-.042-1.468-.202-1.811-.336a3.02 3.02 0 01-1.121-.728 3.002 3.002 0 01-.729-1.121c-.133-.344-.293-.862-.335-1.812-.046-1.03-.057-1.338-.057-3.943 0-2.608.011-2.917.057-3.943.042-.954.202-1.468.335-1.812a3.02 3.02 0 01.729-1.12 3.003 3.003 0 011.121-.73c.343-.133.862-.293 1.811-.335 1.026-.046 1.335-.057 3.944-.057zm0-1.758C7.113 0 6.78.011 5.739.057 4.702.103 3.99.271 3.371.511A4.765 4.765 0 001.64 1.64 4.784 4.784 0 00.51 3.367C.271 3.99.103 4.698.057 5.736.011 6.78 0 7.112 0 9.763c0 2.65.011 2.982.057 4.023.046 1.037.214 1.75.454 2.368.252.645.583 1.19 1.129 1.732a4.773 4.773 0 001.727 1.125c.622.24 1.331.408 2.369.453 1.04.046 1.372.058 4.023.058 2.65 0 2.982-.012 4.023-.058 1.037-.045 1.75-.213 2.368-.453a4.773 4.773 0 001.728-1.125 4.773 4.773 0 001.125-1.728c.24-.622.408-1.33.454-2.368.046-1.041.057-1.373.057-4.023 0-2.65-.011-2.983-.057-4.024-.046-1.037-.214-1.75-.454-2.368a4.574 4.574 0 00-1.117-1.735A4.773 4.773 0 0016.158.515c-.622-.24-1.33-.408-2.368-.454C12.745.011 12.413 0 9.763 0z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M9.763 4.748a5.016 5.016 0 105.015 5.015 5.016 5.016 0 00-5.015-5.015zm0 8.268a3.253 3.253 0 110-6.507 3.253 3.253 0 010 6.507zm6.384-8.466a1.171 1.171 0 11-2.342-.001 1.171 1.171 0 012.342 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group4Icon;
/* prettier-ignore-end */
