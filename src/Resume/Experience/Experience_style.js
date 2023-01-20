import styled from 'styled-components';


const Accordion = styled.div`
    margin: auto;
    width: ${({theme})=>{ return theme.accordion.width?  theme.accordion.width : "100%"}};
    box-shadow:${({theme})=>{ return theme.accordion.boxShadow? theme.accordion.boxShadow: '0px 0px 5px 3px #BCBCBC' }};
    border-radius:10px 10px 10px 10px;
    margin-bottom:30px;
    cursor:pointer;
    
`
const AccordionTitles = styled.div`
    font-family:${({theme})=>{ return theme.AccordionTitles.fontFamily}};
    background-color: ${({theme})=>{ return theme.AccordionTitles.background}};
    color: ${({theme})=>{ return theme.AccordionTitles.color}};
    padding: ${({theme})=>{ return theme.AccordionTitles.padding? theme.AccordionTitles.padding: '18px'}};
    font-size: ${({theme})=>{ return theme.AccordionTitles.fontSize}};
    border: ${({theme})=>{ return theme.AccordionTitles.border?theme.AccordionTitles.border: 'none'}};
    box-shadow:${({theme})=>{ return theme.AccordionTitles.boxShadow? theme.AccordionTitles.boxShadow: 'none' }};
    border-bottom-style: none;
    border-radius:"10px 10px 0 0";
    &:hover{
        background-color: ${({theme})=>{ return theme.AccordionTitles.hover.background}};
        color: ${({theme})=>{ return theme.AccordionTitles.hover.color}};
        border: ${({theme})=>{ return theme.AccordionTitles.hover.border}};
        border-bottom-style: none;
    }
`

const ContentPan = styled.div`
    overflow: hidden;
    width: ${({theme})=>{ return theme.AccordionPanel.width?  theme.AccordionPanel.width : "auto" }};
    opacity:${({block})=>{ return block?  "1" : "0"}};
    border-radius:0 0 10px 10px;
    color:${({theme})=>{ return theme.AccordionPanel.color?  theme.AccordionPanel.color : "black" }};
    padding: ${({block, theme})=>{
        if (block){
            return theme.AccordionPanel.padding?  theme.AccordionPanel.padding : "none"
        }else {
            return '0'
        }
    }};

    background-color: ${({block, theme})=>{
        if (block){
            return theme.AccordionPanel.background?  theme.AccordionPanel.background : "#777777"
        }
    }};
    transition: ${({block, theme})=>{
        if (block){
            return theme.AccordionPanel.transition?  theme.AccordionPanel.transition : "all 1.5s"
        }else{
            return theme.AccordionPanel.transition?  theme.AccordionPanel.transition : "all 1.5s"
        }
    }};    
`

// height:${({block})=>{ return block?  "360px" : "0px"}};
const ContentPanel = styled(ContentPan)`
    height:${({block})=>{ return block?  "100%" : "0%"}};
    /* height: fit-content ; */
    &:hover {
        background-color: ${({theme})=>{
            return theme.AccordionPanel.hover.background;
        }};
        border: ${({theme})=>{ return theme.AccordionPanel.hover.border?  theme.AccordionPanel.hover.border : "0, 1px solid #E6DBD5"}};   
    }
    
    
`
const AccordionTitle = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    transition: all 1.5s;
    
`

export {Accordion, AccordionTitles, ContentPan, ContentPanel, AccordionTitle}