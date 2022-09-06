import styled from "styled-components"
import Image from 'next/image'
import Link from 'next/link'

export default function ProjectCard({
    tagline = "An app that helps you decide where to donate to.",
    imgsrc = "/static/CompassPlus_Title.png",
    route = "/"
}) {



    return <Link href={route}>
    <Container>
        <ImgCont>
            <Image 
            src={imgsrc}
            layout="fill"
            objectFit="cover"
            objectPosition='center'
            />
        </ImgCont>

        <TxtCenter>
            {tagline}
        </TxtCenter>
    </Container>
    </Link>
}

const Container = styled.div`

// Desktop and Tablet styles
@media screen and (min-width: 1048px){
background-color: #ffffff;

display: flex;
justify-content: space-between;
align-items: flex-end;

width: 447px;
height: 270px;
border-radius: 8px;
padding: 8px;

box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.35);
cursor: pointer;

&:hover {
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.5);
    transition: 1s
}
}
// Mobile styles
@media screen and (max-width: 1047px) {

}
`

const ImgCont = styled.div`
position: relative;
// Desktop and Tablet styles
@media screen and (min-width: 1048px){
display: flex;
justify-content: space-between;
align-items: flex-end;

width: 44%;
height: 100%;
border-radius: 4px;

overflow: hidden;
}
// Mobile styles
@media screen and (max-width: 1047px) {
}
`

const TxtCenter = styled.div`
// Desktop and Tablet styles
@media screen and (min-width: 1048px){
display: flex;
justify-content: center;
align-items: center;

width: 54%;
height: 100%;
padding: 12px;

font-family: Montserrat;
font-weight: 600;
font-size: 1.25em;
}
// Mobile styles
@media screen and (max-width: 1047px) {
}
`