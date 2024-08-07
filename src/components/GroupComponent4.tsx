import { FunctionComponent } from "react";
import { css } from "@emotion/css";

export type GroupComponent4Type = {
  className?: string;
};

const GroupComponent4: FunctionComponent<GroupComponent4Type> = ({
  className = "",
}) => {
  return (
    <footer
      className={[
        css`
          align-self: stretch;
          background-color: var(--color-mediumslateblue);
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          align-items: flex-start;
          justify-content: center;
          padding: var(--padding-111xl) var(--padding-162xl)
            var(--padding-35xl-4) var(--padding-160xl);
          box-sizing: border-box;
          gap: var(--gap-96xl);
          max-width: 100%;
          width: auto;
          height: auto;
          text-align: left;
          font-size: var(--font-size-11xl);
          color: var(--pure-white);
          font-family: var(--font-inter);
          &:hover {
            background-color: var(--color-mediumslateblue);
            display: flex;
            align-self: stretch;
            width: auto;
            height: auto;
            flex-direction: row;
            flex-wrap: wrap;
            gap: var(--gap-96xl);
            align-items: flex-start;
            justify-content: center;
            padding: var(--padding-111xl) var(--padding-162xl)
              var(--padding-35xl-4) var(--padding-160xl);
            box-sizing: border-box;
            max-width: 100%;
          }
          @media screen and (max-width: 1200px) {
            gap: var(--gap-38xl);
            padding-left: var(--padding-70xl);
            padding-right: var(--padding-71xl);
            box-sizing: border-box;
          }
          @media screen and (max-width: 825px) {
            gap: var(--gap-10xl);
            padding: var(--padding-65xl) var(--padding-26xl) var(--padding-16xl)
              var(--padding-25xl);
            box-sizing: border-box;
          }
        `,
        className,
      ].join(" ")}
    >
      <div
        className={css`
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          justify-content: flex-start;
          gap: var(--gap-149xl-2);
          min-width: 846;
          max-width: 100%;
          height: auto;
          transform: rotate(0deg);
          &:hover {
            display: flex;
            flex: 1;
            height: auto;
            flex-direction: column;
            gap: var(--gap-149xl-2);
            align-items: flex-end;
            justify-content: flex-start;
            transform: rotate(0deg);
            min-width: 846;
            max-width: 100%;
          }
          @media screen and (max-width: 1500px) {
            min-width: 100%;
          }
          @media screen and (max-width: 1200px) {
            gap: var(--gap-65xl);
          }
          @media screen and (max-width: 825px) {
            gap: var(--gap-23xl);
          }
          @media screen and (max-width: 450px) {
            gap: var(--gap-2xl);
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
              max-width: 100%;
            }
          `}
        >
          <div
            className={css`
              width: 1230px;
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              justify-content: space-between;
              max-width: 100%;
              gap: var(--gap-xl);
              height: auto;
              transform: rotate(0deg);
              &:hover {
                display: flex;
                width: 1230px;
                height: auto;
                flex-direction: row;
                gap: var(--gap-xl);
                align-items: flex-start;
                justify-content: space-between;
                transform: rotate(0deg);
                max-width: 100%;
              }
              @media screen and (max-width: 1200px) {
                flex-wrap: wrap;
              }
            `}
          >
            <div
              className={css`
                width: 305px;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
                gap: var(--gap-14xl);
                min-width: 305;
                height: auto;
                transform: rotate(0deg);
                &:hover {
                  display: flex;
                  width: 305px;
                  height: auto;
                  flex-direction: column;
                  gap: var(--gap-14xl);
                  align-items: flex-start;
                  justify-content: flex-start;
                  transform: rotate(0deg);
                  min-width: 305;
                }
                @media screen and (max-width: 1200px) {
                  flex: 1;
                }
                @media screen and (max-width: 450px) {
                  gap: var(--gap-base);
                }
              `}
            >
              <div
                className={css`
                  display: flex;
                  flex-direction: row;
                  align-items: flex-start;
                  justify-content: flex-start;
                  padding: 0px var(--padding-12xs);
                  box-sizing: border-box;
                  width: auto;
                  align-self: unset;
                  height: auto;
                  gap: var(--gap-0);
                  transform: rotate(0deg);
                  &:hover {
                    display: flex;
                    width: auto;
                    align-self: unset;
                    height: auto;
                    flex-direction: row;
                    gap: var(--gap-0);
                    align-items: flex-start;
                    justify-content: flex-start;
                    transform: rotate(0deg);
                    padding: 0px var(--padding-12xs);
                    box-sizing: border-box;
                  }
                `}
              >
                <div
                  className={css`
                    display: flex;
                    flex-direction: row;
                    align-items: flex-start;
                    justify-content: flex-start;
                    width: auto;
                    align-self: unset;
                    height: auto;
                    gap: var(--gap-0);
                    transform: rotate(0deg);
                    &:hover {
                      display: flex;
                      width: auto;
                      align-self: unset;
                      height: auto;
                      flex-direction: row;
                      gap: var(--gap-0);
                      align-items: flex-start;
                      justify-content: flex-start;
                      transform: rotate(0deg);
                    }
                    @media screen and (max-width: 1200px) {
                      flex: 1;
                    }
                  `}
                >
                  <img
                    className={css`
                      height: 38px;
                      width: 38px;
                      position: relative;
                      overflow: hidden;
                      flex-shrink: 0;
                      min-height: 38;
                      display: flex;
                      gap: var(--gap-0);
                      z-index: 2;
                      &:hover {
                        display: flex;
                        width: 38px;
                        height: 38px;
                        gap: var(--gap-0);
                        min-height: 38;
                        flex-shrink: 0;
                      }
                    `}
                    alt=""
                    src="/6572256-education-genius-graduation-knowledge-learning-icon-1-1.svg"
                  />
                  <div
                    className={css`
                      display: flex;
                      flex-direction: column;
                      align-items: flex-start;
                      justify-content: flex-start;
                      padding: 0px 0px 0px 0px;
                      box-sizing: border-box;
                      width: auto;
                      align-self: unset;
                      height: auto;
                      gap: var(--gap-0);
                      transform: rotate(0deg);
                      &:hover {
                        display: flex;
                        width: auto;
                        align-self: unset;
                        height: auto;
                        flex-direction: column;
                        gap: var(--gap-0);
                        align-items: flex-start;
                        justify-content: flex-start;
                        transform: rotate(0deg);
                        padding: 0px 0px 0px 0px;
                        box-sizing: border-box;
                      }
                    `}
                  >
                    <h3
                      className={css`
                        margin-left: -1px;
                        margin: 0;
                        position: relative;
                        font-size: inherit;
                        line-height: 38px;
                        font-weight: 700;
                        font-family: inherit;
                        display: flex;
                        min-width: 94;
                        flex-shrink: 0;
                        white-space: nowrap;
                        width: auto;
                        align-self: unset;
                        height: auto;
                        z-index: 1;
                        &:hover {
                          font-weight: 700;
                          font-family: var(--font-inter);
                          font-size: var(--font-size-11xl);
                          line-height: 38px;
                          text-align: left;
                          color: var(--pure-white);
                          display: flex;
                          width: auto;
                          align-self: unset;
                          height: auto;
                          min-width: 94;
                          flex-shrink: 0;
                          white-space: nowrap;
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
                    >{`Learn. `}</h3>
                  </div>
                </div>
              </div>
              <div
                className={css`
                  align-self: stretch;
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  justify-content: flex-start;
                  gap: var(--gap-lgi);
                  width: auto;
                  height: auto;
                  transform: rotate(0deg);
                  font-size: var(--font-size-6xl);
                  font-family: var(--font-poppins);
                  &:hover {
                    display: flex;
                    align-self: stretch;
                    width: auto;
                    height: auto;
                    flex-direction: column;
                    gap: var(--gap-lgi);
                    align-items: flex-start;
                    justify-content: flex-start;
                    transform: rotate(0deg);
                  }
                `}
              >
                <div
                  className={css`
                    align-self: stretch;
                    position: relative;
                    line-height: 32px;
                    font-weight: 500;
                    display: flex;
                    width: auto;
                    height: auto;
                    z-index: 1;
                    &:hover {
                      font-weight: 500;
                      font-family: var(--font-poppins);
                      font-size: var(--font-size-6xl);
                      line-height: 32px;
                      text-align: left;
                      color: var(--pure-white);
                      display: flex;
                      align-self: stretch;
                      width: auto;
                      height: auto;
                    }
                    @media screen and (max-width: 450px) {
                      font-size: var(
                        --previewthemeforestnet-kumbh-sans-medium-20-size
                      );
                      line-height: 25px;
                    }
                  `}
                >
                  Follow on social service
                </div>
                <div
                  className={css`
                    display: flex;
                    flex-direction: row;
                    align-items: flex-end;
                    justify-content: flex-start;
                    gap: var(--gap-5xl-7);
                    width: auto;
                    align-self: unset;
                    height: auto;
                    transform: rotate(0deg);
                    &:hover {
                      display: flex;
                      width: auto;
                      align-self: unset;
                      height: auto;
                      flex-direction: row;
                      gap: var(--gap-5xl-7);
                      align-items: flex-end;
                      justify-content: flex-start;
                      transform: rotate(0deg);
                    }
                  `}
                >
                  <img
                    className={css`
                      height: 34.8px;
                      width: 36.7px;
                      position: relative;
                      display: flex;
                      z-index: 1;
                      &:hover {
                        display: flex;
                        width: 36.7px;
                        height: 34.8px;
                      }
                    `}
                    alt=""
                    src="/group.svg"
                  />
                  <img
                    className={css`
                      height: 35.6px;
                      width: 37.6px;
                      position: relative;
                      min-height: 36;
                      display: flex;
                      z-index: 1;
                      &:hover {
                        display: flex;
                        width: 37.6px;
                        height: 35.6px;
                        min-height: 36;
                      }
                    `}
                    alt=""
                    src="/group-1.svg"
                  />
                </div>
              </div>
            </div>
            <div
              className={css`
                width: 600px;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
                padding: var(--padding-3xs-8) 0px 0px;
                box-sizing: border-box;
                min-width: 600;
                max-width: 100%;
                height: auto;
                gap: var(--gap-0);
                transform: rotate(0deg);
                font-size: var(
                  --previewthemeforestnet-kumbh-sans-medium-20-size
                );
                font-family: var(--font-poppins);
                &:hover {
                  display: flex;
                  width: 600px;
                  height: auto;
                  flex-direction: column;
                  gap: var(--gap-0);
                  align-items: flex-start;
                  justify-content: flex-start;
                  transform: rotate(0deg);
                  padding: var(--padding-3xs-8) 0px 0px;
                  box-sizing: border-box;
                  min-width: 600;
                  max-width: 100%;
                }
                @media screen and (max-width: 1200px) {
                  flex: 1;
                  min-width: 100%;
                }
              `}
            >
              <div
                className={css`
                  align-self: stretch;
                  display: flex;
                  flex-direction: row;
                  align-items: flex-start;
                  justify-content: space-between;
                  gap: var(--gap-xl);
                  width: auto;
                  height: auto;
                  transform: rotate(0deg);
                  &:hover {
                    display: flex;
                    align-self: stretch;
                    width: auto;
                    height: auto;
                    flex-direction: row;
                    gap: var(--gap-xl);
                    align-items: flex-start;
                    justify-content: space-between;
                    transform: rotate(0deg);
                  }
                  @media screen and (max-width: 825px) {
                    flex-wrap: wrap;
                  }
                `}
              >
                <div
                  className={css`
                    width: 201px;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: flex-start;
                    gap: var(--gap-base-2);
                    height: auto;
                    transform: rotate(0deg);
                    &:hover {
                      display: flex;
                      width: 201px;
                      height: auto;
                      flex-direction: column;
                      gap: var(--gap-base-2);
                      align-items: flex-start;
                      justify-content: flex-start;
                      transform: rotate(0deg);
                    }
                  `}
                >
                  <h3
                    className={css`
                      margin: 0;
                      align-self: stretch;
                      position: relative;
                      font-size: var(--font-size-11xl);
                      line-height: 38px;
                      font-weight: 700;
                      font-family: var(--font-roboto-slab);
                      display: flex;
                      width: auto;
                      height: auto;
                      z-index: 1;
                      &:hover {
                        font-weight: 700;
                        font-family: var(--font-roboto-slab);
                        font-size: var(--font-size-11xl);
                        line-height: 38px;
                        text-align: left;
                        color: var(--pure-white);
                        display: flex;
                        align-self: stretch;
                        width: auto;
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
                    Links
                  </h3>
                  <div
                    className={css`
                      display: flex;
                      flex-direction: row;
                      align-items: flex-start;
                      justify-content: flex-start;
                      padding: 0px 0px var(--padding-smi-5);
                      box-sizing: border-box;
                      width: auto;
                      align-self: unset;
                      height: auto;
                      gap: var(--gap-0);
                      transform: rotate(0deg);
                      &:hover {
                        display: flex;
                        width: auto;
                        align-self: unset;
                        height: auto;
                        flex-direction: row;
                        gap: var(--gap-0);
                        align-items: flex-start;
                        justify-content: flex-start;
                        transform: rotate(0deg);
                        padding: 0px 0px var(--padding-smi-5);
                        box-sizing: border-box;
                      }
                    `}
                  >
                    <div
                      className={css`
                        position: relative;
                        line-height: 150%;
                        display: flex;
                        min-width: 69;
                        width: auto;
                        align-self: unset;
                        height: auto;
                        z-index: 1;
                        &:hover {
                          font-family: var(--font-poppins);
                          font-size: var(
                            --previewthemeforestnet-kumbh-sans-medium-20-size
                          );
                          line-height: 150%;
                          text-align: left;
                          color: var(--pure-white);
                          display: flex;
                          width: auto;
                          align-self: unset;
                          height: auto;
                          min-width: 69;
                        }
                        @media screen and (max-width: 450px) {
                          font-size: var(
                            --previewthemeforestnet-kumbh-sans-regular-16-size
                          );
                          line-height: 24px;
                        }
                      `}
                    >{`Home `}</div>
                  </div>
                  <div
                    className={css`
                      width: 153px;
                      display: flex;
                      flex-direction: column;
                      align-items: flex-start;
                      justify-content: flex-start;
                      gap: var(--gap-12xl-5);
                      height: auto;
                      transform: rotate(0deg);
                      &:hover {
                        display: flex;
                        width: 153px;
                        height: auto;
                        flex-direction: column;
                        gap: var(--gap-12xl-5);
                        align-items: flex-start;
                        justify-content: flex-start;
                        transform: rotate(0deg);
                      }
                    `}
                  >
                    <div
                      className={css`
                        align-self: stretch;
                        position: relative;
                        line-height: 150%;
                        display: flex;
                        width: auto;
                        height: auto;
                        z-index: 1;
                        &:hover {
                          font-family: var(--font-poppins);
                          font-size: var(
                            --previewthemeforestnet-kumbh-sans-medium-20-size
                          );
                          line-height: 150%;
                          text-align: left;
                          color: var(--pure-white);
                          display: flex;
                          align-self: stretch;
                          width: auto;
                          height: auto;
                        }
                        @media screen and (max-width: 450px) {
                          font-size: var(
                            --previewthemeforestnet-kumbh-sans-regular-16-size
                          );
                          line-height: 24px;
                        }
                      `}
                    >
                      Help center
                    </div>
                    <div
                      className={css`
                        width: 127px;
                        position: relative;
                        line-height: 150%;
                        display: flex;
                        height: auto;
                        z-index: 1;
                        &:hover {
                          font-family: var(--font-poppins);
                          font-size: var(
                            --previewthemeforestnet-kumbh-sans-medium-20-size
                          );
                          line-height: 150%;
                          text-align: left;
                          color: var(--pure-white);
                          display: flex;
                          width: 127px;
                          height: auto;
                        }
                        @media screen and (max-width: 450px) {
                          font-size: var(
                            --previewthemeforestnet-kumbh-sans-regular-16-size
                          );
                          line-height: 24px;
                        }
                      `}
                    >
                      Service
                    </div>
                  </div>
                </div>
                <div
                  className={css`
                    width: 190px;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: flex-start;
                    padding: var(--padding-12xs) 0px 0px;
                    box-sizing: border-box;
                    height: auto;
                    gap: var(--gap-0);
                    transform: rotate(0deg);
                    font-size: var(--font-size-11xl);
                    font-family: var(--font-roboto-slab);
                    &:hover {
                      display: flex;
                      width: 190px;
                      height: auto;
                      flex-direction: column;
                      gap: var(--gap-0);
                      align-items: flex-start;
                      justify-content: flex-start;
                      transform: rotate(0deg);
                      padding: var(--padding-12xs) 0px 0px;
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
                      gap: var(--gap-lg-2);
                      width: auto;
                      height: auto;
                      transform: rotate(0deg);
                      &:hover {
                        display: flex;
                        align-self: stretch;
                        width: auto;
                        height: auto;
                        flex-direction: column;
                        gap: var(--gap-lg-2);
                        align-items: flex-start;
                        justify-content: flex-start;
                        transform: rotate(0deg);
                      }
                    `}
                  >
                    <h3
                      className={css`
                        margin: 0;
                        align-self: stretch;
                        position: relative;
                        font-size: inherit;
                        line-height: 38.1px;
                        font-weight: 700;
                        font-family: inherit;
                        display: flex;
                        flex-shrink: 0;
                        width: auto;
                        height: auto;
                        z-index: 1;
                        &:hover {
                          font-weight: 700;
                          font-family: var(--font-roboto-slab);
                          font-size: var(--font-size-11xl);
                          line-height: 38.1px;
                          text-align: left;
                          color: var(--pure-white);
                          display: flex;
                          align-self: stretch;
                          width: auto;
                          height: auto;
                          flex-shrink: 0;
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
                    >{`Resource `}</h3>
                    <div
                      className={css`
                        width: 167px;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        justify-content: flex-start;
                        gap: var(--gap-9xl-2);
                        flex-shrink: 0;
                        height: auto;
                        transform: rotate(0deg);
                        font-size: var(
                          --previewthemeforestnet-kumbh-sans-medium-20-size
                        );
                        font-family: var(--font-poppins);
                        &:hover {
                          display: flex;
                          width: 167px;
                          height: auto;
                          flex-direction: column;
                          gap: var(--gap-9xl-2);
                          align-items: flex-start;
                          justify-content: flex-start;
                          transform: rotate(0deg);
                          flex-shrink: 0;
                        }
                      `}
                    >
                      <div
                        className={css`
                          width: 101px;
                          position: relative;
                          line-height: 150%;
                          display: flex;
                          height: auto;
                          z-index: 1;
                          &:hover {
                            font-family: var(--font-poppins);
                            font-size: var(
                              --previewthemeforestnet-kumbh-sans-medium-20-size
                            );
                            line-height: 150%;
                            text-align: left;
                            color: var(--pure-white);
                            display: flex;
                            width: 101px;
                            height: auto;
                          }
                          @media screen and (max-width: 450px) {
                            font-size: var(
                              --previewthemeforestnet-kumbh-sans-regular-16-size
                            );
                            line-height: 24px;
                          }
                        `}
                      >
                        About Us
                      </div>
                      <div
                        className={css`
                          position: relative;
                          line-height: 150%;
                          display: flex;
                          min-width: 75;
                          width: auto;
                          align-self: unset;
                          height: auto;
                          z-index: 1;
                          &:hover {
                            font-family: var(--font-poppins);
                            font-size: var(
                              --previewthemeforestnet-kumbh-sans-medium-20-size
                            );
                            line-height: 150%;
                            text-align: left;
                            color: var(--pure-white);
                            display: flex;
                            width: auto;
                            align-self: unset;
                            height: auto;
                            min-width: 75;
                          }
                          @media screen and (max-width: 450px) {
                            font-size: var(
                              --previewthemeforestnet-kumbh-sans-regular-16-size
                            );
                            line-height: 24px;
                          }
                        `}
                      >
                        Carrier
                      </div>
                      <div
                        className={css`
                          align-self: stretch;
                          position: relative;
                          line-height: 27.2px;
                          display: flex;
                          width: auto;
                          height: auto;
                          z-index: 1;
                          &:hover {
                            font-family: var(--font-poppins);
                            font-size: var(
                              --previewthemeforestnet-kumbh-sans-medium-20-size
                            );
                            line-height: 27.2px;
                            text-align: left;
                            color: var(--pure-white);
                            display: flex;
                            align-self: stretch;
                            width: auto;
                            height: auto;
                          }
                          @media screen and (max-width: 450px) {
                            font-size: var(
                              --previewthemeforestnet-kumbh-sans-regular-16-size
                            );
                            line-height: 22px;
                          }
                        `}
                      >
                        Legal Notice
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={css`
            width: 1050px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            gap: var(--gap-11xl);
            max-width: 100%;
            height: auto;
            transform: rotate(0deg);
            font-size: var(--previewthemeforestnet-kumbh-sans-medium-20-size);
            font-family: var(--font-roboto);
            &:hover {
              display: flex;
              width: 1050px;
              height: auto;
              flex-direction: column;
              gap: var(--gap-11xl);
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
              border: 1px solid var(--pure-white);
              box-sizing: border-box;
              z-index: 1;
              &:hover {
                display: flex;
                align-self: stretch;
                width: auto;
                border: 1px solid var(--pure-white);
                box-sizing: border-box;
              }
            `}
            alt=""
            src="/vector-3-1.svg"
          />
          <div
            className={css`
              align-self: stretch;
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              justify-content: center;
              padding: 0px var(--padding-xl) 0px var(--padding-8xl);
              box-sizing: border-box;
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
                padding: 0px var(--padding-xl) 0px var(--padding-8xl);
                box-sizing: border-box;
              }
            `}
          >
            <div
              className={css`
                position: relative;
                line-height: 150%;
                display: flex;
                width: auto;
                align-self: unset;
                height: auto;
                z-index: 1;
                &:hover {
                  font-family: var(--font-roboto);
                  font-size: var(
                    --previewthemeforestnet-kumbh-sans-medium-20-size
                  );
                  line-height: 150%;
                  text-align: left;
                  color: var(--pure-white);
                  display: flex;
                  width: auto;
                  align-self: unset;
                  height: auto;
                }
                @media screen and (max-width: 450px) {
                  font-size: var(
                    --previewthemeforestnet-kumbh-sans-regular-16-size
                  );
                  line-height: 24px;
                }
              `}
            >
              Copyright 2020@ all right
            </div>
          </div>
        </div>
      </div>
      <div
        className={css`
          width: 143px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          padding: var(--padding-base-5) 0px 0px;
          box-sizing: border-box;
          height: auto;
          gap: var(--gap-0);
          transform: rotate(0deg);
          font-size: var(--previewthemeforestnet-kumbh-sans-medium-20-size);
          font-family: var(--font-poppins);
          &:hover {
            display: flex;
            width: 143px;
            height: auto;
            flex-direction: column;
            gap: var(--gap-0);
            align-items: flex-start;
            justify-content: flex-start;
            transform: rotate(0deg);
            padding: var(--padding-base-5) 0px 0px;
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
            gap: var(--gap-6xl-9);
            width: auto;
            height: auto;
            transform: rotate(0deg);
            &:hover {
              display: flex;
              align-self: stretch;
              width: auto;
              height: auto;
              flex-direction: column;
              gap: var(--gap-6xl-9);
              align-items: flex-start;
              justify-content: flex-start;
              transform: rotate(0deg);
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
              padding: 0px 0px var(--padding-7xs-1);
              box-sizing: border-box;
              gap: var(--gap-2xs-5);
              width: auto;
              height: auto;
              transform: rotate(0deg);
              font-size: var(--font-size-11xl);
              font-family: var(--font-roboto-slab);
              &:hover {
                display: flex;
                align-self: stretch;
                width: auto;
                height: auto;
                flex-direction: column;
                gap: var(--gap-2xs-5);
                align-items: flex-start;
                justify-content: flex-start;
                transform: rotate(0deg);
                padding: 0px 0px var(--padding-7xs-1);
                box-sizing: border-box;
              }
            `}
          >
            <h3
              className={css`
                margin: 0;
                align-self: stretch;
                position: relative;
                font-size: inherit;
                line-height: 38px;
                font-weight: 700;
                font-family: inherit;
                display: flex;
                width: auto;
                height: auto;
                z-index: 1;
                &:hover {
                  font-weight: 700;
                  font-family: var(--font-roboto-slab);
                  font-size: var(--font-size-11xl);
                  line-height: 38px;
                  text-align: left;
                  color: var(--pure-white);
                  display: flex;
                  align-self: stretch;
                  width: auto;
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
            >{`Contacts `}</h3>
            <div
              className={css`
                align-self: stretch;
                position: relative;
                font-size: var(
                  --previewthemeforestnet-kumbh-sans-medium-20-size
                );
                line-height: 150%;
                font-family: var(--font-poppins);
                display: flex;
                width: auto;
                height: auto;
                z-index: 1;
                &:hover {
                  font-family: var(--font-poppins);
                  font-size: var(
                    --previewthemeforestnet-kumbh-sans-medium-20-size
                  );
                  line-height: 150%;
                  text-align: left;
                  color: var(--pure-white);
                  display: flex;
                  align-self: stretch;
                  width: auto;
                  height: auto;
                }
                @media screen and (max-width: 450px) {
                  font-size: var(
                    --previewthemeforestnet-kumbh-sans-regular-16-size
                  );
                  line-height: 24px;
                }
              `}
            >
              192. New york
            </div>
          </div>
          <div
            className={css`
              width: 133px;
              position: relative;
              line-height: 150%;
              display: flex;
              height: auto;
              z-index: 1;
              &:hover {
                font-family: var(--font-poppins);
                font-size: var(
                  --previewthemeforestnet-kumbh-sans-medium-20-size
                );
                line-height: 150%;
                text-align: left;
                color: var(--pure-white);
                display: flex;
                width: 133px;
                height: auto;
              }
              @media screen and (max-width: 450px) {
                font-size: var(
                  --previewthemeforestnet-kumbh-sans-regular-16-size
                );
                line-height: 24px;
              }
            `}
          >{`Support `}</div>
          <div
            className={css`
              width: 128px;
              height: 33.3px;
              position: relative;
              line-height: 150%;
              display: flex;
              flex-shrink: 0;
              white-space: nowrap;
              z-index: 1;
              &:hover {
                font-family: var(--font-poppins);
                font-size: var(
                  --previewthemeforestnet-kumbh-sans-medium-20-size
                );
                line-height: 150%;
                text-align: left;
                color: var(--pure-white);
                display: flex;
                width: 128px;
                height: 33.3px;
                white-space: nowrap;
              }
              @media screen and (max-width: 450px) {
                font-size: var(
                  --previewthemeforestnet-kumbh-sans-regular-16-size
                );
                line-height: 24px;
              }
            `}
          >
            +1125156363
          </div>
        </div>
      </div>
    </footer>
  );
};

export default GroupComponent4;
