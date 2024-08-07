import { FunctionComponent } from 'react';
import {css} from "@emotion/css";



const :FunctionComponent = ({ className="" }) => {
  return (
    <div className={[css`width: 100%;
position: relative;
border-radius: var(--br-9xs);
border: 1px solid var(--previewthemeforestnet-gray-chateau-8);
box-sizing: border-box;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
padding: var(--padding-12xl) var(--padding-13xl);
max-width: 100%;
height: auto;
gap: var(--gap-0);
text-align: left;
font-size: var(--previewthemeforestnet-kumbh-sans-medium-20-size);
color: var(--previewthemeforestnet-athens-gray);
font-family: var(--previewthemeforestnet-kumbh-sans-medium-20);
&:hover {
display: flex;
width: 100%;
height: auto;
flex-direction: column;
gap: var(--gap-0);
align-items: flex-start;
justify-content: flex-start;
border-radius: var(--br-9xs);
padding: var(--padding-12xl) var(--padding-13xl);
box-sizing: border-box;
border: 1px solid var(--previewthemeforestnet-gray-chateau-8);
max-width: 100%;
}
`, className].join(' ')}>
      <div className={css`align-self: stretch;
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: space-between;
gap: var(--gap-xl);
max-width: 100%;
width: auto;
height: auto;
&:hover {
display: flex;
align-self: stretch;
width: auto;
height: auto;
flex-direction: row;
gap: var(--gap-xl);
align-items: flex-start;
justify-content: space-between;
max-width: 100%;
}
@media screen and (max-width: 1500px) {
flex-wrap: wrap;

}
`}>
        <h3 className={css`margin: 0;
position: relative;
font-size: inherit;
line-height: 28px;
font-weight: 500;
font-family: inherit;
display: flex;
max-width: 100%;
width: auto;
align-self: unset;
height: auto;
&:hover {
font-weight: 500;
font-family: var(--previewthemeforestnet-kumbh-sans-medium-20);
font-size: var(--previewthemeforestnet-kumbh-sans-medium-20-size);
line-height: 28px;
text-align: left;
color: var(--previewthemeforestnet-athens-gray);
display: flex;
width: auto;
align-self: unset;
height: auto;
max-width: 100%;
}
@media screen and (max-width: 450px) {
font-size: var(--previewthemeforestnet-kumbh-sans-regular-16-size);
line-height: 22px;

}
`}>Are alternative payment methods available for purchasing credits?</h3>
        <img className={css`height: 28px;
width: 50px;
position: relative;
display: flex;
&:hover {
display: flex;
width: 50px;
height: 28px;
}
`} alt="" src="/svg-6.svg" />
      </div>
    </div>);
};

export default ;
