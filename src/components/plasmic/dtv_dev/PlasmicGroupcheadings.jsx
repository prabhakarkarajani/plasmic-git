// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sMuK5QvKwWGrkw9DYJKXqS
// Component: t4t5iuuXtsDC
import * as React from "react";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  useCurrentUser
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: sMuK5QvKwWGrkw9DYJKXqS/projectcss
import sty from "./PlasmicGroupcheadings.module.css"; // plasmic-import: t4t5iuuXtsDC/css

createPlasmicElementProxy;

export const PlasmicGroupcheadings__VariantProps = new Array();

export const PlasmicGroupcheadings__ArgProps = new Array();

const $$ = {};

function PlasmicGroupcheadings__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = useCurrentUser?.() || {};
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.root
      )}
    >
      <h1
        className={classNames(
          projectcss.all,
          projectcss.h1,
          projectcss.__wab_text,
          sty.h1__i0Kp5
        )}
      >
        {"SHOP"}
      </h1>
      <h1
        className={classNames(
          projectcss.all,
          projectcss.h1,
          projectcss.__wab_text,
          sty.h1__eJt72
        )}
      >
        {"TRIPLE"}
      </h1>
      <h1
        className={classNames(
          projectcss.all,
          projectcss.h1,
          projectcss.__wab_text,
          sty.h1__pfc0O
        )}
      >
        {"THREAT"}
      </h1>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicGroupcheadings__ArgProps,
          internalVariantPropNames: PlasmicGroupcheadings__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicGroupcheadings__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicGroupcheadings";
  } else {
    func.displayName = `PlasmicGroupcheadings.${nodeName}`;
  }
  return func;
}

export const PlasmicGroupcheadings = Object.assign(
  // Top-level PlasmicGroupcheadings renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicGroupcheadings
    internalVariantProps: PlasmicGroupcheadings__VariantProps,
    internalArgProps: PlasmicGroupcheadings__ArgProps
  }
);

export default PlasmicGroupcheadings;
/* prettier-ignore-end */
