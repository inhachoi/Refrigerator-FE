import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function IntroHeader() {
  const navigate = useNavigate();

  const navigateToDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <HeaderContainer>
      <IntroHeaderLayout>
        <HeaderLeft>
          <IconWrapper>
            <IconImg src="../../refri_favicon.jpg" alt="깨짐" />
          </IconWrapper>
          <HeaderLogoBox>냉장고를 부탁해! </HeaderLogoBox>
        </HeaderLeft>
        <div>
          <button onClick={navigateToDashboard}>로그인</button>
          <button onClick={navigateToDashboard}>가입하기</button>
        </div>
      </IntroHeaderLayout>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;
  background-color: white;
`;

const IntroHeaderLayout = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 20px 20px 10px;
  text-align: center;
`;

const HeaderLeft = styled.div`
  display: flex;
  padding: 10px 10px 10px 20px;
`;

const IconWrapper = styled.div`
  padding-top: 5px;
`;

const IconImg = styled.img`
  width: 30px;
  height: 30px;
  margin: 0 10px 0 0;
`;

const HeaderLogoBox = styled.span`
  padding: 4px 10px 0px 5px;
  color: rgb(64, 122, 87);
  font-size: 22px;
  font-weight: 600;
`;

export default IntroHeader;
