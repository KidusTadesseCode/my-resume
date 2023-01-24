import React from "react";
import { Link } from "react-router-dom";
import { 
	GtiResumeBtnContainer, GitBtn
 } from "./GtiResumeBtn_style";
function GtiResumeBtn ({isThemeDark}){
	return (
		<GtiResumeBtnContainer isThemeDark={isThemeDark}>
			<Link to={"resume"}>
				<GitBtn isThemeDark={isThemeDark}>Git Resume</GitBtn>
			</Link>
		</GtiResumeBtnContainer>
	)
}
export default GtiResumeBtn

