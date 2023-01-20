import React from "react";
import { useSelector } from 'react-redux'
import { 
	BodyHeaderContainer, BodySubContaner, BodyContaner, HOneLight, Htwo, RestLight, RightRow, Circle, BoxTop, BoxMidLeft, BoxMidLeftRight, BoxBottomLeft, BoxContainer, LeftMidSection
 } from "./BodyHeader_style";
function BodyHeader (){
    const darkTheme = useSelector((state) => state.themeChanger.value)
	return (
		<BodyHeaderContainer>
            <BodyContaner>
                <BodySubContaner>
                    <HOneLight light={darkTheme}>Beautifully Crafted Application <br/>Architecture</HOneLight>
                    <Htwo>Meet the Architect 👇</Htwo>
                </BodySubContaner>
                <BoxContainer>
                    <BoxBottomLeft light={darkTheme}/>

                    <LeftMidSection>
                        <BoxMidLeftRight/>
                        < BoxMidLeft/>
                    </LeftMidSection>
                    
                    <BoxBottomLeft light={darkTheme}/>
                </BoxContainer>
            </BodyContaner>
            <RestLight light={darkTheme}>
                <BoxTop/>
                    <RightRow>
                        <Circle />
                        <BoxTop/>
                    </RightRow>
                <BoxTop/>
            </RestLight>
		</BodyHeaderContainer>
	)
}
export default BodyHeader

