import styled from "styled-components";

function PartThird() {
  return (
    <PartLayout>
      <PartComment>
        <MainComment>탄소 배출량 감소.</MainComment>
        <SubComment>
          유통기한 임박한 음식물 처리를 통해, 폐기에 발생하는 탄소 배출량을 줄여줍니다!
        </SubComment>
      </PartComment>
      <PartImg src="../../eco4.webp" alt="" />
    </PartLayout>
  );
}

const PartLayout = styled.div`
  display: flex;
  height: 100vh;
  background-color: #eef9e2;
`;

const PartImg = styled.img`
  width: 50%;
  height: 100vh;
  object-fit: cover;
`;

const PartComment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  padding: 50px;
  font-size: 20px;
`;

const MainComment = styled.div`
  margin: 10px 0;
  color: rgb(64, 122, 87);
  font-size: 40px;
  font-weight: bold;
  text-align: center;
`;

const SubComment = styled.div`
  margin: 20px 0;
  color: rgb(56, 99, 74);
  font-size: 20px;
  text-align: center;
`;

export default PartThird;
