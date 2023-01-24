import styled from "styled-components";
const NavigationContainer=styled.div`
    display: flex;
    justify-content: space-between;
    position: -webkit-sticky; 
    position: sticky;
    top:0;
    width: 100%;
    z-index:10 ;
`

const LeftContainer=styled.div`
    display: flex;
    align-items: center;
    background-color: #006C93;
    width: calc(100%/3) ;
`
const CenterContainer=styled.div`
    display: flex;
    align-items: center;
    background-color: #006C93;
    justify-content: flex-end;
    color: #9BEFED;
    font-size: 15px;
    width: calc(100%/3) ;
`
const RightContainer=styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: ${(props)=>props.themeColor? "#292828":"#ffffff"};
    transition:all 2.5s;
    width: calc(100%/3) ;
    padding-right: 1% ;

`

const BrandContainer=styled.div`
    color: #00FFF9;
    font-size: 12px;
    padding-left: 99px;
    cursor: pointer;
    a:-webkit-any-link {
        text-decoration: none;
        color: inherit;
    }
`

const Brand=styled.h2`

`




const UnorderList = styled.ul`
	list-style-type: none;
    margin: 0;
`
const ListItem = styled.li`
    display: inline;
    padding: 0 6px 0 6px;
    transition:all 5s;
    text-decoration: none;
    cursor: pointer;
    &:hover{
        color: #00FFF9;
        text-decoration: underline;
        text-underline-offset: 10px;
        text-decoration-thickness:7px;
    }

    a:-webkit-any-link {
        text-decoration: none;
        color: inherit;
    }
`
const Img = styled.img`
	list-style-type: none;
    margin: 0;
	
`
// width: ${(props)=>props.width} ;

export {
	NavigationContainer, BrandContainer, Brand, LeftContainer, CenterContainer, RightContainer, UnorderList, ListItem, Img
}

