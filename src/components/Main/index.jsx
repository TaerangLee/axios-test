import { useState } from "react";
import * as S from "./style.js";
import axios from "axios";

const Main = () => {
  const [userName, setUserName] = useState("");
  const [user2Name, setUser2Name] = useState("");
  const [response1, setResponse1] = useState(null);
  const [response2, setResponse2] = useState(null);

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
        console.log(response1.data);
        console.log(response2.data);
        setResponse1(response1.data);
        setResponse2(response2.data);
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
          <S.Title>리그오브레전드 레벨 검색하기</S.Title>
        </S.TitleContainer>
        <S.UserInputContainer>
          <S.UserInput
            placeholder="소환사명을 입력하세요."
            onChange={(e) => setUserName(e.target.value)}
          />
          <S.UserInput
            placeholder="소환사명을 입력하세요."
            onChange={(e) => setUser2Name(e.target.value)}
          />
          <S.CheckButton onClick={userInformation}>검색</S.CheckButton>
        </S.UserInputContainer>
        <S.ResultUserContainer>
          <S.User1Container>
            <S.UserTitle>{response1 ? response1.name : ""}</S.UserTitle>
            <S.UserResult>
              {response1 ? `레벨: ${response1.summonerLevel}` : ""}
            </S.UserResult>
          </S.User1Container>
          <S.User1Container>
            <S.UserTitle>{response2 ? response2.name : ""}</S.UserTitle>
            <S.UserResult>
              {response2 ? `레벨: ${response2.summonerLevel}` : ""}
            </S.UserResult>
          </S.User1Container>
        </S.ResultUserContainer>
        <S.ResultLevelContainer>
          <S.ResultContent>
            {response1 &&
            response2 &&
            response1.summonerLevel !== response2.summonerLevel ? (
              response1.summonerLevel > response2.summonerLevel ? (
                <p>{`${response1.name}님이 ${response2.name}님 보다 롤을 더 많이 하셨습니다.`}</p>
              ) : (
                <p>{`${response2.name}님이 ${response1.name}님 보다 롤을 더 많이 하셨습니다.`}</p>
              )
            ) : (
              <a>더 다양한 정보는 Data에 ...</a>
            )}
          </S.ResultContent>
        </S.ResultLevelContainer>
      </S.UserContainer>
    </S.AllContainer>
  );
};

export default Main;
