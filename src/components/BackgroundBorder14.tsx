import { FunctionComponent } from 'react';
import {css} from "@emotion/css";



const :FunctionComponent = ({ className="" }) => {
  return (
    <div className={[css`width: 300px;
position: relative;
border-radius: var(--br-9xs);
background: linear-gradient(180deg, rgba(20, 114, 255, 0.04), rgba(152, 161, 174, 0));
border: 1px solid var(--previewthemeforestnet-gray-chateau-8);
box-sizing: border-box;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
padding: var(--padding-12xl) var(--padding-14xl);
gap: var(--gap-29xl);
height: auto;
text-align: left;
font-size: var(--previewthemeforestnet-kumbh-sans-medium-24-size);
color: var(--previewthemeforestnet-athens-gray);
font-family: var(--previewthemeforestnet-kumbh-sans-medium-20);
&:hover {
background: linear-gradient(180deg, rgba(20, 114, 255, 0.04), rgba(152, 161, 174, 0));
display: flex;
width: 300px;
height: auto;
flex-direction: column;
gap: var(--gap-29xl);
align-items: flex-start;
justify-content: flex-start;
border-radius: var(--br-9xs);
padding: var(--padding-12xl) var(--padding-14xl);
box-sizing: border-box;
border: 1px solid var(--previewthemeforestnet-gray-chateau-8);
}
@media screen and (max-width: 450px) {
gap: var(--gap-5xl);

}
`, className].join(' ')}>
      <img className={css`width: 40px;
height: 40px;
position: relative;
overflow: hidden;
flex-shrink: 0;
object-fit: cover;
display: flex;
gap: var(--gap-0);
&:hover {
display: flex;
width: 40px;
height: 40px;
gap: var(--gap-0);
}
`} alt="" src="/f4svg@2x.png" />
      <div className={css`display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
gap: var(--gap-xs);
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
gap: var(--gap-xs);
align-items: flex-start;
justify-content: flex-start;
transform: rotate(0deg);
}
`}>
        <h2 className={css`margin: 0;
position: relative;
font-size: inherit;
line-height: 32px;
font-weight: 500;
font-family: inherit;
display: flex;
width: auto;
align-self: unset;
height: auto;
&:hover {
font-weight: 500;
font-family: var(--previewthemeforestnet-kumbh-sans-medium-20);
font-size: var(--previewthemeforestnet-kumbh-sans-medium-24-size);
line-height: 32px;
text-align: left;
color: var(--previewthemeforestnet-athens-gray);
display: flex;
width: auto;
align-self: unset;
height: auto;
}
@media screen and (max-width: 450px) {
font-size: var(--font-size-lgi);
line-height: 26px;

}
`}>Text-to-Picture API</h2>
        <div className={css`position: relative;
font-size: var(--previewthemeforestnet-kumbh-sans-regular-16-size);
line-height: 24px;
color: var(--previewthemeforestnet-gray-chateau);
display: flex;
width: auto;
align-self: unset;
height: auto;
&:hover {
font-family: var(--previewthemeforestnet-kumbh-sans-medium-20);
font-size: var(--previewthemeforestnet-kumbh-sans-regular-16-size);
line-height: 24px;
text-align: left;
color: var(--previewthemeforestnet-gray-chateau);
display: flex;
width: auto;
align-self: unset;
height: auto;
}
`}>
          <p className={css`margin: 0;
`}>Effortlessly produce a variety</p>
          <p className={css`margin: 0;
`}>of quotes in no time.</p>
        </div>
      </div>
    </div>);
};

export default ;
