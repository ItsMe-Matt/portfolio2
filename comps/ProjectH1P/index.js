import styled from "styled-components"


export default function ProjectH1P({
   title = "My Role",
   description = "Through our user survey, we learned about some of our target audience’s pain points and needs, as well as how we should prioritize the development of certain features and functions. We also learned if there was a need and use for this app and the results of the user testing reflected that yes, there is a need and use for the app."
}) {



    return <Container>
        <HeadText>
            {title}
        </HeadText>

        <ParagraphText>
            {description}
        </ParagraphText>
    </Container>
}

const Container = styled.div`

// Desktop and Tablet styles
@media screen and (min-width: 1023px){
display: flex;
flex-direction: column;

width: 703px;


}
// Mobile styles
@media screen and (max-width: 1023px) {
display: flex;
flex-direction: column;

margin-bottom: 56px;
}
`
const HeadText = styled.div`
// Desktop and Tablet styles
@media screen and (min-width: 1023px){
font-family: 'Montserrat';
font-weight: 700;
font-size: 1.25em;
margin-bottom: 24px;
}
// Mobile styles
@media screen and (max-width: 1023px) {
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 1.25em;
margin: 0 0 24px 0;
}
`

const ParagraphText = styled.div`
// Desktop and Tablet styles
@media screen and (min-width: 1023px){
font-family: 'Oxygen';
font-weight: 300;
font-size: 1.125em;
line-height: 30px;

color: #404040;
}
// Mobile styles
@media screen and (max-width: 1023px) {
font-family: Oxygen;
font-size: 1em;
font-weight: 300;
line-height: 24px;

color: #404040;
}
`

