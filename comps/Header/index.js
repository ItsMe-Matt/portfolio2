import styled from "styled-components"
import Link from 'next/link'
import { SiMaildotru, SiLinkedin, SiGithub } from 'react-icons/si'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
import Image from "next/image"

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";


export default function Header({
  onMenuClick = () => {},
  showModal = "",
  onClose = () => {},
}) {
    return <div>
    <Container>
        <Link href="/">
            <HomeBtn>
                <LogoCont>
                    <Image 
                    src="/static/favicon.png"
                    layout="responsive"
                    width={128}
                    height={128}
                    objectFit="cover"
                    objectPosition="center"
                    />
                </LogoCont>
                Matthew Zhao
            </HomeBtn>
        </Link>

        <MenuBtnCont >
            <GiHamburgerMenu size={24} onClick={onMenuClick}/>

            <Modal
                onClose={onClose}
                show={showModal}
            >
            </Modal>
        </MenuBtnCont>

        <NavCont>
            <Link href="/">
                <NavBtn1>
                    home
                </NavBtn1>
            </Link>

            <Link href="/resume">
                <NavBtn1>
                    resume
                </NavBtn1>
            </Link>
            

            <Link href="/about">
                <NavBtn2>
                    about
                </NavBtn2>
            </Link>

            <Link href="/contact">
                <NavBtn3>
                    contact me
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



    </div>
}

const Modal = ({ show, onClose, children, title }) => {
    const [isBrowser, setIsBrowser] = useState(false);
  
    useEffect(() => {
      setIsBrowser(true);
    }, []);
  
    const handleCloseClick = (e) => {
      e.preventDefault();
      onClose();
    };
  
    const modalContent = show ? (
        <StyledModal>
            <StyledModalHeader>
                <a href="#" onClick={handleCloseClick}>
                  <AiOutlineClose size={24}/>
                </a>
            </StyledModalHeader>

            <MenuCont>
                <Link href="/">
                    <NavBtn1>
                        home
                    </NavBtn1>
                </Link>

                <Link href="/resume">
                    <NavBtn1>
                        resume
                    </NavBtn1>
                </Link>

                <Link href="/about">
                    <NavBtn1>
                        about
                    </NavBtn1>
                </Link>


            </MenuCont>
           
            <Link href="/contact">
                <NavBtn3>
                    contact me
                </NavBtn3>
            </Link>
        </StyledModal>
    ) : null;
  
    if (isBrowser) {
      return ReactDOM.createPortal(
        modalContent,
        document.getElementById("modal-root")
      );
    } else {
      return null;
    }
  };
  
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
display: flex;
align-items: flex-end;
}
// Mobile styles
@media screen and (max-width: 1023px) {
font-family: Montserrat;
font-size: 1.25em;
font-weight: 500;
letter-spacing: 0em;
display: flex;
align-items: flex-end;

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
font-weight: 600;
font-size: 1em;
border-radius: 8px;
padding: 8px 24px;
margin-right: 8px;
cursor: pointer;
display: flex;
align-items: flex-end;
&:hover {    
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
    transition: 1s;
}
}
// Mobile styles
@media screen and (max-width: 1023px) {
font-family: Montserrat;
font-size: 1.75em;
font-weight: 500;
text-align: center;
width: 100%;
padding: 0 0 0 16px;
margin: 0 0 24px 0;
}
`
const NavBtn2 = styled.div`
//Desktop styles
@media screen and (min-width: 1024px){
font-family: Montserrat;
font-weight: 600;
font-size: 1em;
border-radius: 8px;
padding: 8px 24px;
margin-right: 24px;
cursor: pointer;
display: flex;
align-items: flex-end;
&:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
    transition: 1s;
}
}
// Mobile styles
@media screen and (max-width: 1023px) {
font-family: Montserrat;
font-size: 1.75em;
font-weight: 500;
text-align: center;
width: 100%;
padding: 0 0 0 16px;
margin: 0 0 24px 0;
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
    transition: 1s;
}
}
// Mobile styles
@media screen and (max-width: 1023px) {
display: flex;
justify-content: center;
align-items: center;
width: 100%;
padding: 16px 0;
background: #122C5C;
box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
border-radius: 52px;
font-family: 'Montserrat';
font-weight: 600;
font-size: 1.25em;
color: #ffffff;
cursor: pointer;
margin: 0 0 20px 0;
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
}
`
  
const StyledModalHeader = styled.div`
width: 100%;
display: flex;
justify-content: flex-end;
`;
  
const StyledModal = styled.div`
background: #ffffff;
width: 100%;
height: 100%;
padding: 16px;
z-index: 1;
overflow: hidden;
position: absolute;
display: flex;
flex-direction: column;
justify-content: space-between;
`;

const LogoCont = styled.div`
width: 32px;
height: 100%;
margin-right: 8px;
`