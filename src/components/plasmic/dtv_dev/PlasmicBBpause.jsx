// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sMuK5QvKwWGrkw9DYJKXqS
// Component: fuJsS2TYj0Tg
import * as React from "react";
import {
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicPageGuard as PlasmicPageGuard__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  generateStateOnChangeProp,
  generateStateValueProp,
  initializePlasmicStates,
  useCurrentUser,
  useDollarState
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import * as plasmicAuth from "@plasmicapp/react-web/lib/auth";
import { usePlasmicDataSourceContext } from "@plasmicapp/data-sources-context";
import BbsportsNavbar from "../../BbsportsNavbar"; // plasmic-import: 1H_RiyunFQyd/component
import Select from "../../Select"; // plasmic-import: psppkTLgzWJv/component
import Button from "../../Button"; // plasmic-import: Humveg51WdE0/component
import BBsportsFooter2 from "../../BBsportsFooter2"; // plasmic-import: DmzRb63NDqeE/component
import Fotter from "../../Fotter"; // plasmic-import: m2U6ZOt1kBnV/component
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: sMuK5QvKwWGrkw9DYJKXqS/projectcss
import sty from "./PlasmicBBpause.module.css"; // plasmic-import: fuJsS2TYj0Tg/css

createPlasmicElementProxy;

export const PlasmicBBpause__VariantProps = new Array();

export const PlasmicBBpause__ArgProps = new Array();

const $$ = {};

function PlasmicBBpause__RenderFunc(props) {
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
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "select[].value",
        type: "private",
        variableType: "text"
      }
    ],

    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });
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
            sty.root
          )}
        >
          <div className={classNames(projectcss.all, sty.freeBox__mdlmd)}>
            <BbsportsNavbar
              data-plasmic-name={"bbsportsNavbar"}
              data-plasmic-override={overrides.bbsportsNavbar}
              className={classNames("__wab_instance", sty.bbsportsNavbar)}
            />

            <div className={classNames(projectcss.all, sty.freeBox__zdjjz)}>
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
                {"Just hit pause, jhon."}
              </h1>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___2UyGu
                )}
              >
                {
                  "You can choose to pause your subscription upto 6 months and resume at anytime or cancel your content subscription all together."
                }
              </div>
              {(_par => (!_par ? [] : Array.isArray(_par) ? _par : [_par]))([
                2, 3, 4
              ]).map((__plasmic_item_0, __plasmic_idx_0) => {
                const currentItem = __plasmic_item_0;
                const currentIndex = __plasmic_idx_0;
                return (() => {
                  const child$Props = {
                    className: classNames("__wab_instance", sty.select),
                    key: currentIndex,
                    onChange: (...eventArgs) => {
                      generateStateOnChangeProp($state, [
                        "select",
                        __plasmic_idx_0,
                        "value"
                      ])(eventArgs[0]);
                    },
                    options: (() => {
                      try {
                        return undefined;
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return (() => {
                            const __composite = [
                              { value: null, label: null },
                              { value: null, label: null }
                            ];

                            __composite["0"]["value"] = "3 Months";
                            __composite["0"]["label"] = "3 Months";
                            __composite["1"]["value"] = "6 Months";
                            __composite["1"]["label"] = "6 Months";
                            return __composite;
                          })();
                        }
                        throw e;
                      }
                    })(),
                    placeholder: (
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__diGrG
                        )}
                      >
                        {"Choose subscription plan"}
                      </div>
                    ),

                    value: generateStateValueProp($state, [
                      "select",
                      __plasmic_idx_0,
                      "value"
                    ])
                  };
                  initializePlasmicStates(
                    $state,
                    [
                      {
                        name: "select[].value",
                        initFunc: ({ $props, $state, $queries }) => undefined
                      }
                    ],

                    [__plasmic_idx_0]
                  );
                  return (
                    <Select
                      data-plasmic-name={"select"}
                      data-plasmic-override={overrides.select}
                      {...child$Props}
                    />
                  );
                })();
              })}
              <Button
                data-plasmic-name={"button"}
                data-plasmic-override={overrides.button}
                className={classNames("__wab_instance", sty.button)}
                link={`/new-page-2`}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__cplmt
                  )}
                >
                  {"PAUSE SUBSCRIPTION"}
                </div>
              </Button>
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__g0ZQh)}>
              <BBsportsFooter2
                data-plasmic-name={"bBsportsFooter2"}
                data-plasmic-override={overrides.bBsportsFooter2}
                className={classNames("__wab_instance", sty.bBsportsFooter2)}
              />

              <Fotter
                data-plasmic-name={"fotter"}
                data-plasmic-override={overrides.fotter}
                className={classNames("__wab_instance", sty.fotter)}
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "bbsportsNavbar",
    "h1",
    "select",
    "button",
    "bBsportsFooter2",
    "fotter"
  ],

  bbsportsNavbar: ["bbsportsNavbar"],
  h1: ["h1"],
  select: ["select"],
  button: ["button"],
  bBsportsFooter2: ["bBsportsFooter2"],
  fotter: ["fotter"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicBBpause__ArgProps,
          internalVariantPropNames: PlasmicBBpause__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicBBpause__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicBBpause";
  } else {
    func.displayName = `PlasmicBBpause.${nodeName}`;
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

export const PlasmicBBpause = Object.assign(
  // Top-level PlasmicBBpause renders the root element
  withUsePlasmicAuth(withPlasmicPageGuard(makeNodeComponent("root"))),
  {
    // Helper components rendering sub-elements
    bbsportsNavbar: makeNodeComponent("bbsportsNavbar"),
    h1: makeNodeComponent("h1"),
    select: makeNodeComponent("select"),
    button: makeNodeComponent("button"),
    bBsportsFooter2: makeNodeComponent("bBsportsFooter2"),
    fotter: makeNodeComponent("fotter"),
    // Metadata about props expected for PlasmicBBpause
    internalVariantProps: PlasmicBBpause__VariantProps,
    internalArgProps: PlasmicBBpause__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicBBpause;
/* prettier-ignore-end */