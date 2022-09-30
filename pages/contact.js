import styled from 'styled-components'
import Image from 'next/image'
import { useState } from 'react'
import { SiMaildotru, SiLinkedin, SiGithub } from 'react-icons/si'

import Header from '@/comps/Header'
import ProjectCard from '@/comps/ProjectCard'
import Footer from '@/comps/Footer'



export default function Contact() {
  var [showMenu, setShowMenu] = useState(false);
  var [contH, setContH] = useState("100%")

  useEffect(()=>{
    if (showMenu == false) {
      setContH("100%")
    }
    if (showMenu == true) {
      setContH("100vh")
    }
  })

  var [email, setEmail] = useState(false)
  var [emailW, setEmailW] = useState("42px")

  function emailIconClick(){
    if (email == false) {
      setEmailW("100%")
      setEmail(true)
      console.log(email)
    }
    if (email == true) {
      setEmail(false)
      setEmailW("42px")
      console.log(email)
    }
  }

  return <Container>
    <HeaderCont>
      <Header
      showModal={showMenu}
      onClose = {()=> {setShowMenu(false); console.log(showMenu)}}
      onMenuClick = {()=>{setShowMenu(true); console.log(showMenu)}}
      />
    </HeaderCont>
    
    <Content>
      <HeroCont>
        <HeroTxtCont>
            <HeroTxtH1>
            Say Hello!
            </HeroTxtH1>

            <HeroTxtH2>
            Like what you saw? <br />
            Feel free to contact me,
            I would be happy to hear from you.
            </HeroTxtH2>
        </HeroTxtCont>

        <HeroTxtP>
            linkedin: <a href="https://www.linkedin.com/in/mlzhao" target="blank">in/mlzhao </a>
            <br/>
            github: <a href="https://github.com/ItsMe-Matt">/ItsMe-Matt</a>
            <br/>
            email: <a href="mailto:matthewlukez@yahoo.com">matthewlukez@yahoo.com</a>
        </HeroTxtP>

        <ButtonCont>
          <a href='https://www.linkedin.com/in/mlzhao'>
            <BtnCont>
              /in/mlzhao
              <IconCont>
                <SiLinkedin size="32px" color="#fff"/>
              </IconCont>
            </BtnCont>
          </a>

          <a href='https://github.com/ItsMe-Matt'>
            <BtnCont>
              /itsme-matt
              <IconCont>
                <SiGithub size="32px" color="#fff"/>
              </IconCont>
            </BtnCont>
          </a>

          
            <BtnCont onClick={()=>{navigator.clipboard.writeText("matthewlukez@yahoo.com")}}>
              matthewlukez@yahoo.com
              <IconCont>
                <SiMaildotru size="32px" color="#fff"/>
              </IconCont>
            </BtnCont>

        </ButtonCont>
      </HeroCont>
    </Content>
    <CardContHeader>
      Psh...hey! I&apos;ve got some pretty cool projects you should take a look at.
    </CardContHeader>
    <CardCont>
        <ProjectCard 
        tagline='An organization&apos;s interal-use time tracking mobile application.'
        route='/timetracker'
        />
        <ProjectCard 
        tagline='An app that helps you navigate your transit service.'
        route='/compassplus'
        />

      </CardCont>
    <Footer 
    onIconClick={emailIconClick}
    emailWidth={emailW}
    />

  </Container>
}

const Container = styled.div`
height: fit-content;
width: 100%;

// Desktop styles
@media screen and (min-width: 1024px) {
display: flex;
flex-direction: column;
align-items: center;
}
// Mobile styles
@media screen and (max-width: 1023px) {
display: flex;
flex-direction: column;
align-items: center;
}
`

const HeaderCont = styled.div`
height: fit-content;
width: 100%;

// Desktop styles
@media screen and (min-width: 1024px) {
width: 1024px;
padding: 0 24px;
background-color: rgba(255,255,255, 0.8);
}
// Mobile styles
@media screen and (max-width: 1023px) {
width: 100%;
padding: 0 16px;
}
`

const Content = styled.div`
// Desktop and Tablet styles
@media screen and (min-width: 1024px) {
width: 1024px;
padding: 0 24px;
margin: 56px 0 16px 0;
background-color: #ffffff;

display: flex;
flex-direction: column;
align-items: center;
}
// Mobile styles
@media screen and (max-width: 1023px) {
padding: 0 16px;
width: 100%;
}
`

const HeroCont = styled.div`
// Desktop and Tablet styles
@media screen and (min-width: 1024px) {
width: 915px;
display: flex;
justify-content: space-between;
align-items: flex-end;
margin: 56px 0 106px 0;
}
// Mobile styles
@media screen and (max-width: 1023px) {
display: flex;
flex-direction: column;
margin: 0 0 48px 0;
width: 100%
}
`

const HeroTxtCont = styled.div`

// Desktop and Tablet styles
@media screen and (min-width: 1024px) {
width: 488px;
}
// Mobile styles
@media screen and (max-width: 1023px) {
margin: 56px 0 0 0;

}
`

const HeroTxtH1 = styled.div`
color: #122C5C;
// Desktop and Tablet styles
@media screen and (min-width: 1024px) {
font-family: 'Montserrat';
font-weight: 900;
font-size: 1.5em;
color: #122C5C;
margin: 0 0 8px 0;
}
// Mobile styles
@media screen and (max-width: 1023px) {
font-family: Montserrat;
font-size: 1.125em;
font-weight: 700;
margin: 0 0 8px 0;
}
`

const HeroTxtH2 = styled.div`
color: #122C5C;
// Desktop and Tablet styles
@media screen and (min-width: 1024px) {
font-family: 'Montserrat';
font-weight: 900;
font-size: 2.25em;
color: #122C5C;
}
// Mobile styles
@media screen and (max-width: 1023px) {
font-family: Montserrat;
font-size: 1.5em;
font-weight: 800;
margin: 0 0 16px 0;
}
`
const HeroTxtP = styled.div`
color: #868686;
// Desktop and Tablet styles
@media screen and (min-width: 1024px) {
font-family: 'Oxygen';
font-weight: 300;
font-size: 1.125em;
line-height: 28px;
color: #868686;
width:366px;
text-align: right;
}
// Mobile styles
@media screen and (max-width: 1023px) {
font-family: 'Oxygen';
font-weight: 300;
font-size: 1em;
line-height: 150%;

margin: 0 0 32px 0;
text-align: right;
display: none;
}
`


const CardContHeader = styled.div`
// Desktop and Tablet styles
@media screen and (min-width: 1024px) {
font-family: 'Montserrat';
font-weight: 600;
font-size: 1.25em;

margin: 0 0 24px 0;
width: 915px;
text-align: center;
}
// Mobile styles
@media screen and (max-width: 1023px) {
font-family: 'Montserrat';
font-weight: 600;
font-size: 1em;
text-align: center;
margin: 0 0 28px 0;
width: 100%;
padding: 16px;
}
`
const CardCont = styled.div`
// Desktop and Tablet styles
@media screen and (min-width: 1024px) {
width: 915px;
display: flex;
justify-content: space-between;
align-items: flex-end;
margin: 0 0 0 0;
}
// Mobile styles
@media screen and (max-width: 1023px) {
display: flex;
flex-direction: column;
padding: 0 20px;
}
`

const ButtonCont = styled.div`
// Desktop and Tablet styles
@media screen and (min-width: 1024px) {
display: none
}
// Mobile styles
@media screen and (max-width: 1023px) {
display: flex;
flex-direction: column;
margin: 32px 0 0 0;
}
`

const BtnCont = styled.div`
// Desktop and Tablet styles
@media screen and (min-width: 1024px) {
display: flex;
justify-content: center;
align-items: center;

padding: 12px 32px;
background: #122C5C;
box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
border-radius: 52px;

font-family: 'Montserrat';
font-weight: 600;
font-size: 1em;
color: #ffffff;
cursor: pointer;
margin: 0 16px 0 0;

&:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
    transition: 0.5s;
}
}
// Mobile styles
@media screen and (max-width: 1023px) {
display: flex;
justify-content: center;
align-items: center;


width: 100%;
padding: 20px 0;
background: #122C5C;
box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
border-radius: 52px;

font-family: 'Montserrat';
font-weight: 600;
font-size: 1em;
color: #ffffff;
cursor: pointer;
margin: 0 0 8px 0;

}
`

const IconCont = styled.div`

// Desktop and Tablet styles
@media screen and (min-width: 1024px) {

}
// Mobile styles
@media screen and (max-width: 1023px) {
position: absolute;
left: 40px;
}
`