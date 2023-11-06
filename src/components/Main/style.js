import styled from "styled-components";

export const AllContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("https://cdn.discordapp.com/attachments/1118682666871574551/1170722209766047794/3b37c01101a34092.jpeg?ex=655a1305&is=65479e05&hm=09b352b852ff7d7123a4cf2f9d869847e52633bcc573c9abd8dc5750ba4a4d2e&");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserContainer = styled.div`
  width: 37.5rem;
  height: 35.25rem;
  background-color: white;
  opacity: 70%;
  border-radius: 0.625rem;
`;

export const TitleContainer = styled.div`
  width: 100%;
  height: 3.125rem;
  display: flex;
  justify-content: center;
  margin-top: 1.25rem;
`;

export const Title = styled.span`
  font-size: 2.5rem;
  font-weight: bold;
`;

export const UserInputContainer = styled.div`
  width: 100%;
  height: 15.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.25rem;
`;

export const UserInput = styled.input`
  width: 21.875rem;
  height: 3.125rem;
  text-indent: 0.7125rem;
  outline: none;
  border-radius: 0.4375rem;
  border: 0.0625rem solid gray;
`;

export const CheckButton = styled.button`
  height: 3.325rem;
  width: 21.875rem;
  font-weight: bold;
  border-radius: 0.4375rem;
  font-size: 1.25rem;
  transition: all 0.1s ease-in;
  border: 0.0625rem solid grey;

  &:hover {
    border: 0.0625rem solid red;
    color: white;
    background-color: red;
    transform: scale(1.03);
  }
`;

export const ResultUserContainer = styled.div`
  width: 100%;
  height: 8.75rem;
  display: flex;
`;

export const User1Container = styled.div`
  width: 18.75rem;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const User1Result = styled.span``;

export const User1Title = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const User2Container = styled.div`
  width: 18.75rem;
`;
