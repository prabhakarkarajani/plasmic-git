// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sMuK5QvKwWGrkw9DYJKXqS
// Component: wfq8Pg6xN7lL
import * as React from "react";
import {
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicPageGuard as PlasmicPageGuard__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  generateOnMutateForSpec,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  initializeCodeComponentStates,
  set as $stateSet,
  useCurrentUser,
  useDollarState
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import * as plasmicAuth from "@plasmicapp/react-web/lib/auth";
import { usePlasmicDataSourceContext } from "@plasmicapp/data-sources-context";
import { AntdInput } from "@plasmicpkgs/antd5/skinny/registerInput";
import { inputHelpers as AntdInput_Helpers } from "@plasmicpkgs/antd5/skinny/registerInput";
import { AntdPassword } from "@plasmicpkgs/antd5/skinny/registerInput";
import { inputHelpers as AntdPassword_Helpers } from "@plasmicpkgs/antd5/skinny/registerInput";
import { AntdButton } from "@plasmicpkgs/antd5/skinny/registerButton";
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: sMuK5QvKwWGrkw9DYJKXqS/projectcss
import sty from "./PlasmicEvBox.module.css"; // plasmic-import: wfq8Pg6xN7lL/css

createPlasmicElementProxy;

export const PlasmicEvBox__VariantProps = new Array();

export const PlasmicEvBox__ArgProps = new Array();

const $$ = {};

function PlasmicEvBox__RenderFunc(props) {
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
        path: "input.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,
        onMutate: generateOnMutateForSpec("value", AntdInput_Helpers)
      },
      {
        path: "passwordInput.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,
        onMutate: generateOnMutateForSpec("value", AntdPassword_Helpers)
      },
      {
        path: "signin",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => ({})
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
            plasmic_plasmic_rich_components_css.plasmic_tokens,
            sty.root
          )}
        >
          <div className={classNames(projectcss.all, sty.freeBox__d35Zz)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__cX4Yv
              )}
            >
              <React.Fragment>
                <React.Fragment>{"ev"}</React.Fragment>
                {
                  <span
                    data-plasmic-name={"span"}
                    data-plasmic-override={overrides.span}
                    className={classNames(
                      projectcss.all,
                      projectcss.span,
                      projectcss.__wab_text,
                      projectcss.plasmic_default__inline,
                      sty.span
                    )}
                  >
                    {"box"}
                  </span>
                }

                <React.Fragment>{""}</React.Fragment>
              </React.Fragment>
            </div>
          </div>
          <h3
            data-plasmic-name={"h3"}
            data-plasmic-override={overrides.h3}
            className={classNames(
              projectcss.all,
              projectcss.h3,
              projectcss.__wab_text,
              sty.h3
            )}
          >
            <React.Fragment>
              <span
                className={"plasmic_default__all plasmic_default__span"}
                style={{ fontWeight: 700 }}
              >
                {"Sign In to EvBox"}
              </span>
            </React.Fragment>
          </h3>
          <div className={classNames(projectcss.all, sty.freeBox___7UbCz)}>
            <div className={classNames(projectcss.all, sty.freeBox__hybpr)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__tBglh
                )}
              >
                <React.Fragment>
                  <span
                    className={"plasmic_default__all plasmic_default__span"}
                    style={{ fontWeight: 700 }}
                  >
                    {"Email address"}
                  </span>
                </React.Fragment>
              </div>
              {(() => {
                const child$Props = {
                  allowClear: false,
                  className: classNames("__wab_instance", sty.input),
                  onChange: generateStateOnChangePropForCodeComponents(
                    $state,
                    "value",
                    ["input", "value"],
                    AntdInput_Helpers
                  ),
                  onPressEnter: async event => {
                    const $steps = {};
                    $steps["updateInputValue"] = true
                      ? (() => {
                          const actionArgs = {
                            variable: {
                              objRoot: $state,
                              variablePath: ["input", "value"]
                            },
                            operation: 0
                          };
                          return (({
                            variable,
                            value,
                            startIndex,
                            deleteCount
                          }) => {
                            if (!variable) {
                              return;
                            }
                            const { objRoot, variablePath } = variable;
                            $stateSet(objRoot, variablePath, value);
                            return value;
                          })?.apply(null, [actionArgs]);
                        })()
                      : undefined;
                    if (
                      $steps["updateInputValue"] != null &&
                      typeof $steps["updateInputValue"] === "object" &&
                      typeof $steps["updateInputValue"].then === "function"
                    ) {
                      $steps["updateInputValue"] = await $steps[
                        "updateInputValue"
                      ];
                    }
                  },
                  placeholder: "Your email address",
                  type: "email",
                  value: generateStateValueProp($state, ["input", "value"])
                };
                initializeCodeComponentStates(
                  $state,
                  [
                    {
                      name: "value",
                      plasmicStateName: "input.value"
                    }
                  ],

                  [],
                  AntdInput_Helpers ?? {},
                  child$Props
                );
                return (
                  <AntdInput
                    data-plasmic-name={"input"}
                    data-plasmic-override={overrides.input}
                    {...child$Props}
                  />
                );
              })()}
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__boNzO
                )}
              >
                <React.Fragment>
                  <span
                    className={"plasmic_default__all plasmic_default__span"}
                    style={{ fontWeight: 700 }}
                  >
                    {"Password"}
                  </span>
                </React.Fragment>
              </div>
              {(() => {
                const child$Props = {
                  className: classNames("__wab_instance", sty.passwordInput),
                  onChange: generateStateOnChangePropForCodeComponents(
                    $state,
                    "value",
                    ["passwordInput", "value"],
                    AntdPassword_Helpers
                  ),
                  onPressEnter: async event => {
                    const $steps = {};
                    $steps["updateInputValue"] = true
                      ? (() => {
                          const actionArgs = {
                            variable: {
                              objRoot: $state,
                              variablePath: ["input", "value"]
                            },
                            operation: 0
                          };
                          return (({
                            variable,
                            value,
                            startIndex,
                            deleteCount
                          }) => {
                            if (!variable) {
                              return;
                            }
                            const { objRoot, variablePath } = variable;
                            $stateSet(objRoot, variablePath, value);
                            return value;
                          })?.apply(null, [actionArgs]);
                        })()
                      : undefined;
                    if (
                      $steps["updateInputValue"] != null &&
                      typeof $steps["updateInputValue"] === "object" &&
                      typeof $steps["updateInputValue"].then === "function"
                    ) {
                      $steps["updateInputValue"] = await $steps[
                        "updateInputValue"
                      ];
                    }
                  },
                  placeholder: "Your password",
                  value: generateStateValueProp($state, [
                    "passwordInput",
                    "value"
                  ])
                };
                initializeCodeComponentStates(
                  $state,
                  [
                    {
                      name: "value",
                      plasmicStateName: "passwordInput.value"
                    }
                  ],

                  [],
                  AntdPassword_Helpers ?? {},
                  child$Props
                );
                return (
                  <AntdPassword
                    data-plasmic-name={"passwordInput"}
                    data-plasmic-override={overrides.passwordInput}
                    {...child$Props}
                  />
                );
              })()}
              <a
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__n9PW
                )}
                href={"https://www.plasmic.app/"}
              >
                <React.Fragment>
                  <span
                    className={"plasmic_default__all plasmic_default__span"}
                    style={{ fontWeight: 700 }}
                  >
                    {"Forgot password?"}
                  </span>
                </React.Fragment>
              </a>
              <AntdButton
                className={classNames("__wab_instance", sty.button__kJyLw)}
                onClick={async () => {
                  const $steps = {};
                  $steps["runCode"] = true
                    ? (() => {
                        const actionArgs = {
                          customFunction: async () => {
                            return (() => {
                              $state.signin = {
                                input: $state.input.value,
                                passwordInput: $state.passwordInput.value
                              };
                              return console.log(
                                JSON.parse(JSON.stringify($state.signin))
                              );
                            })();
                          }
                        };
                        return (({ customFunction }) => {
                          return customFunction();
                        })?.apply(null, [actionArgs]);
                      })()
                    : undefined;
                  if (
                    $steps["runCode"] != null &&
                    typeof $steps["runCode"] === "object" &&
                    typeof $steps["runCode"].then === "function"
                  ) {
                    $steps["runCode"] = await $steps["runCode"];
                  }
                }}
                type={"default"}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__c2O
                  )}
                >
                  <React.Fragment>
                    <span
                      className={"plasmic_default__all plasmic_default__span"}
                      style={{ fontWeight: 700 }}
                    >
                      {"Sign In"}
                    </span>
                  </React.Fragment>
                </div>
              </AntdButton>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__bqQ3
                )}
              >
                <React.Fragment>
                  {(() => {
                    try {
                      return $state.signin.input;
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return "";
                      }
                      throw e;
                    }
                  })()}
                </React.Fragment>
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__dlSbu
                )}
              >
                <React.Fragment>
                  {(() => {
                    try {
                      return $state.signin.passwordInput;
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return "";
                      }
                      throw e;
                    }
                  })()}
                </React.Fragment>
              </div>
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__w4QcK)}>
              <a
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__wz5Q
                )}
                href={"https://www.plasmic.app/"}
              >
                {"New to EvBox?"}
              </a>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__jkP6L
                )}
              >
                {"Testing in stage"}
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__saz46
                )}
              >
                {
                  "LIMITED TIME OFFER: Create an account today to get your first 3 months for $9, or pay annually for $89.99/year. "
                }
              </div>
              <AntdButton
                className={classNames("__wab_instance", sty.button__uoFk4)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__drCuv
                  )}
                >
                  <React.Fragment>
                    <span
                      className={"plasmic_default__all plasmic_default__span"}
                      style={{ fontWeight: 700 }}
                    >
                      {"Subscribe Here"}
                    </span>
                  </React.Fragment>
                </div>
              </AntdButton>
            </div>
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__jwZTy)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___0RHtv
              )}
            >
              {"Customer Support"}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "span", "h3", "input", "passwordInput"],
  span: ["span"],
  h3: ["h3"],
  input: ["input"],
  passwordInput: ["passwordInput"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicEvBox__ArgProps,
          internalVariantPropNames: PlasmicEvBox__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicEvBox__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicEvBox";
  } else {
    func.displayName = `PlasmicEvBox.${nodeName}`;
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

export const PlasmicEvBox = Object.assign(
  // Top-level PlasmicEvBox renders the root element
  withUsePlasmicAuth(withPlasmicPageGuard(makeNodeComponent("root"))),
  {
    // Helper components rendering sub-elements
    span: makeNodeComponent("span"),
    h3: makeNodeComponent("h3"),
    input: makeNodeComponent("input"),
    passwordInput: makeNodeComponent("passwordInput"),
    // Metadata about props expected for PlasmicEvBox
    internalVariantProps: PlasmicEvBox__VariantProps,
    internalArgProps: PlasmicEvBox__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicEvBox;
/* prettier-ignore-end */
