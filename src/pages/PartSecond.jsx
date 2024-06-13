import styled from "styled-components";

function PartSecond() {
  return (
    <PartLayout>
      <PartImg src="../../eco7.webp" alt="" />
      <PartComment>
        <MainComment>전력 사용량 감소</MainComment>
        <SubComment>
          냉장고 적재량이 60%일때 전력효율이 가장 좋습니다!
        </SubComment>
      </PartComment>
    </PartLayout>
  );
}

const PartLayout = styled.div`
  position: relative;
  display: flex;
  height: 100vh;
  background-color: rgb(255, 251, 224);

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const PartImg = styled.img`
  width: 50%;
  height: 90vh;
  object-fit: cover;

  @media (max-width: 900px) {
    width: 95%;
    height: 60vh;
  }
`;

const PartComment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  padding: 50px;

  @media (max-width: 900px) {
    width: 100%;
    height: 22vh;
    padding: 0px;
  }
`;

const MainComment = styled.div`
  margin: 15px 0;
  color: rgb(255, 200, 0);
  font-size: 40px;
  font-weight: bold;
  text-align: center;

  @media (max-width: 900px) {
    font-size: 25px;
  }
`;

const SubComment = styled.div`
  margin: 20px;
  color: rgb(101, 81, 1);
  font-size: 20px;
  text-align: center;

  @media (max-width: 900px) {
    font-size: 15px;
    margin: 10px 60px;
  }
`;

export default PartSecond;
