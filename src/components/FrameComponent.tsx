import { FunctionComponent } from "react";
import { css } from "@emotion/css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <header
      className={[
        css`
          align-self: stretch;
          background-color: var(--pure-white);
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: center;
          padding: var(--padding-2xs) var(--padding-xl);
          box-sizing: border-box;
          gap: var(--gap-359xl);
          top: 0;
          z-index: 99;
          position: sticky;
          max-width: 100%;
          width: auto;
          height: auto;
          transform: rotate(0deg);
          text-align: left;
          font-size: var(--font-size-11xl);
          color: var(--color-darkslategray-100);
          font-family: var(--font-inter);
          &:hover {
            background-color: var(--pure-white);
            display: flex;
            align-self: stretch;
            width: auto;
            height: auto;
            flex-direction: row;
            gap: var(--gap-359xl);
            align-items: flex-start;
            justify-content: center;
            transform: rotate(0deg);
            padding: var(--padding-2xs) var(--padding-xl);
            box-sizing: border-box;
            top: 0;
            z-index: 99;
            position: sticky;
            max-width: 100%;
          }
          @media screen and (max-width: 1200px) {
            gap: var(--gap-170xl);
          }
          @media screen and (max-width: 825px) {
            gap: var(--gap-75xl);
          }
          @media screen and (max-width: 450px) {
            gap: var(--gap-28xl);
          }
        `,
        className,
      ].join(" ")}
    >
      <div
        className={css`
          width: 173px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          padding: var(--padding-xs) 0px 0px;
          box-sizing: border-box;
          height: auto;
          gap: var(--gap-0);
          transform: rotate(0deg);
          &:hover {
            display: flex;
            width: 173px;
            height: auto;
            flex-direction: column;
            gap: var(--gap-0);
            align-items: flex-start;
            justify-content: flex-start;
            transform: rotate(0deg);
            padding: var(--padding-xs) 0px 0px;
            box-sizing: border-box;
          }
        `}
      >
        <div
          className={css`
            width: 131px;
            height: 38px;
            position: relative;
            display: flex;
            gap: var(--gap-0);
            align-items: flex-start;
            justify-content: flex-start;
            transform: rotate(0deg);
            &:hover {
              display: flex;
              width: 131px;
              height: 38px;
              gap: var(--gap-0);
              align-items: flex-start;
              justify-content: flex-start;
              transform: rotate(0deg);
            }
          `}
        >
          <h3
            className={css`
              margin: 0;
              position: absolute;
              top: 0px;
              left: 37px;
              font-size: inherit;
              line-height: 38px;
              font-weight: 700;
              font-family: inherit;
              display: flex;
              min-width: 94;
              white-space: nowrap;
              height: auto;
              z-index: 1;
              &:hover {
                font-weight: 700;
                font-family: var(--font-inter);
                font-size: var(--font-size-11xl);
                line-height: 38px;
                text-align: left;
                color: var(--color-darkslategray-100);
                display: flex;
                height: auto;
                min-width: 94;
                white-space: nowrap;
              }
            `}
          >{`Learn. `}</h3>
          <img
            className={css`
              position: absolute;
              top: 0px;
              left: 0px;
              width: 38px;
              height: 38px;
              overflow: hidden;
              display: flex;
              gap: var(--gap-0);
              z-index: 2;
              &:hover {
                display: flex;
                width: 38px;
                height: 38px;
                gap: var(--gap-0);
              }
            `}
            loading="lazy"
            alt=""
            src="/6572256-education-genius-graduation-knowledge-learning-icon-1.svg"
          />
        </div>
      </div>
      <nav
        className={css`
          margin: 0;
          width: 457px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          padding: var(--padding-sm) 0px 0px;
          box-sizing: border-box;
          max-width: 100%;
          height: auto;
          gap: var(--gap-0);
          transform: rotate(0deg);
          &:hover {
            display: flex;
            width: 457px;
            height: auto;
            flex-direction: column;
            gap: var(--gap-0);
            align-items: flex-start;
            justify-content: flex-start;
            transform: rotate(0deg);
            padding: var(--padding-sm) 0px 0px;
            box-sizing: border-box;
            max-width: 100%;
          }
          @media screen and (max-width: 825px) {
            display: none;
          }
        `}
      >
        <nav
          className={css`
            margin: 0;
            align-self: stretch;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: space-between;
            gap: var(--gap-xl);
            width: auto;
            height: auto;
            transform: rotate(0deg);
            text-align: left;
            font-size: var(--font-size-3xl);
            color: var(--color-dimgray-100);
            font-family: var(--font-poppins);
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
          `}
        >
          <b
            className={css`
              position: relative;
              line-height: 150%;
              display: flex;
              background: linear-gradient(84.45deg, #327186, rgba(0, 0, 0, 0));
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              min-width: 67;
              white-space: nowrap;
              font-weight: 700;
              width: auto;
              align-self: unset;
              height: auto;
              z-index: 1;
              &:hover {
                font-weight: 700;
                font-family: var(--font-poppins);
                font-size: var(--font-size-3xl);
                line-height: 150%;
                text-align: left;
                background: linear-gradient(
                  84.45deg,
                  #327186,
                  rgba(0, 0, 0, 0)
                );
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                display: flex;
                width: auto;
                align-self: unset;
                height: auto;
                min-width: 67;
                white-space: nowrap;
              }
            `}
          >{`Home `}</b>
          <div
            className={css`
              position: relative;
              line-height: 150%;
              display: flex;
              min-width: 79;
              white-space: nowrap;
              width: auto;
              align-self: unset;
              height: auto;
              z-index: 1;
              &:hover {
                font-family: var(--font-poppins);
                font-size: var(--font-size-3xl);
                line-height: 150%;
                text-align: left;
                color: var(--color-dimgray-100);
                display: flex;
                width: auto;
                align-self: unset;
                height: auto;
                min-width: 79;
                white-space: nowrap;
              }
            `}
          >{`Course `}</div>
          <div
            className={css`
              position: relative;
              line-height: 150%;
              display: flex;
              min-width: 95;
              width: auto;
              align-self: unset;
              height: auto;
              z-index: 1;
              &:hover {
                font-family: var(--font-poppins);
                font-size: var(--font-size-3xl);
                line-height: 150%;
                text-align: left;
                color: var(--color-dimgray-100);
                display: flex;
                width: auto;
                align-self: unset;
                height: auto;
                min-width: 95;
              }
            `}
          >
            Monitors
          </div>
          <div
            className={css`
              position: relative;
              line-height: 150%;
              display: flex;
              min-width: 66;
              width: auto;
              align-self: unset;
              height: auto;
              z-index: 1;
              &:hover {
                font-family: var(--font-poppins);
                font-size: var(--font-size-3xl);
                line-height: 150%;
                text-align: left;
                color: var(--color-dimgray-100);
                display: flex;
                width: auto;
                align-self: unset;
                height: auto;
                min-width: 66;
              }
            `}
          >
            About
          </div>
        </nav>
      </nav>
      <button
        className={css`
          cursor: pointer;
          border: none;
          padding: var(--padding-base) var(--padding-10xl);
          background-color: var(--color-darkgoldenrod);
          border-radius: var(--br-xl);
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
          z-index: 1;
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
            border-radius: var(--br-xl);
            padding: var(--padding-base) var(--padding-10xl);
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
            font-size: var(--previewthemeforestnet-kumbh-sans-medium-20-size);
            line-height: 150%;
            font-weight: 600;
            font-family: var(--font-poppins);
            color: var(--color-gray-200);
            text-align: left;
            display: flex;
            min-width: 116;
            width: auto;
            align-self: unset;
            height: auto;
            &:hover {
              font-weight: 600;
              font-family: var(--font-poppins);
              font-size: var(--previewthemeforestnet-kumbh-sans-medium-20-size);
              line-height: 150%;
              text-align: left;
              color: var(--color-gray-200);
              display: flex;
              width: auto;
              align-self: unset;
              height: auto;
              min-width: 116;
            }
          `}
        >
          Get Started
        </div>
      </button>
    </header>
  );
};

export default FrameComponent;
