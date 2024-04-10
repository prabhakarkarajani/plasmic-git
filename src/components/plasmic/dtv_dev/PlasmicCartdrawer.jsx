// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sMuK5QvKwWGrkw9DYJKXqS
// Component: c5HiDm6LGjFo
import * as React from "react";
import {
  PlasmicImg as PlasmicImg__,
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  generateStateOnChangeProp,
  generateStateValueProp,
  initializePlasmicStates,
  useCurrentUser,
  useDollarState
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv
} from "@plasmicapp/react-web/lib/host";
import Drawer from "../../Drawer"; // plasmic-import: gRqSJu91s1nm/component
import { DataFetcher } from "@plasmicpkgs/plasmic-query";
import Button from "../../Button"; // plasmic-import: Humveg51WdE0/component
import TextInput from "../../TextInput"; // plasmic-import: NGI8y2GcvmiY/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic.module.css"; // plasmic-import: sMuK5QvKwWGrkw9DYJKXqS/projectcss
import sty from "./PlasmicCartdrawer.module.css"; // plasmic-import: c5HiDm6LGjFo/css
import _8581237BagShoppingShopCartEcommerceIconpng410HaqSi0XVh from "./images/_8581237BagShoppingShopCartEcommerceIconpng.png"; // plasmic-import: 410HAQSi0xVh/picture
import _326606DeleteIconpng8L8Ve00N43Qm from "./images/_326606DeleteIconpng.png"; // plasmic-import: 8l8ve00n43qm/picture

createPlasmicElementProxy;

export const PlasmicCartdrawer__VariantProps = new Array();

export const PlasmicCartdrawer__ArgProps = new Array();

const $$ = {};

function PlasmicCartdrawer__RenderFunc(props) {
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
        path: "drawer.open",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => true
      },
      {
        path: "textInput[].value",
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
    <Drawer
      data-plasmic-name={"drawer"}
      data-plasmic-override={overrides.drawer}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames("__wab_instance", sty.drawer)}
      onOpenChange={generateStateOnChangeProp($state, ["drawer", "open"])}
      open={generateStateValueProp($state, ["drawer", "open"])}
      slot={
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__ogdrg)}
        >
          <DataFetcher
            data-plasmic-name={"httpRestApiFetcher"}
            data-plasmic-override={overrides.httpRestApiFetcher}
            className={classNames("__wab_instance", sty.httpRestApiFetcher)}
            dataName={"fetchedData"}
            errorDisplay={
              <DataCtxReader__>{$ctx => "Error fetching data"}</DataCtxReader__>
            }
            errorName={"fetchError"}
            headers={{
              "Content-Type": "application/json",
              Accept: "application/json"
            }}
            loadingDisplay={
              <DataCtxReader__>{$ctx => "Loading..."}</DataCtxReader__>
            }
            method={"GET"}
            noLayout={false}
            previewSpinner={false}
            queryKey={undefined}
            url={"https://shoppingcart-n5cf.onrender.com/cart"}
          >
            <DataCtxReader__>
              {$ctx => (
                <React.Fragment>
                  <div
                    className={classNames(projectcss.all, sty.freeBox__bfG1J)}
                  >
                    {(_par =>
                      !_par ? [] : Array.isArray(_par) ? _par : [_par])(
                      (() => {
                        try {
                          return $ctx.fetchedData.items;
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return [];
                          }
                          throw e;
                        }
                      })()
                    ).map((__plasmic_item_0, __plasmic_idx_0) => {
                      const currentItem = __plasmic_item_0;
                      const currentIndex = __plasmic_idx_0;
                      return (
                        <Stack__
                          as={"div"}
                          hasGap={true}
                          className={classNames(
                            projectcss.all,
                            sty.columns__gnyih
                          )}
                          key={currentIndex}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              sty.column__n9YnW
                            )}
                          >
                            <PlasmicImg__
                              alt={""}
                              className={classNames(sty.img___1IsQ)}
                              displayHeight={"auto"}
                              displayMaxHeight={"none"}
                              displayMaxWidth={"100%"}
                              displayMinHeight={"0"}
                              displayMinWidth={"0"}
                              displayWidth={"auto"}
                              loading={"lazy"}
                              src={(() => {
                                try {
                                  return currentItem.image;
                                } catch (e) {
                                  if (
                                    e instanceof TypeError ||
                                    e?.plasmicType ===
                                      "PlasmicUndefinedDataError"
                                  ) {
                                    return undefined;
                                  }
                                  throw e;
                                }
                              })()}
                              width={"40%"}
                            />
                          </div>
                          <div
                            className={classNames(
                              projectcss.all,
                              sty.column___0JT8F
                            )}
                          >
                            <div
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.text__x2RgT
                              )}
                            >
                              <React.Fragment>
                                {(() => {
                                  try {
                                    return currentItem.name;
                                  } catch (e) {
                                    if (
                                      e instanceof TypeError ||
                                      e?.plasmicType ===
                                        "PlasmicUndefinedDataError"
                                    ) {
                                      return "Name";
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
                                sty.text__eJ3Pa
                              )}
                            >
                              <React.Fragment>
                                {(() => {
                                  try {
                                    return currentItem.description;
                                  } catch (e) {
                                    if (
                                      e instanceof TypeError ||
                                      e?.plasmicType ===
                                        "PlasmicUndefinedDataError"
                                    ) {
                                      return "TMNT x Skullcandy Ooze";
                                    }
                                    throw e;
                                  }
                                })()}
                              </React.Fragment>
                            </div>
                            <div
                              className={classNames(
                                projectcss.all,
                                sty.columns__bg9NW
                              )}
                            >
                              <div
                                className={classNames(
                                  projectcss.all,
                                  sty.column__by0Jm
                                )}
                              >
                                <Button
                                  className={classNames(
                                    "__wab_instance",
                                    sty.button__uiPMd
                                  )}
                                  onClick={async event => {
                                    const $steps = {};
                                    $steps["runCode"] = true
                                      ? (() => {
                                          const actionArgs = {
                                            customFunction: async () => {
                                              return (() => {
                                                if (currentItem.quantity == 1) {
                                                  return fetch(
                                                    `https://shoppingcart-n5cf.onrender.com/cart/${currentItem.id}`,
                                                    {
                                                      method: "DELEETE",
                                                      headers: {
                                                        "Content-Type":
                                                          "application/json"
                                                      }
                                                    }
                                                  );
                                                } else {
                                                  return fetch(
                                                    "https://shoppingcart-n5cf.onrender.com/cart",
                                                    {
                                                      method: "POST",
                                                      headers: {
                                                        "Content-Type":
                                                          "application/json"
                                                      },
                                                      body: JSON.stringify({
                                                        productId:
                                                          currentItem.productId,
                                                        quantity: -1
                                                      })
                                                    }
                                                  );
                                                }
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
                                      typeof $steps["runCode"].then ===
                                        "function"
                                    ) {
                                      $steps["runCode"] = await $steps[
                                        "runCode"
                                      ];
                                    }
                                  }}
                                >
                                  {"-"}
                                </Button>
                              </div>
                              <div
                                className={classNames(
                                  projectcss.all,
                                  sty.column__c6UsK
                                )}
                              >
                                {(() => {
                                  const child$Props = {
                                    className: classNames(
                                      "__wab_instance",
                                      sty.textInput
                                    ),
                                    isDisabled: true,
                                    name: "quantity",
                                    onChange: (...eventArgs) => {
                                      generateStateOnChangeProp($state, [
                                        "textInput",
                                        __plasmic_idx_0,
                                        "value"
                                      ])(
                                        (e => e.target?.value).apply(
                                          null,
                                          eventArgs
                                        )
                                      );
                                    },
                                    placeholder: "qunatity",
                                    value:
                                      generateStateValueProp($state, [
                                        "textInput",
                                        __plasmic_idx_0,
                                        "value"
                                      ]) ?? ""
                                  };
                                  initializePlasmicStates(
                                    $state,
                                    [
                                      {
                                        name: "textInput[].value",
                                        initFunc: ({
                                          $props,
                                          $state,
                                          $queries
                                        }) =>
                                          (() => {
                                            try {
                                              return currentItem.quantity;
                                            } catch (e) {
                                              if (
                                                e instanceof TypeError ||
                                                e?.plasmicType ===
                                                  "PlasmicUndefinedDataError"
                                              ) {
                                                return "1";
                                              }
                                              throw e;
                                            }
                                          })()
                                      }
                                    ],

                                    [__plasmic_idx_0]
                                  );
                                  return (
                                    <TextInput
                                      data-plasmic-name={"textInput"}
                                      data-plasmic-override={
                                        overrides.textInput
                                      }
                                      {...child$Props}
                                    />
                                  );
                                })()}
                              </div>
                              <div
                                className={classNames(
                                  projectcss.all,
                                  sty.column__xCepV
                                )}
                              >
                                <Button
                                  className={classNames(
                                    "__wab_instance",
                                    sty.button__mIi5
                                  )}
                                  onClick={async event => {
                                    const $steps = {};
                                    $steps["runCode"] = true
                                      ? (() => {
                                          const actionArgs = {
                                            customFunction: async () => {
                                              return fetch(
                                                "https://shoppingcart-n5cf.onrender.com/cart",
                                                {
                                                  method: "POST",
                                                  headers: {
                                                    "Content-Type":
                                                      "application/json"
                                                  },
                                                  body: JSON.stringify({
                                                    productId:
                                                      currentItem.productId,
                                                    quantity: 1
                                                  })
                                                }
                                              ).then(res => {
                                                const data = res.json();
                                                if (data) {
                                                  fetch(
                                                    "https://shoppingcart-n5cf.onrender.com/cart"
                                                  );
                                                }
                                              });
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
                                      typeof $steps["runCode"].then ===
                                        "function"
                                    ) {
                                      $steps["runCode"] = await $steps[
                                        "runCode"
                                      ];
                                    }
                                  }}
                                >
                                  <div
                                    className={classNames(
                                      projectcss.all,
                                      projectcss.__wab_text,
                                      sty.text__rhlSq
                                    )}
                                  >
                                    {"+"}
                                  </div>
                                </Button>
                              </div>
                            </div>
                          </div>
                          <div
                            className={classNames(
                              projectcss.all,
                              sty.column__nsPqI
                            )}
                          >
                            <div
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.text__yBiGy
                              )}
                            >
                              <React.Fragment>
                                {(() => {
                                  try {
                                    return `$` + currentItem.totalAmount;
                                  } catch (e) {
                                    if (
                                      e instanceof TypeError ||
                                      e?.plasmicType ===
                                        "PlasmicUndefinedDataError"
                                    ) {
                                      return "169.9";
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
                                sty.text__fb51U
                              )}
                            >
                              <React.Fragment>
                                {(() => {
                                  try {
                                    return (
                                      `${currentItem.quantity} X $` +
                                      currentItem.price
                                    );
                                  } catch (e) {
                                    if (
                                      e instanceof TypeError ||
                                      e?.plasmicType ===
                                        "PlasmicUndefinedDataError"
                                    ) {
                                      return "";
                                    }
                                    throw e;
                                  }
                                })()}
                              </React.Fragment>
                            </div>
                            <PlasmicImg__
                              alt={""}
                              className={classNames(sty.img___1F3HW)}
                              displayHeight={"auto"}
                              displayMaxHeight={"none"}
                              displayMaxWidth={"100%"}
                              displayMinHeight={"0"}
                              displayMinWidth={"0"}
                              displayWidth={"auto"}
                              loading={"lazy"}
                              onClick={async event => {
                                const $steps = {};
                                $steps["runCode"] = true
                                  ? (() => {
                                      const actionArgs = {
                                        customFunction: async () => {
                                          return fetch(
                                            `https://shoppingcart-n5cf.onrender.com/cart/${currentItem.id}`,
                                            {
                                              method: "DELEETE",
                                              headers: {
                                                "Content-Type":
                                                  "application/json"
                                              }
                                            }
                                          );
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
                              src={{
                                src: _326606DeleteIconpng8L8Ve00N43Qm,
                                fullWidth: 49,
                                fullHeight: 49,
                                aspectRatio: undefined
                              }}
                            />
                          </div>
                        </Stack__>
                      );
                    })}
                  </div>
                  <div
                    className={classNames(projectcss.all, sty.freeBox__irkkl)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.columns__dqa62)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.column__qHQsf
                        )}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__zL1Cm
                          )}
                        >
                          {"Total Amount"}
                        </div>
                      </div>
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.column__dfXeX
                        )}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__yOpCb
                          )}
                        >
                          <React.Fragment>
                            {(() => {
                              try {
                                return $ctx.fetchedData.totalPrice;
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
                    </div>
                    <div
                      className={classNames(
                        projectcss.all,
                        sty.freeBox___0MysF
                      )}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__s3ENt
                        )}
                      >
                        {"Taxes and shipping calculated at checkout"}
                      </div>
                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button___7Yaww
                        )}
                        onClick={async event => {
                          const $steps = {};
                          $steps["goToCheckoutPage"] = true
                            ? (() => {
                                const actionArgs = {
                                  destination: `/checkout-page`
                                };
                                return (({ destination }) => {
                                  if (
                                    typeof destination === "string" &&
                                    destination.startsWith("#")
                                  ) {
                                    document
                                      .getElementById(destination.substr(1))
                                      .scrollIntoView({ behavior: "smooth" });
                                  } else {
                                    location.assign(destination);
                                  }
                                })?.apply(null, [actionArgs]);
                              })()
                            : undefined;
                          if (
                            $steps["goToCheckoutPage"] != null &&
                            typeof $steps["goToCheckoutPage"] === "object" &&
                            typeof $steps["goToCheckoutPage"].then ===
                              "function"
                          ) {
                            $steps["goToCheckoutPage"] = await $steps[
                              "goToCheckoutPage"
                            ];
                          }
                        }}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__mcOt
                          )}
                        >
                          {"CHECKOUT"}
                        </div>
                      </Button>
                    </div>
                  </div>
                </React.Fragment>
              )}
            </DataCtxReader__>
          </DataFetcher>
        </Stack__>
      }
      trigger={
        <PlasmicImg__
          alt={""}
          className={classNames(sty.img__dxXbH)}
          displayHeight={"auto"}
          displayMaxHeight={"none"}
          displayMaxWidth={"100%"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={"64px"}
          loading={"lazy"}
          src={{
            src: _8581237BagShoppingShopCartEcommerceIconpng410HaqSi0XVh,
            fullWidth: 64,
            fullHeight: 64,
            aspectRatio: undefined
          }}
        />
      }
    >
      {"Cart Items"}
    </Drawer>
  );
}

const PlasmicDescendants = {
  drawer: ["drawer", "httpRestApiFetcher", "textInput"],
  httpRestApiFetcher: ["httpRestApiFetcher", "textInput"],
  textInput: ["textInput"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicCartdrawer__ArgProps,
          internalVariantPropNames: PlasmicCartdrawer__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicCartdrawer__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "drawer") {
    func.displayName = "PlasmicCartdrawer";
  } else {
    func.displayName = `PlasmicCartdrawer.${nodeName}`;
  }
  return func;
}

export const PlasmicCartdrawer = Object.assign(
  // Top-level PlasmicCartdrawer renders the root element
  makeNodeComponent("drawer"),
  {
    // Helper components rendering sub-elements
    httpRestApiFetcher: makeNodeComponent("httpRestApiFetcher"),
    textInput: makeNodeComponent("textInput"),
    // Metadata about props expected for PlasmicCartdrawer
    internalVariantProps: PlasmicCartdrawer__VariantProps,
    internalArgProps: PlasmicCartdrawer__ArgProps
  }
);

export default PlasmicCartdrawer;
/* prettier-ignore-end */