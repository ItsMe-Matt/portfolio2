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
            layout="fill"
            objectFit="cover"
            objectPosition='center'
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
@media screen and (min-width: 768px){
background-color: #ffffff;

display: flex;
justify-content: space-between;
align-items: flex-end;

width: 915px;
margin: 56px 0 0 0;
}
// Mobile styles
@media screen and (max-width: 767px) {

}
`

const ImgCont = styled.div`
position: relative;
// Desktop and Tablet styles
@media screen and (min-width: 768px){
width: 346px;
height: 435.96px;
border-radius: 8px;

overflow: hidden;
}
// Mobile styles
@media screen and (max-width: 767px) {
}
`

const TxtCont = styled.div`
// Desktop and Tablet styles
@media screen and (min-width: 768px){
display: flex;
flex-direction: column;
align-items: flex-start;

width: 528px;
height: 100%;
}
// Mobile styles
@media screen and (max-width: 767px) {
}
`

const TxTHeader = styled.div`
// Desktop and Tablet styles
@media screen and (min-width: 768px){

font-family: Montserrat;
font-weight: 900;
font-size: 2.25em;
margin-bottom: 16px;
color: #122C5C;
}
// Mobile styles
@media screen and (max-width: 767px) {
}
`

const TxtParagraph = styled.div`
// Desktop and Tablet styles
@media screen and (min-width: 768px){

font-family: Montserrat;
font-weight: 400;
font-size: 1.25em;
line-height: 28px;
color: #575757;
margin-bottom: 24px;
}
// Mobile styles
@media screen and (max-width: 767px) {
}
`
const TxtLineCont = styled.div`
// Desktop and Tablet styles
@media screen and (min-width: 768px){
display: flex;
margin-bottom: 12px;
// Mobile styles
@media screen and (max-width: 767px) {
}
`

const TxtLineLabel = styled.div`
// Desktop and Tablet styles
@media screen and (min-width: 768px){
display: flex;

font-family: Oxygen;
font-weight: 700;
font-size: 1.125em;
margin-right: 8px;

// Mobile styles
@media screen and (max-width: 767px) {
}
`
const TxtLineInfo = styled.div`
// Desktop and Tablet styles
@media screen and (min-width: 768px){
    font-family: Oxygen;
    font-weight: 300;
    font-size: 1.125em;
// Mobile styles
@media screen and (max-width: 767px) {
}
`