import styled from "styled-components"


export default function ProjectP({
   description = "Through our user survey, we learned about some of our target audience’s pain points and needs, as well as how we should prioritize the development of certain features and functions. We also learned if there was a need and use for this app and the results of the user testing reflected that yes, there is a need and use for the app."
}) {



    return <Container>
        <ParagraphText>
            {description}
        </ParagraphText>
    </Container>
}

const Container = styled.div`
// Desktop and Tablet styles
@media screen and (min-width: 1024px){
display: flex;
flex-direction: column;
width: 703px;
}
// Mobile styles
@media screen and (max-width: 1023px) {
    margin-bottom: 56px;
}
`
const ParagraphText = styled.div`
// Desktop and Tablet styles
@media screen and (min-width: 1024px){
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

