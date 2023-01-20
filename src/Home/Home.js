import React from "react";
import { useSelector } from 'react-redux'
import { HomeContainer } from "./Home_style";
import BodyHeader from "./BodyHeader/BodyHeader";
import Body from "./Body/Body";
import Cards from "./Cards/Cards";
import GtiResumeBtn from "./GtiResumeBtn/GtiResumeBtn";


function Home (){
	const darkTheme = useSelector((state) => state.themeChanger.value)
	return (
		<HomeContainer>
			<BodyHeader isThemeDark={darkTheme}/>
			<Body isThemeDark={darkTheme}/>
			<Cards isThemeDark={darkTheme}/>
			<GtiResumeBtn isThemeDark={darkTheme}/>
		</HomeContainer>
	)
}
export default Home
