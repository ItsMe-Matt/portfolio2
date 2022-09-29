import styled from 'styled-components'
import Image from 'next/image'
import { useState } from 'react'

import Header from '@/comps/Header'
import ProjectCard from '@/comps/ProjectCard'
import ProjectHeader from '@/comps/ProjectHeader'
import ProjectNav from '@/comps/ProjectNav'
import ProjectH1P from '@/comps/ProjectH1P'
import ProjectP from '@/comps/ProjectP'
import Footer from '@/comps/Footer'
import ProjectList from '@/comps/ProjectList'


export default function CompassPlus() {

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
      <div id='intro' />
      <Header />
    </HeaderCont>
    
    <Content>
      <ProjectHeader 
      tagline='Designed to become Translink&apos;s Official Mobile Application'
      description='CompassPlus is an app designed to replace your physical Compass card with a digital NFC card you can use on your phone.'
      role='UI/UX Designer'
      timeframe='3 months (Sept - Dec 2021)'
      purpose='Class Project'
      tools='Figma, Illustrator, InDesign, React, Expo'
      />

      <TextContentCont>
        <NavCont>
          <ProjectNav />
        </NavCont>
        

        <TextContent>
          <SectionCont id='role'>
            <ProjectH1P 
            title='My Role'
            description='My role in this project was as a UI/UX designer. I worked alongside 2 other designers, 1 developer, and 2 hybrids (designer and developers). I mostly designed components and some screen layouts. I also designed the business cards and the website we would come to use for our app.'/>
          </SectionCont>

          <SectionCont id='user'>
            <ProjectH1P 
            title='Our Users'
            description='Through our user survey, we learned about some of our target audience’s pain points and needs, as well as how we should prioritize the development of certain features and functions. We also learned if there was a need and use for this app and the results of the user testing reflected that yes, there is a need and use for the app.'
            />
            <ProjectList
            LTitle='Pain Points'
            RTitle='Needs'
            LPoint1='Forgetting their Compass Card at home and having to buy a new one to be able to use transit.'
            LPoint2='Realizing that you have a low balance on your card and needing to get in a physical queue to reload despite being low on time.'
            LPoint3='Having to use different apps for navigation and interruption alerts.'
            RPoint1='To have your compass card always with you through your phone.'
            RPoint2='To be able to reload your compass card whenever and wherever you are.'
            RPoint3='To manage everything transit-related in one convenient app.'
            />

            <ImgCont>
              <Image
              src="/static/CompassPlus_Survey.gif"
              width={989}
              height={735}
              />
            </ImgCont>

            <CaptionBottom>
              These were some of the questions and results of our preliminary survey.
            </CaptionBottom>
          </SectionCont>

          <SectionCont id='problem'>
            <ProjectH1P 
            title='Problem Identification'
            description='When riders first start using Translink, they have to know how to use Translink and its routes, get a compass card or ticket and make sure they have enough funds to get them to their destination. Even experienced riders may forget their compass card every now and then. The problem is that to learn how to use Translink, get a ticket or compass card, and fill up the funds of the card could sometimes be in different places. You would have to use different apps and go to different locations. Our app aims to solve that problem'
            />
          </SectionCont>

          <SectionCont id='solution'>
            <ProjectH1P 
            title='Solution and Goals'
            description='Our solution is to develop a cross-platform application that allows you to find your route through Translink, buy tickets, and reload them for your trip, with the added feature of checking for live Translink updates. This would allow experienced riders to continue using Translink without losing time in case they are missing their compass card or if they are going to a place they are not familiar with. This would also allow new travelers to easily learn how to navigate through Translink with one convenient application.'
            />
          </SectionCont>

          <SectionCont id='design'>
            <ProjectH1P 
            title='Design Process'
            description='Taking our goal into consideration, we began the design of our low fidelity and medium-fidelity prototype. I was personally in charge of the card page. For the low fidelity, it felt really strange and clunky. I initially drew inspiration from other mobile payment apps like Apple Pay or Google Pay. However, as designs and user testing progressed, I found that users much preferred a more Starbucks-styled card page, so I based the next design on that.'
            />

            <ImgCont>
              <Image
              src="/static/CompassPlus_LowMediumFidelity.png"
              width={2363}
              height={1824}
              />
            </ImgCont>

            <Caption>
              This is the low to medium fidelity designs that eventually got evolved into the high fidelity.
            </Caption>

            <ImgCont>
              <Image
              src="/static/CompassPlus_HighFidelity.png"
              width={2151}
              height={1776}
              />
            </ImgCont>

            <CaptionBottom>
              This is the final design that was given to the developers.
            </CaptionBottom>
            <ProjectP 
            description='As the designing progressed, another team member created their own version of my cards page, and after minor user testing, we decided to progress with their design instead. After that, I decided to move on to designing components. With designing components, there was once again a hand off and evolution of ideas and designs especially when we handed the designs over to the developers. We had also decided to have one person finalize all the designs before the developers started developing the frontend to keep the style consistent.'
            />

            <ImgCont>
              <Image
              src="/static/CompassPlus_AlternateDesigns.png"
              width={2192}
              height={1752}
              />
            </ImgCont>

            <CaptionBottom>
              These were alternate unused designs that also inspired or evolved into the final designs.
            </CaptionBottom>
          </SectionCont>

          <SectionCont id='final'>
            <ProjectH1P 
            title='Final Designs'
            description='I am proud of the application the team was able to put together. I was also proud of the work I produced with this application. I had designed several components and one way or another, my designs had reached the final product of the app either completely intact or evolved into what is seen at the end.'
            />

          <ImgCont>
            <Image 
            src="/static/CompassPlus_FinalDesign.gif"
            width={1440}
            height={1080}
            />
          </ImgCont>
          <CaptionBottom>
            This is the final design and interactions of the CompassPlus app.
          </CaptionBottom>
          </SectionCont>

          <SectionCont id='conclusion' />
            <ProjectH1P 
            title='Conclusion'
            description='Our solution is to develop a cross-platform application that allows you to find your route through Translink, buy tickets, and reload them for your trip, with the added feature of checking for live Translink updates. This would allow experienced riders to continue using Translink without losing time in case they are missing their compass card or if they are going to a place they are not familiar with. This would also allow new travelers to easily learn how to navigate through Translink with one convenient application.'
            />         
        </TextContent>

      </TextContentCont>


    </Content>
    <CardContHeader>
      But wait, there&apos;s more! Take a look at my other projects or contact me with the links below.
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

// Desktop and Tablet styles
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
margin: 0 0 80px 0;
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
const TextContentCont = styled.div`
// Desktop and Tablet styles
@media screen and (min-width: 1024px) {
  display: flex;
  width: 915px;
  justify-content: space-between;
  margin: 88px 0 0 0;
}
// Mobile styles
@media screen and (max-width: 1023px) {
}
`

const TextContent = styled.div`
// Desktop and Tablet styles
@media screen and (min-width: 1024px) {
}
// Mobile styles
@media screen and (max-width: 1023px) {
}
`
const SectionCont = styled.div`
// Desktop and Tablet styles
@media screen and (min-width: 1024px) {
  margin: 0 0 40px 0;
}
// Mobile styles
@media screen and (max-width: 1023px) {
}
`



const NavCont = styled.div`
// Desktop and Tablet styles
@media screen and (min-width: 1024px){
}
// Mobile styles
@media screen and (max-width: 1023px) {
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

const Caption = styled.div`
// Desktop and Tablet styles
@media screen and (min-width: 1024px) {
width: 100%;
text-align: center;
font-family: 'Oxygen';
font-weight: 300;
font-size: 1em;
font-style: italic;
margin: 0 0 40px 0;;

color: #404040;
}
// Mobile styles
@media screen and (max-width: 1023px) {
width: 100%;
text-align: center;
font-family: 'Oxygen';
font-weight: 300;
font-size: 1em;
font-style: italic;

color: #404040;
}
`

const ImgCont = styled.div`
// Desktop and Tablet styles
@media screen and (min-width: 1024px) {
width: 100%;
overflow: hidden;
position: relative;
border-radius: 12px;
filter: drop-shadow(0 0 1px #000);
margin: 48px 0 16px 0;
}
// Mobile styles
@media screen and (max-width: 1023px) {
  filter: drop-shadow(0 0 1px #808080);
  margin: 48px 0 16px 0;
}
`

const CaptionBottom = styled.div`
// Desktop and Tablet styles
@media screen and (min-width: 1024px) {
width: 100%;
text-align: center;
font-family: 'Oxygen';
font-weight: 300;
font-size: 1em;
font-style: italic;

color: #404040;
}
// Mobile styles
@media screen and (max-width: 1023px) {
width: 100%;
text-align: center;
font-family: 'Oxygen';
font-weight: 300;
font-size: 1em;
font-style: italic;

color: #404040;
margin-bottom: 56px;
}`