import { FunctionComponent } from "react";
import { css } from "@emotion/css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
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
          padding: 0px var(--padding-xl) 0px var(--padding-2xl);
          box-sizing: border-box;
          max-width: 100%;
          width: auto;
          height: auto;
          gap: var(--gap-0);
          transform: rotate(0deg);
          text-align: center;
          font-size: var(--font-size-41xl);
          color: var(--color-gray-100);
          font-family: var(--font-karma);
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
            padding: 0px var(--padding-xl) 0px var(--padding-2xl);
            box-sizing: border-box;
            max-width: 100%;
          }
        `,
        className,
      ].join(" ")}
    >
      <div
        className={css`
          width: 1561px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          gap: var(--gap-57xl-5);
          max-width: 100%;
          height: auto;
          transform: rotate(0deg);
          &:hover {
            display: flex;
            width: 1561px;
            height: auto;
            flex-direction: column;
            gap: var(--gap-57xl-5);
            align-items: flex-start;
            justify-content: flex-start;
            transform: rotate(0deg);
            max-width: 100%;
          }
          @media screen and (max-width: 825px) {
            gap: var(--gap-19xl);
          }
          @media screen and (max-width: 450px) {
            gap: var(--gap-lgi);
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
            padding: 0px var(--padding-3xl) 0px var(--padding-xl);
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
              padding: 0px var(--padding-3xl) 0px var(--padding-xl);
              box-sizing: border-box;
              max-width: 100%;
            }
          `}
        >
          <div
            className={css`
              width: 799px;
              display: flex;
              flex-direction: column;
              align-items: flex-end;
              justify-content: flex-start;
              gap: var(--gap-2xs);
              max-width: 100%;
              height: auto;
              transform: rotate(0deg);
              &:hover {
                display: flex;
                width: 799px;
                height: auto;
                flex-direction: column;
                gap: var(--gap-2xs);
                align-items: flex-end;
                justify-content: flex-start;
                transform: rotate(0deg);
                max-width: 100%;
              }
            `}
          >
            <h1
              className={css`
                margin: 0;
                align-self: stretch;
                position: relative;
                font-size: inherit;
                line-height: 125%;
                font-weight: 700;
                font-family: inherit;
                white-space: pre-wrap;
                display: flex;
                width: auto;
                height: auto;
                &:hover {
                  font-weight: 700;
                  font-family: var(--font-karma);
                  font-size: var(--font-size-41xl);
                  line-height: 125%;
                  text-align: center;
                  color: var(--color-gray-100);
                  display: flex;
                  align-self: stretch;
                  width: auto;
                  height: auto;
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
            >{`Benefits of online Education  `}</h1>
            <div
              className={css`
                align-self: stretch;
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: flex-end;
                padding: 0px var(--padding-39xl) 0px var(--padding-40xl);
                box-sizing: border-box;
                min-height: 69;
                max-width: 100%;
                width: auto;
                height: auto;
                gap: var(--gap-0);
                transform: rotate(0deg);
                font-size: var(--font-size-3xl);
                color: var(--color-dimgray-200);
                font-family: var(--font-poppins);
                &:hover {
                  display: flex;
                  align-self: stretch;
                  width: auto;
                  height: auto;
                  flex-direction: row;
                  gap: var(--gap-0);
                  align-items: flex-start;
                  justify-content: flex-end;
                  transform: rotate(0deg);
                  padding: 0px var(--padding-39xl) 0px var(--padding-40xl);
                  box-sizing: border-box;
                  min-height: 69;
                  max-width: 100%;
                }
                @media screen and (max-width: 825px) {
                  padding-left: var(--padding-10xl);
                  padding-right: var(--padding-10xl);
                  box-sizing: border-box;
                }
              `}
            >
              <div
                className={css`
                  flex: 1;
                  position: relative;
                  line-height: 150%;
                  font-weight: 500;
                  white-space: pre-wrap;
                  display: flex;
                  transform: rotate(0.2deg);
                  max-width: 100%;
                  height: auto;
                  &:hover {
                    font-weight: 500;
                    font-family: var(--font-poppins);
                    font-size: var(--font-size-3xl);
                    line-height: 150%;
                    text-align: center;
                    color: var(--color-dimgray-200);
                    display: flex;
                    flex: 1;
                    height: auto;
                    transform: rotate(0.2deg);
                    max-width: 100%;
                  }
                  @media screen and (max-width: 450px) {
                    font-size: var(--font-size-lg);
                    line-height: 26px;
                  }
                `}
              >{`It is a long established fact that a reader will be distracted by the readable content of a page when looking  `}</div>
            </div>
          </div>
        </div>
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: flex-start;
            justify-content: center;
            gap: var(--gap-11xl);
            max-width: 100%;
            width: auto;
            height: auto;
            text-align: left;
            font-size: var(--font-size-11xl);
            &:hover {
              display: flex;
              align-self: stretch;
              width: auto;
              height: auto;
              flex-direction: row;
              flex-wrap: wrap;
              gap: var(--gap-11xl);
              align-items: flex-start;
              justify-content: center;
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
              padding: 0px var(--padding-7xl) 0px 0px;
              box-sizing: border-box;
              min-width: 250;
              max-width: 100%;
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
                padding: 0px var(--padding-7xl) 0px 0px;
                box-sizing: border-box;
                min-width: 250;
                max-width: 100%;
              }
            `}
          >
            <div
              className={css`
                align-self: stretch;
                height: 345px;
                border-radius: var(--br-6xl);
                background-color: var(--pure-white);
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
                padding: var(--padding-17xl) var(--padding-18xl);
                box-sizing: border-box;
                gap: var(--gap-xl);
                max-width: 100%;
                width: auto;
                &:hover {
                  background-color: var(--pure-white);
                  display: flex;
                  align-self: stretch;
                  width: auto;
                  height: 345px;
                  flex-direction: column;
                  gap: var(--gap-xl);
                  align-items: flex-start;
                  justify-content: flex-start;
                  border-radius: var(--br-6xl);
                  padding: var(--padding-17xl) var(--padding-18xl);
                  box-sizing: border-box;
                  max-width: 100%;
                }
              `}
            >
              <div
                className={css`
                  align-self: stretch;
                  flex: 1;
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  justify-content: flex-start;
                  gap: var(--gap-11xl);
                  width: auto;
                  transform: rotate(0deg);
                  &:hover {
                    display: flex;
                    align-self: stretch;
                    width: auto;
                    flex: 1;
                    flex-direction: column;
                    gap: var(--gap-11xl);
                    align-items: flex-start;
                    justify-content: flex-start;
                    transform: rotate(0deg);
                  }
                `}
              >
                <img
                  className={css`
                    width: 86px;
                    height: 85px;
                    position: relative;
                    display: flex;
                    z-index: 1;
                    &:hover {
                      display: flex;
                      width: 86px;
                      height: 85px;
                    }
                  `}
                  loading="lazy"
                  alt=""
                  src="/group-18.svg"
                />
                <h3
                  className={css`
                    margin: 0;
                    position: relative;
                    font-size: inherit;
                    line-height: 38px;
                    font-weight: 700;
                    font-family: inherit;
                    display: flex;
                    width: auto;
                    align-self: unset;
                    height: auto;
                    z-index: 1;
                    &:hover {
                      font-weight: 700;
                      font-family: var(--font-karma);
                      font-size: var(--font-size-11xl);
                      line-height: 38px;
                      text-align: left;
                      color: var(--color-gray-100);
                      display: flex;
                      width: auto;
                      align-self: unset;
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
                  One on One Monitor
                </h3>
              </div>
              <div
                className={css`
                  align-self: stretch;
                  position: relative;
                  font-size: var(--font-size-3xl);
                  line-height: 150%;
                  font-family: var(--font-poppins);
                  color: var(--color-dimgray-200);
                  display: flex;
                  transform: rotate(0.2deg);
                  width: auto;
                  height: auto;
                  z-index: 1;
                  &:hover {
                    font-family: var(--font-poppins);
                    font-size: var(--font-size-3xl);
                    line-height: 150%;
                    text-align: left;
                    color: var(--color-dimgray-200);
                    display: flex;
                    align-self: stretch;
                    width: auto;
                    height: auto;
                    transform: rotate(0.2deg);
                  }
                  @media screen and (max-width: 450px) {
                    font-size: var(--font-size-lg);
                    line-height: 26px;
                  }
                `}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
              </div>
            </div>
          </div>
          <div
            className={css`
              height: 345px;
              width: 358px;
              border-radius: var(--br-6xl);
              background-color: var(--pure-white);
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-start;
              padding: var(--padding-17xl) var(--padding-xl) var(--padding-17xl)
                var(--padding-18xl);
              box-sizing: border-box;
              gap: var(--gap-xl);
              max-width: 100%;
              &:hover {
                background-color: var(--pure-white);
                display: flex;
                width: 358px;
                height: 345px;
                flex-direction: column;
                gap: var(--gap-xl);
                align-items: flex-start;
                justify-content: flex-start;
                border-radius: var(--br-6xl);
                padding: var(--padding-17xl) var(--padding-xl)
                  var(--padding-17xl) var(--padding-18xl);
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
                gap: var(--gap-11xl);
                width: auto;
                align-self: unset;
                transform: rotate(0deg);
                &:hover {
                  display: flex;
                  width: auto;
                  align-self: unset;
                  flex: 1;
                  flex-direction: column;
                  gap: var(--gap-11xl);
                  align-items: flex-start;
                  justify-content: flex-start;
                  transform: rotate(0deg);
                }
              `}
            >
              <img
                className={css`
                  width: 86px;
                  height: 85px;
                  position: relative;
                  display: flex;
                  z-index: 1;
                  &:hover {
                    display: flex;
                    width: 86px;
                    height: 85px;
                  }
                `}
                alt=""
                src="/group-18-1.svg"
              />
              <b
                className={css`
                  position: relative;
                  line-height: 38px;
                  display: flex;
                  font-weight: 700;
                  width: auto;
                  align-self: unset;
                  height: auto;
                  z-index: 1;
                  &:hover {
                    font-weight: 700;
                    font-family: var(--font-karma);
                    font-size: var(--font-size-11xl);
                    line-height: 38px;
                    text-align: left;
                    color: var(--color-gray-100);
                    display: flex;
                    width: auto;
                    align-self: unset;
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
              >{`24/7 Mentor `}</b>
            </div>
            <div
              className={css`
                width: 279px;
                position: relative;
                font-size: var(--font-size-3xl);
                line-height: 150%;
                font-family: var(--font-poppins);
                color: var(--color-dimgray-200);
                display: flex;
                transform: rotate(0.2deg);
                height: auto;
                z-index: 1;
                &:hover {
                  font-family: var(--font-poppins);
                  font-size: var(--font-size-3xl);
                  line-height: 150%;
                  text-align: left;
                  color: var(--color-dimgray-200);
                  display: flex;
                  width: 279px;
                  height: auto;
                  transform: rotate(0.2deg);
                }
                @media screen and (max-width: 450px) {
                  font-size: var(--font-size-lg);
                  line-height: 26px;
                }
              `}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </div>
          </div>
          <div
            className={css`
              height: 345px;
              width: 371px;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-start;
              padding: 0px var(--padding-smi) 0px 0px;
              box-sizing: border-box;
              max-width: 100%;
              gap: var(--gap-0);
              transform: rotate(0deg);
              &:hover {
                display: flex;
                width: 371px;
                height: 345px;
                flex-direction: column;
                gap: var(--gap-0);
                align-items: flex-start;
                justify-content: flex-start;
                transform: rotate(0deg);
                padding: 0px var(--padding-smi) 0px 0px;
                box-sizing: border-box;
                max-width: 100%;
              }
            `}
          >
            <div
              className={css`
                align-self: stretch;
                flex: 1;
                border-radius: var(--br-6xl);
                background-color: var(--pure-white);
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
                padding: var(--padding-14xl) var(--padding-xl)
                  var(--padding-20xl) var(--padding-18xl);
                box-sizing: border-box;
                gap: var(--gap-xl);
                max-width: 100%;
                width: auto;
                &:hover {
                  background-color: var(--pure-white);
                  display: flex;
                  align-self: stretch;
                  width: auto;
                  flex: 1;
                  flex-direction: column;
                  gap: var(--gap-xl);
                  align-items: flex-start;
                  justify-content: flex-start;
                  border-radius: var(--br-6xl);
                  padding: var(--padding-14xl) var(--padding-xl)
                    var(--padding-20xl) var(--padding-18xl);
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
                  gap: var(--gap-11xl);
                  width: auto;
                  align-self: unset;
                  transform: rotate(0deg);
                  &:hover {
                    display: flex;
                    width: auto;
                    align-self: unset;
                    flex: 1;
                    flex-direction: column;
                    gap: var(--gap-11xl);
                    align-items: flex-start;
                    justify-content: flex-start;
                    transform: rotate(0deg);
                  }
                `}
              >
                <img
                  className={css`
                    width: 86px;
                    height: 85px;
                    position: relative;
                    display: flex;
                    z-index: 1;
                    &:hover {
                      display: flex;
                      width: 86px;
                      height: 85px;
                    }
                  `}
                  loading="lazy"
                  alt=""
                  src="/group-24.svg"
                />
                <h3
                  className={css`
                    margin: 0;
                    position: relative;
                    font-size: inherit;
                    line-height: 38px;
                    font-weight: 700;
                    font-family: inherit;
                    display: flex;
                    width: auto;
                    align-self: unset;
                    height: auto;
                    z-index: 1;
                    &:hover {
                      font-weight: 700;
                      font-family: var(--font-karma);
                      font-size: var(--font-size-11xl);
                      line-height: 38px;
                      text-align: left;
                      color: var(--color-gray-100);
                      display: flex;
                      width: auto;
                      align-self: unset;
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
                  Whiteboard
                </h3>
              </div>
              <div
                className={css`
                  width: 279px;
                  position: relative;
                  font-size: var(--font-size-3xl);
                  line-height: 150%;
                  font-family: var(--font-poppins);
                  color: var(--color-dimgray-200);
                  display: flex;
                  transform: rotate(0.2deg);
                  height: auto;
                  z-index: 1;
                  &:hover {
                    font-family: var(--font-poppins);
                    font-size: var(--font-size-3xl);
                    line-height: 150%;
                    text-align: left;
                    color: var(--color-dimgray-200);
                    display: flex;
                    width: 279px;
                    height: auto;
                    transform: rotate(0.2deg);
                  }
                  @media screen and (max-width: 450px) {
                    font-size: var(--font-size-lg);
                    line-height: 26px;
                  }
                `}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
              </div>
            </div>
          </div>
          <div
            className={css`
              height: 345px;
              width: 358px;
              border-radius: var(--br-6xl);
              background-color: var(--pure-white);
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-start;
              padding: var(--padding-17xl) var(--padding-xl) var(--padding-17xl)
                var(--padding-18xl);
              box-sizing: border-box;
              gap: var(--gap-xl);
              max-width: 100%;
              &:hover {
                background-color: var(--pure-white);
                display: flex;
                width: 358px;
                height: 345px;
                flex-direction: column;
                gap: var(--gap-xl);
                align-items: flex-start;
                justify-content: flex-start;
                border-radius: var(--br-6xl);
                padding: var(--padding-17xl) var(--padding-xl)
                  var(--padding-17xl) var(--padding-18xl);
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
                gap: var(--gap-11xl);
                width: auto;
                align-self: unset;
                transform: rotate(0deg);
                &:hover {
                  display: flex;
                  width: auto;
                  align-self: unset;
                  flex: 1;
                  flex-direction: column;
                  gap: var(--gap-11xl);
                  align-items: flex-start;
                  justify-content: flex-start;
                  transform: rotate(0deg);
                }
              `}
            >
              <img
                className={css`
                  width: 86px;
                  height: 85px;
                  position: relative;
                  display: flex;
                  z-index: 1;
                  &:hover {
                    display: flex;
                    width: 86px;
                    height: 85px;
                  }
                `}
                loading="lazy"
                alt=""
                src="/group-20.svg"
              />
              <h3
                className={css`
                  margin: 0;
                  position: relative;
                  font-size: inherit;
                  line-height: 38px;
                  font-weight: 700;
                  font-family: inherit;
                  display: flex;
                  width: auto;
                  align-self: unset;
                  height: auto;
                  z-index: 1;
                  &:hover {
                    font-weight: 700;
                    font-family: var(--font-karma);
                    font-size: var(--font-size-11xl);
                    line-height: 38px;
                    text-align: left;
                    color: var(--color-gray-100);
                    display: flex;
                    width: auto;
                    align-self: unset;
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
                Affordable Price
              </h3>
            </div>
            <div
              className={css`
                width: 279px;
                position: relative;
                font-size: var(--font-size-3xl);
                line-height: 150%;
                font-family: var(--font-poppins);
                color: var(--color-dimgray-200);
                display: flex;
                transform: rotate(0.2deg);
                height: auto;
                z-index: 1;
                &:hover {
                  font-family: var(--font-poppins);
                  font-size: var(--font-size-3xl);
                  line-height: 150%;
                  text-align: left;
                  color: var(--color-dimgray-200);
                  display: flex;
                  width: 279px;
                  height: auto;
                  transform: rotate(0.2deg);
                }
                @media screen and (max-width: 450px) {
                  font-size: var(--font-size-lg);
                  line-height: 26px;
                }
              `}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
