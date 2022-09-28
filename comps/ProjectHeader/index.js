import styled from "styled-components"
import Image from 'next/image'

export default function ProjectHeader({
    tagline = "Designed to become Translink's Official Mobile Application.",
    imgsrc = "/static/CompassPlus_Title.png",
    description = "CompassPlus is an app designed to replace your physical Compass card with a digital NFC card you can use on your phone",
    role = "UI/UX Designer",
    timeframe = "3 months",
    purpose = "Class Project",
    tools = "figma, and friends"

}) {



    return <Container>
        <ImgCont>
            <Image 
            src={imgsrc}
            layout="responsive"
            width={1080}
            height={1440}
            quality={100}
            />
        </ImgCont>

        <TxtCont>
            <TxTHeader>
                {tagline}
            </TxTHeader>
            <TxtParagraph>
                {description}
            </TxtParagraph>

            <TxtLineCont>
                <TxtLineLabel>
                    Role: 
                </TxtLineLabel>
                <TxtLineInfo>
                    {role}
                </TxtLineInfo>
            </TxtLineCont>

            <TxtLineCont>
                <TxtLineLabel>
                    Timeframe: 
                </TxtLineLabel>
                <TxtLineInfo>
                    {timeframe}
                </TxtLineInfo>
            </TxtLineCont>

            <TxtLineCont>
                <TxtLineLabel>
                    Purpose: 
                </TxtLineLabel>
                <TxtLineInfo>
                    {purpose}
                </TxtLineInfo>
            </TxtLineCont>

            <TxtLineCont>
                <TxtLineLabel>
                    Tools: 
                </TxtLineLabel>
                <TxtLineInfo>
                    {tools}
                </TxtLineInfo>
            </TxtLineCont>
            
        </TxtCont>
    </Container>
}

const Container = styled.div`

// Desktop and Tablet styles
@media screen and (min-width: 1024px){
background-color: #ffffff;

display: flex;
justify-content: space-between;
align-items: flex-end;

width: 915px;
margin: 56px 0 0 0;
}
// Mobile styles
@media screen and (max-width: 1023px) {
display: flex;
flex-direction: column;
width: 100%;
margin-bottom: 80px;
}
`

const ImgCont = styled.div`
position: relative;
// Desktop and Tablet styles
@media screen and (min-width: 1024px){
width: 346px;
height: 435.96px;
border-radius: 8px;

overflow: hidden;
}
// Mobile styles
@media screen and (max-width: 1023px) {
border-radius: 10px;
overflow: hidden;
margin: 32px 0 40px 0;
}
`

const TxtCont = styled.div`
// Desktop and Tablet styles
@media screen and (min-width: 1024px){
display: flex;
flex-direction: column;
align-items: flex-start;

width: 528px;
height: 100%;
}
// Mobile styles
@media screen and (max-width: 1023px) {
}
`

const TxTHeader = styled.div`
// Desktop and Tablet styles
@media screen and (min-width: 1024px){

font-family: Montserrat;
font-weight: 900;
font-size: 2.25em;
margin-bottom: 16px;
color: #122C5C;
}
// Mobile styles
@media screen and (max-width: 1023px) {
font-family: Montserrat;
font-size: 1.5em;
font-weight: 800;
line-height: 29px;
margin: 0 0 24px 0;
color: #122C5C;
}
`

const TxtParagraph = styled.div`
// Desktop and Tablet styles
@media screen and (min-width: 1024px){

font-family: Montserrat;
font-weight: 400;
font-size: 1.25em;
line-height: 28px;
color: #575757;
margin-bottom: 24px;
}
// Mobile styles
@media screen and (max-width: 1023px) {
font-family: Oxygen;
font-size: 1em;
font-weight: 400;
line-height: 24px;
color: #575757;
margin: 0 0 24px 0;

}
`
const TxtLineCont = styled.div`
// Desktop and Tablet styles
@media screen and (min-width: 1024px){
display: flex;
margin-bottom: 12px;
}
// Mobile styles
@media screen and (max-width: 1023px) {
display: flex;
margin: 0 0 8px 0;
}
`

const TxtLineLabel = styled.div`
// Desktop and Tablet styles
@media screen and (min-width: 1024px){
display: flex;

font-family: Oxygen;
font-weight: 700;
font-size: 1.125em;
margin-right: 8px;
}
// Mobile styles
@media screen and (max-width: 1023px) {
font-family: Oxygen;
font-size: 1em;
font-weight: 700;
line-height: 20px;

margin: 0 8px 0 0;

}
`
const TxtLineInfo = styled.div`
// Desktop and Tablet styles
@media screen and (min-width: 1024px){
    font-family: Oxygen;
    font-weight: 300;
    font-size: 1.125em;
}
// Mobile styles
@media screen and (max-width: 1023px) {
font-family: Oxygen;
font-size: 1em;
font-weight: 300;
line-height: 20px;
letter-spacing: 0em;

}
`