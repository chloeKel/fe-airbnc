import { StyledHost } from "../Styling/PropListingStyle";
import { StyledAvatar } from "../Styling/StyledImages";

export default function Host({ host }) {
  return (
    <StyledHost>
      <h3>
        <StyledAvatar src={host.avatar} alt={`${host.first_name} ${host.surname}`} />
        Hosted by {`${host.first_name} ${host.surname}`}
      </h3>
      <p>{host.email}</p>
      <p>{host.phone_number}</p>
    </StyledHost>
  );
}
