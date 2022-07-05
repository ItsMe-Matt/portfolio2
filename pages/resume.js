import styled from 'styled-components'
import Image from 'next/image'


import Header from '@/comps/Header'
import ProjectCard from '@/comps/ProjectCard'
import Footer from '@/comps/Footer'


export default function Resume() {
  return <Container>
    <HeaderCont>
      <Header />
    </HeaderCont>
    
    <Content>
      <ResumeCont>
        <Image
        src="/static/MatthewZhao_Resume.svg"
        layout='fill'
        objectFit='cover'
        objectPosition="center"
        />
        </ResumeCont>

    </Content>
    <CardContHeader>
      Psh...hey! I've got some pretty cool projects you should take a look at.
    </CardContHeader>
    <CardCont>
        <ProjectCard />
        <ProjectCard 
        tagline='An app that helps you navigate your transit service.'
        route='/compassplus'
        />

      </CardCont>
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
// Tablet styles
@media screen and (min-width: 768px) and (max-width: 1023px) {
background-color: blue;
padding: 0 16px 0 16px;
}
// Mobile styles
@media screen and (max-width: 1047px) {

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
// Tablet styles
@media screen and (min-width: 768px) and (max-width: 1023px) {
background-color: blue;
padding: 0 16px 0 16px;
}
// Mobile styles
@media screen and (max-width: 1047px) {

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
@media screen and (max-width: 1047px) {

}
`


const CardContHeader = styled.div`
// Desktop and Tablet styles
@media screen and (min-width: 768px) {

font-family: 'Montserrat';
font-weight: 600;
font-size: 1.25em;

margin: 0 0 24px 0;
width: 915px;
text-align: center;
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
const ResumeCont = styled.div`
// Desktop and Tablet styles
@media screen and (min-width: 768px){
width: 915px;
height: 1184px;
position: relative;

filter: drop-shadow(0px 0px 16px rgba(0, 0, 0, 0.25));
margin: 96px 0 64px 0;
}
// Mobile styles
@media screen and (max-width: 767px) {
}
`