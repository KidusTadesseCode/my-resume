import styled from "styled-components";
const CardsContainer = styled.div`
	display: flex;
    justify-content: space-evenly;
    padding-bottom: 100px;
    width: 100%;
    height: 300px;
    background-color: #0099D1;
`
const Cards  =styled.div`
    width:calc(100%/4);
    
    background-color:${(props)=>props.isThemeDark? "#292828":"#ffffff"} ;
    margin-top: 120px;
    padding-top:12px;
    padding-bottom: 200px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    height:100px;
    transition:all 5s;
`

const CardTitles =styled.div`
    text-align: center;
    color: #679eb1;
`
const BoldReact =styled.div`
    color: #006C93;
`

const CardSubTitles =styled.div`
    text-align: center;
    transition:all 5s;
    color:${(props)=> props.isThemeDark? "#ffffff":"black" };
`

const CardContents =styled.div`
    padding: 0 10px 0 21px;
    width: calc(100%/1.159420289855072);
    color:${(props)=> props.isThemeDark? " #D6D6D6":"#7B7B7B" };
    text-align: center;
    font-size: 12px;
    transition:all 5s;
`
export {
	CardsContainer, Cards, CardTitles, BoldReact, CardSubTitles, CardContents
}
