import { FunctionComponent } from "react";
import { css } from "@emotion/css";
import GroupComponent from "./GroupComponent";
import GroupComponent1 from "./GroupComponent1";
import GroupComponent2 from "./GroupComponent2";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  className = "",
}) => {
  return (
    <section
      className={[
        css`
          align-self: stretch;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: center;
          padding: 0px var(--padding-xl);
          box-sizing: border-box;
          max-width: 100%;
          width: auto;
          height: auto;
          gap: var(--gap-0);
          transform: rotate(0deg);
          text-align: center;
          font-size: var(--font-size-41xl);
          color: var(--color-gray-300);
          font-family: var(--font-roboto-slab);
          &:hover {
            display: flex;
            align-self: stretch;
            width: auto;
            height: auto;
            flex-direction: row;
            gap: var(--gap-0);
            align-items: flex-start;
            justify-content: center;
            transform: rotate(0deg);
            padding: 0px var(--padding-xl);
            box-sizing: border-box;
            max-width: 100%;
          }
        `,
        className,
      ].join(" ")}
    >
      <div
        className={css`
          width: 1558px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          gap: var(--gap-31xl);
          max-width: 100%;
          height: auto;
          transform: rotate(0deg);
          &:hover {
            display: flex;
            width: 1558px;
            height: auto;
            flex-direction: column;
            gap: var(--gap-31xl);
            align-items: flex-start;
            justify-content: flex-start;
            transform: rotate(0deg);
            max-width: 100%;
          }
          @media screen and (max-width: 825px) {
            gap: var(--gap-6xl);
          }
        `}
      >
        <div
          className={css`
            width: 1481px;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-start;
            padding: 0px var(--padding-30xl) var(--padding-51xl);
            box-sizing: border-box;
            max-width: 100%;
            height: auto;
            gap: var(--gap-0);
            transform: rotate(0deg);
            &:hover {
              display: flex;
              width: 1481px;
              height: auto;
              flex-direction: row;
              gap: var(--gap-0);
              align-items: flex-start;
              justify-content: flex-start;
              transform: rotate(0deg);
              padding: 0px var(--padding-30xl) var(--padding-51xl);
              box-sizing: border-box;
              max-width: 100%;
            }
            @media screen and (max-width: 1200px) {
              padding-left: var(--padding-5xl);
              padding-right: var(--padding-5xl);
              padding-bottom: var(--padding-26xl);
              box-sizing: border-box;
            }
            @media screen and (max-width: 825px) {
              padding-bottom: var(--padding-10xl);
              box-sizing: border-box;
            }
          `}
        >
          <div
            className={css`
              flex: 1;
              display: flex;
              flex-direction: column;
              align-items: flex-end;
              justify-content: flex-start;
              gap: var(--gap-30xl);
              max-width: 100%;
              height: auto;
              transform: rotate(0deg);
              &:hover {
                display: flex;
                flex: 1;
                height: auto;
                flex-direction: column;
                gap: var(--gap-30xl);
                align-items: flex-end;
                justify-content: flex-start;
                transform: rotate(0deg);
                max-width: 100%;
              }
              @media screen and (max-width: 825px) {
                gap: var(--gap-5xl);
              }
            `}
          >
            <div
              className={css`
                align-self: stretch;
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: center;
                padding: 0px var(--padding-2xl) var(--padding-9xl)
                  var(--padding-xl);
                box-sizing: border-box;
                max-width: 100%;
                width: auto;
                height: auto;
                gap: var(--gap-0);
                transform: rotate(0deg);
                &:hover {
                  display: flex;
                  align-self: stretch;
                  width: auto;
                  height: auto;
                  flex-direction: row;
                  gap: var(--gap-0);
                  align-items: flex-start;
                  justify-content: center;
                  transform: rotate(0deg);
                  padding: 0px var(--padding-2xl) var(--padding-9xl)
                    var(--padding-xl);
                  box-sizing: border-box;
                  max-width: 100%;
                }
              `}
            >
              <div
                className={css`
                  width: 708px;
                  display: flex;
                  flex-direction: column;
                  align-items: flex-end;
                  justify-content: flex-start;
                  gap: var(--gap-lg);
                  max-width: 100%;
                  height: auto;
                  transform: rotate(0deg);
                  &:hover {
                    display: flex;
                    width: 708px;
                    height: auto;
                    flex-direction: column;
                    gap: var(--gap-lg);
                    align-items: flex-end;
                    justify-content: flex-start;
                    transform: rotate(0deg);
                    max-width: 100%;
                  }
                `}
              >
                <div
                  className={css`
                    width: 662px;
                    display: flex;
                    flex-direction: row;
                    align-items: flex-start;
                    justify-content: flex-end;
                    padding: 0px var(--padding-26xl);
                    box-sizing: border-box;
                    max-width: 100%;
                    height: auto;
                    gap: var(--gap-0);
                    transform: rotate(0deg);
                    &:hover {
                      display: flex;
                      width: 662px;
                      height: auto;
                      flex-direction: row;
                      gap: var(--gap-0);
                      align-items: flex-start;
                      justify-content: flex-end;
                      transform: rotate(0deg);
                      padding: 0px var(--padding-26xl);
                      box-sizing: border-box;
                      max-width: 100%;
                    }
                    @media screen and (max-width: 825px) {
                      padding-left: var(--padding-3xl);
                      padding-right: var(--padding-3xl);
                      box-sizing: border-box;
                    }
                  `}
                >
                  <h1
                    className={css`
                      margin: 0;
                      flex: 1;
                      position: relative;
                      font-size: inherit;
                      line-height: 125%;
                      font-weight: 700;
                      font-family: inherit;
                      display: flex;
                      max-width: 100%;
                      height: auto;
                      &:hover {
                        font-weight: 700;
                        font-family: var(--font-roboto-slab);
                        font-size: var(--font-size-41xl);
                        line-height: 125%;
                        text-align: center;
                        color: var(--color-gray-300);
                        display: flex;
                        flex: 1;
                        height: auto;
                        max-width: 100%;
                      }
                      @media screen and (max-width: 825px) {
                        font-size: var(--font-size-29xl);
                        line-height: 60px;
                      }
                      @media screen and (max-width: 450px) {
                        font-size: var(--font-size-17xl);
                        line-height: 45px;
                      }
                    `}
                  >
                    Our Popular Course
                  </h1>
                </div>
                <div
                  className={css`
                    align-self: stretch;
                    position: relative;
                    font-size: var(--font-size-3xl);
                    line-height: 150%;
                    font-weight: 500;
                    font-family: var(--font-poppins);
                    color: var(--color-dimgray-100);
                    display: flex;
                    width: auto;
                    height: auto;
                    &:hover {
                      font-weight: 500;
                      font-family: var(--font-poppins);
                      font-size: var(--font-size-3xl);
                      line-height: 150%;
                      text-align: center;
                      color: var(--color-dimgray-100);
                      display: flex;
                      align-self: stretch;
                      width: auto;
                      height: auto;
                    }
                    @media screen and (max-width: 450px) {
                      font-size: var(--font-size-lg);
                      line-height: 26px;
                    }
                  `}
                >{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been th `}</div>
              </div>
            </div>
            <div
              className={css`
                align-self: stretch;
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                align-items: flex-start;
                justify-content: flex-start;
                gap: var(--gap-43xl);
                min-height: 1067;
                max-width: 100%;
                width: auto;
                height: auto;
                transform: rotate(0deg);
                text-align: left;
                font-size: var(--font-size-6xl);
                &:hover {
                  display: flex;
                  align-self: stretch;
                  width: auto;
                  height: auto;
                  flex-direction: row;
                  flex-wrap: wrap;
                  gap: var(--gap-43xl);
                  align-items: flex-start;
                  justify-content: flex-start;
                  transform: rotate(0deg);
                  min-height: 1067;
                  max-width: 100%;
                }
                @media screen and (max-width: 825px) {
                  gap: var(--gap-12xl);
                }
                @media screen and (max-width: 450px) {
                  gap: var(--gap-mini);
                }
              `}
            >
              <GroupComponent
                courseCardBackgrounds="/rectangle-525@2x.png"
                webDesignBasicToAdvance="Web Design  Basic to advance"
                group119="/group-119.svg"
              />
              <GroupComponent1
                rectangle526="/rectangle-526@2x.png"
                webDevelopmentBasicToAdva="Web development  Basic to advance"
              />
              <GroupComponent2
                rectangle527="/rectangle-527@2x.png"
                digitalMarketingBasicToAd="Digital marketing  Basic to advance"
                group119="/group-119.svg"
              />
              <GroupComponent
                courseCardBackgrounds="/rectangle-525-1@2x.png"
                webDesignBasicToAdvance="App Design  Basic to advance"
                group119="/group-119.svg"
              />
              <GroupComponent1
                rectangle526="/rectangle-526-1@2x.png"
                webDevelopmentBasicToAdva="Mobile design  Basic to advance"
              />
              <GroupComponent2
                rectangle527="/rectangle-527-1@2x.png"
                digitalMarketingBasicToAd="Graphics Design  Basic to advance"
                group119="/group-119.svg"
                propBorder="2px solid #1785a8"
              />
            </div>
            <div
              className={css`
                width: 1307px;
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: center;
                padding: 0px var(--padding-xl);
                box-sizing: border-box;
                max-width: 100%;
                height: auto;
                gap: var(--gap-0);
                transform: rotate(0deg);
                &:hover {
                  display: flex;
                  width: 1307px;
                  height: auto;
                  flex-direction: row;
                  gap: var(--gap-0);
                  align-items: flex-start;
                  justify-content: center;
                  transform: rotate(0deg);
                  padding: 0px var(--padding-xl);
                  box-sizing: border-box;
                  max-width: 100%;
                }
              `}
            >
              <button
                className={css`
                  cursor: pointer;
                  border: none;
                  padding: var(--padding-base) var(--padding-26xl);
                  background-color: var(--color-darkgoldenrod);
                  border-radius: var(--br-6xl);
                  display: flex;
                  flex-direction: row;
                  align-items: flex-start;
                  justify-content: flex-start;
                  box-sizing: border-box;
                  white-space: nowrap;
                  width: auto;
                  align-self: unset;
                  height: auto;
                  gap: var(--gap-3xs);
                  &:hover {
                    background-color: var(--color-goldenrod);
                    display: flex;
                    width: auto;
                    align-self: unset;
                    height: auto;
                    flex-direction: row;
                    gap: var(--gap-3xs);
                    align-items: flex-start;
                    justify-content: flex-start;
                    border-radius: var(--br-6xl);
                    padding: var(--padding-base) var(--padding-26xl);
                    box-sizing: border-box;
                    white-space: nowrap;
                  }
                  &:active {
                    background-color: var(--color-darkgoldenrod);
                  }
                `}
              >
                <div
                  className={css`
                    position: relative;
                    font-size: var(
                      --previewthemeforestnet-kumbh-sans-medium-20-size
                    );
                    line-height: 150%;
                    font-weight: 600;
                    font-family: var(--font-poppins);
                    color: var(--color-gray-200);
                    text-align: left;
                    display: flex;
                    min-width: 93;
                    width: auto;
                    align-self: unset;
                    height: auto;
                    &:hover {
                      font-weight: 600;
                      font-family: var(--font-poppins);
                      font-size: var(
                        --previewthemeforestnet-kumbh-sans-medium-20-size
                      );
                      line-height: 150%;
                      text-align: left;
                      color: var(--color-gray-200);
                      display: flex;
                      width: auto;
                      align-self: unset;
                      height: auto;
                      min-width: 93;
                    }
                  `}
                >
                  See More
                </div>
              </button>
            </div>
          </div>
        </div>
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: center;
            padding: 0px var(--padding-xl) 0px var(--padding-44xl);
            box-sizing: border-box;
            max-width: 100%;
            width: auto;
            height: auto;
            gap: var(--gap-0);
            transform: rotate(0deg);
            color: var(--color-gray-200);
            &:hover {
              display: flex;
              align-self: stretch;
              width: auto;
              height: auto;
              flex-direction: row;
              gap: var(--gap-0);
              align-items: flex-start;
              justify-content: center;
              transform: rotate(0deg);
              padding: 0px var(--padding-xl) 0px var(--padding-44xl);
              box-sizing: border-box;
              max-width: 100%;
            }
            @media screen and (max-width: 1200px) {
              padding-left: var(--padding-12xl);
              box-sizing: border-box;
            }
          `}
        >
          <div
            className={css`
              width: 789px;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-start;
              gap: var(--gap-mini);
              max-width: 100%;
              height: auto;
              transform: rotate(0deg);
              &:hover {
                display: flex;
                width: 789px;
                height: auto;
                flex-direction: column;
                gap: var(--gap-mini);
                align-items: flex-start;
                justify-content: flex-start;
                transform: rotate(0deg);
                max-width: 100%;
              }
            `}
          >
            <div
              className={css`
                align-self: stretch;
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: flex-start;
                padding: 0px var(--padding-38xl) 0px var(--padding-37xl);
                box-sizing: border-box;
                max-width: 100%;
                width: auto;
                height: auto;
                gap: var(--gap-0);
                transform: rotate(0deg);
                &:hover {
                  display: flex;
                  align-self: stretch;
                  width: auto;
                  height: auto;
                  flex-direction: row;
                  gap: var(--gap-0);
                  align-items: flex-start;
                  justify-content: flex-start;
                  transform: rotate(0deg);
                  padding: 0px var(--padding-38xl) 0px var(--padding-37xl);
                  box-sizing: border-box;
                  max-width: 100%;
                }
                @media screen and (max-width: 825px) {
                  padding-left: var(--padding-9xl);
                  padding-right: var(--padding-9xl);
                  box-sizing: border-box;
                }
              `}
            >
              <h1
                className={css`
                  margin: 0;
                  flex: 1;
                  position: relative;
                  font-size: inherit;
                  line-height: 125%;
                  font-weight: 700;
                  font-family: inherit;
                  display: flex;
                  max-width: 100%;
                  height: auto;
                  &:hover {
                    font-weight: 700;
                    font-family: var(--font-roboto-slab);
                    font-size: var(--font-size-41xl);
                    line-height: 125%;
                    text-align: center;
                    color: var(--color-gray-200);
                    display: flex;
                    flex: 1;
                    height: auto;
                    max-width: 100%;
                  }
                  @media screen and (max-width: 825px) {
                    font-size: var(--font-size-29xl);
                    line-height: 60px;
                  }
                  @media screen and (max-width: 450px) {
                    font-size: var(--font-size-17xl);
                    line-height: 45px;
                  }
                `}
              >
                What our Students say
              </h1>
            </div>
            <div
              className={css`
                align-self: stretch;
                position: relative;
                font-size: var(--font-size-3xl);
                line-height: 150%;
                font-weight: 600;
                font-family: var(--font-poppins);
                color: var(--color-dimgray-300);
                white-space: pre-wrap;
                display: flex;
                width: auto;
                height: auto;
                &:hover {
                  font-weight: 600;
                  font-family: var(--font-poppins);
                  font-size: var(--font-size-3xl);
                  line-height: 150%;
                  text-align: center;
                  color: var(--color-dimgray-300);
                  display: flex;
                  align-self: stretch;
                  width: auto;
                  height: auto;
                }
                @media screen and (max-width: 450px) {
                  font-size: var(--font-size-lg);
                  line-height: 26px;
                }
              `}
            >{`There are many variations of passages of Lorem Ipsum available,     `}</div>
          </div>
        </div>
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: center;
            gap: var(--gap-25xl);
            max-width: 100%;
            width: auto;
            height: auto;
            font-size: var(--font-size-11xl);
            color: var(--color-dimgray-300);
            &:hover {
              display: flex;
              align-self: stretch;
              width: auto;
              height: auto;
              flex-direction: row;
              gap: var(--gap-25xl);
              align-items: flex-start;
              justify-content: center;
              max-width: 100%;
            }
            @media screen and (max-width: 1500px) {
              flex-wrap: wrap;
            }
            @media screen and (max-width: 825px) {
              gap: var(--gap-3xl);
            }
          `}
        >
          <div
            className={css`
              flex: 1;
              box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.05);
              border-radius: var(--br-xl);
              background-color: var(--pure-white);
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-start;
              padding: var(--padding-26xl) var(--padding-6xl)
                var(--padding-30xl);
              box-sizing: border-box;
              gap: var(--gap-xl);
              min-width: 367;
              max-width: 100%;
              height: auto;
              &:hover {
                background-color: var(--pure-white);
                display: flex;
                flex: 1;
                height: auto;
                flex-direction: column;
                gap: var(--gap-xl);
                align-items: flex-start;
                justify-content: flex-start;
                border-radius: var(--br-xl);
                padding: var(--padding-26xl) var(--padding-6xl)
                  var(--padding-30xl);
                box-sizing: border-box;
                box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.05);
                min-width: 367;
                max-width: 100%;
              }
              @media screen and (max-width: 825px) {
                padding-top: var(--padding-10xl);
                padding-bottom: var(--padding-13xl);
                box-sizing: border-box;
              }
              @media screen and (max-width: 450px) {
                min-width: 100%;
              }
            `}
          >
            <h3
              className={css`
                margin: 0;
                width: 220px;
                position: relative;
                font-size: inherit;
                line-height: 38px;
                font-weight: 700;
                font-family: inherit;
                color: var(--color-gray-200);
                display: flex;
                height: auto;
                z-index: 1;
                &:hover {
                  font-weight: 700;
                  font-family: var(--font-roboto-slab);
                  font-size: var(--font-size-11xl);
                  line-height: 38px;
                  text-align: center;
                  color: var(--color-gray-200);
                  display: flex;
                  width: 220px;
                  height: auto;
                }
                @media screen and (max-width: 825px) {
                  font-size: var(
                    --previewthemeforestnet-kumbh-sans-medium-24-size
                  );
                  line-height: 30px;
                }
                @media screen and (max-width: 450px) {
                  font-size: var(--font-size-lg);
                  line-height: 22px;
                }
              `}
            >
              Great Platform
            </h3>
            <div
              className={css`
                width: 428px;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
                padding: 0px 0px var(--padding-xs-5);
                box-sizing: border-box;
                gap: var(--gap-xs);
                max-width: 100%;
                height: auto;
                transform: rotate(0deg);
                font-size: var(--font-size-3xl);
                font-family: var(--font-poppins);
                &:hover {
                  display: flex;
                  width: 428px;
                  height: auto;
                  flex-direction: column;
                  gap: var(--gap-xs);
                  align-items: flex-start;
                  justify-content: flex-start;
                  transform: rotate(0deg);
                  padding: 0px 0px var(--padding-xs-5);
                  box-sizing: border-box;
                  max-width: 100%;
                }
              `}
            >
              <img
                className={css`
                  width: 52px;
                  height: 52px;
                  position: relative;
                  overflow: hidden;
                  flex-shrink: 0;
                  object-fit: contain;
                  display: flex;
                  gap: var(--gap-0);
                  z-index: 1;
                  &:hover {
                    display: flex;
                    width: 52px;
                    height: 52px;
                    gap: var(--gap-0);
                  }
                `}
                loading="lazy"
                alt=""
                src="/8673025-ic-fluent-comma-filled-icon-1.svg"
              />
              <div
                className={css`
                  align-self: stretch;
                  display: flex;
                  flex-direction: row;
                  align-items: flex-start;
                  justify-content: flex-start;
                  padding: 0px 0px 0px var(--padding-smi);
                  box-sizing: border-box;
                  max-width: 100%;
                  width: auto;
                  height: auto;
                  gap: var(--gap-0);
                  transform: rotate(0deg);
                  &:hover {
                    display: flex;
                    align-self: stretch;
                    width: auto;
                    height: auto;
                    flex-direction: row;
                    gap: var(--gap-0);
                    align-items: flex-start;
                    justify-content: flex-start;
                    transform: rotate(0deg);
                    padding: 0px 0px 0px var(--padding-smi);
                    box-sizing: border-box;
                    max-width: 100%;
                  }
                `}
              >
                <div
                  className={css`
                    flex: 1;
                    position: relative;
                    line-height: 150%;
                    white-space: pre-wrap;
                    display: flex;
                    max-width: 100%;
                    height: auto;
                    z-index: 1;
                    &:hover {
                      font-family: var(--font-poppins);
                      font-size: var(--font-size-3xl);
                      line-height: 150%;
                      text-align: center;
                      color: var(--color-dimgray-300);
                      display: flex;
                      flex: 1;
                      height: auto;
                      max-width: 100%;
                    }
                    @media screen and (max-width: 450px) {
                      font-size: var(--font-size-lg);
                      line-height: 26px;
                    }
                  `}
                >{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took  `}</div>
              </div>
            </div>
            <div
              className={css`
                align-self: stretch;
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: flex-start;
                padding: 0px var(--padding-base) 0px var(--padding-smi);
                box-sizing: border-box;
                max-width: 100%;
                width: auto;
                height: auto;
                gap: var(--gap-0);
                transform: rotate(0deg);
                font-size: var(
                  --previewthemeforestnet-kumbh-sans-medium-20-size
                );
                font-family: var(--font-dm-sans);
                &:hover {
                  display: flex;
                  align-self: stretch;
                  width: auto;
                  height: auto;
                  flex-direction: row;
                  gap: var(--gap-0);
                  align-items: flex-start;
                  justify-content: flex-start;
                  transform: rotate(0deg);
                  padding: 0px var(--padding-base) 0px var(--padding-smi);
                  box-sizing: border-box;
                  max-width: 100%;
                }
              `}
            >
              <div
                className={css`
                  flex: 1;
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  justify-content: flex-start;
                  gap: var(--gap-xl-5);
                  max-width: 100%;
                  height: auto;
                  transform: rotate(0deg);
                  &:hover {
                    display: flex;
                    flex: 1;
                    height: auto;
                    flex-direction: column;
                    gap: var(--gap-xl-5);
                    align-items: flex-start;
                    justify-content: flex-start;
                    transform: rotate(0deg);
                    max-width: 100%;
                  }
                `}
              >
                <img
                  className={css`
                    align-self: stretch;
                    position: relative;
                    max-width: 100%;
                    overflow: hidden;
                    max-height: 100%;
                    display: flex;
                    width: auto;
                    border: 1px solid var(--color-darkgray-100);
                    box-sizing: border-box;
                    z-index: 1;
                    &:hover {
                      display: flex;
                      align-self: stretch;
                      width: auto;
                      border: 1px solid var(--color-darkgray-100);
                      box-sizing: border-box;
                    }
                  `}
                  alt=""
                  src="/user-image-shape.svg"
                />
                <div
                  className={css`
                    width: 181px;
                    display: flex;
                    flex-direction: row;
                    align-items: flex-start;
                    justify-content: flex-start;
                    gap: var(--gap-3xs);
                    height: auto;
                    transform: rotate(0deg);
                    &:hover {
                      display: flex;
                      width: 181px;
                      height: auto;
                      flex-direction: row;
                      gap: var(--gap-3xs);
                      align-items: flex-start;
                      justify-content: flex-start;
                      transform: rotate(0deg);
                    }
                  `}
                >
                  <img
                    className={css`
                      height: 61px;
                      width: 61px;
                      position: relative;
                      border-radius: 50%;
                      object-fit: cover;
                      background-color: var(--color-gainsboro);
                      display: flex;
                      border: 2px solid var(--color-darkslateblue);
                      box-sizing: border-box;
                      z-index: 1;
                      &:hover {
                        background-color: var(--color-gainsboro);
                        display: flex;
                        width: 61px;
                        height: 61px;
                        border: 2px solid var(--color-darkslateblue);
                        box-sizing: border-box;
                      }
                    `}
                    loading="lazy"
                    alt=""
                    src="/ellipse-2662@2x.png"
                  />
                  <div
                    className={css`
                      flex: 1;
                      display: flex;
                      flex-direction: column;
                      align-items: flex-start;
                      justify-content: flex-start;
                      padding: var(--padding-10xs) 0px 0px;
                      box-sizing: border-box;
                      height: auto;
                      gap: var(--gap-0);
                      transform: rotate(0deg);
                      &:hover {
                        display: flex;
                        flex: 1;
                        height: auto;
                        flex-direction: column;
                        gap: var(--gap-0);
                        align-items: flex-start;
                        justify-content: flex-start;
                        transform: rotate(0deg);
                        padding: var(--padding-10xs) 0px 0px;
                        box-sizing: border-box;
                      }
                    `}
                  >
                    <div
                      className={css`
                        align-self: stretch;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        justify-content: flex-start;
                        gap: var(--gap-6xs);
                        width: auto;
                        height: auto;
                        transform: rotate(0deg);
                        &:hover {
                          display: flex;
                          align-self: stretch;
                          width: auto;
                          height: auto;
                          flex-direction: column;
                          gap: var(--gap-6xs);
                          align-items: flex-start;
                          justify-content: flex-start;
                          transform: rotate(0deg);
                        }
                      `}
                    >
                      <b
                        className={css`
                          width: 102px;
                          position: relative;
                          line-height: 125%;
                          display: flex;
                          min-width: 102;
                          font-weight: 700;
                          height: auto;
                          z-index: 1;
                          &:hover {
                            font-weight: 700;
                            font-family: var(--font-dm-sans);
                            font-size: var(
                              --previewthemeforestnet-kumbh-sans-medium-20-size
                            );
                            line-height: 125%;
                            text-align: center;
                            color: var(--color-dimgray-300);
                            display: flex;
                            width: 102px;
                            height: auto;
                            min-width: 102;
                          }
                          @media screen and (max-width: 450px) {
                            font-size: var(
                              --previewthemeforestnet-kumbh-sans-regular-16-size
                            );
                            line-height: 20px;
                          }
                        `}
                      >
                        Beth Luna
                      </b>
                      <img
                        className={css`
                          align-self: stretch;
                          height: 22px;
                          position: relative;
                          max-width: 100%;
                          overflow: hidden;
                          flex-shrink: 0;
                          display: flex;
                          width: auto;
                          z-index: 1;
                          &:hover {
                            display: flex;
                            align-self: stretch;
                            width: auto;
                            height: 22px;
                          }
                        `}
                        loading="lazy"
                        alt=""
                        src="/group-55.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={css`
              flex: 0.9864;
              box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.05);
              border-radius: var(--br-xl);
              background-color: var(--pure-white);
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-start;
              padding: var(--padding-26xl) var(--padding-9xl)
                var(--padding-56xl);
              box-sizing: border-box;
              position: relative;
              gap: var(--gap-65xl);
              min-width: 367;
              max-width: 100%;
              height: auto;
              color: var(--color-gray-200);
              &:hover {
                background-color: var(--pure-white);
                display: flex;
                flex: 0.9864;
                height: auto;
                flex-direction: column;
                gap: var(--gap-65xl);
                align-items: flex-start;
                justify-content: flex-start;
                border-radius: var(--br-xl);
                padding: var(--padding-26xl) var(--padding-9xl)
                  var(--padding-56xl);
                box-sizing: border-box;
                box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.05);
                min-width: 367;
                max-width: 100%;
              }
              @media screen and (max-width: 825px) {
                gap: var(--gap-23xl);
                padding-top: var(--padding-10xl);
                padding-bottom: var(--padding-30xl);
                box-sizing: border-box;
              }
              @media screen and (max-width: 450px) {
                min-width: 100%;
                flex: 1;
              }
            `}
          >
            <h3
              className={css`
                margin: 0;
                width: 220px;
                position: relative;
                font-size: inherit;
                line-height: 38px;
                font-weight: 700;
                font-family: inherit;
                display: flex;
                height: auto;
                z-index: 1;
                &:hover {
                  font-weight: 700;
                  font-family: var(--font-roboto-slab);
                  font-size: var(--font-size-11xl);
                  line-height: 38px;
                  text-align: center;
                  color: var(--color-gray-200);
                  display: flex;
                  width: 220px;
                  height: auto;
                }
                @media screen and (max-width: 825px) {
                  font-size: var(
                    --previewthemeforestnet-kumbh-sans-medium-24-size
                  );
                  line-height: 30px;
                }
                @media screen and (max-width: 450px) {
                  font-size: var(--font-size-lg);
                  line-height: 22px;
                }
              `}
            >
              Great Platform
            </h3>
            <img
              className={css`
                width: 52px;
                height: 52px;
                position: absolute;
                margin: 0 !important;
                top: 103px;
                left: 28px;
                overflow: hidden;
                flex-shrink: 0;
                object-fit: contain;
                display: flex;
                gap: var(--gap-0);
                z-index: 1;
                &:hover {
                  display: flex;
                  width: 52px;
                  height: 52px;
                  gap: var(--gap-0);
                }
              `}
              loading="lazy"
              alt=""
              src="/8673025-ic-fluent-comma-filled-icon-1.svg"
            />
            <div
              className={css`
                align-self: stretch;
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: flex-start;
                padding: 0px var(--padding-4xs) 0px var(--padding-3xs);
                box-sizing: border-box;
                max-width: 100%;
                width: auto;
                height: auto;
                gap: var(--gap-0);
                transform: rotate(0deg);
                font-size: var(--font-size-3xl);
                color: var(--color-dimgray-300);
                font-family: var(--font-poppins);
                &:hover {
                  display: flex;
                  align-self: stretch;
                  width: auto;
                  height: auto;
                  flex-direction: row;
                  gap: var(--gap-0);
                  align-items: flex-start;
                  justify-content: flex-start;
                  transform: rotate(0deg);
                  padding: 0px var(--padding-4xs) 0px var(--padding-3xs);
                  box-sizing: border-box;
                  max-width: 100%;
                }
              `}
            >
              <div
                className={css`
                  flex: 1;
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  justify-content: flex-start;
                  gap: var(--gap-12xl-5);
                  max-width: 100%;
                  height: auto;
                  transform: rotate(0deg);
                  &:hover {
                    display: flex;
                    flex: 1;
                    height: auto;
                    flex-direction: column;
                    gap: var(--gap-12xl-5);
                    align-items: flex-start;
                    justify-content: flex-start;
                    transform: rotate(0deg);
                    max-width: 100%;
                  }
                  @media screen and (max-width: 450px) {
                    gap: var(--gap-base);
                  }
                `}
              >
                <div
                  className={css`
                    align-self: stretch;
                    position: relative;
                    line-height: 150%;
                    white-space: pre-wrap;
                    display: flex;
                    width: auto;
                    height: auto;
                    z-index: 1;
                    &:hover {
                      font-family: var(--font-poppins);
                      font-size: var(--font-size-3xl);
                      line-height: 150%;
                      text-align: center;
                      color: var(--color-dimgray-300);
                      display: flex;
                      align-self: stretch;
                      width: auto;
                      height: auto;
                    }
                    @media screen and (max-width: 450px) {
                      font-size: var(--font-size-lg);
                      line-height: 26px;
                    }
                  `}
                >{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took  `}</div>
                <div
                  className={css`
                    align-self: stretch;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: flex-start;
                    gap: var(--gap-xl-5);
                    width: auto;
                    height: auto;
                    transform: rotate(0deg);
                    font-size: var(
                      --previewthemeforestnet-kumbh-sans-medium-20-size
                    );
                    font-family: var(--font-dm-sans);
                    &:hover {
                      display: flex;
                      align-self: stretch;
                      width: auto;
                      height: auto;
                      flex-direction: column;
                      gap: var(--gap-xl-5);
                      align-items: flex-start;
                      justify-content: flex-start;
                      transform: rotate(0deg);
                    }
                  `}
                >
                  <img
                    className={css`
                      align-self: stretch;
                      position: relative;
                      max-width: 100%;
                      overflow: hidden;
                      max-height: 100%;
                      display: flex;
                      width: auto;
                      border: 1px solid var(--color-darkgray-100);
                      box-sizing: border-box;
                      z-index: 1;
                      &:hover {
                        display: flex;
                        align-self: stretch;
                        width: auto;
                        border: 1px solid var(--color-darkgray-100);
                        box-sizing: border-box;
                      }
                    `}
                    alt=""
                    src="/user-image-shape.svg"
                  />
                  <div
                    className={css`
                      width: 218px;
                      display: flex;
                      flex-direction: row;
                      align-items: flex-start;
                      justify-content: flex-start;
                      gap: var(--gap-3xs);
                      height: auto;
                      transform: rotate(0deg);
                      &:hover {
                        display: flex;
                        width: 218px;
                        height: auto;
                        flex-direction: row;
                        gap: var(--gap-3xs);
                        align-items: flex-start;
                        justify-content: flex-start;
                        transform: rotate(0deg);
                      }
                    `}
                  >
                    <img
                      className={css`
                        height: 61px;
                        width: 61px;
                        position: relative;
                        border-radius: 50%;
                        object-fit: cover;
                        background-color: var(--color-gainsboro);
                        display: flex;
                        border: 2px solid var(--color-darkslateblue);
                        box-sizing: border-box;
                        z-index: 1;
                        &:hover {
                          background-color: var(--color-gainsboro);
                          display: flex;
                          width: 61px;
                          height: 61px;
                          border: 2px solid var(--color-darkslateblue);
                          box-sizing: border-box;
                        }
                      `}
                      alt=""
                      src="/ellipse-2662-1@2x.png"
                    />
                    <div
                      className={css`
                        flex: 1;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        justify-content: flex-start;
                        padding: var(--padding-10xs) 0px 0px;
                        box-sizing: border-box;
                        height: auto;
                        gap: var(--gap-0);
                        transform: rotate(0deg);
                        &:hover {
                          display: flex;
                          flex: 1;
                          height: auto;
                          flex-direction: column;
                          gap: var(--gap-0);
                          align-items: flex-start;
                          justify-content: flex-start;
                          transform: rotate(0deg);
                          padding: var(--padding-10xs) 0px 0px;
                          box-sizing: border-box;
                        }
                      `}
                    >
                      <div
                        className={css`
                          align-self: stretch;
                          display: flex;
                          flex-direction: column;
                          align-items: flex-start;
                          justify-content: flex-start;
                          gap: var(--gap-6xs);
                          width: auto;
                          height: auto;
                          transform: rotate(0deg);
                          &:hover {
                            display: flex;
                            align-self: stretch;
                            width: auto;
                            height: auto;
                            flex-direction: column;
                            gap: var(--gap-6xs);
                            align-items: flex-start;
                            justify-content: flex-start;
                            transform: rotate(0deg);
                          }
                        `}
                      >
                        <b
                          className={css`
                            align-self: stretch;
                            position: relative;
                            line-height: 125%;
                            display: flex;
                            font-weight: 700;
                            width: auto;
                            height: auto;
                            z-index: 1;
                            &:hover {
                              font-weight: 700;
                              font-family: var(--font-dm-sans);
                              font-size: var(
                                --previewthemeforestnet-kumbh-sans-medium-20-size
                              );
                              line-height: 125%;
                              text-align: center;
                              color: var(--color-dimgray-300);
                              display: flex;
                              align-self: stretch;
                              width: auto;
                              height: auto;
                            }
                            @media screen and (max-width: 450px) {
                              font-size: var(
                                --previewthemeforestnet-kumbh-sans-regular-16-size
                              );
                              line-height: 20px;
                            }
                          `}
                        >
                          Belinda Gomez
                        </b>
                        <img
                          className={css`
                            width: 110px;
                            height: 22px;
                            position: relative;
                            display: flex;
                            z-index: 1;
                            &:hover {
                              display: flex;
                              width: 110px;
                              height: 22px;
                            }
                          `}
                          alt=""
                          src="/group-55.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={css`
              flex: 1;
              box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.05);
              border-radius: var(--br-xl);
              background-color: var(--pure-white);
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-start;
              padding: var(--padding-26xl) var(--padding-6xl)
                var(--padding-30xl);
              box-sizing: border-box;
              gap: var(--gap-xl-5);
              min-width: 367;
              max-width: 100%;
              height: auto;
              &:hover {
                background-color: var(--pure-white);
                display: flex;
                flex: 1;
                height: auto;
                flex-direction: column;
                gap: var(--gap-xl-5);
                align-items: flex-start;
                justify-content: flex-start;
                border-radius: var(--br-xl);
                padding: var(--padding-26xl) var(--padding-6xl)
                  var(--padding-30xl);
                box-sizing: border-box;
                box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.05);
                min-width: 367;
                max-width: 100%;
              }
              @media screen and (max-width: 825px) {
                padding-top: var(--padding-10xl);
                padding-bottom: var(--padding-13xl);
                box-sizing: border-box;
              }
              @media screen and (max-width: 450px) {
                min-width: 100%;
              }
            `}
          >
            <div
              className={css`
                width: 220px;
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: flex-start;
                padding: 0px 0px var(--padding-44xl-5);
                box-sizing: border-box;
                position: relative;
                height: auto;
                gap: var(--gap-0);
                transform: rotate(0deg);
                color: var(--color-gray-200);
                &:hover {
                  display: flex;
                  width: 220px;
                  height: auto;
                  flex-direction: row;
                  gap: var(--gap-0);
                  align-items: flex-start;
                  justify-content: flex-start;
                  transform: rotate(0deg);
                  padding: 0px 0px var(--padding-44xl-5);
                  box-sizing: border-box;
                }
              `}
            >
              <h3
                className={css`
                  margin: 0;
                  flex: 1;
                  position: relative;
                  font-size: inherit;
                  line-height: 38px;
                  font-weight: 700;
                  font-family: inherit;
                  display: flex;
                  height: auto;
                  z-index: 1;
                  &:hover {
                    font-weight: 700;
                    font-family: var(--font-roboto-slab);
                    font-size: var(--font-size-11xl);
                    line-height: 38px;
                    text-align: center;
                    color: var(--color-gray-200);
                    display: flex;
                    flex: 1;
                    height: auto;
                  }
                  @media screen and (max-width: 825px) {
                    font-size: var(
                      --previewthemeforestnet-kumbh-sans-medium-24-size
                    );
                    line-height: 30px;
                  }
                  @media screen and (max-width: 450px) {
                    font-size: var(--font-size-lg);
                    line-height: 22px;
                  }
                `}
              >
                Great Platform
              </h3>
              <img
                className={css`
                  height: 52px;
                  width: 52px;
                  position: absolute;
                  margin: 0 !important;
                  bottom: -8.5px;
                  left: 3px;
                  overflow: hidden;
                  flex-shrink: 0;
                  object-fit: contain;
                  display: flex;
                  gap: var(--gap-0);
                  z-index: 1;
                  &:hover {
                    display: flex;
                    width: 52px;
                    height: 52px;
                    gap: var(--gap-0);
                  }
                `}
                loading="lazy"
                alt=""
                src="/8673025-ic-fluent-comma-filled-icon-1.svg"
              />
            </div>
            <div
              className={css`
                align-self: stretch;
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: flex-start;
                padding: 0px var(--padding-xs) var(--padding-2xs)
                  var(--padding-smi);
                box-sizing: border-box;
                max-width: 100%;
                width: auto;
                height: auto;
                gap: var(--gap-0);
                transform: rotate(0deg);
                font-size: var(--font-size-3xl);
                font-family: var(--font-poppins);
                &:hover {
                  display: flex;
                  align-self: stretch;
                  width: auto;
                  height: auto;
                  flex-direction: row;
                  gap: var(--gap-0);
                  align-items: flex-start;
                  justify-content: flex-start;
                  transform: rotate(0deg);
                  padding: 0px var(--padding-xs) var(--padding-2xs)
                    var(--padding-smi);
                  box-sizing: border-box;
                  max-width: 100%;
                }
              `}
            >
              <div
                className={css`
                  flex: 1;
                  position: relative;
                  line-height: 150%;
                  white-space: pre-wrap;
                  display: flex;
                  max-width: 100%;
                  height: auto;
                  z-index: 1;
                  &:hover {
                    font-family: var(--font-poppins);
                    font-size: var(--font-size-3xl);
                    line-height: 150%;
                    text-align: center;
                    color: var(--color-dimgray-300);
                    display: flex;
                    flex: 1;
                    height: auto;
                    max-width: 100%;
                  }
                  @media screen and (max-width: 450px) {
                    font-size: var(--font-size-lg);
                    line-height: 26px;
                  }
                `}
              >{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took  `}</div>
            </div>
            <div
              className={css`
                align-self: stretch;
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: flex-start;
                padding: 0px var(--padding-base) 0px var(--padding-smi);
                box-sizing: border-box;
                max-width: 100%;
                width: auto;
                height: auto;
                gap: var(--gap-0);
                transform: rotate(0deg);
                &:hover {
                  display: flex;
                  align-self: stretch;
                  width: auto;
                  height: auto;
                  flex-direction: row;
                  gap: var(--gap-0);
                  align-items: flex-start;
                  justify-content: flex-start;
                  transform: rotate(0deg);
                  padding: 0px var(--padding-base) 0px var(--padding-smi);
                  box-sizing: border-box;
                  max-width: 100%;
                }
              `}
            >
              <img
                className={css`
                  flex: 1;
                  position: relative;
                  max-width: 100%;
                  overflow: hidden;
                  max-height: 100%;
                  display: flex;
                  border: 1px solid var(--color-darkgray-100);
                  box-sizing: border-box;
                  z-index: 1;
                  &:hover {
                    display: flex;
                    flex: 1;
                    border: 1px solid var(--color-darkgray-100);
                    box-sizing: border-box;
                    max-width: 100%;
                  }
                `}
                alt=""
                src="/user-image-shape.svg"
              />
            </div>
            <div
              className={css`
                width: 255px;
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: flex-start;
                padding: 0px var(--padding-smi);
                box-sizing: border-box;
                height: auto;
                gap: var(--gap-0);
                transform: rotate(0deg);
                font-size: var(
                  --previewthemeforestnet-kumbh-sans-medium-20-size
                );
                font-family: var(--font-dm-sans);
                &:hover {
                  display: flex;
                  width: 255px;
                  height: auto;
                  flex-direction: row;
                  gap: var(--gap-0);
                  align-items: flex-start;
                  justify-content: flex-start;
                  transform: rotate(0deg);
                  padding: 0px var(--padding-smi);
                  box-sizing: border-box;
                }
              `}
            >
              <div
                className={css`
                  flex: 1;
                  display: flex;
                  flex-direction: row;
                  align-items: flex-start;
                  justify-content: flex-start;
                  gap: var(--gap-3xs);
                  height: auto;
                  transform: rotate(0deg);
                  &:hover {
                    display: flex;
                    flex: 1;
                    height: auto;
                    flex-direction: row;
                    gap: var(--gap-3xs);
                    align-items: flex-start;
                    justify-content: flex-start;
                    transform: rotate(0deg);
                  }
                `}
              >
                <img
                  className={css`
                    height: 61px;
                    width: 61px;
                    position: relative;
                    border-radius: 50%;
                    object-fit: cover;
                    background-color: var(--color-gainsboro);
                    display: flex;
                    border: 2px solid var(--color-darkslateblue);
                    box-sizing: border-box;
                    z-index: 1;
                    &:hover {
                      background-color: var(--color-gainsboro);
                      display: flex;
                      width: 61px;
                      height: 61px;
                      border: 2px solid var(--color-darkslateblue);
                      box-sizing: border-box;
                    }
                  `}
                  alt=""
                  src="/ellipse-2662-2@2x.png"
                />
                <div
                  className={css`
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: flex-start;
                    padding: var(--padding-10xs) 0px 0px;
                    box-sizing: border-box;
                    height: auto;
                    gap: var(--gap-0);
                    transform: rotate(0deg);
                    &:hover {
                      display: flex;
                      flex: 1;
                      height: auto;
                      flex-direction: column;
                      gap: var(--gap-0);
                      align-items: flex-start;
                      justify-content: flex-start;
                      transform: rotate(0deg);
                      padding: var(--padding-10xs) 0px 0px;
                      box-sizing: border-box;
                    }
                  `}
                >
                  <div
                    className={css`
                      align-self: stretch;
                      display: flex;
                      flex-direction: column;
                      align-items: flex-start;
                      justify-content: flex-start;
                      gap: var(--gap-6xs);
                      width: auto;
                      height: auto;
                      transform: rotate(0deg);
                      &:hover {
                        display: flex;
                        align-self: stretch;
                        width: auto;
                        height: auto;
                        flex-direction: column;
                        gap: var(--gap-6xs);
                        align-items: flex-start;
                        justify-content: flex-start;
                        transform: rotate(0deg);
                      }
                    `}
                  >
                    <b
                      className={css`
                        align-self: stretch;
                        position: relative;
                        line-height: 125%;
                        display: flex;
                        font-weight: 700;
                        width: auto;
                        height: auto;
                        z-index: 1;
                        &:hover {
                          font-weight: 700;
                          font-family: var(--font-dm-sans);
                          font-size: var(
                            --previewthemeforestnet-kumbh-sans-medium-20-size
                          );
                          line-height: 125%;
                          text-align: center;
                          color: var(--color-dimgray-300);
                          display: flex;
                          align-self: stretch;
                          width: auto;
                          height: auto;
                        }
                        @media screen and (max-width: 450px) {
                          font-size: var(
                            --previewthemeforestnet-kumbh-sans-regular-16-size
                          );
                          line-height: 20px;
                        }
                      `}
                    >
                      Howard Clayton
                    </b>
                    <img
                      className={css`
                        width: 110px;
                        height: 22px;
                        position: relative;
                        display: flex;
                        z-index: 1;
                        &:hover {
                          display: flex;
                          width: 110px;
                          height: 22px;
                        }
                      `}
                      alt=""
                      src="/group-55.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent4;
