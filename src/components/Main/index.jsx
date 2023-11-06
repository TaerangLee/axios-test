import { useState } from "react";
import * as S from "./style.js";
import axios from "axios";

const Main = () => {
  const [userName, setUserName] = useState("");
  const [user2Name, setUser2Name] = useState("");

  const userInformation = async () => {
    if (userName && user2Name) {
      const api = {
        url: `https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/`,
        api_key: process.env.NEXT_PUBLIC_API_KEY,
      };

      try {
        const response1 = await axios.get(
          `${api.url}${userName}?api_key=${api.api_key}`
        );
        const response2 = await axios.get(
          `${api.url}${user2Name}?api_key=${api.api_key}`
        );

        console.log("Response for userName:", response1.data);
        console.log("Response for user2Name:", response2.data);
      } catch (error) {
        console.error("에러:", error);
      }
    } else {
      alert("소환사명을 입력하세요.");
    }
  };

  return (
    <S.AllContainer>
      <S.UserContainer>
        <S.TitleContainer>
          <S.Title>전적 검색하기</S.Title>
        </S.TitleContainer>
        <S.UserInputContainer>
          <S.UserInput
            placeholder="소환사명을 입력하세요."
            onChange={(e) => {
              setUserName(e.target.value);
              console.log(userName);
            }}
          />
          <S.UserInput
            placeholder="소환사명을 입력하세요."
            onChange={(e) => {
              setUser2Name(e.target.value);
              console.log(user2Name);
            }}
          />
          <S.CheckButton onClick={userInformation}>검색</S.CheckButton>
        </S.UserInputContainer>
        <S.ResultUserContainer>
          <S.User1Container>
            <S.User1Title>하이</S.User1Title>
            asdasd
          </S.User1Container>
          <S.User2Container></S.User2Container>
        </S.ResultUserContainer>
      </S.UserContainer>
    </S.AllContainer>
  );
};

export default Main;
