import React from "react";
import { 
	GtiResumeBtnContainer, GitBtn
 } from "./GtiResumeBtn_style";
function GtiResumeBtn ({isThemeDark}){
	return (
		<GtiResumeBtnContainer isThemeDark={isThemeDark}>
			<GitBtn isThemeDark={isThemeDark}></GitBtn>
		</GtiResumeBtnContainer>
	)
}
export default GtiResumeBtn

