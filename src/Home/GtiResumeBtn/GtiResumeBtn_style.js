import styled from "styled-components";
const GtiResumeBtnContainer = styled.div`
	display: flex;
    justify-content: center;
    padding: 50px;
    transition:all 5s;
    background-color:${(props)=>props.isThemeDark? "#292828":"white"} ;
    padding-bottom: 50px;
    margin-bottom:-50px ;
    padding-top:10% ;
    cursor: pointer;
    a:-webkit-any-link {
        text-decoration: none;
        color: inherit;
    }
`
const GitBtn = styled.div`

    width: 333px;
    height: 30px;
    border-radius: 20px;
    /* color: #292828; */
    font-weight: bold;
    font-size: 18px;
    
    
    background-color:#006C93;
    text-align:center ;
    display: flex;
    align-items: center;
    justify-content:center ;
    color: #00FFF9;
    
    &:hover{

        color:${(props)=>props.isThemeDark? "white":"black"} ;

    }
`



export {
    GtiResumeBtnContainer, GitBtn
}

