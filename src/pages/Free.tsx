import { FunctionComponent } from "react";
import FrameComponent from "../components/FrameComponent";
import FrameComponent1 from "../components/FrameComponent1";
import { css } from "@emotion/css";
import GroupComponent3 from "../components/GroupComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent4 from "../components/FrameComponent4";
import GroupComponent4 from "../components/GroupComponent4";

const Free: FunctionComponent = () => {
  return (
    <div
      className={css`
        width: 1920px;
        position: relative;
        background-color: var(--color-whitesmoke-100);
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: flex-start;
        gap: var(--gap-100xl-6);
        line-height: normal;
        letter-spacing: normal;
        height: auto;
        &:hover {
          background-color: var(--color-whitesmoke-100);
          display: flex;
          width: 1920px;
          height: auto;
          flex-direction: column;
          gap: var(--gap-100xl-6);
          align-items: flex-end;
          justify-content: flex-start;
          line-height: normal;
          letter-spacing: normal;
        }
        @media screen and (max-width: 1200px) {
          gap: 60px;
        }
        @media screen and (max-width: 825px) {
          gap: var(--gap-11xl);
        }
      `}
    >
      <section
        className={css`
          align-self: stretch;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          justify-content: flex-start;
          gap: var(--gap-67xl);
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
            gap: var(--gap-67xl);
            align-items: flex-end;
            justify-content: flex-start;
            transform: rotate(0deg);
            max-width: 100%;
          }
          @media screen and (max-width: 1200px) {
            gap: 43px;
          }
          @media screen and (max-width: 825px) {
            gap: var(--gap-2xl);
          }
        `}
      >
        <FrameComponent />
        <FrameComponent1 />
      </section>
      <GroupComponent3 />
      <FrameComponent2 />
      <FrameComponent3 />
      <FrameComponent4 />
      <GroupComponent4 />
    </div>
  );
};

export default Free;
