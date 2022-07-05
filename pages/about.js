import styled from 'styled-components'
import Image from 'next/image'


import Header from '@/comps/Header'
import ProjectCard from '@/comps/ProjectCard'
import Footer from '@/comps/Footer'


export default function About() {
  return <Container>
    <HeaderCont>
      <Header />
    </HeaderCont>
    
    <Content>
      <HeroCont>
        <HeroImgCont>
          <Image 
          src="/static/MatthewZhao_ProfilePicture.png"
          layout='fill'
          alt='A beautiful picture of Matt&apos;s beautiful face'
          />
        </HeroImgCont>

        <HeroTxtCont>
          <HeroTxtH1>
            Hey all,
          </HeroTxtH1>

          <HeroTxtH2>
            I am Matthew Zhao, <br />
            a Vancouver-based <br />
            UI/UX designer.
          </HeroTxtH2>
        </HeroTxtCont>
      </HeroCont>

    <ContentBlock>
      <ContentP pwidth={"402px"}>
      I grew up in the Greater Vancouver Area and grew my passion for UI/UX design in high school through the Game of Apps program. After graduation, I went to BCIT to continue to sharpen and build up my skills.
      </ContentP>
      <GoaImg>
        <Image 
        src="/static/MatthewZhao_GoA.png"
        layout="fill"
        alt='This is us wireframing an app we built in high school.'
        />
      </GoaImg>
    </ContentBlock>

    <ContentBlock>
      <GundamImg>
        <Image 
        src="/static/MatthewZhao_Gundam.png"
        layout="fill"
        alt='This is a gundam box art project I made for class.'
        />
      </GundamImg>
      <ContentP pwidth={"425px"}>
      Outside of school and work, I enjoy building plastic models and eating out with friends. I enjoy the occasional hike and day of exploring the city. I also have experience in graphic design and enjoy helping in video editing in my communities. 
      </ContentP>

    </ContentBlock>

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

const HeroImgCont = styled.div`
// Desktop and Tablet styles
@media screen and (min-width: 768px) {
width: 346px;
height: 436px;
border-radius: 12px;
filter: drop-shadow(-12px 12px 0px #122C5C);
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
const ContentBlock = styled.div`
// Desktop and Tablet styles
@media screen and (min-width: 768px) {
width: 915px;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 12px 12px 12px;
margin: 0px 0 56px 0;
}
// Mobile styles
@media screen and (max-width: 767px) {
}
`

const ContentP = styled.div`
// Desktop and Tablet styles
@media screen and (min-width: 768px) {
font-family: 'Oxygen';
font-weight: 400;
font-size: 1.25em;
line-height: 36px;
color: #868686;

width: ${props=>props.pwidth};
}
// Mobile styles
@media screen and (max-width: 767px) {
}
`

const GoaImg = styled.div`
// Desktop and Tablet styles
@media screen and (min-width: 768px) {
width: 369px;
height: 316.71px;

filter: drop-shadow(12px 12px 0px #122C5C);
border-radius: 12px;
overflow: hidden;
}
// Mobile styles
@media screen and (max-width: 767px) {
}
`

const GundamImg = styled.div`
// Desktop and Tablet styles
@media screen and (min-width: 768px) {
width: 349px;
height: 456px;

filter: drop-shadow(-12px 12px 0px #122C5C);
border-radius: 12px;
overflow: hidden;
}
// Mobile styles
@media screen and (max-width: 767px) {
}
`