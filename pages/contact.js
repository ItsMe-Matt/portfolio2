import styled from 'styled-components'
import Image from 'next/image'


import Header from '@/comps/Header'
import ProjectCard from '@/comps/ProjectCard'
import Footer from '@/comps/Footer'


export default function Contact() {
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
            email: <a href="mailto:matthewlukez@yahoo.com">matthewlukez@yahoo.com</a>
        </HeroTxtP>

      </HeroCont>
    </Content>
    <CardContHeader>
      Psh...hey! I&apos;ve got some pretty cool projects you should take a look at.
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
margin: 56px 0 16px 0;
background-color: #ffffff;

display: flex;
flex-direction: column;
align-items: center;
}
// Mobile styles
@media screen and (max-width: 1047px) {

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
width:366px;
text-align: right;
}
// Mobile styles
@media screen and (max-width: 767px) {
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