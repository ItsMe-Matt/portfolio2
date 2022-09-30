import styled from "styled-components"
import Link from 'next/link'
import { SiMaildotru, SiLinkedin, SiGithub } from 'react-icons/si'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";


export default function Header({
  onMenuClick = () => {},
  menuDisplay = "none"
}) {
    return <div>
    <Container>
        <Link href="/">
            <HomeBtn>
                Matthew Zhao
            </HomeBtn>
        </Link>

        <MenuBtnCont onClick={()=>{onMenuClick()}}>
            <GiHamburgerMenu size={24}/>
        </MenuBtnCont>

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

            <Link href="/contact">
                <NavBtn3>
                    Contact Me
                </NavBtn3>
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

            <a href="mailto:matthewlukez@yahoo.com">
                <Icon>    
                    <SiMaildotru size="26px" color="#fff"/>
                </Icon>
            </a>
        </IconCont>
        </NavCont>
    </Container>

    <MenuCont
    menuDisplay={menuDisplay}>
        <Link href="/">
            <NavBtn1>
                Home
            </NavBtn1>
        </Link>

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

        <Link href="/contact">
            <NavBtn3>
                Contact Me
            </NavBtn3>
        </Link>
    </MenuCont>

    </div>
}

const Container = styled.div`

// Desktop and Tablet styles
@media screen and (min-width: 1024px){
display: flex;
justify-content: space-between;
align-items: flex-end;
padding: 40px 0 12px 0;
}
// Mobile styles
@media screen and (max-width: 1023px) {
display: flex;
justify-content: space-between;
align-items: flex-end;
padding: 40px 0 12px 0;
}
`

const HomeBtn = styled.div`
//Desktop styles
@media screen and (min-width: 1024px){
font-family: Montserrat;
font-weight: 600;
font-size: 1.5em;
cursor: pointer;
color: #122C5C;
}
// Mobile styles
@media screen and (max-width: 1023px) {
font-family: Montserrat;
font-size: 1.25em;
font-weight: 500;
letter-spacing: 0em;

color: #122C5C;
}
`

const NavCont = styled.div`
//Desktop styles
@media screen and (min-width: 1024px){
display: flex;
}
// Mobile styles
@media screen and (max-width: 1023px) {
display: none;
}
`
const MenuBtnCont = styled.div`
//Desktop styles
@media screen and (min-width: 1024px){
  display: none;
}
// Mobile styles
@media screen and (max-width: 1023px) {

}
`

const NavBtn1 = styled.div`
//Desktop styles
@media screen and (min-width: 1024px){
font-family: Montserrat;
font-weight: 500;
font-size: 1em;
border-radius: 8px;
//border: black 1px solid;
padding: 8px 32px;
//box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3);
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
@media screen and (max-width: 1023px) {
font-family: Montserrat;
font-size: 1.25em;
font-weight: 500;
text-align: left;

width: 100%;
padding: 0 0 0 16px;
margin: 0 0 16px 0;
border-bottom: 1px solid #404040;
}
`

const NavBtn3 = styled.div`
//Desktop styles
@media screen and (min-width: 1024px){
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
@media screen and (max-width: 1023px) {
font-family: Montserrat;
font-size: 1.5em;
font-weight: 500;
text-align: center;

width: 100%;
}
`

const IconCont = styled.div`
// Desktop and Tablet styles
@media screen and (min-width: 1024px){
//display: flex;
display: none;
}
// Mobile styles
@media screen and (max-width: 1023px) {

}
`

const Icon = styled.div`
// Desktop and Tablet styles
@media screen and (min-width: 1024px){
margin: 0 6px;
padding: 4px;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);
background-color: #122C5C;
border-radius: 4px;
cursor: pointer;
display: flex;
align-items: center;

&:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
    transition: 1.2s;
}
}
// Mobile styles
@media screen and (max-width: 1023px) {
}
`
const MenuCont = styled.div`
// Desktop and Tablet styles
@media screen and (min-width: 1024px){
display: none;
}
// Mobile styles
@media screen and (max-width: 1023px) {
    width: 100%;
    overflow: hidden;

    display: ${(props)=>props.menuDisplay};
    flex-direction: column;
    align-items: flex-start;

    padding: 16px 0 24px 0;
    box-shadow: inset 0 7px 3 -3 rgba(50,50,50,0.75);
}
`