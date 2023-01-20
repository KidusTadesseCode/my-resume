import React from "react";
import { 
	ResumeContainer, IdkCicleOfcircle, ResumeConainer, Bios, BioSummery, ExperienceHeadLines, ExperienceContainer, PositionTitle, Date
 } from "./Resume_style";
import resumeList from "../info.json"
import { ThemeProvider } from "styled-components";
import Accordions from "./Experience/Experience";


import { useSelector } from 'react-redux'
function Resume(){
    const themeColor = useSelector((state) => state.themeChanger.value)
    return (
        <ResumeContainer light={themeColor}>
            <Bio/>
            <ExperienceHeadLine/>
            <Experience/>
        </ResumeContainer>
    )
}

function Bio(){
    const themeColor = useSelector((state) => state.themeChanger.value)
    return (
        <ResumeConainer>
            <IdkCicleOfcircle light={themeColor}/>
                <Bios>
                    <h1>Kidus Tadesse</h1>
                    <BioSummery> 
                        Software Developer and Database Developer with over 5 years of experience in the IT Industry. Experience in planning, developing and implementing web page design and layouts. A polished professional with expertise providing support to clients regarding their implementations. Possess impactful organizational skills with a prowess in cross-functional team communication and leadership. Expertise in software testing, troubleshooting, data analysis, identifying issues while finding effective solutions and providing program development documentation.
                        <br/>Practically the best Full stack developer in the world
                    </BioSummery>
                </Bios> 
        </ResumeConainer>
    )
}

function ExperienceHeadLine(){
    const themeColor = useSelector((state) => state.themeChanger.value)
    return(
        <ExperienceHeadLines light={themeColor}>Experience</ExperienceHeadLines>
    )
}

function ExperienceLeftTitle({logo, positionTitle, companie}){
    return(
        <div>
            <div>
                <img src={logo}  width={100} alt={companie}/>
            </div>
            <PositionTitle>{positionTitle}</PositionTitle>
        </div>
    )
}
function ExperienceRightTitle({date}){
    return(
        <Date>
            {date}
        </Date>
    )
}
function ExperienceContent({resumeList}){
    return(
        <ul>
            {resumeList.map((v)=>{
                return(<li>{v}</li>)
            })}
        </ul>
    )
}

function Experience (props){
    const themeStyle = useSelector((state) => state.themeChanger.value)

    
    const theme ={
        accordion:{
            width: "85%",
            
        },
        AccordionTitles:{
            fontFamily:"Arial, Helvetica, sans-serif",
            background:themeStyle? '#0099D1': '#0099D1',
            color: themeStyle? 'white' : 'black',
            padding: '18px',
            fontSize: '20px',
            border: "0, 1px solid #E6DBD5",
            
            hover:{
                background:themeStyle? '#0099D1': '#0099D1',
                color: themeStyle? '#e6dbd5' : 'black',
                border: "0, 1px solid #E6DBD5",
            },
        },
        AccordionPanel:{
            background:themeStyle? '#343434':'white',
            width:"auto",
            border:"1px solid #E6DBD5",
            padding:".5% 0% 0% 0%",
            color: themeStyle? '#7B7B7B': '#7B7B7B',
            transition:"all 1s",
            hover:{
                background:themeStyle? '#343434':'white',
                border:"none",
            },
        }
        
    }
    
    return (
        <ThemeProvider theme={theme}>
            {resumeList["resume"].map((v)=>{
                return (
                    <Accordions  
                    	leftTitle={<ExperienceLeftTitle logo={v["logo"]} positionTitle={v.positionTitle} companie={v.companie}/>} 
                    	rightTitle={<ExperienceRightTitle date={v.date}/>} 
                    	content={<ExperienceContent resumeList={v.resumeList}/>}
                    />
                )
            })}
        </ThemeProvider>
    )
}


export default Resume
