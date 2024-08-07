import { FunctionComponent } from "react";
import { css } from "@emotion/css";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
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
          text-align: left;
          font-size: var(--font-size-39xl);
          color: var(--color-midnightblue);
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
          width: 1559px;
          display: flex;
          flex-direction: row;
          align-items: flex-end;
          justify-content: center;
          gap: var(--gap-166xl-8);
          max-width: 100%;
          height: auto;
          transform: rotate(0deg);
          &:hover {
            display: flex;
            width: 1559px;
            height: auto;
            flex-direction: row;
            gap: var(--gap-166xl-8);
            align-items: flex-end;
            justify-content: center;
            transform: rotate(0deg);
            max-width: 100%;
          }
          @media screen and (max-width: 1500px) {
            flex-wrap: wrap;
          }
          @media screen and (max-width: 1200px) {
            gap: var(--gap-74xl);
          }
          @media screen and (max-width: 825px) {
            gap: var(--gap-27xl);
          }
          @media screen and (max-width: 450px) {
            gap: var(--gap-4xl);
          }
        `}
      >
        <img
          className={css`
            height: 572px;
            flex: 1;
            position: relative;
            max-width: 100%;
            overflow: hidden;
            object-fit: cover;
            min-width: 481;
            display: flex;
            &:hover {
              display: flex;
              flex: 1;
              height: 572px;
              min-width: 481;
              max-width: 100%;
            }
            @media screen and (max-width: 825px) {
              min-width: 100%;
            }
          `}
          loading="lazy"
          alt=""
          src="/group-36@2x.png"
        />
        <div
          className={css`
            width: 633.2px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            padding: 0px 0px var(--padding-62xl);
            box-sizing: border-box;
            min-width: 633.1999999999998;
            min-height: 490;
            max-width: 100%;
            height: auto;
            gap: var(--gap-0);
            transform: rotate(0deg);
            &:hover {
              display: flex;
              width: 633.2px;
              height: auto;
              flex-direction: column;
              gap: var(--gap-0);
              align-items: flex-start;
              justify-content: flex-start;
              transform: rotate(0deg);
              padding: 0px 0px var(--padding-62xl);
              box-sizing: border-box;
              min-width: 633.1999999999998;
              min-height: 490;
              max-width: 100%;
            }
            @media screen and (max-width: 1500px) {
              flex: 1;
            }
            @media screen and (max-width: 825px) {
              padding-bottom: var(--padding-34xl);
              box-sizing: border-box;
              min-width: 100%;
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
              gap: var(--gap-10xl-5);
              width: auto;
              height: auto;
              transform: rotate(0deg);
              &:hover {
                display: flex;
                align-self: stretch;
                width: auto;
                height: auto;
                flex-direction: column;
                gap: var(--gap-10xl-5);
                align-items: flex-start;
                justify-content: flex-start;
                transform: rotate(0deg);
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
                  font-family: var(--font-roboto-slab);
                  font-size: var(--font-size-39xl);
                  line-height: 125%;
                  text-align: left;
                  color: var(--color-midnightblue);
                  display: flex;
                  align-self: stretch;
                  width: auto;
                  height: auto;
                }
                @media screen and (max-width: 825px) {
                  font-size: var(--font-size-27xl);
                  line-height: 58px;
                }
                @media screen and (max-width: 450px) {
                  font-size: var(--font-size-16xl);
                  line-height: 43px;
                }
              `}
            >
              We are Always Ensure Best Course for your learning
            </h1>
            <div
              className={css`
                align-self: stretch;
                position: relative;
                font-size: var(--font-size-3xl);
                line-height: 150%;
                font-weight: 500;
                font-family: var(--font-poppins);
                color: var(--color-dimgray-200);
                white-space: pre-wrap;
                display: flex;
                transform: rotate(0.2deg);
                width: auto;
                height: auto;
                &:hover {
                  font-weight: 500;
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
            >{`Lorem Ipsum is simply dummy text of the printing and It typesetting industry. Lorem Ipsum has been the  `}</div>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;
