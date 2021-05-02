import React from "react";
import { SectionStyle } from "src/styles/Common";
import { styled } from "@stitches/react";

const MainDivStyle = styled("div", {
  display: "flex",
});

const IntroAsideStyle = styled("aside", {
  display: "flex",
  alignItems: "center",
  marginRight: "30px",

  "& h1": {
    fontSize: "180px",
    margin: "0",
  },
});

const DescArticleStyle = styled("article", {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",

  "& p": {
    marginTop: "0",

    "&:first-child": {
      marginTop: "20px",
      fontWeight: "bold",
    },

    "&:last-child": {
      margin: "0",
    },

    "&.main-desc-tags": {
      color: "blue",
    },
  },
});

const Main: React.FC = () => {
  return (
    <SectionStyle>
      <MainDivStyle>
        <IntroAsideStyle>
          <h1>LJ</h1>
        </IntroAsideStyle>
        <DescArticleStyle>
          <p>이지훈, Lee Jihun</p>
          <p>재사용성 높은 컴포넌트 개발 및 지식 공유에 관심이 있습니다</p>
          <p className="main-desc-tags">
            #프론트엔지니어 #뉴비 #배우고싶어요 #올웨이즈다이어터
            #취미는헬스요가
          </p>
          <p>
            화학공학을 전공하고 화공기사, 품질경영기사 자격증을 가지고있습니다.
          </p>
        </DescArticleStyle>
      </MainDivStyle>
    </SectionStyle>
  );
};

export default Main;
