import styled from "styled-components";

export const AllContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("https://lolstatic-a.akamaihd.net/frontpage/apps/prod/rg-league-display-2017/en_US/eb9932fa17748596e3409e10c41d7f2badeec9cc/assets/img/content/splash/content-original-championillustrations-group-slashes.jpg");
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
  margin-top: 2.25rem;
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

export const UserResult = styled.span`
  font-weight: 500;
`;

export const UserTitle = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const ResultLevelContainer = styled.div`
  width: 100%;
  height: 5.8125rem;
  display: flex;
  justify-content: center;
`;
export const ResultContent = styled.span`
  font-size: 1.25rem;
  font-weight: bold;
`;
