import styled from "styled-components"
import { SiMaildotru, SiLinkedin, SiGithub } from 'react-icons/si'
import Link from 'next/link'

export default function Footer(
    onEmailClick=()=>{console.log("yes")},
    emailWidth="100%",
    emailMargin="0 8px"

) {



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

            <Icon>
                <div onClick={()=>onEmailClick()}>
                    <SiMaildotru size="32px" color="#fff"/>
                </div>  
                
                <IconEmail
                emailM={emailMargin}
                emailW={emailWidth}
                >
                    MatthewLukeZ@yahoo.com
                </IconEmail>              
            </Icon>

        </IconCont>
       
       <Text>
        Copyright &copy; 2022 Matthew Zhao
       </Text>

    </Container>
}

const Container = styled.div`

// Desktop and Tablet styles
@media screen and (min-width: 768px){

display: flex;
flex-direction: column;
align-items: center;

padding: 40px 0 28px 0;
margin: 32px 0 0 0;
}
// Mobile styles
@media screen and (max-width: 767px) {

}
`

const IconCont = styled.div`
// Desktop and Tablet styles
@media screen and (min-width: 768px){
display: flex;
margin: 0 0 20px 0;
}
// Mobile styles
@media screen and (max-width: 767px) {

}
`

const Icon = styled.div`
// Desktop and Tablet styles
@media screen and (min-width: 768px){
margin: 0 8px;
padding: 6px 6px 4px 6px;
box-shadow: 0px 2px 4px rgba(40, 40, 40, 0.4);
background-color: #122C5C;
border-radius: 4px;
cursor: pointer;
display: flex;
align-items : center;
&:hover {
    box-shadow: 0px 2px 6px rgba(40, 40, 40, 0.8);
    transition: 1s
}
}
// Mobile styles
@media screen and (max-width: 767px) {

}

`

const Text = styled.div`
// Desktop and Tablet styles
@media screen and (min-width: 768px){
font-family: 'Oxygen';
font-weight: 300;
font-size: 1em;

color: #868686;
}
// Mobile styles
@media screen and (max-width: 767px) {

}
`

const IconEmail = styled.div`
// Desktop and Tablet styles
@media screen and (min-width: 768px){
font-family: 'Oxygen';
font-weight: 500;
font-size: 1em;
overflow: hidden;
padding: ${(props)=>props.emailM};
width: ${(props)=>props.emailW};

color: #fff;
}
// Mobile styles
@media screen and (max-width: 767px) {

}
`
