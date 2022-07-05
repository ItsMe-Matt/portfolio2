import styled from "styled-components"
import Link from 'next/link'
import { SiMaildotru, SiLinkedin, SiGithub } from 'react-icons/si'

export default function Header() {



    return <Container>
        <Link href="/">
            <HomeBtn>
                Matthew Zhao
            </HomeBtn>
        </Link>

       

        <NavCont>
            <Link href="/resume">
                <NavBtn1>
                    Resume
                </NavBtn1>
            </Link>
            

            <Link href="/about">
                <NavBtn1>
                    About Me
                </NavBtn1>
            </Link>

            <IconCont>
            <a href="https://www.linkedin.com/in/mlzhao/" target="_blank">
                <Icon>
                    <SiLinkedin size="26px" color="#fff"/>
                </Icon>
            </a>
            
            
            <a href="https://github.com/ItsMe-Matt" target="_blank">
                <Icon>
                    <SiGithub size="26px" color="#fff"/>
                </Icon>
            </a>

            <Link href="/">
                <Icon>    
                    <SiMaildotru size="26px" color="#fff"/>
                </Icon>
            </Link>
        </IconCont>
        </NavCont>
    </Container>
}

const Container = styled.div`

// Desktop and Tablet styles
@media screen and (min-width: 768px){
display: flex;
justify-content: space-between;
align-items: flex-end;

padding: 40px 0 12px 0;
}
// Mobile styles
@media screen and (max-width: 767px) {

}
`

const HomeBtn = styled.div`
@media screen and (min-width: 768px){
font-family: Montserrat;
font-weight: 600;
font-size: 1.5em;
cursor: pointer;
}
// Mobile styles
@media screen and (max-width: 767px) {

}
`

const NavCont = styled.div`
display: flex;
`

const NavBtn1 = styled.div`
@media screen and (min-width: 768px){
font-family: Montserrat;
font-weight: 500;
font-size: 1em;
border-radius: 8px;
border: black 1px solid;
padding: 8px 32px;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
margin-right: 8px;
cursor: pointer;
display: flex;
align-items: flex-end;

&:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
    transition: 1.2s;
}
}
// Mobile styles
@media screen and (max-width: 767px) {

}
`

const NavBtn3 = styled.div`
@media screen and (min-width: 768px){
font-family: Montserrat;
font-weight: 500;
font-size: 1em;
color: #fff;

box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
background: #122C5C;

border-radius: 8px;
padding: 8px 32px;
cursor: pointer;

&:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
    transition: 2s;
}
}
// Mobile styles
@media screen and (max-width: 767px) {

}
`
const IconCont = styled.div`
// Desktop and Tablet styles
@media screen and (min-width: 768px){
display: flex;
}
// Mobile styles
@media screen and (max-width: 767px) {

}
`

const Icon = styled.div`
// Desktop and Tablet styles
@media screen and (min-width: 768px){
margin: 0 6px;
padding: 6px;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);
background-color: #122C5C;
border-radius: 4px;
cursor: pointer;

&:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
    transition: 1.2s;
}
}
// Mobile styles
@media screen and (max-width: 767px) {

}

`