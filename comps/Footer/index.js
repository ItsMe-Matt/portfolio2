import styled from "styled-components"
import { SiMaildotru, SiLinkedin, SiGithub } from 'react-icons/si'
import Link from 'next/link'

export default function Footer() {



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

            <Link href="/">
                <Icon>    
                    <SiMaildotru size="32px" color="#fff"/>
                </Icon>
            </Link>
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
padding: 6px;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);
background-color: #122C5C;
border-radius: 4px;
cursor: pointer;
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
font-size: 16px;

color: #868686;
}
// Mobile styles
@media screen and (max-width: 767px) {

}
`