import styled from "styled-components"
import Image from 'next/image'
import Link from 'next/link'

export default function ProjectCard2({
    tagline = "An app that helps you decide where to donate to.",
    imgsrc = "/static/CompassPlus_Title.png",
    route = "/",
    description = "CompassPlus is an app designed to replace your physical Compass card with a digital NFC card you can use on your phone.",
    purpose = "Class Project",
    role = "singer",
    tools = "wrench"

}) {



    return <Link href={route}>
    <Container>
        <ImgCont>
            <Image 
            src={imgsrc}
            layout="responsive"
            width={1080}
            height={1440}
            objectFit="cover"
            objectPosition="center"
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
                    Purpose: 
                </TxtLineLabel>
                <TxtLineInfo>
                    {purpose}
                </TxtLineInfo>
            </TxtLineCont>

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
                    Tools: 
                </TxtLineLabel>
                <TxtLineInfo>
                    {tools}
                </TxtLineInfo>
            </TxtLineCont>

        </TxtCont>
    </Container>
    </Link>
}

const Container = styled.div`

// Desktop and Tablet styles
@media screen and (min-width: 1024px){
background-color: #ffffff;

display: flex;
justify-content: space-between;
align-items: flex-end;

width: 915px;
height: 544px;
border-radius: 8px;
padding: 8px;
overflow: hidden;
margin-bottom: 8px;

box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3);
cursor: pointer;

&:hover {
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.5);
    transition: 1s;
}
}
// Mobile styles
@media screen and (max-width: 1023px) {
padding: 12px;
background: #FFFFFF;
box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.35);
border-radius: 16px;
margin: 0 0 16px 0;
}
`

const ImgCont = styled.div`
position: relative;
// Desktop and Tablet styles
@media screen and (min-width: 1024px){
width: 44%;
height: 100%;
border-radius: 4px;
overflow: hidden;
}
// Mobile styles
@media screen and (max-width: 1023px) {
border-radius: 12px;
overflow: hidden;
}
`

const TxtCont = styled.div`
// Desktop and Tablet styles
@media screen and (min-width: 1024px) {
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;

width: 54.5%;
height: 100%;
padding: 12px;
}
// Mobile styles
@media screen and (max-width: 1023px) {
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 1em;
line-height: 20px;
padding: 6px;
margin: 20px 0 6px 0;
}
`

const TxTHeader = styled.div`
// Desktop and Tablet styles
@media screen and (min-width: 1024px){

font-family: Montserrat;
font-weight: 600;
font-size: 1.75em;
margin: 16px 0;
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
font-size: 1.125em;
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
font-size: 1em;
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
font-size: 1em;
color: #575757;
}
// Mobile styles
@media screen and (max-width: 1023px) {
font-family: Oxygen;
font-size: 1em;
font-weight: 300;
line-height: 20px;
}
`