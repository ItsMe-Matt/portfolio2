import styled from "styled-components"
import { SiMaildotru, SiLinkedin, SiGithub } from 'react-icons/si'
import Link from 'next/link'

export default function Footer({
    onIconClick=()=>{},
    emailWidth="100%",
    emailMargin="0 8px"
}) {



    return <Container>
        <IconCont>
            <a href="https://www.linkedin.com/in/mlzhao/" target="_blank">
                <Icon>
                    <SiLinkedin size="32px" color="#fff"/>
                </Icon>
            </a>
            
            
            <a href="https://github.com/ItsMe-Matt" target="_blank">
                <Icon>
                    <SiGithub size="32px" color="#fff"/>
                </Icon>
            </a>

            <EmailIcon>
                <div onClick={()=>{onIconClick()}}>
                    <SiMaildotru size="30px" color="#fff"/>
                </div>  
                
                <IconEmail
                href="mailto:matthewlukez@yahoo.com"
                emailM={emailMargin}
                emailW={emailWidth}
                >
                    MatthewLukeZ@yahoo.com
                </IconEmail>              
            </EmailIcon>

        </IconCont>
       
       <Text>
        Copyright &copy; 2022 Matthew Zhao
       </Text>

    </Container>
}

const Container = styled.div`

// Desktop and Tablet styles
@media screen and (min-width: 1024px) {

display: flex;
flex-direction: column;
align-items: center;

padding: 40px 0 28px 0;
margin: 32px 0 0 0;
}
// Mobile styles
@media screen and (max-width: 1023px) {
display: flex;
flex-direction: column;
align-items: center;

margin: 0 0 20px 0;
}
`

const IconCont = styled.div`
// Desktop and Tablet styles
@media screen and (min-width: 1024px) {
display: flex;
margin: 0 0 20px 0;
}
// Mobile styles
@media screen and (max-width: 1023px) {
display: flex;
margin: 0 0 20px 0;
}
`

const Icon = styled.div`
// Desktop and Tablet styles
@media screen and (min-width: 1024px) {
margin: 0 8px;
padding: 6px 6px 4px 6px;
box-shadow: 0px 2px 4px rgba(40, 40, 40, 0.4);
background-color: #122C5C;
border-radius: 4px;
cursor: pointer;
display: flex;
align-items : center;
width: fit-content;
transition: 0s;
&:hover {
    box-shadow: 0px 2px 6px rgba(40, 40, 40, 0.8);
    transition: 1s
}
}
// Mobile styles
@media screen and (max-width: 1023px) {
margin: 0 8px;
padding: 6px 6px 4px 6px;
box-shadow: 0px 2px 4px rgba(40, 40, 40, 0.4);
background-color: #122C5C;
border-radius: 4px;
cursor: pointer;
display: flex;
align-items : center;
width: fit-content;
transition: 0s;
}

`

const Text = styled.div`
// Desktop and Tablet styles
@media screen and (min-width: 1024px) {
font-family: 'Oxygen';
font-weight: 300;
font-size: 1em;

color: #868686;
}
// Mobile styles
@media screen and (max-width: 1023px) {
font-family: Oxygen;
font-size: 12px;
font-weight: 300;
line-height: 15px;
letter-spacing: 0em;
text-align: left;

}
`

const IconEmail = styled.a`
// Desktop and Tablet styles
@media screen and (min-width: 1024px) {
font-family: 'Oxygen';
font-weight: 500;
font-size: 1em;
overflow: hidden;
transition: 1s;
padding: ${(props)=>props.emailM};
width: ${(props)=>props.emailW};

color: #fff;
}
// Mobile styles
@media screen and (max-width: 1023px) {
display: none;
}
`
const EmailIcon = styled.div`
// Desktop and Tablet styles
@media screen and (min-width: 1024px) {
margin: 0 8px;
padding: 6px 6px 4px 6px;
box-shadow: 0px 2px 4px rgba(40, 40, 40, 0.4);
background-color: #122C5C;
border-radius: 4px;
cursor: pointer;
display: flex;
align-items : center;
width: fit-content;
transition: 0s;
&:hover {
    box-shadow: 0px 2px 6px rgba(40, 40, 40, 0.8);
    transition: 1s
}
}
// Mobile styles
@media screen and (max-width: 1023px) {
margin: 0 8px;
padding: 6px 7px 4px 7px;
box-shadow: 0px 2px 4px rgba(40, 40, 40, 0.4);
background-color: #122C5C;
border-radius: 4px;
cursor: pointer;
display: flex;
align-items : center;
width: fit-content;
transition: 0s;
}

`