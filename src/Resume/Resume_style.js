import styled from "styled-components";
const ResumeContainer = styled.div`
	background-color: #ffffff;
    padding-bottom: 10%;
    background-color:${(props)=>props.light? "#292828":"#ffffff"} ;
`

const IdkCicleOfcircle  = styled.div`
    display: flex;
    width:200px;
    height: 200px;
    background-color: ${(props)=>props.light?"#006C93":"#BAE2E1"};
    border-radius: 100%;
    margin-top: -50px;
    z-index: auto;
    transition:all 2.5s;
    @media (max-width: 820px) {
        display:none ;
    }
`

const ResumeConainer= styled.div`
    width: 100%;
    height: auto;
    display: flex;
    background-color: #0099D1;
    padding-left: 10px;
    padding-top: 100px;
    @media (max-width: 820px) {
        padding-left: 0;
        width: 100%;
        justify-content:center ;
    }
`
const Bios = styled.div`
    margin-top: 2%;
    margin-left: -9%;
    width: 80%;
    z-index: auto;
    color:#ffffff;
    padding-bottom: 3%;
    @media (max-width: 820px) {
        margin-top: -100px;
        margin-left: 0;
        padding-left:10px ;
        width: 100%;
        justify-content:center ;
        align-self: center;
        text-align:center ;
    }
`
const BioSummery = styled.div`
    width: 75%;
    text-align: left;
    line-height:120%;
    @media (max-width: 820px) {
        margin-left: 0;
        padding-left:10px ;
        width: 100%;
        justify-content:center ;
        align-self: center;
        text-align:center ;
    }
`
const ExperienceHeadLines = styled.h2`
    width: 100%;
    text-align: center;
    color: ${(props)=>props.light? "#ffffff":"black"} ;
`

const ExperienceContainer= styled.div``
const PositionTitle= styled.div``
const Date= styled.div``
export {
    ResumeContainer, IdkCicleOfcircle, ResumeConainer, Bios, BioSummery, ExperienceHeadLines, ExperienceContainer, PositionTitle, Date
}
