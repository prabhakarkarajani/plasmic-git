// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group8Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 69 69"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M34.203 12.583a21.62 21.62 0 1021.62 21.62 21.645 21.645 0 00-21.62-21.62zm0 40.837a19.214 19.214 0 1119.214-19.217 19.236 19.236 0 01-19.214 19.214v.003z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M65.41 39.225c1.404-1.408 2.996-3.003 2.996-5.022 0-2.018-1.592-3.614-2.997-5.019-.944-.946-1.92-1.925-2.145-2.765-.242-.905.122-2.283.474-3.616.523-1.977 1.062-4.021.09-5.702-.988-1.707-3.047-2.263-5.04-2.8-1.314-.354-2.675-.722-3.316-1.363-.642-.641-1.008-2.001-1.363-3.317-.537-1.994-1.092-4.05-2.799-5.038-1.682-.973-3.727-.433-5.706.089-1.333.352-2.712.715-3.616.474C41.147 4.92 40.17 3.945 39.223 3c-1.406-1.408-3.001-3-5.02-3-2.018 0-3.613 1.592-5.019 2.997-.946.944-1.925 1.92-2.765 2.146-.905.24-2.284-.123-3.617-.475-1.978-.522-4.02-1.063-5.703-.09-1.707.989-2.261 3.048-2.799 5.04-.354 1.315-.721 2.676-1.363 3.317-.641.64-2 1.008-3.317 1.362-1.994.537-4.05 1.093-5.038 2.8-.973 1.68-.433 3.725.089 5.702.352 1.333.716 2.711.474 3.616-.23.844-1.204 1.82-2.147 2.77C1.592 30.591 0 32.187 0 34.206c0 2.018 1.592 3.614 2.998 5.022.943.946 1.92 1.925 2.144 2.766.242.904-.122 2.282-.474 3.616-.522 1.976-1.062 4.02-.089 5.701.988 1.707 3.047 2.263 5.038 2.8 1.316.355 2.676.722 3.317 1.363.64.642 1.009 2.002 1.363 3.317.537 1.994 1.093 4.05 2.8 5.038 1.68.974 3.726.433 5.703-.088 1.332-.352 2.709-.717 3.615-.475.842.225 1.82 1.201 2.767 2.146 1.408 1.404 3.003 2.997 5.018 2.997 2.016 0 3.615-1.593 5.023-2.997.946-.945 1.925-1.921 2.765-2.146.904-.242 2.284.123 3.616.475 1.977.523 4.02 1.062 5.702.089 1.707-.988 2.263-3.047 2.8-5.039.354-1.315.721-2.675 1.363-3.317.641-.641 2.001-1.008 3.317-1.363 1.994-.537 4.05-1.092 5.038-2.798.974-1.682.434-3.727-.089-5.707-.352-1.333-.716-2.71-.474-3.615.23-.845 1.204-1.82 2.148-2.767zm-3.998 6.996c.397 1.505.808 3.062.332 3.883-.49.847-2.062 1.272-3.581 1.681-1.622.438-3.297.89-4.393 1.985-1.096 1.096-1.548 2.771-1.985 4.392-.412 1.52-.834 3.094-1.68 3.583-.826.476-2.379.063-3.884-.333-1.636-.433-3.329-.878-4.851-.473-1.463.39-2.674 1.599-3.844 2.767-1.131 1.128-2.3 2.294-3.323 2.294-1.023 0-2.192-1.169-3.322-2.294-1.169-1.169-2.38-2.376-3.844-2.767a5.019 5.019 0 00-1.301-.16c-1.206.06-2.399.273-3.551.633-1.505.396-3.062.807-3.883.332-.848-.49-1.272-2.062-1.682-3.581-.436-1.622-.888-3.297-1.984-4.393-1.096-1.096-2.772-1.548-4.392-1.985-1.52-.412-3.094-.834-3.582-1.68-.476-.826-.065-2.379.333-3.884.432-1.636.88-3.329.472-4.851-.391-1.463-1.598-2.674-2.767-3.844-1.127-1.131-2.294-2.3-2.294-3.323 0-1.023 1.169-2.192 2.294-3.323 1.17-1.168 2.376-2.38 2.767-3.843.408-1.523-.04-3.216-.472-4.853-.398-1.505-.808-3.06-.333-3.882.49-.847 2.062-1.272 3.582-1.681 1.62-.437 3.3-.889 4.392-1.985 1.093-1.096 1.548-2.771 1.985-4.392.413-1.52.834-3.094 1.68-3.583.821-.476 2.378-.064 3.884.334 1.637.433 3.33.879 4.852.472C28.5 7.077 29.71 5.869 30.88 4.7c1.13-1.128 2.3-2.294 3.322-2.294 1.023 0 2.192 1.169 3.323 2.294 1.169 1.17 2.38 2.376 3.844 2.767 1.522.407 3.215-.04 4.85-.472 1.506-.397 3.062-.809 3.884-.333.847.49 1.272 2.062 1.681 3.582.438 1.62.89 3.3 1.985 4.392 1.096 1.093 2.771 1.548 4.392 1.985 1.52.413 3.094.834 3.583 1.68.475.826.064 2.379-.333 3.884-.433 1.636-.88 3.329-.473 4.852.39 1.463 1.599 2.673 2.767 3.843C64.834 32.011 66 33.18 66 34.203c0 1.023-1.169 2.192-2.294 3.323-1.169 1.169-2.376 2.38-2.767 3.844-.405 1.522.04 3.214.473 4.85z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M43.602 24.489a3.925 3.925 0 00-2.795 1.158l-8.728 8.727-4.48-4.48a3.955 3.955 0 00-6.77 2.788 3.954 3.954 0 001.18 2.801l7.275 7.276a3.953 3.953 0 005.59 0l11.523-11.521a3.954 3.954 0 00-2.795-6.75zm1.094 5.047L33.172 41.058a1.586 1.586 0 01-2.188 0l-7.274-7.276a1.547 1.547 0 012.187-2.187l5.332 5.33a1.202 1.202 0 001.7 0l9.58-9.578a1.581 1.581 0 012.187 0 1.544 1.544 0 010 2.187v.002z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group8Icon;
/* prettier-ignore-end */