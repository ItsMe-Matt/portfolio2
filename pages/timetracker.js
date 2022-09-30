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

export default function Timetracker() {
  const [showMenu, setShowMenu] = useState(false);

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
      <div id='intro' />
      <Header />
    </HeaderCont>
    
    <Content>
      <ProjectHeader 
      tagline='An organization&apos;s
      internal-use timetracking app'
      description='This app is designed to help volunteers and mentors of Game of Apps to record and track the amount of time spent in each activity and project to provide accurate information to sponsors.'
      role='UI/UX Designer'
      timeframe='3 months (March - May 2022)'
      purpose='Practicum'
      tools='Figma'
      />



      <TextContentCont>
        <NavCont>
          <ProjectNav />
        </NavCont>
        

        <TextContent>
          <SectionCont id='role'>
            <ProjectH1P 
            title='My Role'
            description='My role in this project was as a UI/UX designer. I researched, surveyed, and collaborated with the end users of the app to put together an app that was the least onerous and most efficient for its users. 
            '/>
          </SectionCont>

          <SectionCont id='user'>
            <ProjectH1P 
            title='Our Users'
            description='Our frontend users would be our mentors and volunteers at Game of Apps. They would be the ones that the app would be tracking for hours spent. Our backend users would be the administration team at Game of Apps and they would be the ones that receives the information to then pass it on to the sponsors. Through interviews and surveys, we learned that a lot of mentors had already used their own calendars on their Apple, Google, or other providers to keep track of their time. 
            '
            />
            <ProjectList
            LTitle='Pain Points'
            RTitle='Needs'
            LPoint1='Manually inputting each event into the app or manual effort exceeding app’s efficiency'
            LPoint2='Lack of privacy and divide between personal calendar and work calendar'
            LPoint3='Constantly spending time and effort outside of usually workflow to manage app.'
            RPoint1='Be an android app.'
            RPoint2='Be able to import calendars into app.'
            RPoint3='To display total hours spent.'
            />
            <ProjectP
            description='After determining our users, their needs, and their pain points, I started researching methods of achieving our goal. The methods that I looked at were Apple Calendar, Google Calendar, and Harvest. After researching and presenting the research to the users and team, we decided on using Google Calendar. We had decided to go with Google Calendar because the organization had already set up an organizational account and everyone already had an account. Permissions would be easier to handle because the accounts were connected by the organization and costs would be low because this was a service we were already using. This would also help us keep the information within our organization as we wouldn’t be relying on any third party apps to manage our information. 
            '
            />
          </SectionCont>

          <SectionCont id='problem'>
            <ProjectH1P 
            title='Problem Identification'
            description='When our administration is asked about the total hours being put into the program by mentors and volunteers, our administrators usually reply with a rough estimate. However, this estimate isn’t the most accurate or precise and that is that problem that this app aims to solve.'
            />
          </SectionCont>

          <SectionCont id='solution'>
            <ProjectH1P 
            title='Solution and Goals'
            description='Our solution was to develop an app that would collect the calendar and schedules from our mentors and volunteers and output the information to the administrator so that they would be able to share and communicate it with the sponsors and hopefully receive more money to continue expanding the scope of our projects.'
            />
          </SectionCont>

          <SectionCont id='design'>
            <ProjectH1P 
            title='Design Process'
            description='After finding the method we would use for sharing events and calendars, I started developing the user flow. Initially, I thought that it would be a good idea for frontend users to import their calendars from their private accounts, however not everyone uses Google Calendar to keep track of their schedules and events so it would not apply to everyone. It would also be less private as they could accidentally import the wrong calendar or save an event to the wrong calendar. They would also manually have to share the calendar with the app. Instead, since everyone had a Google organization account, they could just import their pre-existing calendar or create a new one. Because the organization is connected together, we could just access all the calendars at once with an admin account. The user flow we ended with is this. The frontend user would either import their personal calendars or input their events with a recurring event into their organization Google account. Then through the organization, a service account with administrative privileges would access their calendars and tally up their hours based on the input of desired time frame through the app by the backend users.'
            />
            <ProjectP 
            description='As the designing progressed, another team member created their own version of my cards page, and after a minor user testing, we decided to progress with their design instead. After that, I decided to move on to designing components. With designing components, there was once again a hand off and evolution of ideas and designs especially when we handed the designs over to the developers. Besides the UI design of the app, I also designed the business cards for the team.'
            />

            <LowFiCont>
              <Image 
              src="/static/Timetracker_mediumFidelity.png"
              width={1852}
              height={920}
              />
            </LowFiCont>

            <Caption>
              Medium Fidelity
            </Caption>

            <LowFiCont>
              <Image 
              src="/static/Timetracker_highFidelity.png"
              width={1852}
              height={920}
              />
            </LowFiCont>

            <Caption>
              High Fidelity before user testing feedback.
            </Caption>

            <LowFiCont>
              <Image 
              src="/static/Timetracker_highFidelityV2.png"
              width={1852}
              height={920}
              priority
              />
            </LowFiCont>

            <CaptionBottom>
              High Fidelity after user testing feedback.
            </CaptionBottom>
          </SectionCont>

          <SectionCont id='final'>
            <ProjectH1P 
            title='Final Designs'
            description='Currently the app is still being developed by our development team at Game of Apps. They are developing the app based on the high fidelity after user feedback version.'
            />
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
}`

const Caption = styled.div`
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
}`

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

const LowFiCont = styled.div`
// Desktop and Tablet styles
@media screen and (min-width: 1024px) {
width: 100%;
overflow: hidden;
position: relative;
border-radius: 12px;
filter: drop-shadow(0 0 1px #808080);
margin: 48px 0 16px 0;
}
// Mobile styles
@media screen and (max-width: 1023px) {
  filter: drop-shadow(0 0 1px #808080);
  margin: 48px 0 16px 0;
}`