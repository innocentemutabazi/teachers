import { FunctionComponent } from "react";
import { css } from "@emotion/css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <div
      className={[
        css`
          width: 1806.1px;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-end;
          padding: 0px var(--padding-47xl);
          box-sizing: border-box;
          max-width: 100%;
          height: auto;
          gap: var(--gap-0);
          transform: rotate(0deg);
          text-align: left;
          font-size: var(--font-size-71xl);
          color: var(--color-gray-100);
          font-family: var(--font-karma);
          &:hover {
            display: flex;
            width: 1806.1px;
            height: auto;
            flex-direction: row;
            gap: var(--gap-0);
            align-items: flex-start;
            justify-content: flex-end;
            transform: rotate(0deg);
            padding: 0px var(--padding-47xl);
            box-sizing: border-box;
            max-width: 100%;
          }
          @media screen and (max-width: 1200px) {
            padding-left: var(--padding-14xl);
            padding-right: var(--padding-14xl);
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
          flex-direction: row;
          align-items: flex-start;
          justify-content: center;
          gap: var(--gap-103xl);
          max-width: 100%;
          height: auto;
          transform: rotate(0deg);
          &:hover {
            display: flex;
            flex: 1;
            height: auto;
            flex-direction: row;
            gap: var(--gap-103xl);
            align-items: flex-start;
            justify-content: center;
            transform: rotate(0deg);
            max-width: 100%;
          }
          @media screen and (max-width: 1500px) {
            flex-wrap: wrap;
          }
          @media screen and (max-width: 1200px) {
            gap: var(--gap-42xl);
          }
          @media screen and (max-width: 825px) {
            gap: var(--gap-11xl);
          }
          @media screen and (max-width: 450px) {
            gap: var(--gap-mini);
          }
        `}
      >
        <div
          className={css`
            width: 715.1px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            padding: var(--padding-135xl) 0px 0px;
            box-sizing: border-box;
            min-width: 715.1000000000004;
            max-width: 100%;
            height: auto;
            gap: var(--gap-0);
            transform: rotate(0deg);
            &:hover {
              display: flex;
              width: 715.1px;
              height: auto;
              flex-direction: column;
              gap: var(--gap-0);
              align-items: flex-start;
              justify-content: flex-start;
              transform: rotate(0deg);
              padding: var(--padding-135xl) 0px 0px;
              box-sizing: border-box;
              min-width: 715.1000000000004;
              max-width: 100%;
            }
            @media screen and (max-width: 1500px) {
              flex: 1;
            }
            @media screen and (max-width: 1200px) {
              min-width: 100%;
            }
            @media screen and (max-width: 825px) {
              padding-top: var(--padding-81xl);
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
              gap: var(--gap-15xl-4);
              max-width: 100%;
              width: auto;
              height: auto;
              transform: rotate(0deg);
              &:hover {
                display: flex;
                align-self: stretch;
                width: auto;
                height: auto;
                flex-direction: column;
                gap: var(--gap-15xl-4);
                align-items: flex-start;
                justify-content: flex-start;
                transform: rotate(0deg);
                max-width: 100%;
              }
              @media screen and (max-width: 825px) {
                gap: var(--gap-mid);
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
                gap: var(--gap-mini-6);
                max-width: 100%;
                width: auto;
                height: auto;
                transform: rotate(0deg);
                &:hover {
                  display: flex;
                  align-self: stretch;
                  width: auto;
                  height: auto;
                  flex-direction: column;
                  gap: var(--gap-mini-6);
                  align-items: flex-start;
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
                  display: flex;
                  width: auto;
                  height: auto;
                  &:hover {
                    font-weight: 700;
                    font-family: var(--font-karma);
                    font-size: var(--font-size-71xl);
                    line-height: 125%;
                    text-align: left;
                    display: flex;
                    align-self: stretch;
                    width: auto;
                    height: auto;
                  }
                  @media screen and (max-width: 825px) {
                    font-size: var(--font-size-26xl);
                    line-height: 67px;
                  }
                  @media screen and (max-width: 450px) {
                    font-size: var(--font-size-8xl);
                    line-height: 45px;
                  }
                `}
              >
                <span className={css``}>{`Getting Quality `}</span>
                <span
                  className={css`
                    color: var(--color-darkslategray-200);
                  `}
                >
                  Education
                </span>
                <span className={css``}> is now more Easy</span>
              </h1>
              <div
                className={css`
                  width: 673px;
                  position: relative;
                  font-size: var(--font-size-3xl);
                  line-height: 150%;
                  font-weight: 500;
                  font-family: var(--font-poppins);
                  color: var(--color-dimgray-200);
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
                    text-align: left;
                    color: var(--color-dimgray-200);
                    display: flex;
                    width: 673px;
                    height: auto;
                    transform: rotate(0.2deg);
                    max-width: 100%;
                  }
                  @media screen and (max-width: 450px) {
                    font-size: var(--font-size-lg);
                    line-height: 26px;
                  }
                `}
              >{`t is a long established fact that a reader will be distracted by the readable content of a page when looking  `}</div>
            </div>
            <div
              className={css`
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: flex-start;
                gap: var(--gap-10xl);
                max-width: 100%;
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
                  gap: var(--gap-10xl);
                  align-items: flex-start;
                  justify-content: flex-start;
                  transform: rotate(0deg);
                  max-width: 100%;
                }
                @media screen and (max-width: 825px) {
                  flex-wrap: wrap;
                }
              `}
            >
              <button
                className={css`
                  cursor: pointer;
                  border: none;
                  padding: var(--padding-base) var(--padding-20xl);
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
                    padding: var(--padding-base) var(--padding-20xl);
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
                    min-width: 121;
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
                      min-width: 121;
                    }
                  `}
                >
                  Join Us Free
                </div>
              </button>
              <button
                className={css`
                  cursor: pointer;
                  border: 1px solid var(--color-steelblue-300);
                  padding: var(--padding-sm) var(--padding-19xl)
                    var(--padding-sm) var(--padding-20xl);
                  background-color: var(--color-steelblue-400);
                  border-radius: var(--br-6xl);
                  box-sizing: border-box;
                  display: flex;
                  flex-direction: row;
                  align-items: flex-start;
                  justify-content: flex-start;
                  white-space: nowrap;
                  width: auto;
                  align-self: unset;
                  height: auto;
                  gap: var(--gap-3xs);
                  &:hover {
                    display: flex;
                    width: auto;
                    align-self: unset;
                    height: auto;
                    flex-direction: row;
                    gap: var(--gap-3xs);
                    align-items: flex-start;
                    justify-content: flex-start;
                    border-radius: var(--br-6xl);
                    padding: var(--padding-sm) var(--padding-19xl)
                      var(--padding-sm) var(--padding-20xl);
                    box-sizing: border-box;
                    border: 1px solid var(--color-steelblue-100);
                    white-space: nowrap;
                  }
                  &:active {
                    background-color: var(--color-steelblue-400);
                    border: 1px solid var(--color-steelblue-300);
                    box-sizing: border-box;
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
                    color: var(--color-dimgray-100);
                    text-align: left;
                    display: flex;
                    min-width: 121;
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
                      color: var(--color-dimgray-100);
                      display: flex;
                      width: auto;
                      align-self: unset;
                      height: auto;
                      min-width: 121;
                    }
                  `}
                >
                  Join Us Free
                </div>
              </button>
            </div>
          </div>
        </div>
        <img
          className={css`
            height: 827px;
            flex: 1;
            position: relative;
            max-width: 100%;
            overflow: hidden;
            object-fit: cover;
            min-width: 544;
            display: flex;
            &:hover {
              display: flex;
              flex: 1;
              height: 827px;
              min-width: 544;
              max-width: 100%;
            }
            @media screen and (max-width: 825px) {
              min-width: 100%;
            }
          `}
          loading="lazy"
          alt=""
          src="/group-11@2x.png"
        />
      </div>
    </div>
  );
};

export default FrameComponent1;
