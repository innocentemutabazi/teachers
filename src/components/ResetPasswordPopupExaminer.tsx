import { FunctionComponent } from 'react';
import { Button } from "@mui/material"
import {css} from "@emotion/css";


export type Type = {
  className?: string;
  onClose?: () => void;
}



const :FunctionComponent<Type> = ({ className="", onClose }) => {
  return (
    <div className={[css`width: 748px;
position: relative;
background-color: var(--color-royalblue);
overflow: hidden;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
padding: var(--padding-16xl) var(--padding-43xl) var(--padding-56xl);
box-sizing: border-box;
gap: var(--gap-51xl);
line-height: normal;
letter-spacing: normal;
height: auto;
&:hover {
background-color: var(--color-royalblue);
display: flex;
width: 748px;
height: auto;
flex-direction: column;
gap: var(--gap-51xl);
align-items: flex-start;
justify-content: flex-start;
padding: var(--padding-16xl) var(--padding-43xl) var(--padding-56xl);
box-sizing: border-box;
line-height: normal;
letter-spacing: normal;
}
@media screen and (max-width: 450px) {
gap: var(--gap-16xl);
padding-left: var(--padding-xl);
padding-right: var(--padding-xl);
box-sizing: border-box;

}
`, className].join(' ')}>
      <section className={css`align-self: stretch;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
gap: var(--gap-9xl);
max-width: 100%;
width: auto;
height: auto;
transform: rotate(0deg);
text-align: center;
font-size: var(--font-size-45xl);
color: var(--pure-white);
font-family: var(--font-open-sans);
&:hover {
display: flex;
align-self: stretch;
width: auto;
height: auto;
flex-direction: column;
gap: var(--gap-9xl);
align-items: flex-start;
justify-content: flex-start;
transform: rotate(0deg);
max-width: 100%;
}
`}>
        <div className={css`align-self: stretch;
display: flex;
flex-direction: column;
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
flex-direction: column;
gap: var(--gap-0);
align-items: flex-start;
justify-content: flex-start;
transform: rotate(0deg);
max-width: 100%;
}
`}>
          <div className={css`align-self: stretch;
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: flex-start;
padding: 0px var(--padding-3xl);
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
padding: 0px var(--padding-3xl);
box-sizing: border-box;
max-width: 100%;
}
`}>
            <h1 className={css`margin: 0;
flex: 1;
position: relative;
font-size: inherit;
font-weight: 600;
font-family: inherit;
display: flex;
max-width: 100%;
height: auto;
&:hover {
font-weight: 600;
font-family: var(--font-open-sans);
font-size: var(--font-size-45xl);
text-align: center;
color: var(--pure-white);
display: flex;
flex: 1;
height: auto;
max-width: 100%;
}
`}>Reset Password</h1>
          </div>
          <div className={css`align-self: stretch;
position: relative;
font-size: var(--previewthemeforestnet-kumbh-sans-medium-24-size);
font-weight: 600;
display: flex;
width: auto;
height: auto;
&:hover {
font-weight: 600;
font-family: var(--font-open-sans);
font-size: var(--previewthemeforestnet-kumbh-sans-medium-24-size);
text-align: center;
color: var(--pure-white);
display: flex;
align-self: stretch;
width: auto;
height: auto;
}
@media screen and (max-width: 825px) {
font-size: var(--font-size-lgi);

}
`}>Type the recovery email you want to send the link to.</div>
        </div>
        <div className={css`align-self: stretch;
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: flex-start;
padding: 0px var(--padding-7xl);
box-sizing: border-box;
max-width: 100%;
width: auto;
height: auto;
gap: var(--gap-0);
transform: rotate(0deg);
font-size: var(--previewthemeforestnet-kumbh-sans-medium-24-size);
color: var(--color-black);
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
padding: 0px var(--padding-7xl);
box-sizing: border-box;
max-width: 100%;
}
`}>
          <div className={css`flex: 1;
border-radius: var(--br-20xl);
background-color: var(--pure-white);
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: flex-start;
padding: var(--padding-3xl) var(--padding-xl) var(--padding-6xl);
box-sizing: border-box;
max-width: 100%;
height: auto;
gap: var(--gap-0);
transform: rotate(0deg);
&:hover {
background-color: var(--pure-white);
display: flex;
flex: 1;
height: auto;
flex-direction: row;
gap: var(--gap-0);
align-items: flex-start;
justify-content: flex-start;
transform: rotate(0deg);
border-radius: var(--br-20xl);
padding: var(--padding-3xl) var(--padding-xl) var(--padding-6xl);
box-sizing: border-box;
max-width: 100%;
}
`}>
            <div className={css`width: 164px;
position: relative;
font-weight: 600;
display: flex;
flex-shrink: 0;
height: auto;
z-index: 1;
&:hover {
font-weight: 600;
font-family: var(--font-open-sans);
font-size: var(--previewthemeforestnet-kumbh-sans-medium-24-size);
text-align: center;
color: var(--color-black);
display: flex;
width: 164px;
height: auto;
}
@media screen and (max-width: 825px) {
font-size: var(--font-size-lgi);

}
`}>Type</div>
          </div>
        </div>
      </section>
      <div className={css`width: 613px;
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: center;
max-width: 100%;
height: auto;
gap: var(--gap-0);
transform: rotate(0deg);
&:hover {
display: flex;
width: 613px;
height: auto;
flex-direction: row;
gap: var(--gap-0);
align-items: flex-start;
justify-content: center;
transform: rotate(0deg);
max-width: 100%;
}
`}>
        <Button className={css`height: 73px;
width: 389px;
max-width: 100%;
background-color: var(--color-snow);
display: flex;
flex-direction: row;
gap: var(--gap-0);
align-items: flex-start;
justify-content: flex-start;
transform: rotate(0deg);
border-radius: var(--br-18xl);
padding: var(--padding-mini) var(--padding-44xl) var(--padding-6xl);
box-sizing: border-box;
&:hover {
background-color: var(--color-snow);
display: flex;
width: 389px;
height: 73px;
flex-direction: row;
gap: var(--gap-0);
align-items: flex-start;
justify-content: flex-start;
transform: rotate(0deg);
border-radius: var(--br-18xl);
padding: var(--padding-mini) var(--padding-44xl) var(--padding-6xl);
box-sizing: border-box;
max-width: 100%;
}
`} disableElevation variant="contained" sx={{ textTransform: "none",color: "#0077ff",fontSize: "24",background: "#fffbfb",borderRadius: "37px","&:hover": { background: "#fffbfb" },width: 389,height: 73 }}>SUBMIT</Button>
      </div>
    </div>);
};

export default ;
