import styled from 'styled-components'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import Head from 'next/head'


import Header from '@/comps/Header'
import ProjectCard from '@/comps/ProjectCard'
import Footer from '@/comps/Footer'


export default function Resume() {
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
      <title>Resume | Matthew Zhao</title>
    </Head>

    <HeaderCont>
      <Header
      showModal={showMenu}
      onClose = {()=> {setShowMenu(false); console.log(showMenu)}}
      onMenuClick = {()=>{setShowMenu(true); console.log(showMenu)}}
      />
    </HeaderCont>
    
    <Content>
      <ResumeCont>
        <Image
        src="/static/MatthewZhao_Resume.svg"
        layout='responsive'
        width={1000}
        height={1530}
        alt='This is my resume. I hope you like it.'
        />
        </ResumeCont>

    </Content>
    <CardContHeader>
      Psh...hey! I&apos;ve got some pretty cool projects you should take a look at.
    </CardContHeader>
    <CardCont>
        <ProjectCard 
        tagline='An organization&apos;s interal-use time tracking mobile application.'
        route='/timetracker'
        imgsrc='/static/Timetracker_Title.png'
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
overflow: hidden;

height: ${(props)=>props.height}
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
margin: 0 0 40px 0;
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

const ResumeCont = styled.div`
// Desktop and Tablet styles
@media screen and (min-width: 1024px){
width: 100%;
padding: 0 40px;

filter: drop-shadow(0px 0px 16px rgba(0, 0, 0, 0.25));
}
// Mobile styles
@media screen and (max-width: 1023px) {
display: flex;
flex-direction: column;
filter: drop-shadow(0px 0px 16px rgba(0, 0, 0, 0.25));
}
`