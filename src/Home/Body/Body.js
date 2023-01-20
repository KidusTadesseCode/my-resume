import React from "react";
import { useSelector } from 'react-redux'
import { 
	BodyContainer, CircleFov, FavAF, Titleh4, Titleh3, Titleh5
 } from "./Body_style";
function Body (){
	const isThemeDark = useSelector((state) => state.themeChanger.value)
	return (
		<BodyContainer light={isThemeDark}>
			<CircleFov light={isThemeDark}/>
            <FavAF >
                <Titleh4 light={isThemeDark}>Government Project</Titleh4>
                <Titleh3 light={isThemeDark}>Federal Chief Information Officers CIO.gov </Titleh3>
                {/* <Titleh5 light={isThemeDark}>
					It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
				</Titleh5> */}
            </FavAF>
		</BodyContainer>
	)
}
export default Body
