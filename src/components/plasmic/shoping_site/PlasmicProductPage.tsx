// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: cEGmKnV6wZtH3Po566cpME
// Component: hciAscFd8d
import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import { ProductBox } from "@plasmicpkgs/commerce"; // plasmic-import: 1gYJf_XBZUAD/codeComponent
import { PlasmicHead } from "@plasmicapp/react-web"; // plasmic-import: 6Cg5fDs6Iv/codeComponent
import { ProductTextField } from "@plasmicpkgs/commerce"; // plasmic-import: S1F4q0wN6b/codeComponent
import { ProductMedia } from "@plasmicpkgs/commerce"; // plasmic-import: qpULM0wwWW/codeComponent
import { NavigationBar } from "@plasmicpkgs/plasmic-nav"; // plasmic-import: jGx9tiKJoex/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_shoping_site.module.css"; // plasmic-import: cEGmKnV6wZtH3Po566cpME/projectcss
import sty from "./PlasmicProductPage.module.css"; // plasmic-import: hciAscFd8d/css

export type PlasmicProductPage__VariantMembers = {};
export type PlasmicProductPage__VariantsArgs = {};
type VariantPropType = keyof PlasmicProductPage__VariantsArgs;
export const PlasmicProductPage__VariantProps = new Array<VariantPropType>();

export type PlasmicProductPage__ArgsType = {};
type ArgPropType = keyof PlasmicProductPage__ArgsType;
export const PlasmicProductPage__ArgProps = new Array<ArgPropType>();

export type PlasmicProductPage__OverridesType = {
  root?: p.Flex<"div">;
  productBox?: p.Flex<typeof ProductBox>;
  head?: p.Flex<typeof PlasmicHead>;
  freeBox?: p.Flex<"div">;
  productTextField?: p.Flex<typeof ProductTextField>;
  productMedia?: p.Flex<typeof ProductMedia>;
  text?: p.Flex<"div">;
  navigationBar?: p.Flex<typeof NavigationBar>;
};

export interface DefaultProductPageProps {
  className?: string;
}

function PlasmicProductPage__RenderFunc(props: {
  variants: PlasmicProductPage__VariantsArgs;
  args: PlasmicProductPage__ArgsType;
  overrides: PlasmicProductPage__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const currentUser = p.useCurrentUser?.() || {};

  return (
    <React.Fragment>
      {}

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
            sty.root
          )}
        >
          <ProductBox
            data-plasmic-name={"productBox"}
            data-plasmic-override={overrides.productBox}
            className={classNames("__wab_instance", sty.productBox)}
            id={(() => {
              try {
                return $ctx.params.slug;
              } catch (e) {
                if (e instanceof TypeError) {
                  return undefined;
                }
                throw e;
              }
            })()}
          >
            <ph.DataCtxReader>
              {$ctx => (
                <React.Fragment>
                  <PlasmicHead
                    data-plasmic-name={"head"}
                    data-plasmic-override={overrides.head}
                    className={classNames("__wab_instance", sty.head)}
                    description={(() => {
                      try {
                        return $ctx.currentProduct.descriptionHtml;
                      } catch (e) {
                        if (e instanceof TypeError) {
                          return undefined;
                        }
                        throw e;
                      }
                    })()}
                    title={(() => {
                      try {
                        return $ctx.currentProduct.name;
                      } catch (e) {
                        if (e instanceof TypeError) {
                          return undefined;
                        }
                        throw e;
                      }
                    })()}
                  />

                  <div
                    data-plasmic-name={"freeBox"}
                    data-plasmic-override={overrides.freeBox}
                    className={classNames(projectcss.all, sty.freeBox)}
                  >
                    <ProductTextField
                      data-plasmic-name={"productTextField"}
                      data-plasmic-override={overrides.productTextField}
                      className={classNames(
                        "__wab_instance",
                        sty.productTextField
                      )}
                      field={"name" as const}
                    />

                    <ProductMedia
                      data-plasmic-name={"productMedia"}
                      data-plasmic-override={overrides.productMedia}
                      className={classNames("__wab_instance", sty.productMedia)}
                    />

                    <div
                      data-plasmic-name={"text"}
                      data-plasmic-override={overrides.text}
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text
                      )}
                    >
                      {(() => {
                        try {
                          return $ctx.currentProduct.description;
                        } catch (e) {
                          if (e instanceof TypeError) {
                            return "Enter some text";
                          }
                          throw e;
                        }
                      })()}
                    </div>

                    <NavigationBar
                      data-plasmic-name={"navigationBar"}
                      data-plasmic-override={overrides.navigationBar}
                      brand={
                        <a
                          className={classNames(
                            projectcss.all,
                            projectcss.a,
                            sty.link__k2Np4
                          )}
                          href={"#" as const}
                        >
                          <p.PlasmicImg
                            alt={""}
                            className={classNames(sty.img__aBE)}
                            displayHeight={"40px" as const}
                            displayMaxHeight={"none" as const}
                            displayMaxWidth={"none" as const}
                            displayMinHeight={"0" as const}
                            displayMinWidth={"0" as const}
                            displayWidth={"auto" as const}
                            src={
                              "https://static1.plasmic.app/nav-logo-placeholder.svg" as const
                            }
                          />
                        </a>
                      }
                      className={classNames(
                        "__wab_instance",
                        sty.navigationBar
                      )}
                      closeButton={
                        <p.PlasmicImg
                          alt={""}
                          className={classNames(sty.img__f1TuL)}
                          displayHeight={"auto" as const}
                          displayMaxHeight={"none" as const}
                          displayMaxWidth={"none" as const}
                          displayMinHeight={"0" as const}
                          displayMinWidth={"0" as const}
                          displayWidth={"auto" as const}
                          src={"https://static1.plasmic.app/close.svg" as const}
                        />
                      }
                      itemsGap={8 as const}
                      menuItems={
                        <React.Fragment>
                          <a
                            className={classNames(
                              projectcss.all,
                              projectcss.a,
                              projectcss.__wab_text,
                              sty.link__gtwmV
                            )}
                            href={"/" as const}
                          >
                            {"Home"}
                          </a>

                          <a
                            className={classNames(
                              projectcss.all,
                              projectcss.a,
                              projectcss.__wab_text,
                              sty.link__satdK
                            )}
                            href={"/" as const}
                          >
                            {"About"}
                          </a>

                          <a
                            className={classNames(
                              projectcss.all,
                              projectcss.a,
                              projectcss.__wab_text,
                              sty.link__ixNTi
                            )}
                            href={"/" as const}
                          >
                            {"Contact"}
                          </a>
                        </React.Fragment>
                      }
                      openButton={
                        <p.PlasmicImg
                          alt={""}
                          className={classNames(sty.img__gGBlN)}
                          displayHeight={"auto" as const}
                          displayMaxHeight={"none" as const}
                          displayMaxWidth={"none" as const}
                          displayMinHeight={"0" as const}
                          displayMinWidth={"0" as const}
                          displayWidth={"auto" as const}
                          src={"https://static1.plasmic.app/menu.svg" as const}
                        />
                      }
                      responsiveBreakpoint={768 as const}
                    />
                  </div>
                </React.Fragment>
              )}
            </ph.DataCtxReader>
          </ProductBox>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "productBox",
    "head",
    "freeBox",
    "productTextField",
    "productMedia",
    "text",
    "navigationBar"
  ],
  productBox: [
    "productBox",
    "head",
    "freeBox",
    "productTextField",
    "productMedia",
    "text",
    "navigationBar"
  ],
  head: ["head"],
  freeBox: [
    "freeBox",
    "productTextField",
    "productMedia",
    "text",
    "navigationBar"
  ],
  productTextField: ["productTextField"],
  productMedia: ["productMedia"],
  text: ["text"],
  navigationBar: ["navigationBar"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  productBox: typeof ProductBox;
  head: typeof PlasmicHead;
  freeBox: "div";
  productTextField: typeof ProductTextField;
  productMedia: typeof ProductMedia;
  text: "div";
  navigationBar: typeof NavigationBar;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicProductPage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicProductPage__VariantsArgs;
    args?: PlasmicProductPage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicProductPage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicProductPage__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicProductPage__ArgProps,
          internalVariantPropNames: PlasmicProductPage__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicProductPage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicProductPage";
  } else {
    func.displayName = `PlasmicProductPage.${nodeName}`;
  }
  return func;
}

export const PlasmicProductPage = Object.assign(
  // Top-level PlasmicProductPage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    productBox: makeNodeComponent("productBox"),
    head: makeNodeComponent("head"),
    freeBox: makeNodeComponent("freeBox"),
    productTextField: makeNodeComponent("productTextField"),
    productMedia: makeNodeComponent("productMedia"),
    text: makeNodeComponent("text"),
    navigationBar: makeNodeComponent("navigationBar"),

    // Metadata about props expected for PlasmicProductPage
    internalVariantProps: PlasmicProductPage__VariantProps,
    internalArgProps: PlasmicProductPage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicProductPage;
/* prettier-ignore-end */
