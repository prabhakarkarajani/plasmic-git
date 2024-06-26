// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sMuK5QvKwWGrkw9DYJKXqS
// Component: zq2i0ICbKSqp
import * as React from "react";
import {
  PlasmicImg as PlasmicImg__,
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
import sty from "./PlasmicImagesecom.module.css"; // plasmic-import: zq2i0ICbKSqp/css
import crusherEvoFeatureBenefit1Jpeg42B1Q8UBGr7E from "./images/crusherEvoFeatureBenefit1Jpeg.jpg"; // plasmic-import: 42B1q8uBGr7e/picture

createPlasmicElementProxy;

export const PlasmicImagesecom__VariantProps = new Array();

export const PlasmicImagesecom__ArgProps = new Array();

const $$ = {};

function PlasmicImagesecom__RenderFunc(props) {
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
      <div
        data-plasmic-name={"columns"}
        data-plasmic-override={overrides.columns}
        className={classNames(projectcss.all, sty.columns)}
      >
        <div className={classNames(projectcss.all, sty.column__szkxm)}>
          <PlasmicImg__
            alt={""}
            className={classNames(sty.img__bIxcr)}
            displayHeight={"782px"}
            displayMaxHeight={"none"}
            displayMaxWidth={"782px"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"100%"}
            loading={"lazy"}
            src={{
              src: crusherEvoFeatureBenefit1Jpeg42B1Q8UBGr7E,
              fullWidth: 1080,
              fullHeight: 1080,
              aspectRatio: undefined
            }}
          />

          <div
            data-plasmic-name={"freeBox"}
            data-plasmic-override={overrides.freeBox}
            className={classNames(projectcss.all, sty.freeBox)}
          >
            <div
              data-plasmic-name={"text"}
              data-plasmic-override={overrides.text}
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text
              )}
            >
              {"Our most Sustainable Earbuds Ever"}
            </div>
            <h1
              data-plasmic-name={"h1"}
              data-plasmic-override={overrides.h1}
              className={classNames(
                projectcss.all,
                projectcss.h1,
                projectcss.__wab_text,
                sty.h1
              )}
            >
              {"LEARN ABOUT ECOBUDS >"}
            </h1>
          </div>
        </div>
        <div className={classNames(projectcss.all, sty.column__aQc7A)}>
          <PlasmicImg__
            alt={""}
            className={classNames(sty.img__dolSg)}
            displayHeight={"782px"}
            displayMaxHeight={"none"}
            displayMaxWidth={"782px"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"100%"}
            loading={"lazy"}
            src={
              "https://www.skullcandy.com/cdn/shop/files/HP-p3-2x2_Mia_Brooks-Crusher-ANC-2.png?v=1710438357"
            }
          />
        </div>
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "columns", "freeBox", "text", "h1"],
  columns: ["columns", "freeBox", "text", "h1"],
  freeBox: ["freeBox", "text", "h1"],
  text: ["text"],
  h1: ["h1"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicImagesecom__ArgProps,
          internalVariantPropNames: PlasmicImagesecom__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicImagesecom__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicImagesecom";
  } else {
    func.displayName = `PlasmicImagesecom.${nodeName}`;
  }
  return func;
}

export const PlasmicImagesecom = Object.assign(
  // Top-level PlasmicImagesecom renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    columns: makeNodeComponent("columns"),
    freeBox: makeNodeComponent("freeBox"),
    text: makeNodeComponent("text"),
    h1: makeNodeComponent("h1"),
    // Metadata about props expected for PlasmicImagesecom
    internalVariantProps: PlasmicImagesecom__VariantProps,
    internalArgProps: PlasmicImagesecom__ArgProps
  }
);

export default PlasmicImagesecom;
/* prettier-ignore-end */
