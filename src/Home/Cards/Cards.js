import React from "react";
import { useSelector } from 'react-redux'
import { 
	CardsContainer, Cards, CardTitles, BoldReact, CardSubTitles, CardContents
 } from "./Cards_style";

 import info from "../../info.json"


function DisplayCardContent (){
	const isThemeDark = useSelector((state) => state.themeChanger.value)
	return (
		<CardsContainer>
			{info["card"].map((v)=>{
				return (
					<Card key={v.id} isThemeDark={isThemeDark} titleLineOne={v.titleLineOne} titleLineTwo={v.titleLineTwo} titleBolded={v.titleBolded} subTitle={v.subTitle} content={v.content}/>
					)
            })}
		</CardsContainer>
	)
}

function Card({titleLineOne, titleLineTwo, titleBolded, subTitle, content}){
	const isThemeDark = useSelector((state) => state.themeChanger.value)
    return (
        <Cards isThemeDark={isThemeDark}>
            <CardTitle titleLineOne={titleLineOne} titleLineTwo={titleLineTwo} titleBolded={titleBolded}/>
            <CardSubTitle isThemeDark={isThemeDark} subTitle={subTitle}/>
            <CardContent isThemeDark={isThemeDark} content={content}/>
        </Cards>
    )
}

function CardTitle({titleLineOne, titleLineTwo, titleBolded}){
	const isThemeDark = useSelector((state) => state.themeChanger.value)
    return (
        <CardTitles isThemeDark={isThemeDark}>
            <h2>
                <div>
                    {titleLineOne}
                </div>
                <BoldReact>
                    {titleLineTwo}<b> {titleBolded} </b>
                </BoldReact>
            </h2>
        </CardTitles>
    )
}

function CardSubTitle({subTitle}){
	const isThemeDark = useSelector((state) => state.themeChanger.value)
    return (
        <CardSubTitles isThemeDark={isThemeDark}>
            <h4>{subTitle}</h4>
        </CardSubTitles>
    )
}
function CardContent({content}){
	const isThemeDark = useSelector((state) => state.themeChanger.value)
    return (
        <CardContents isThemeDark={isThemeDark}>
            <p>{content}</p>
        </CardContents>
    )
}
export default DisplayCardContent
