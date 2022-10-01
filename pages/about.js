import styled from 'styled-components'
import Image from 'next/image'
import { useState, useEffect } from 'react'

import Header from '@/comps/Header'
import ProjectCard from '@/comps/ProjectCard'
import Footer from '@/comps/Footer'


export default function About() {
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
        <HeroImgCont>
          <Image 
          src="/static/MatthewZhao_ProfilePicture.png"
          layout='responsive'
          width={692}
          height={872}
          alt='A beautiful picture of Matt&apos;s beautiful face'
          />
        </HeroImgCont>

        <HeroTxtCont>
          <HeroTxtH1>
            Hey all,
          </HeroTxtH1>

          <HeroTxtH2>
            I am Matthew Zhao, <br />
            a Vancouver-based <LineBreak />
            UI/UX designer.
          </HeroTxtH2>
        </HeroTxtCont>
      </HeroCont>

    <ContentBlock>
      <ContentP pwidth={"402px"}>
      I grew up in the Greater Vancouver Area and grew my passion for UI/UX design in high school through the Game of Apps program. After graduation, I went to BCIT to continue to sharpen and build up my skills.
      </ContentP>
      <div>
        <GoaImg>
          <Image 
          src="/static/MatthewZhao_GoA.png"
          layout="responsive"
          width={738}
          height={634}
          alt='This is us wireframing an app we built in high school.'
          />
        </GoaImg>
        <Caption>
          Mockups for my first app with Game of Apps.
        </Caption>
      </div>
      
    </ContentBlock>

    <ContentBlock2>
      <div>
        <GundamImg>
          <Image 
          src="/static/MatthewZhao_Gundam.png"
          layout="responsive"
          width={698}
          height={912}
          alt='This is a gundam box art project I made for class.'
          />
        </GundamImg>
        <Caption>
          This is a box art of a gundam I have at home.
        </Caption>
      </div>

      <ContentP pwidth={"425px"}>
      Outside of school and work, I enjoy building plastic models and eating out with friends. I enjoy the occasional hike and day of exploring the city. I also have experience in graphic design and enjoy helping in video editing in my communities. 
      </ContentP>

    </ContentBlock2>

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

// Desktop and tablet styles
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
background-color: #F0F4FF;
height: fit-content;
width: 100%;

// Desktop and tablet styles
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
margin: 0 0 80px 0;
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
margin: 0 0 24px 0;
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
}
`

const HeroImgCont = styled.div`
// Desktop and Tablet styles
@media screen and (min-width: 1024px) {
width: 346px;
height: 436px;
border-radius: 12px;
filter: drop-shadow(-12px 12px 0px #122C5C);
margin: 0 12px 0 0;
overflow: hidden;
}
// Mobile styles
@media screen and (max-width: 1023px) {
  width: 100%;
  height: 100%;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  filter: drop-shadow(8px 8px 0px #122C5C);
  margin: 32px 8px 0 0;
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
const ContentBlock = styled.div`
// Desktop and Tablet styles
@media screen and (min-width: 1024px) {
width: 915px;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 12px 12px 12px;
margin: 0px 0 56px 0;
}
// Mobile styles
@media screen and (max-width: 1023px) {
display: flex;
flex-direction: column;
width: 100%;
}
`

const ContentBlock2 = styled.div`
// Desktop and Tablet styles
@media screen and (min-width: 1024px) {
width: 915px;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 12px 12px 12px;
margin: 0px 0 56px 0;
}
// Mobile styles
@media screen and (max-width: 1023px) {
display: flex;
flex-direction: column-reverse;
width: 100%;
}
`

const ContentP = styled.div`
// Desktop and Tablet styles
@media screen and (min-width: 1024px) {
font-family: 'Oxygen';
font-weight: 400;
font-size: 1.25em;
line-height: 36px;
color: #868686;

width: ${props=>props.pwidth};
}
// Mobile styles
@media screen and (max-width: 1023px) {
font-family: 'Oxygen';
font-weight: 300;
font-size: 1em;
line-height: 150%;

margin: 0 0 32px 0;
color: #868686;
}
`

const GoaImg = styled.div`
// Desktop and Tablet styles
@media screen and (min-width: 1024px) {
width: 369px;
height: 316.71px;

filter: drop-shadow(12px 12px 0px #122C5C);
border-radius: 12px;
overflow: hidden;
}
// Mobile styles
@media screen and (max-width: 1023px) {
border-radius: 12px;
overflow: hidden;
filter: drop-shadow(0 0 2px #808080);
}
`

const GundamImg = styled.div`
// Desktop and Tablet styles
@media screen and (min-width: 1024px) {
width: 349px;
height: 456px;

filter: drop-shadow(-12px 12px 0px #122C5C);
border-radius: 12px;
overflow: hidden;
}
// Mobile styles
@media screen and (max-width: 1023px) {
border-radius: 12px;
overflow: hidden;
filter: drop-shadow(0 0 2px #808080);
}
`

const LineBreak = styled.br`
// Desktop and Tablet styles
@media screen and (min-width: 1024px) {
}
// Mobile styles
@media screen and (max-width: 1023px) {
display: none
}
`

const Caption = styled.div`
// Desktop and Tablet styles
@media screen and (min-width: 1024px) {
display: none;
}
// Mobile styles
@media screen and (max-width: 1023px) {
width: 100%;
text-align: center;
font-family: 'Oxygen';
font-weight: 300;
font-size: 1em;
font-style: italic;

color: #6B6B6B;

margin: 24px 0;
}
`