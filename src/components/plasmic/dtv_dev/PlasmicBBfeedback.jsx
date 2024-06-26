// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sMuK5QvKwWGrkw9DYJKXqS
// Component: fgkgj9cztLFy
import * as React from "react";
import {
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicPageGuard as PlasmicPageGuard__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  useCurrentUser
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import * as plasmicAuth from "@plasmicapp/react-web/lib/auth";
import { usePlasmicDataSourceContext } from "@plasmicapp/data-sources-context";
import BbsportsNavbar from "../../BbsportsNavbar"; // plasmic-import: 1H_RiyunFQyd/component
import Button from "../../Button"; // plasmic-import: Humveg51WdE0/component
import Fotter from "../../Fotter"; // plasmic-import: m2U6ZOt1kBnV/component
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: sMuK5QvKwWGrkw9DYJKXqS/projectcss
import sty from "./PlasmicBBfeedback.module.css"; // plasmic-import: fgkgj9cztLFy/css

createPlasmicElementProxy;

export const PlasmicBBfeedback__VariantProps = new Array();

export const PlasmicBBfeedback__ArgProps = new Array();

const $$ = {};

function PlasmicBBfeedback__RenderFunc(props) {
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
    <React.Fragment>
      <div className={projectcss.plasmic_page_wrapper}>
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
          <div className={classNames(projectcss.all, sty.freeBox__s2Zez)}>
            <BbsportsNavbar
              data-plasmic-name={"bbsportsNavbar"}
              data-plasmic-override={overrides.bbsportsNavbar}
              className={classNames("__wab_instance", sty.bbsportsNavbar)}
            />

            <div className={classNames(projectcss.all, sty.freeBox__flHsc)}>
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
                {"We're sorry to see you go, Jhon."}
              </h1>
              <div
                data-plasmic-name={"text"}
                data-plasmic-override={overrides.text}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text
                )}
              >
                {
                  "Your current subscription will remain active until March 14, 2024"
                }
              </div>
              <Button
                data-plasmic-name={"button"}
                data-plasmic-override={overrides.button}
                className={classNames("__wab_instance", sty.button)}
              >
                {"FEEDBACK"}
              </Button>
              <a
                data-plasmic-name={"link"}
                data-plasmic-override={overrides.link}
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link
                )}
                href={"https://www.plasmic.app/"}
              >
                {"Go to settings"}
              </a>
            </div>
            <Fotter
              data-plasmic-name={"fotter"}
              data-plasmic-override={overrides.fotter}
              className={classNames("__wab_instance", sty.fotter)}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "bbsportsNavbar", "h1", "text", "button", "link", "fotter"],
  bbsportsNavbar: ["bbsportsNavbar"],
  h1: ["h1"],
  text: ["text"],
  button: ["button"],
  link: ["link"],
  fotter: ["fotter"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicBBfeedback__ArgProps,
          internalVariantPropNames: PlasmicBBfeedback__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicBBfeedback__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicBBfeedback";
  } else {
    func.displayName = `PlasmicBBfeedback.${nodeName}`;
  }
  return func;
}

function withPlasmicPageGuard(WrappedComponent) {
  const PageGuard = props => (
    <PlasmicPageGuard__
      minRole={null}
      appId={"sMuK5QvKwWGrkw9DYJKXqS"}
      authorizeEndpoint={"https://studio.plasmic.app/authorize"}
      canTriggerLogin={true}
    >
      <WrappedComponent {...props} />
    </PlasmicPageGuard__>
  );

  return PageGuard;
}

function withUsePlasmicAuth(WrappedComponent) {
  const WithUsePlasmicAuthComponent = props => {
    const dataSourceCtx = usePlasmicDataSourceContext() ?? {};
    const { isUserLoading, user, token } = plasmicAuth.usePlasmicAuth({
      appId: "sMuK5QvKwWGrkw9DYJKXqS"
    });
    return (
      <PlasmicDataSourceContextProvider__
        value={{
          ...dataSourceCtx,
          isUserLoading,
          userAuthToken: token,
          user
        }}
      >
        <WrappedComponent {...props} />
      </PlasmicDataSourceContextProvider__>
    );
  };
  return WithUsePlasmicAuthComponent;
}

export const PlasmicBBfeedback = Object.assign(
  // Top-level PlasmicBBfeedback renders the root element
  withUsePlasmicAuth(withPlasmicPageGuard(makeNodeComponent("root"))),
  {
    // Helper components rendering sub-elements
    bbsportsNavbar: makeNodeComponent("bbsportsNavbar"),
    h1: makeNodeComponent("h1"),
    text: makeNodeComponent("text"),
    button: makeNodeComponent("button"),
    link: makeNodeComponent("link"),
    fotter: makeNodeComponent("fotter"),
    // Metadata about props expected for PlasmicBBfeedback
    internalVariantProps: PlasmicBBfeedback__VariantProps,
    internalArgProps: PlasmicBBfeedback__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicBBfeedback;
/* prettier-ignore-end */
