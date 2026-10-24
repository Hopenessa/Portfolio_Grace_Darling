import { Bar } from "./Footer.styles";
import { Container } from "../Shared";
import { artist } from "../../data/portfolio";

export function Footer() {
  return (
    <Bar>
      <Container>
        <p className="name">{artist.studio}</p>
        <div className="artist-details">
          <p>Grace Darling · Tattoo artist</p>
          <p>
            {artist.location.city}, {artist.location.state},{" "}
            {artist.location.country}
          </p>
        </div>
        <p className="copyright">
          © {new Date().getFullYear()} Grace Darling. Original artwork belongs
          to the artist.
        </p>
      </Container>
    </Bar>
  );
}
