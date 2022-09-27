import styled from "styled-components"
import Link from 'next/link'
import { SiMaildotru, SiLinkedin, SiGithub } from 'react-icons/si'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";


export default function Header({
  showModal = "",
  onClose = () => {},
  ModalonClick = () => {}
}) {
    return <Container>
        <Link href="/">
            <HomeBtn>
                Matthew Zhao
            </HomeBtn>
        </Link>

        <PopupBtnCont>
            <GiHamburgerMenu size={24} onClick={ModalonClick} />
            <Modal
                onClose={onClose}
                show={showModal}
            >
                Hello from the modal!
            </Modal>
        </PopupBtnCont>

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
const PopupBtnCont = styled.div`
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
    <StyledModalOverlay>
      <StyledModal>
        <StyledModalHeader>
          <a href="#" onClick={handleCloseClick}>
            <AiOutlineClose size={24}/>
          </a>
        </StyledModalHeader>
        Hi how are you I am Modal
      </StyledModal>
    </StyledModalOverlay>
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


const StyledModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 25px;
`;

const StyledModal = styled.div`
  background: #ffffff;
  width: 100%;
  height: 100%;
  padding: 16px;
  z-index: 1;
  overflow: hidden;
`;
const StyledModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;
