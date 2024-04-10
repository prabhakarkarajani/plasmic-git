// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sMuK5QvKwWGrkw9DYJKXqS
// Component: AYCB2JsD6a96
import * as React from "react";
import {
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicPageGuard as PlasmicPageGuard__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  renderPlasmicSlot,
  useCurrentUser
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import * as plasmicAuth from "@plasmicapp/react-web/lib/auth";
import { usePlasmicDataSourceContext } from "@plasmicapp/data-sources-context";
import BbsportsNavbar from "../../BbsportsNavbar"; // plasmic-import: 1H_RiyunFQyd/component
import SubscriptionSucces from "../../SubscriptionSucces"; // plasmic-import: E54ySe9kb_ns/component
import Fotter from "../../Fotter"; // plasmic-import: m2U6ZOt1kBnV/component
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: sMuK5QvKwWGrkw9DYJKXqS/projectcss
import sty from "./PlasmicNewPage.module.css"; // plasmic-import: AYCB2JsD6a96/css

createPlasmicElementProxy;

export const PlasmicNewPage__VariantProps = new Array();

export const PlasmicNewPage__ArgProps = new Array("children");

const $$ = {};

function PlasmicNewPage__RenderFunc(props) {
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
          <div
            data-plasmic-name={"freeBox"}
            data-plasmic-override={overrides.freeBox}
            className={classNames(projectcss.all, sty.freeBox)}
          >
            <BbsportsNavbar
              data-plasmic-name={"bbsportsNavbar"}
              data-plasmic-override={overrides.bbsportsNavbar}
              className={classNames("__wab_instance", sty.bbsportsNavbar)}
            />
          </div>
          <SubscriptionSucces
            data-plasmic-name={"subscriptionSucces"}
            data-plasmic-override={overrides.subscriptionSucces}
            className={classNames("__wab_instance", sty.subscriptionSucces)}
          >
            {renderPlasmicSlot({
              defaultContents: "Your subscription is Paused, john.",
              value: args.children
            })}
          </SubscriptionSucces>
          <Fotter
            data-plasmic-name={"fotter"}
            data-plasmic-override={overrides.fotter}
            className={classNames("__wab_instance", sty.fotter)}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "bbsportsNavbar", "subscriptionSucces", "fotter"],
  freeBox: ["freeBox", "bbsportsNavbar"],
  bbsportsNavbar: ["bbsportsNavbar"],
  subscriptionSucces: ["subscriptionSucces"],
  fotter: ["fotter"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicNewPage__ArgProps,
          internalVariantPropNames: PlasmicNewPage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicNewPage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNewPage";
  } else {
    func.displayName = `PlasmicNewPage.${nodeName}`;
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

export const PlasmicNewPage = Object.assign(
  // Top-level PlasmicNewPage renders the root element
  withUsePlasmicAuth(withPlasmicPageGuard(makeNodeComponent("root"))),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    bbsportsNavbar: makeNodeComponent("bbsportsNavbar"),
    subscriptionSucces: makeNodeComponent("subscriptionSucces"),
    fotter: makeNodeComponent("fotter"),
    // Metadata about props expected for PlasmicNewPage
    internalVariantProps: PlasmicNewPage__VariantProps,
    internalArgProps: PlasmicNewPage__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicNewPage;
/* prettier-ignore-end */
