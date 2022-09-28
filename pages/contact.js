import styled from 'styled-components'
import Image from 'next/image'
import { useState } from 'react'

import Header from '@/comps/Header'
import ProjectCard from '@/comps/ProjectCard'
import Footer from '@/comps/Footer'


export default function Contact() {

  var [email, setEmail] = useState(false)
  var [emailW, setEmailW] = useState("0")
  var [emailM, setEmailM] = useState("0")

  function emailIconClick(){
    if (email === true) {
      setEmail(false)
      setEmailW("100%")
      setEmailM("0 8px")
      
    }
    if (email === false) {
      setEmailM("0")
      setEmailW("0")

      setEmail(true)
    }
  }

  return <Container>
    <HeaderCont>
      <Header />
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
    emailMargin={emailM}
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