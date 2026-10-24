import { Bar } from "./Footer.styles";
import { Container } from "../Shared";
import { artist } from "../../data/portfolio";

export function Footer() {
  return (
    <Bar>
      <Container>
        <div>
          <p className="name">{artist.studio}</p>
          <p>Grace Darling · Tattoo artist</p>
          <p>
            {artist.location.city}, {artist.location.state},{" "}
            {artist.location.country}
          </p>
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
