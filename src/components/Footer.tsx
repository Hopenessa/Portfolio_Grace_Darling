import { styled } from "styled-components";
import { Container } from "./Shared";
import { artist } from "../data/portfolio";
const Bar = styled.footer`
  padding: 32px 0;
  ${Container} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
  }
  p {
    font-size: 12px;
    color: #ffffff;
    margin: 0;
  }
  a {
    font-size: 12px;
    text-decoration: none;
    letter-spacing: 0.12em;
  }
  .name {
    font-family: Georgia, serif;
    font-size: 18px;
    color: #eeeadf;
  }
`;
export function Footer() {
  return (
    <Bar>
      <Container>
        <div>
          <p className="name">{artist.studio}</p>
          <p>Grace Darling · Tattoo artist</p>
          <p>{artist.location.city}, {artist.location.state}, {artist.location.country}</p>
        </div>
        <p>
          © {new Date().getFullYear()} Grace Darling. Original artwork belongs
          to the artist.
        </p>
        <a href="#home">BACK TO TOP ↑</a>
      </Container>
    </Bar>
  );
}

