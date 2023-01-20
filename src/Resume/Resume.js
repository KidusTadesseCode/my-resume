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
    // const resumeList = [
    //     {
    //         companie:'ZFN Consulting',
    //         logo: ZfnLogo,
    //         positionTitle:'Software Engineer',
    //         date: 'June 2020 – Current',
    //         resumeList:[
    //             'Developed web applications using React, NodeJS MongoDB and Shell Script.',
    //             'Created and implemented new features on company website using React, Redux, and Node.js.',
    //             'Developed middleware for express servers to process API requests.  ',
    //             'Implemented Json Web Token to authenticate and authorize user on express servers for internal application.',
    //             'Designed and implemented scalable solutions for data storage with the use of SQ databases such as Postgres and MySQL.',
    //             'Developed UI/UX interfaces while keeping Web Content Accessibility Guideline (WCAG) standards for internal sites. ',
    //             'Developed and implemented SQL functions and procedures.',
    //             'Deployed applications on AWS S3 Bucket and EC2 instance. ',
    //             'Configured NGINX to deliver dynamic/static content and to serve as a load balancer.',
    //             'Implemented automated tests to ensure code quality and reliability in accordance with best practices.',
    //             'Collaborated closely with other developers on projects that required multiple departments and people to complete tasks.',
    //             'Developed and integrated CRUD operation for relational database.',
    //             'Created Standard Operating Procedures (SOP’s) and technical documents for system architecture, components, automation programs, and based on the business requirements and needs. ',
    //             'Collaborated with Project Managers and Business Analyst (BA) to understand the business design, requirements and needs for the wire-framing in preparation for Federal clients.'
    //           ]
    //     },
    //     {
    //         companie:'BAE System',
    //         logo: BaeLogo,
    //         positionTitle:'Software Engineer',
    //         date: 'October 2019 – May 2020',
    //         resumeList:[
    //             'Tailored markup languages such as HTML, JavaScript, React, and Angular to produce user-friendly interface components for applications by analyzing user requirements.',
    //             'Pioneered proprietary COTS through evaluation of requirements from stake holders, users, and SSP Project Managers.',
    //             'Redesigned and assembled an internal repository to store classified and unclassified NAVY-SSP Documents and a pipeline for access management documentation. ',
    //             'Designed, assembled, and maintained full-stack web-based applications within an Agile development environment including monthly sprints, daily standups, and monthly scrum meetings. ',
    //             'Developed UI/UX interfaces while keeping Web Content Accessibility Guideline (WCAG) standards for internal sites.',
    //             'Spearheaded the development and maintained custom components and widgets for internal and external client facing proprietary software interface.',
    //             'Automate development operations such as code reviews and code deployments through developing and fostering shell script files. Integrated and developed Express REST API services utilizing ExpressJS.',
    //             'Created Standard Operating Procedures (SOP’s) and technical documents for system architecture, components, automation programs, and based on the client and business requirements and needs. ',
    //             'Pioneered and assembled and enhanced continuous integration and deployment using Jenkins, Gerrit, Git, and shell scripts while adhering to Change Management/Release Management Protocols.'
    //           ]
    //     },
    //     {
    //         companie:'Eagle Hill Consulting',
    //         logo: EagleHill,
    //         positionTitle: 'Web Developer',
    //         date: 'March 2019 – April 2019',
    //         resumeList:[
    //             'Collaborated with Project Managers and Business Analyst (BA) to understand the business design, requirements and needs for the wireframing in preparation for Federal webservices. ',
    //             'Organized managed and deployed application repositories to AWS.',
    //             'Supported team with maintenance of production websites using Federal services, and JavaScript API, while making CIO website mobile friendly.',
    //             'Leveraged HTML, CSS, and JavaScript to meet the web application requirements and business needs. ',
    //             'Continuously uploaded and fostered federal blogs utilizing Markup HTML and CSS.  ',
    //             'Utilize Adobe XD to develop wireframes for the Federal proprietary website to meet the stakeholder requirements. ',
    //             'Subject Matter Expert (SME) for Chief Information Officer (CIO’s) during the Analysis, Design, and development phase of the CIO.gov website. ',
    //             'Consulted and supported stakeholders with capacity planning for the CIO.gov website.  ',
    //             'Coordinate input from other components in order to design detailed programs and websites. ',
    //             'Supported less experienced colleagues in identifying, understanding, and resolving programming issues and/or concerns through guidance and fostering.',
    //             'Complied with the Web Content Accessibility Guidelines (WCAG) in the design and implementation of the CIO.gov website.'
    //           ]
    //     },
    //     {
    //         companie:'Flex L.L.C',
    //         logo: FlexLogo,
    //         positionTitle: 'Software Developer',
    //         date: 'March 2017 – February 2019',
    //         resumeList:[
    //             'Programed in HTML, CSS, JavaScript, PHP and MySQL to create appealing responsive websites. ',
    //             'Developed and updated the Flex internal website. ',
    //             'Evaluated the Web tasks and techniques across all lines of company.',
    //             'Created, modified and improved web page design and layouts.',
    //             'Established and maintained effective risk mitigation procedures. ',
    //             'Advised internal groups on all issues relating to the web site and best next steps. ',
    //             'Collaborated with design team to create and enhance HTML templates and wireframes.'
    //           ]
    //     }
    // ]
    
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
