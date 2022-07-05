import styled from "styled-components"


export default function ProjectList({
   LTitle = "left title",
   RTitle = " right title",
   LPoint1 = "left first point",
   LPoint2 = "left second point",
   LPoint3 = "left third point",
   RPoint1 = "right first point",
   RPoint2 = "right second point",
   RPoint3 = "right third point"
}) {



    return <Container>
        <HalfCont>
            <HeadText>
                {LTitle}
            </HeadText>
            
            <List>
                <ListContent>
                    {LPoint1}
                </ListContent>

                <ListContent>
                    {LPoint2}
                </ListContent>

                <ListContent>
                    {LPoint3}
                </ListContent>

            </List>
        </HalfCont>

        <HalfCont>
            <HeadText>
                {RTitle}
            </HeadText>

            <List>
                <ListContent>
                    {RPoint1}
                </ListContent>

                <ListContent>
                    {RPoint2}
                </ListContent>

                <ListContent>
                    {RPoint3}
                </ListContent>

            </List>
        </HalfCont>

    </Container>
}

const Container = styled.div`
// Desktop and Tablet styles
@media screen and (min-width: 768px){
display: flex;
justify-content: space-between;
width: 703px;

margin: 32px 0 0 0;
}
// Mobile styles
@media screen and (max-width: 767px) {

}
`
const HalfCont = styled.div`
// Desktop and Tablet styles
@media screen and (min-width: 768px){
display: flex;
flex-direction: column;
align-items: center;
width: 46%;
}
// Mobile styles
@media screen and (max-width: 767px) {
}
`

const HeadText = styled.div`
// Desktop and Tablet styles
@media screen and (min-width: 768px){
font-family: 'Montserrat';
font-weight: 500;
font-size: 1.25em;
margin-bottom: 24px;
}
// Mobile styles
@media screen and (max-width: 767px) {
}
`

const List = styled.ul`
// Desktop and Tablet styles
@media screen and (min-width: 768px){
list-style-type: circle;
list-style-position: inside;
margin: 0;
padding: 0;
width: 100%;
}
// Mobile styles
@media screen and (max-width: 767px) {

}
`
const ListContent = styled.li`
// Desktop and Tablet styles
@media screen and (min-width: 768px){
font-family: 'Oxygen';
font-weight: 300;
font-size: 1.125em;
line-height: 175%;
color: #404040;
}
// Mobile styles
@media screen and (max-width: 767px) {
}
`