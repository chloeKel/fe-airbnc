import { useState } from "react";
import { useUserContext } from "../Contexts/Contexts";
import { useFetchUser } from "../CustomHooks/useFetchUser";
import useScreenSize from "../CustomHooks/useScreenSize";
import { StyledButton } from "../Styling/ButtonStyles";
import { ProfileContainer, StyledDetailsGrid, StyledGridItem, StyledProfileAsset } from "../Styling/ProfileStyles";
import EditProfile from "./EditProfile";

export default function Profile({ height }) {
  const { userId } = useUserContext();
  const { user, setRefresh } = useFetchUser(userId);
  const [editOpen, setEditOpen] = useState(false);
  const screenSize = useScreenSize();
  const containerHeight = screenSize.height - height;

  return (
    <ProfileContainer $height={`${containerHeight}px`}>
      {!editOpen && (
        <>
          <StyledDetailsGrid>
            <StyledGridItem>
              <p>
                {user.first_name} {user.surname}
              </p>
            </StyledGridItem>
            <StyledGridItem>
              <img src={user.avatar} alt={`${user.first_name} ${user.surname}`} style={{ height: "100%", width: "100%", objectFit: "cover" }} />
            </StyledGridItem>
            <StyledGridItem>
              <StyledProfileAsset src="/assets/email.svg" alt={user.email} />
              <p>{user.email}</p>
            </StyledGridItem>
            <StyledGridItem>
              <StyledProfileAsset src="/assets/phone.svg" alt={user.phone_number} />
              <p>{user.phone_number}</p>
            </StyledGridItem>
          </StyledDetailsGrid>
          <StyledButton onClick={() => setEditOpen(true)} $width="40vw" $bordertop="1px solid #2a5faf" $borderleft="1px solid #2a5faf">
            Edit
          </StyledButton>
        </>
      )}
      {editOpen && <EditProfile height={containerHeight} userId={userId} user={user} setRefresh={setRefresh} setEdit={setEditOpen} />}
    </ProfileContainer>
  );
}
