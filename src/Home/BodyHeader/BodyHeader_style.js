import styled from "styled-components";
const BodyHeaderContainer = styled.div`
    width: 100%;
    display: flex;
    box-sizing:border-box ;
`
const BodyContaner = styled.div`
    width: calc(100%/ 1.696);
    padding-left: 99px;
    background-color: #0099D1;
    display: flex;
    justify-content: space-between;
`
const BodySubContaner= styled.div``

const HOneLight = styled.h1`
    color: ${(props)=>props.light? "#292828":"#FFFFFF"};
    font-weight: bold;
    font-size: 54px;
    transition:all 5s;
`
const Htwo = styled.h2`
    color: #BAE2E1;
`

const RestLight = styled.div`
    width:calc( 100% - (100%/1.5) );
    background-color: ${(props)=>props.light? "#292828":"#ffffff"};
    transition:all 2.5s;
`
const RightRow = styled.div`
    display: flex;
    justify-content: flex-start;
`
const Circle = styled.div`
    display: flex;
    width:99px;
    height: 99px;
    background-color: #9BEFED;
    border-radius: 100%;
`

const BoxTop = styled.div`
    display: flex;
    width:99px;
    height: 99px;
    background-color: #0099D1;
    border-radius: 12px;
`
const BoxMidLeft = styled.div`
    display: flex;
    width:99px;
    height: 99px;
    background-color: #00FFF9;
    border-radius: 100%;
`

const BoxMidLeftRight = styled.div`
    display: flex;
    width:99px;
    height: 99px;
    background-color: #006C93;
    border-radius: 12px;
`

const BoxBottomLeft= styled.div`
    display: flex;
    width:99px;
    height: 99px;
    background-color: ${(props)=>props.light? "#292828":"#ffffff"};

    border-radius: 12px;
    margin-left: 99px;
    transition:all 5s;
`

const BoxContainer = styled.div`
    margin-top: 99px;
`

const LeftMidSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`

export {
    BodyHeaderContainer, BodyContaner, BodySubContaner, HOneLight, Htwo, RestLight, RightRow, Circle, BoxTop, BoxMidLeft, BoxMidLeftRight, BoxBottomLeft, BoxContainer, LeftMidSection
}

