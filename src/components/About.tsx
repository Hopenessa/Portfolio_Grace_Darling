import {styled} from "styled-components";
import {Container, Eyebrow, Title} from "./Shared";

const Section = styled.section`
    .about-title {
        text-transform: uppercase;
    }

    .about-title .more {
        color: #f5d993;
    }

    .about-title .than {
        display: inline-block;
        color: #f5d993;
        background: linear-gradient(110deg, #ffffff 0%, #fff5dc 45%, #f5d993 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    background: #0c0c0c;
    border-block: 1px solid #40351e;
    padding: 90px 0;

    ${Container} {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 90px;
        align-items: center;
    }

    .portrait {
        border: 1px solid #40351e;
        overflow: hidden;
    }

    .portrait img {
        width: 100%;
        height: auto;
    }

    .portrait span {
        font-size: 100px;
        color: #edc451;
    }

    .portrait p {
        font-size: 12px;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        color: #ffffff;
        margin-top: 25px;
    }

    .copy {
        color: #ffffff;
        font-size: 16px;
    }

    .signature {
        font-family: Georgia, serif;
        font-style: italic;
        color: #edc451;
        font-size: 30px;
        margin: 30px 0 0;
    }

    @media (max-width: 900px) {
        ${Container} {
            gap: 35px;
        }
    }
    @media (max-width: 600px) {
        padding: 65px 0;
        ${Container} {
            grid-template-columns: 1fr;
        }
    }
`;

export function About() {
    return (
        <Section id="about">
            <Container>
                <div className="portrait">
                    <img src="images/grace-darling.jpg" alt="Portrait of tattoo artist Grace Darling" width="1164"
                         height="1247" loading="lazy"/>
                </div>
                <div>
                    <Eyebrow>02 / The artist</Eyebrow>
                    <Title className="about-title">
                        <span className="more">More</span>
                        <br/>
                        <span className="than">Than Tattoos</span>
                    </Title>
                    <p className="copy">
                        Hello, my name is Grace Darling! I am the owner and artist of Golden Mustang Studio. I’ve been
                        in the industry for 6 years, specializing in gothic illustrative tattoos. I enjoy bringing my
                        love of all things strange and beautiful to my work. I’m excited to hear your ideas and create
                        something you’ll love wearing for eternity.
                    </p>
                    <p className="signature">Grace Darling</p>
                </div>
            </Container>
        </Section>
    );
}
