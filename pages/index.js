import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

import Header from '@/comps/Header'
import ProjectCard from '@/comps/ProjectCard'
import ProjectCard2 from '@/comps/ProjectCard2'
import Footer from '@/comps/Footer'
import { useEffect, useState } from 'react'


export default function Home() {
  var [showMenu, setShowMenu] = useState(false);
  var [contH, setContH] = useState("100%")

  useEffect(()=>{
    if (showMenu == false) {
      setContH("100%")
    }
    if (showMenu == true) {
      setContH("100vh")
    }
  },[showMenu])

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

  return <Container
  height={contH}>

    <Head>
      <title>Matthew Zhao&apos;s Portfolio</title>
    </Head>

    <HeaderCont>
      <Header
      showModal={showMenu}
      onClose = {()=> {setShowMenu(false); console.log(showMenu)}}
      onMenuClick = {()=>{setShowMenu(true); console.log(showMenu)}}
      page="home"
      />
    </HeaderCont>
    
    <Content>
      <HeroCont>
        <HeroTxtCont>
          <HeroTxtH1>
            Hello Hello, I am Matthew Zhao.
          </HeroTxtH1>

          <HeroTxtH2>
          I create user centered applications that solves problems, creates value, and encourages users to return.
          </HeroTxtH2>

          <HeroTxtP>
          I am an initiator, a team player, and a clear communicator who enjoys building on strengths and working through weakness to achieve success.
          </HeroTxtP>

          <HeroBtnRow>
            <Link href="/resume">
              <HeroBtn1>
                Read Resume
              </HeroBtn1>
            </Link>
            
            <Link href="/about">
              <HeroBtn2>
                Learn about me
              </HeroBtn2>
            </Link>
          </HeroBtnRow>
        </HeroTxtCont>

        <HeroImgCont>
          <Image 
          src="/static/MatthewZhao_ProfilePicture.png"
          layout='responsive'
          width={346}
          height={436}
          alt='A beautiful picture of Matt&apos;s beautiful face'
          priority = "true"
          objectFit='contain'
          />

        </HeroImgCont>
      </HeroCont>

      <ProjectCard2 
         tagline='An organization&apos;s
         internal-use timetracking app'
         description='This app is designed to help volunteers and mentors of Game of Apps to record and track the amount of time spent in each activity and project to provide accurate information to sponsors.'
         role='UI/UX Designer'
         timeframe='3 months (March - May 2022)'
         purpose='Practicum'
         tools='Figma'
        route='/timetracker'
        imgsrc='/static/Timetracker_Title.png'
        />
      <ProjectCard2
        tagline='An app designed to help you navigate Translink&apos;s services'
        description='CompassPlus is an app designed to replace your physical Compass card with a digital NFC card you can use on your phone.'
        role='UI/UX Designer'
        purpose='Class Project'
        tools='Figma, Illustrator, InDesign, React, Expo'
        route='/compassplus'
        />
    </Content>

    <Footer 
    onIconClick={emailIconClick}
    emailWidth={emailW}
    />

  </Container>
}

const Container = styled.div`
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
overflow: hidden;

height: ${(props)=>props.height}
}
`

const HeaderCont = styled.div`
// Desktop and Tablet styles
@media screen and (min-width: 1024px) {
width: 1024px;
padding: 0 24px;
background-color: rgba(255,255,255, 0.8);
height: fit-content;
}
// Mobile styles
@media screen and (max-width: 1023px) {
width: 100%;
padding: 0 16px;
}
`

const Content = styled.div`
// Desktop styles
@media screen and (min-width: 1024px) {
width: 1024px;
padding: 0 24px;
background-color: #ffffff;

display: flex;
flex-direction: column;
align-items: center;
}
// Mobile styles
@media screen and (max-width: 1023px) {
padding: 0 16px;
margin: 0 0 24px 0;
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
flex-direction: column-reverse;
margin: 0 0 48px 0;
}
`

const HeroTxtCont = styled.div`
// Desktop and Tablet styles
@media screen and (min-width: 1024px) {
width: 488px;
}
// Mobile styles
@media screen and (max-width: 1023px) {
}
`

const HeroTxtH1 = styled.div`
color: #122C5C;
// Desktop and Tablet styles
@media screen and (min-width: 1024px) {
font-family: 'Montserrat';
font-weight: 900;
font-size: 1.25em;
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
font-size: 2.0em;

margin: 0 0 16px 0;
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

margin: 0 0 32px 0;
}
// Mobile styles
@media screen and (max-width: 1023px) {
font-family: 'Oxygen';
font-weight: 300;
font-size: 1em;
line-height: 150%;

margin: 0 0 32px 0;
}
`

const HeroBtnRow = styled.div`
// Desktop and Tablet styles
@media screen and (min-width: 1024px) {
display: flex;
align-items: baseline;
}
// Mobile styles
@media screen and (max-width: 1023px) {
display: flex;
flex-direction: column;
}
`

const HeroBtn1 = styled.div`
// Desktop and Tablet styles
@media screen and (min-width: 1024px) {
display: flex;
justify-content: center;
align-items: center;

padding: 12px 32px;
background: #122C5C;
//box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
border-radius: 8px;

font-family: 'Montserrat';
font-weight: 600;
font-size: 1em;
color: #ffffff;
cursor: pointer;
margin: 0 16px 0 0;

&:hover {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.5);
    transition: 0.25s;
}
}
// Mobile styles
@media screen and (max-width: 1023px) {
display: flex;
justify-content: center;
align-items: center;


width: 100%;
padding: 10px 0;
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

const HeroBtn2 = styled.div`
// Desktop and Tablet styles
@media screen and (min-width: 1024px) {
display: flex;
justify-content: center;
align-items: center;

padding: 12px 32px;
background: #fff;
box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.3);
border-radius: 8px;

font-family: 'Montserrat';
font-weight: 500;
font-size: 1em;
color: #122C5C;
cursor: pointer;

&:hover {
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
    transition: 0.25s;
}
}
// Mobile styles
@media screen and (max-width: 1023px) {
display: flex;
justify-content: center;
align-items: center;

padding: 10px 0;
width: 100%;
background: #fff;
box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.3);
border-radius: 52px;

font-family: 'Montserrat';
font-weight: 500;
font-size: 1em;
color: #122C5C;
}
`




const HeroImgCont = styled.div`
// Desktop and Tablet styles
@media screen and (min-width: 1024px) {
width: 346px;
height: 436px;
border-radius: 12px;
filter: drop-shadow(12px 12px 0px #122C5C);
margin: 0 12px 0 0;
overflow: hidden;
position: relative;
}
// Mobile styles
@media screen and (max-width: 1023px) {
  width: 100%;
  height: 100%;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  filter: drop-shadow(8px 8px 0px #122C5C);
  margin: 32px 8px 48px 0;
}
`

const CardCont = styled.div`
// Desktop and Tablet styles
@media screen and (min-width: 1024px) {
width: 915px;
display: flex;
justify-content: space-between;
align-items: flex-end;
margin: 0;
}
// Mobile styles
@media screen and (max-width: 1023px) {
display: flex;
flex-direction: column;
padding: 0 20px;
}
`
