import styled from "styled-components";
import { FaArrowDown } from "react-icons/fa6";

function PartThird() {
  return (
    <PartLayout>
      <PartComment>
        <MainComment>탄소 배출&nbsp; <FaArrowDown /></MainComment>
        <SubComment>
          유통기한 임박한 음식물 처리를 통해, 폐기에 발생하는 탄소 배출량을
          줄여줍니다! 🍃
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

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const PartImg = styled.img`
  width: 50%;
  height: 100%;
  object-fit: cover;

  @media (max-width: 900px) {
    width: 100%;
    height: 50vh;
  }
`;

const PartComment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  padding: 50px;
  font-size: 20px;

  @media (max-width: 900px) {
    width: 100%;
    height: 40vh;
    padding: 0px;
  }
`;

const MainComment = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  color: rgb(64, 122, 87);
  font-size: 40px;
  font-weight: bold;
  text-align: center;

  @media (max-width: 900px) {
    font-size: 25px;
  }
`;

const SubComment = styled.div`
  margin: 20px 0;
  color: rgb(56, 99, 74);
  font-size: 20px;
  text-align: center;

  @media (max-width: 900px) {
    font-size: 15px;
    margin: 10px 60px;
  }
`;

export default PartThird;
