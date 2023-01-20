import React, {useState} from 'react';
import { Accordion, AccordionTitles, ContentPan, ContentPanel, AccordionTitle } from './Experience_style';




function Title(props){
    return(
        <AccordionTitles onClick={props.onClick}>
            {props.children}
        </AccordionTitles>
    )
}

function Content(props){
    return(
        <ContentPanel block={props.block}>
                {props.children}
        </ContentPanel>
    )
}

export default function Accordions(props){
    const [panel, setPanel]=useState(false)
    const accordionOnClick =()=>{
        let drop = panel? false : true; 
        setPanel(drop);
    }
    
    return (
        <Accordion >
            <Title onClick={accordionOnClick}>
                <AccordionTitle>
                    {props.leftTitle}
                    {props.centerTitle}
                    {props.rightTitle}
                </AccordionTitle>
            </Title>
        
            <Content block={panel}>
                {panel? props.content: ''}
            </Content>
            
        </Accordion>
    )
}

