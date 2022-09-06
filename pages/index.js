import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

import Header from '@/comps/Header'
import ProjectCard from '@/comps/ProjectCard'
import Footer from '@/comps/Footer'
import { useState } from 'react'


export default function Home() {

  var [email, setEmail] = useState(false)

  function emailIconClick(){
    if (email === true) {
      setEmail(false)
    }
    else {
      setEmail(true)
    }
    console.log(email)
  }


  return <Container>
    <HeaderCont>
      <Header />
    </HeaderCont>
    
    <Content>
      <HeroCont>
        <HeroTxtCont>
          <HeroTxtH1>
            Hello there,
          </HeroTxtH1>

          <HeroTxtH2>
          I design comfortable and familiar experiences for your users.
          </HeroTxtH2>

          <HeroTxtP>
          I am a BCIT, Digital Design and Development graduate capable of adding value by bringing my skills and experience in UI/UX design, graphic design, and frontend development.
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
          layout='fill'
          alt='A beautiful picture of Matt&apos;s beautiful face'
          />

        </HeroImgCont>
      </HeroCont>

      <CardCont>
        <ProjectCard />
        <ProjectCard 
        tagline='An app that helps you navigate your transit service.'
        route='/compassplus'
        />

      </CardCont>
    </Content>

    <Footer />

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
@media screen and (max-width: 767px) {

}
`

const HeaderCont = styled.div`
background-color: #F0F4FF;
height: fit-content;
width: 100%;
// Desktop styles
@media screen and (min-width: 1024px) {
width: 1048px;
padding: 0 24px;
background-color: rgba(255,255,255, 0.8);
}
// Tablet styles
@media screen and (min-width: 768px) and (max-width: 1023px) {
}
// Mobile styles
@media screen and (max-width: 767px) {
}
`

const Content = styled.div`
// Desktop styles
@media screen and (min-width: 1024px) {
width: 1048px;
padding: 0 24px;
background-color: #ffffff;

display: flex;
flex-direction: column;
align-items: center;
}
// Tablet styles
@media screen and (min-width: 768px) and (max-width: 1023px) {
background-color: blue;
padding: 0 16px 0 16px;
}
// Mobile styles
@media screen and (max-width: 767px) {

}
`

const HeroCont = styled.div`
// Desktop and Tablet styles
@media screen and (min-width: 768px) {
width: 915px;
display: flex;
justify-content: space-between;
align-items: flex-end;
margin: 56px 0 106px 0;
}
// Mobile styles
@media screen and (max-width: 767px) {

}
`
const HeroTxtCont = styled.div`
width: 488px;
`
const HeroTxtH1 = styled.div`
// Desktop and Tablet styles
@media screen and (min-width: 768px) {
font-family: 'Montserrat';
font-weight: 900;
font-size: 1.5em;
color: #122C5C;
margin: 0 0 8px 0;

}
// Mobile styles
@media screen and (max-width: 767px) {

}
`
const HeroTxtH2 = styled.div`
// Desktop and Tablet styles
@media screen and (min-width: 768px) {
font-family: 'Montserrat';
font-weight: 900;
font-size: 2.25em;
color: #122C5C;
margin: 0 0 16px 0;
}
// Mobile styles
@media screen and (max-width: 767px) {
}
`
const HeroTxtP = styled.div`
// Desktop and Tablet styles
@media screen and (min-width: 768px) {
font-family: 'Oxygen';
font-weight: 300;
font-size: 1.125em;
line-height: 28px;
color: #868686;

margin: 0 0 40px 0;
}
// Mobile styles
@media screen and (max-width: 767px) {
}
`
const HeroBtnRow = styled.div`
// Desktop and Tablet styles
@media screen and (min-width: 768px) {
display: flex;
align-items: baseline;
}
// Mobile styles
@media screen and (max-width: 767px) {
}
`
const HeroBtn1 = styled.div`
// Desktop and Tablet styles
@media screen and (min-width: 768px) {
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

&:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
    transition: 0.5s;
}
}
// Mobile styles
@media screen and (max-width: 767px) {
}
`

const HeroBtn2 = styled.div`
// Desktop and Tablet styles
@media screen and (min-width: 768px) {
display: flex;
justify-content: center;
align-items: center;

font-family: 'Montserrat';
font-weight: 500;
font-size: 1em;
color: #122C5C;

margin: 0 0 0 40px;
cursor: pointer;
&:hover {
    font-weight: 600;
    transition: 1s;
}
}
// Mobile styles
@media screen and (max-width: 767px) {
}
`

const HeroImgCont = styled.div`
// Desktop and Tablet styles
@media screen and (min-width: 768px) {
width: 346px;
height: 436px;
border-radius: 12px;
filter: drop-shadow(12px 12px 0px #122C5C);
margin: 0 12px 0 0;
overflow: hidden;
}
// Mobile styles
@media screen and (max-width: 767px) {
}
`
const CardCont = styled.div`
// Desktop and Tablet styles
@media screen and (min-width: 768px) {
width: 915px;
display: flex;
justify-content: space-between;
align-items: flex-end;
margin: 0 0 0 0;
}
// Mobile styles
@media screen and (max-width: 767px) {

}
`
