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
`

const ResumeConainer= styled.div`
    width: 100%;
    height: auto;
    display: flex;
    background-color: #0099D1;
    padding-left: 10px;
    padding-top: 100px;
`
const Bios = styled.div`
    margin-top: 2%;
    margin-left: -9%;
    width: 80%;
    z-index: auto;
    color:#ffffff;
    padding-bottom: 3%;
`
const BioSummery = styled.div`
    width: 75%;
    text-align: left;
    line-height:120%;
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
