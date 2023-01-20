import React, {useEffect, useState} from "react";
import { useSelector } from 'react-redux'

import { Link } from "react-router-dom";
import { 
	NavigationContainer, BrandContainer, Brand, LeftContainer, CenterContainer, RightContainer, UnorderList, ListItem, Img
 } from "./Navigation_style";
import Toggle from "./Toggle/Toggle"
import info from "../info.json"



function Images({islink, url, src, width}){
	if (islink){
		<Link to={url}>
			<Img src={src} width={width}/>								
		</Link>
	}
	else{
		return (<Img src={src} width={width}/>	)
	}
	
}

function RightMapper ({itemOfNav}){
	const darkTheme = useSelector((state) => state.themeChanger.value)
	const [items, setItems]=useState()
	useEffect(()=>{
		const tog = {id: 4, lightIcon:<Toggle />, link:"", onClick:'', isToggle:true}
		if (Array.isArray(itemOfNav)){
			const hold = []
			for (let x =0; x<itemOfNav.length; x++){
				hold.push(itemOfNav[x])
			}
			hold.push(tog)
			setItems(hold)
		}
	},[])

	return(
		<UnorderList>
			{items && items.map((v, i)=>{
				
				const link = v["link"]!==""?true:false
				const isToggle = v["isToggle"]
				return(
				<ListItem key={i}>			
					{isToggle? v["lightIcon"]: <Images islink={link} url={v["link"]} src={darkTheme ? v["lightIcon"]: v["darkIcon"]} width={v["width"]}/>}
				</ListItem>
				)
		})}
		</UnorderList>
	)
}


function CenterMapper ({itemOfNav, placement}){
	const darkTheme = useSelector((state) => state.themeChanger.value)
	return (
		<UnorderList>
			{itemOfNav.map((v, i)=>{
				const link = v["link"]!==""?true:false
				return(
				<ListItem key={i}>
					{link? <Link to={v["link"]}>{v['itemName']}</Link> : v['itemName']}
				</ListItem>
				)
		})}
		
		</UnorderList>
		  
	)
}


function Navigation (){
	const darkTheme = useSelector((state) => state.themeChanger.value)
	return (
		<NavigationContainer>
			<LeftContainer>
				<BrandContainer>
					<Link to={"/"}>
						<Brand>Kidus Tadesse</Brand>
					</Link>
				</BrandContainer>
			</LeftContainer>
			<CenterContainer>
				<CenterMapper itemOfNav={info["navigation"]["centerContent"]} placement="center"/>
			</CenterContainer>
			<RightContainer themeColor={darkTheme} >
				<RightMapper itemOfNav={info["navigation"]["rightContent"]} placement="right" />
			</RightContainer>
		</NavigationContainer>
	)
}
export default Navigation
