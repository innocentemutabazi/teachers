import { FunctionComponent } from "react";
import { css } from "@emotion/css";

export type GroupComponent3Type = {
  className?: string;
};

const GroupComponent3: FunctionComponent<GroupComponent3Type> = ({
  className = "",
}) => {
  return (
    <section
      className={[
        css`
          align-self: stretch;
          background-color: var(--color-mediumslateblue);
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          align-items: flex-start;
          justify-content: space-between;
          padding: var(--padding-61xl) var(--padding-160xl)
            var(--padding-61xl-2) var(--padding-161xl);
          box-sizing: border-box;
          max-width: 100%;
          gap: var(--gap-xl);
          width: auto;
          height: auto;
          text-align: left;
          font-size: var(--font-size-31xl);
          color: var(--pure-white);
          font-family: var(--font-karma);
          &:hover {
            background-color: var(--color-mediumslateblue);
            display: flex;
            align-self: stretch;
            width: auto;
            height: auto;
            flex-direction: row;
            flex-wrap: wrap;
            gap: var(--gap-xl);
            align-items: flex-start;
            justify-content: space-between;
            padding: var(--padding-61xl) var(--padding-160xl)
              var(--padding-61xl-2) var(--padding-161xl);
            box-sizing: border-box;
            max-width: 100%;
          }
          @media screen and (max-width: 1200px) {
            padding-left: var(--padding-71xl);
            padding-right: var(--padding-70xl);
            box-sizing: border-box;
          }
          @media screen and (max-width: 825px) {
            padding-left: var(--padding-26xl);
            padding-right: var(--padding-25xl);
            box-sizing: border-box;
          }
        `,
        className,
      ].join(" ")}
    >
      <div
        className={css`
          width: 204.4px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          gap: var(--gap-2xs);
          height: auto;
          transform: rotate(0deg);
          &:hover {
            display: flex;
            width: 204.4px;
            height: auto;
            flex-direction: column;
            gap: var(--gap-2xs);
            align-items: flex-start;
            justify-content: flex-start;
            transform: rotate(0deg);
          }
        `}
      >
        <b
          className={css`
            width: 115px;
            position: relative;
            line-height: 63px;
            display: flex;
            font-weight: 700;
            height: auto;
            z-index: 1;
            &:hover {
              font-weight: 700;
              font-family: var(--font-karma);
              font-size: var(--font-size-31xl);
              line-height: 63px;
              text-align: left;
              color: var(--pure-white);
              display: flex;
              width: 115px;
              height: auto;
            }
            @media screen and (max-width: 825px) {
              font-size: var(--font-size-21xl);
              line-height: 50px;
            }
            @media screen and (max-width: 450px) {
              font-size: var(--font-size-11xl);
              line-height: 37px;
            }
          `}
        >
          8200
        </b>
        <div
          className={css`
            align-self: stretch;
            position: relative;
            font-size: var(--font-size-6xl);
            line-height: 38px;
            font-family: var(--font-poppins);
            display: flex;
            transform: rotate(0.2deg);
            width: auto;
            height: auto;
            z-index: 1;
            &:hover {
              font-family: var(--font-poppins);
              font-size: var(--font-size-6xl);
              line-height: 38px;
              text-align: left;
              color: var(--pure-white);
              display: flex;
              align-self: stretch;
              width: auto;
              height: auto;
              transform: rotate(0.2deg);
            }
            @media screen and (max-width: 450px) {
              font-size: var(--previewthemeforestnet-kumbh-sans-medium-20-size);
              line-height: 30px;
            }
          `}
        >
          Success Stories
        </div>
      </div>
      <div
        className={css`
          height: 90px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          padding: var(--padding-mini) 0px 0px;
          box-sizing: border-box;
          width: auto;
          align-self: unset;
          gap: var(--gap-0);
          transform: rotate(0deg);
          &:hover {
            display: flex;
            width: auto;
            align-self: unset;
            height: 90px;
            flex-direction: column;
            gap: var(--gap-0);
            align-items: flex-start;
            justify-content: flex-start;
            transform: rotate(0deg);
            padding: var(--padding-mini) 0px 0px;
            box-sizing: border-box;
          }
        `}
      >
        <img
          className={css`
            width: 1px;
            flex: 1;
            position: relative;
            max-height: 100%;
            display: flex;
            border: 1px solid var(--pure-white);
            box-sizing: border-box;
            z-index: 1;
            &:hover {
              display: flex;
              width: 1px;
              flex: 1;
              border: 1px solid var(--pure-white);
              box-sizing: border-box;
            }
          `}
          loading="lazy"
          alt=""
          src="/vector-1.svg"
        />
      </div>
      <div
        className={css`
          width: 204.4px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          gap: var(--gap-2xs);
          height: auto;
          transform: rotate(0deg);
          &:hover {
            display: flex;
            width: 204.4px;
            height: auto;
            flex-direction: column;
            gap: var(--gap-2xs);
            align-items: flex-start;
            justify-content: flex-start;
            transform: rotate(0deg);
          }
        `}
      >
        <b
          className={css`
            width: 141px;
            position: relative;
            line-height: 63px;
            display: flex;
            font-weight: 700;
            height: auto;
            z-index: 1;
            &:hover {
              font-weight: 700;
              font-family: var(--font-karma);
              font-size: var(--font-size-31xl);
              line-height: 63px;
              text-align: left;
              color: var(--pure-white);
              display: flex;
              width: 141px;
              height: auto;
            }
            @media screen and (max-width: 825px) {
              font-size: var(--font-size-21xl);
              line-height: 50px;
            }
            @media screen and (max-width: 450px) {
              font-size: var(--font-size-11xl);
              line-height: 37px;
            }
          `}
        >
          12200
        </b>
        <div
          className={css`
            align-self: stretch;
            position: relative;
            font-size: var(--font-size-6xl);
            line-height: 38px;
            font-family: var(--font-poppins);
            display: flex;
            transform: rotate(0.2deg);
            width: auto;
            height: auto;
            z-index: 1;
            &:hover {
              font-family: var(--font-poppins);
              font-size: var(--font-size-6xl);
              line-height: 38px;
              text-align: left;
              color: var(--pure-white);
              display: flex;
              align-self: stretch;
              width: auto;
              height: auto;
              transform: rotate(0.2deg);
            }
            @media screen and (max-width: 450px) {
              font-size: var(--previewthemeforestnet-kumbh-sans-medium-20-size);
              line-height: 30px;
            }
          `}
        >
          Expert Mentors
        </div>
      </div>
      <div
        className={css`
          height: 90px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          padding: var(--padding-mini) 0px 0px;
          box-sizing: border-box;
          width: auto;
          align-self: unset;
          gap: var(--gap-0);
          transform: rotate(0deg);
          &:hover {
            display: flex;
            width: auto;
            align-self: unset;
            height: 90px;
            flex-direction: column;
            gap: var(--gap-0);
            align-items: flex-start;
            justify-content: flex-start;
            transform: rotate(0deg);
            padding: var(--padding-mini) 0px 0px;
            box-sizing: border-box;
          }
        `}
      >
        <img
          className={css`
            width: 1px;
            flex: 1;
            position: relative;
            max-height: 100%;
            display: flex;
            border: 1px solid var(--pure-white);
            box-sizing: border-box;
            z-index: 1;
            &:hover {
              display: flex;
              width: 1px;
              flex: 1;
              border: 1px solid var(--pure-white);
              box-sizing: border-box;
            }
          `}
          loading="lazy"
          alt=""
          src="/vector-1.svg"
        />
      </div>
      <div
        className={css`
          width: 204.4px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          gap: var(--gap-2xs);
          height: auto;
          transform: rotate(0deg);
          &:hover {
            display: flex;
            width: 204.4px;
            height: auto;
            flex-direction: column;
            gap: var(--gap-2xs);
            align-items: flex-start;
            justify-content: flex-start;
            transform: rotate(0deg);
          }
        `}
      >
        <b
          className={css`
            width: 141px;
            position: relative;
            line-height: 63px;
            display: flex;
            font-weight: 700;
            height: auto;
            z-index: 1;
            &:hover {
              font-weight: 700;
              font-family: var(--font-karma);
              font-size: var(--font-size-31xl);
              line-height: 63px;
              text-align: left;
              color: var(--pure-white);
              display: flex;
              width: 141px;
              height: auto;
            }
            @media screen and (max-width: 825px) {
              font-size: var(--font-size-21xl);
              line-height: 50px;
            }
            @media screen and (max-width: 450px) {
              font-size: var(--font-size-11xl);
              line-height: 37px;
            }
          `}
        >
          50000
        </b>
        <div
          className={css`
            align-self: stretch;
            position: relative;
            font-size: var(--font-size-6xl);
            line-height: 38px;
            font-family: var(--font-poppins);
            white-space: pre-wrap;
            display: flex;
            transform: rotate(0.2deg);
            width: auto;
            height: auto;
            z-index: 1;
            &:hover {
              font-family: var(--font-poppins);
              font-size: var(--font-size-6xl);
              line-height: 38px;
              text-align: left;
              color: var(--pure-white);
              display: flex;
              align-self: stretch;
              width: auto;
              height: auto;
              transform: rotate(0.2deg);
            }
            @media screen and (max-width: 450px) {
              font-size: var(--previewthemeforestnet-kumbh-sans-medium-20-size);
              line-height: 30px;
            }
          `}
        >
          Hours Course
        </div>
      </div>
      <div
        className={css`
          height: 90px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          padding: var(--padding-mini) 0px 0px;
          box-sizing: border-box;
          width: auto;
          align-self: unset;
          gap: var(--gap-0);
          transform: rotate(0deg);
          &:hover {
            display: flex;
            width: auto;
            align-self: unset;
            height: 90px;
            flex-direction: column;
            gap: var(--gap-0);
            align-items: flex-start;
            justify-content: flex-start;
            transform: rotate(0deg);
            padding: var(--padding-mini) 0px 0px;
            box-sizing: border-box;
          }
        `}
      >
        <img
          className={css`
            width: 1px;
            flex: 1;
            position: relative;
            max-height: 100%;
            display: flex;
            border: 1px solid var(--pure-white);
            box-sizing: border-box;
            z-index: 1;
            &:hover {
              display: flex;
              width: 1px;
              flex: 1;
              border: 1px solid var(--pure-white);
              box-sizing: border-box;
            }
          `}
          loading="lazy"
          alt=""
          src="/vector-1.svg"
        />
      </div>
      <div
        className={css`
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          gap: var(--gap-2xs);
          width: auto;
          align-self: unset;
          height: auto;
          transform: rotate(0deg);
          &:hover {
            display: flex;
            width: auto;
            align-self: unset;
            height: auto;
            flex-direction: column;
            gap: var(--gap-2xs);
            align-items: flex-start;
            justify-content: flex-start;
            transform: rotate(0deg);
          }
        `}
      >
        <b
          className={css`
            width: 141px;
            position: relative;
            line-height: 63px;
            display: flex;
            flex-shrink: 0;
            font-weight: 700;
            height: auto;
            z-index: 1;
            &:hover {
              font-weight: 700;
              font-family: var(--font-karma);
              font-size: var(--font-size-31xl);
              line-height: 63px;
              text-align: left;
              color: var(--pure-white);
              display: flex;
              width: 141px;
              height: auto;
              flex-shrink: 0;
            }
            @media screen and (max-width: 825px) {
              font-size: var(--font-size-21xl);
              line-height: 50px;
            }
            @media screen and (max-width: 450px) {
              font-size: var(--font-size-11xl);
              line-height: 37px;
            }
          `}
        >
          70000
        </b>
        <div
          className={css`
            position: relative;
            font-size: var(--font-size-6xl);
            line-height: 38px;
            font-family: var(--font-poppins);
            display: flex;
            transform: rotate(0.2deg);
            flex-shrink: 0;
            width: auto;
            align-self: unset;
            height: auto;
            z-index: 1;
            &:hover {
              font-family: var(--font-poppins);
              font-size: var(--font-size-6xl);
              line-height: 38px;
              text-align: left;
              color: var(--pure-white);
              display: flex;
              width: auto;
              align-self: unset;
              height: auto;
              transform: rotate(0.2deg);
              flex-shrink: 0;
            }
            @media screen and (max-width: 450px) {
              font-size: var(--previewthemeforestnet-kumbh-sans-medium-20-size);
              line-height: 30px;
            }
          `}
        >
          Active Student
        </div>
      </div>
    </section>
  );
};

export default GroupComponent3;
