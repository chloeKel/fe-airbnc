import { useState } from "react";
import { StyledDetailsGrid, StyledFormItem, StyledProfileForm } from "../Styling/ProfileStyles";
import { StyledButtonContainer } from "../Styling/BookingsStyles";
import { StyledButton } from "../Styling/ButtonStyles";
import { usePostUser } from "../CustomHooks/useFetchUser";

export default function EditProfile({ height, userId, user, setRefresh, setEdit }) {
  const { postUser } = usePostUser();
  const [details, setDetails] = useState({
    first_name: "",
    surname: "",
    email: "",
    phone: "",
    avatar: "",
  });

  console.log(details);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((currDetails) => ({
      ...currDetails,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      first_name: details.first_name || user.first_name,
      surname: details.surname || user.surname,
      email: details.email || user.email,
      phone: details.phone || user.phone,
      avatar: details.avatar || user.avatar,
    };

    await postUser(userId, payload);
    setRefresh((c) => c + 1);
    setEdit(false);
  };

  return (
    <StyledProfileForm $height={`${height}px`} onSubmit={handleSubmit}>
      <StyledDetailsGrid>
        <StyledFormItem>
          <label>First name</label>
        </StyledFormItem>
        <StyledFormItem>
          <input type="text" name="first_name" value={details.first_name} onChange={handleChange} />
        </StyledFormItem>
        <StyledFormItem>
          <label>Surname</label>
        </StyledFormItem>
        <StyledFormItem>
          <input type="text" name="surname" value={details.surname} onChange={handleChange}></input>
        </StyledFormItem>
        <StyledFormItem>
          <label>Email</label>
        </StyledFormItem>
        <StyledFormItem>
          <input type="text" name="email" value={details.email} onChange={handleChange}></input>
        </StyledFormItem>
        <StyledFormItem>
          <label>Phone number</label>
        </StyledFormItem>
        <StyledFormItem>
          <input type="text" name="phone" value={details.phone} onChange={handleChange}></input>
        </StyledFormItem>
        <StyledFormItem>
          <label>Avatar</label>
        </StyledFormItem>
        <StyledFormItem>
          <input type="text" name="avatar" value={details.avatar} onChange={handleChange}></input>
        </StyledFormItem>
      </StyledDetailsGrid>
      <StyledButtonContainer>
        <StyledButton type="submit" $width="40vw" $bordertop="1px solid #2a5faf" $borderleft="1px solid #2a5faf">
          Confirm
        </StyledButton>
        <StyledButton onClick={() => setEdit(false)} $width="40vw" $bordertop="1px solid #2a5faf" $borderleft="1px solid #2a5faf">
          Close
        </StyledButton>
      </StyledButtonContainer>
    </StyledProfileForm>
  );
}
