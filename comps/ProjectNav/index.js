import styled from "styled-components"
import Link from "next/link"

export default function ProjectNav({


}) {



    return <Container>
        <Link href="#intro">
            <Label>
                Introduction
            </Label>
        </Link>

        <Link href="#role">
            <Label>
                My Role
            </Label>
        </Link>
        
        <Link href="#user">
            <Label>
                Our Users
            </Label>
        </Link>

        <Link href="#problem">
            <Label>
                Problem Identification
            </Label>
        </Link>

        <Link href="#solution">
            <Label>
                Solution and Goals
            </Label>
        </Link>

        <Link href="#design">
            <Label>
                Process
            </Label>
        </Link>

        <Link href="#final">
            <Label>
                Final Designs
            </Label>
        </Link>

        <Link href="#conclusion">
            <LastLabel>
                Conclusions
            </LastLabel>
        </Link>
    </Container>
}

const Container = styled.div`

// Desktop and Tablet styles
@media screen and (min-width: 1024px){

display: flex;
flex-direction: column;
width: 192px;

position: sticky;
top: 40px;
}
// Mobile styles
@media screen and (max-width: 1023px) {
display: none;
}
`

const Label = styled.div`
// Desktop and Tablet styles
@media screen and (min-width: 1024px){
font-family: 'Montserrat';

font-weight: 400;
font-size: 1em;
margin-bottom: 24px;
cursor: pointer;

&:hover {
    transition: 0.3s;
    font-weight: 600;
}
}
// Mobile styles
@media screen and (max-width: 1023px) {

}

`

const LastLabel = styled.div`
// Desktop and Tablet styles
@media screen and (min-width: 1024px){
font-family: 'Montserrat';

font-weight: 400;
font-size: 1em;
cursor: pointer;
&:hover {
    transition: 0.3s;
    font-weight: 600;
}
}
// Mobile styles
@media screen and (max-width: 1023px) {

}

`