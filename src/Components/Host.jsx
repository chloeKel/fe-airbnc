import { StyledHost, StyledAvatar } from "../Styling/PropListingStyle";

export default function Host({ host, hostAvatar }) {
  return (
    <StyledHost>
      <p>
        <StyledAvatar src={hostAvatar} alt={host} />
        Hosted by {host}
      </p>
    </StyledHost>
  );
}
