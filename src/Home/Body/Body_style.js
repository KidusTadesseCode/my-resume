import styled from "styled-components";
const BodyContainer = styled.div`
    display: flex;
    align-content: flex-start;
    background-color:${(props)=>props.light? "#292828":"white"} ;
    z-index: -3;
    padding-bottom: 30px;/* this controls the bottom spacing  */
    transition:all 2const 5s;
    box-sizing:border-box ;	
`

const CircleFov=styled.div `
    display: flex;
    width:200px;
    height: 200px;
    background-color: #BAE2E1;
    background-color:${(props)=>props.light?"#006C93":"#BAE2E1"};
    border-radius: 100%;
    margin-top: -50px;
    z-index: auto;
    transition:all 2const 5s;
`


const FavAF =styled.div `
    height: 10px;
    width: calc(100%/ 1);
    margin-bottom: -5px;
    margin-left: -100px;
    z-index: 5;
`

const Titleh4=styled.h4 `
    color: ${(props)=>props.light?"#0099D1":"#0099D1"};
    transition:all 2const 5s;
`


const Titleh3=styled.h3 `
    color: #000000;
    color: ${(props)=>props.light?"#FFFFFF":"#000000"};
    transition:all 2const 5s;
`

const Titleh5=styled.div `
    opacity: .4;
    transition:all 2const 5s;
    color: ${(props)=>props.light?"#FFFFFF":"black"};
`


export{
    BodyContainer, CircleFov, FavAF, Titleh4, Titleh3, Titleh5
}
